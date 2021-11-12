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
  return reply(msg);
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
