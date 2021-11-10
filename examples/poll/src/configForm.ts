import {chat_v1} from '@google/chat-sdk';

export interface PollOptions {
  topic?: string;
  choices?: string[];
}

function optionInput(optionNumber: number, text: string | undefined) {
  return {
    textInput: {
      label: `Option ${optionNumber + 1}`,
      type: 'SINGLE_LINE',
      name: `option${optionNumber}`,
      value: text ?? '',
      hintText: '',
    },
  };
}

function helpText() {
  return {
    textParagraph: {
      text: 'Enter the poll topic and up to 5 choices in the poll. Blank options will be omitted.',
    },
  };
}

function topicInput(topic: string | undefined) {
  return {
    textInput: {
      label: 'Topic',
      type: 'MULTIPLE_LINE',
      name: 'topic',
      value: topic ?? '',
      hintText: '',
    },
  };
}

function buttons() {
  return {
    buttonList: {
      buttons: [
        {
          text: 'Submit',
          onClick: {
            action: {
              function: 'start_poll',
            },
          },
        },
        {
          text: 'Cancel',
          onClick: {
            action: {
              function: 'cancel',
            },
          },
        },
      ],
    },
  };
}

export function buildConfigurationForm(
  options: PollOptions
): chat_v1.Schema$GoogleAppsCardV1Card {
  const widgets = [];
  widgets.push(helpText());
  widgets.push(topicInput(options.topic));
  for (let i = 0; i < 5; ++i) {
    const choice = options?.choices?.[i];
    widgets.push(optionInput(i, choice));
  }
  widgets.push(buttons());
  return {
    sections: [
      {
        widgets: widgets,
      },
    ],
  };
}
