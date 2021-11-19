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

import dotenv from 'dotenv';
import {Bot} from '@google/chat-sdk';
import {buildConfigurationForm} from './configForm';
import {buildPollCard, PollResults} from './pollCard';

dotenv.config();
if (process.env.GOOGLE_PROJECT_NUMBER === undefined) {
  throw new Error('Environment variable GOOGLE_PROJECT_NUMBER is undefined.');
}

const bot = Bot.http({
  projectNumber: parseInt(process.env.GOOGLE_PROJECT_NUMBER),
});

// Help command
bot.message(/help/i, async ({reply}) => {
  const msg = {
    text: 'Try "/poll" to start a poll.',
  };
  await reply(msg);
});

// Show an image picker dialog
bot.command('/poll', async ({showDialog, messageText}) => {
  const dialog = buildConfigurationForm({
    topic: messageText,
    choices: [],
  });
  await showDialog(dialog);
});

// Action for search & pagination. Updates the card with the search results
bot.action(
  'start_poll',
  async ({showDialog, closeDialog, newMessageInThread, user, formInputs}) => {
    const author = user?.displayName ?? 'unknown';
    const topic = formInputs.get('topic').asString();
    const choices: string[] = [];
    for (let i = 0; i < 5; ++i) {
      const choice = formInputs.get(`option${i}`).asString();
      if (choice) {
        choices.push(choice);
      }
    }
    if (topic && choices.length > 0) {
      await closeDialog();
      const pollCard = buildPollCard({
        topic: topic,
        author: author,
        choices: choices,
        votes: {},
      });
      await newMessageInThread({
        cards: [pollCard],
      });
    } else {
      // Reshow dialog
      const dialog = buildConfigurationForm({
        topic: topic,
        choices: choices,
      });
      await showDialog(dialog);
    }
  }
);

// Action when an image is selected.
bot.action('vote', async ({ack, user, parameters, updateMessage}) => {
  const choice = Number(parameters['index']);
  const userId = user?.name;
  // Note that for this demo the poll results are stored in the chat message itself instead of external storage.
  // While a convenient technique, it can result in lost votes. Prefer using a separate datastore for mutable
  // state when multiple users are interacting with the message.
  const state: PollResults = JSON.parse(parameters['state']);
  if (choice === undefined || !state || !userId) {
    return ack();
  }
  state.votes[userId] = choice;
  await updateMessage({
    cards: [buildPollCard(state)],
  });
});

bot.start().then(() => console.log('Bot ready.'));
