# Google Chat toolkit for Node.js


This is an experimental framework for building bots and apps for Google Chat using Node.js

Note: This is not an official Google product.

# Getting started

1. Create a new project:

```shell
npm init
```

2. Install the framework:

```shell
npm install --save @google/chat-framework
```

3. Create an `index.js` file for the bot:

```javascript
const { Bot } = require("google-chat-nodejs");

// Create the bot using http transport
// Note: set the project number to enable authentication of incoming
// messages.
const bot = Bot.http({
  projectNumber: process.env.GOOGLE_PROJECT_NUMBER,
});

// Echo back any at-mentions
bot.message(async ({reply, argumentText}) => {
  await reply({
     text: `You said: ${argumentText}`
  });
});

// Start the bot
bot.start();
```

4. Add a start script to `package.json`:

```json
{
   "scripts": {
      "start": "node index.js"
   }
}
```

5. Start the bot:

```shell
npm run start
```

