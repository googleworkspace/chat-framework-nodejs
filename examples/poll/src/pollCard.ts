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
