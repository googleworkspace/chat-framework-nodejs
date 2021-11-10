import {chat_v1} from '@google/chat-sdk';

export interface PollResults {
  topic: string;
  author: string;
  choices: string[];
  votes: {[key: string]: number};
}

function choice(
  index: number,
  text: string,
  voteCount: number,
  totalVotes: number,
  state: string
): chat_v1.Schema$WidgetMarkup {
  let progress = 0;
  if (totalVotes > 0) {
    const percentage = (voteCount * 100) / totalVotes;
    // Scale to 20 steps
    progress = Math.round((percentage / 100) * 20);
  }
  const progressBar = '▀'.repeat(progress);
  return {
    keyValue: {
      bottomLabel: `${progressBar} ${voteCount}`,
      content: text,
      button: {
        textButton: {
          text: 'vote',
          onClick: {
            action: {
              actionMethodName: 'vote',
              parameters: [
                {
                  key: 'state',
                  value: state,
                },
                {
                  key: 'index',
                  value: index.toString(10),
                },
              ],
            },
          },
        },
      },
    },
  };
}

function header(question: string, author: string): chat_v1.Schema$CardHeader {
  return {
    title: question,
    subtitle: `Posed by ${author}`,
    imageUrl:
      'https://raw.githubusercontent.com/google/material-design-icons/master/png/social/poll/materialicons/24dp/2x/baseline_poll_black_24dp.png',
    imageStyle: 'AVATAR',
  };
}

export function buildPollCard(results: PollResults): chat_v1.Schema$Card {
  const widgets = [];
  const state = JSON.stringify(results);
  const totalVotes = Object.keys(results.votes).length;
  for (let i = 0; i < results.choices.length; ++i) {
    // Count votes for this choice
    const votes = Object.values(results.votes).reduce((sum, vote) => {
      if (vote === i) {
        return sum + 1;
      }
      return sum;
    }, 0);
    widgets.push(choice(i, results.choices[i], votes, totalVotes, state));
  }

  return {
    header: header(results.topic, results.author),
    sections: [
      {
        widgets: widgets,
      },
    ],
  };
}
