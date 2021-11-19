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
import {dialogflowHandler} from '@google/chat-sdk-dialogflow';

dotenv.config();

if (process.env.GOOGLE_PROJECT_NUMBER === undefined) {
  throw new Error('Environment variable GOOGLE_PROJECT_NUMBER is undefined.');
}

if (process.env.GOOGLE_PROJECT_ID === undefined) {
  throw new Error('Environment variable GOOGLE_PROJECT_ID is undefined.');
}

const bot = Bot.http({
  projectNumber: parseInt(process.env.GOOGLE_PROJECT_NUMBER),
});

// Help command
bot.message(
  dialogflowHandler({
    projectId: process.env.GOOGLE_PROJECT_ID,
    languageCode: 'en',
  })
);

bot.start().then(() => console.log('Bot ready.'));
