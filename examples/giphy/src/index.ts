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
import {buildSearchDialog} from './searchDialog';
import {buildImageCard, ImageInfo} from './imageCard';
import {Bot} from '@google/chat-sdk';
import GiphyApi from 'giphy-api';

dotenv.config();
if (process.env.GOOGLE_PROJECT_NUMBER === undefined) {
  throw new Error('Environment variable GOOGLE_PROJECT_NUMBER is undefined.');
}

const giphy = GiphyApi(process.env.GIPHY_API_KEY);

async function searchGifs(query: string, offset: number) {
  return giphy.search({
    q: query,
    rating: 'pg-13',
    limit: 20,
    offset,
  });
}

const bot = Bot.http({
  projectNumber: process.env.GOOGLE_PROJECT_NUMBER,
});

// Help command
bot.message(/help/i, async ({reply}) => {
  const msg = {
    text: 'Try "/gif" to pick an image, or `@gif <keyword>` for a random image. Search results powered by Giphy.com.',
  };
  return reply(msg);
});

// Handle @mentions for random gif
bot.message(async ({reply, user, messageText}) => {
  const image = await giphy.random({
    tag: messageText ?? '',
    rating: 'pg-13',
  });
  return reply({
    text: `Posted by <${user?.name}>`,
    cards: [
      buildImageCard({
        url: image.data.images.original.url,
        title: image.data.title,
      }),
    ],
  });
});

// Show an image picker dialog
bot.command('/gif', async ({showDialog, messageText}) => {
  let searchResults = undefined;
  if (messageText) {
    searchResults = await searchGifs(messageText, 0);
  }
  const dialog = buildSearchDialog({
    keywords: messageText,
    results: searchResults,
  });
  await showDialog(dialog);
});

// Action for search & pagination. Updates the card with the search results
bot.action('search', async ({showDialog, parameters, formInputs}) => {
  const keywords = formInputs.get('keywords').asString('');
  const offset = Number(parameters['offset'] ?? 0);

  const searchResults = await searchGifs(keywords!, offset!);
  const dialog = buildSearchDialog({
    keywords: keywords,
    results: searchResults,
  });
  await showDialog(dialog);
});

// Action when an image is selected.
bot.action(
  'pick_image',
  async ({closeDialog, user, parameters, newMessageInThread}) => {
    const imageInfo: ImageInfo = JSON.parse(parameters['grid_item_identifier']);
    await closeDialog('Inserting image...');
    await newMessageInThread({
      text: `Posted by <${user?.name}>`,
      cards: [buildImageCard(imageInfo!)],
    });
  }
);

bot.start().then(() => console.log('Bot ready.'));
