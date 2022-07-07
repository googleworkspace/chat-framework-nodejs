"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogflowHandler = void 0;
const dialogflow_1 = __importDefault(require("@google-cloud/dialogflow"));
const crypto_1 = require("crypto");
const pb_util_1 = require("pb-util");
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('chat:dialogflow');
const sessionClient = new dialogflow_1.default.SessionsClient();
function encodeKey(key) {
    const hash = (0, crypto_1.createHash)('sha256');
    hash.update(key);
    const data = hash.digest('hex');
    return data.toString();
}
function buildImageCard(url) {
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
function convertCard(card) {
    let header = undefined;
    const section = {
        widgets: [],
    };
    if (card.title || card.subtitle) {
        header = {
            title: card.title,
            subtitle: card.subtitle,
        };
    }
    if (card.imageUri) {
        section.widgets.push({
            image: {
                imageUrl: card.imageUri,
            },
        });
    }
    if (card.buttons) {
        section.widgets.push({
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
function buildReplyFromFulfillmentMessages(chatMessages) {
    const reply = {
        cards: [],
    };
    chatMessages.forEach(msg => {
        if (msg.image?.imageUri !== undefined) {
            reply.cards.push(buildImageCard(msg.image.imageUri));
        }
        else if (msg.text !== undefined) {
            const text = msg.text?.text?.join('\n');
            if (reply.text) {
                reply.text = `${reply.text}\n${text}`;
            }
            else {
                reply.text = text;
            }
        }
        else if (msg.card !== undefined) {
            reply.cards.push(convertCard(msg.card));
        }
        else if (msg.payload) {
            const payload = pb_util_1.struct.decode(msg.payload);
            if (payload.hangouts !== undefined) {
                reply.cards.push(payload.hangouts);
            }
        }
    });
    return reply;
}
function dialogflowHandler(options) {
    return async (ctx) => {
        const sessionPath = sessionClient.projectAgentSessionPath(options.projectId, encodeKey(ctx.conversationKey));
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
        const chatMessages = response.queryResult?.fulfillmentMessages?.filter(msg => msg.platform === 'GOOGLE_HANGOUTS');
        if (chatMessages !== undefined && chatMessages.length > 0) {
            const reply = buildReplyFromFulfillmentMessages(chatMessages);
            await ctx.reply(reply);
        }
        else {
            // Otherwise use unspecified platform message
            await ctx.reply({ text: response.queryResult.fulfillmentText });
        }
    };
}
exports.dialogflowHandler = dialogflowHandler;
//# sourceMappingURL=index.js.map