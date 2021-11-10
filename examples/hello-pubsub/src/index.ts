import dotenv from 'dotenv';
import {Bot} from '@google/chat-sdk';

dotenv.config();

const bot = Bot.pubsub({
  subscriptionName: process.env.GOOGLE_SUBSCRIPTION_NAME,
});

bot.message(async ({reply, messageText}) => {
  return reply({text: `You said: ${messageText}`});
});

bot.start();
