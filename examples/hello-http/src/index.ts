import dotenv from 'dotenv';
import {Bot} from '@google/chat-sdk';

dotenv.config();

const bot = Bot.http({
  projectNumber: process.env.GOOGLE_PROJECT_NUMBER,
});

bot.message(async ({reply, messageText}) => {
  return reply({text: `You said: ${messageText}`});
});

bot.start();
