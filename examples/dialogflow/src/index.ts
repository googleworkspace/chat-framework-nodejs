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
