# Dialogflow ES adapter for Google Chat bot toolkit

Handler that forwards messages to Dialogflow ES.

Note: This is not an official Google product.

See [googleworkspace/chat-framework-nodejs](https://github.com/googleworkspace/chat-framework-nodejs) for general
instructions on building bots with the SDK.

## Connecting Dialogflow ES to messages handlers

Use the `dialogflowHandler` method to create a message handler that forwards requests to Dialogflow ES. Creating the
handler requires the Google project ID and a language code (automatic detection of language not yet implemented.)

```typescript
// Respond to "@bot help"
import {dialogflowHandler} from "@google/chat-sdk-dialogflow";

bot.message(/help/, async (ctx) => {
  await ctx.reply({
    text: 'Here are some things you can try...'
  });
});

// Forwards all other messages to dialogflow
bot.message(
  dialogflowHandler({
    projectId: process.env.GOOGLE_PROJECT_ID,
    languageCode: 'en',
  })
);
```
