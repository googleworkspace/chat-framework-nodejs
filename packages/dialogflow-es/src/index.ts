/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import dialogflow, {protos} from '@google-cloud/dialogflow';
import {EventHandler, EventContext, chat_v1} from '@google/chat-sdk';
import {createHash} from 'crypto';
import {struct, Struct} from 'pb-util';

import Debug from 'debug';

const debug = Debug('chat:dialogflow');

export interface DialogflowOptions {
  projectId: string;
  languageCode: string;
}

const sessionClient = new dialogflow.SessionsClient();

function encodeKey(key: string) {
  const hash = createHash('sha256');
  hash.update(key);
  const data = hash.digest('hex');
  return data.toString();
}

function buildImageCard(url: string): chat_v1.Schema$Card {
  return {
    sections: [
      {
        widgets: [
          {
            image: {
              imageUrl: url,
            },
          },
        ],
      },
    ],
  };
}

function convertCard(
  card: protos.google.cloud.dialogflow.v2.Intent.Message.ICard
) {
  let header: chat_v1.Schema$CardHeader | undefined = undefined;
  const section: chat_v1.Schema$Section = {
    widgets: [],
  };
  if (card.title || card.subtitle) {
    header = {
      title: card.title,
      subtitle: card.subtitle,
    };
  }
  if (card.imageUri) {
    section.widgets!.push({
      image: {
        imageUrl: card.imageUri,
      },
    });
  }
  if (card.buttons) {
    section.widgets!.push({
      buttons: card.buttons.map(btn => ({
        textButton: {
          text: btn.text,
          onClick: {
            openLink: {
              url: btn.postback,
            },
          },
        },
      })),
    });
  }
  return {
    header: header,
    sections: [section],
  };
}

function buildReplyFromFulfillmentMessages(
  chatMessages: protos.google.cloud.dialogflow.v2.Intent.IMessage[]
) {
  const reply: chat_v1.Schema$Message = {
    cards: [],
  };
  chatMessages.forEach(msg => {
    if (msg.image?.imageUri !== undefined) {
      reply.cards!.push(buildImageCard(msg.image.imageUri!));
    } else if (msg.text !== undefined) {
      const text = msg.text?.text?.join('\n');
      if (reply.text) {
        reply.text = `${reply.text}\n${text}`;
      } else {
        reply.text = text;
      }
    } else if (msg.card !== undefined) {
      reply.cards!.push(convertCard(msg.card!));
    } else if (msg.payload) {
      const payload = struct.decode(msg.payload as Struct);
      if (payload.hangouts !== undefined) {
        reply.cards!.push(payload.hangouts! as chat_v1.Schema$Card);
      }
    }
  });
  return reply;
}

export function dialogflowHandler(options: DialogflowOptions): EventHandler {
  return async (ctx: EventContext) => {
    const sessionPath = sessionClient.projectAgentSessionPath(
      options.projectId,
      encodeKey(ctx.conversationKey)
    );
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: ctx.messageText,
          languageCode: options.languageCode,
        },
      },
    };

    debug('Forwarding message to Dialogflow: %O', request);

    const [response] = await sessionClient.detectIntent(request);

    debug('Response: %j', response);

    const chatMessages = response.queryResult?.fulfillmentMessages?.filter(
      msg => msg.platform === 'GOOGLE_HANGOUTS'
    );
    if (chatMessages !== undefined && chatMessages.length > 0) {
      const reply = buildReplyFromFulfillmentMessages(chatMessages);
      await ctx.reply(reply);
    } else {
      // Otherwise use unspecified platform message
      await ctx.reply({text: response.queryResult!.fulfillmentText});
    }
  };
}
