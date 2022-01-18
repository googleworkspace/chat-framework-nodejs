# Google Chat bot toolkit for Node.js

Note: This is not an official Google product.

## About

This is an experimental framework for building [Google Chat bots](https://developers.google.com/chat/concepts) using Node.js.

## Why use this?

The framework aims to reduce the amount of boilerplate code in bots and make it
easier to focus on your bot's features.

Some notable features:

* Better message routing. The framework parses incoming messages and routes them
  depending on the type of event and content. Bots only need to listen for specific
  events that are important to them.
* Easier to do the right thing. Built-in support for authenticating incoming messages
  and context-aware helps keep things simple and correct.
* Build hybrid bots that support slash commands, dialogs, and conversational interfaces.
  Use the add-on `@google/chat-sdk-dialogflow` package to delegate conversational
  interactions to Dialogflow while also support more app-like interactions with
  slash commands, link unfurling, and other features not easily implemented when
  using Dialogflow directly.

## Why doesn't it have a catchy name?

It's still new, and we're trying to see how much traction it gets. But if you have a great name
in mind, let us know!

## Help wanted

We'd love to hear your feedback as well as  accept
[code contributions](docs/contributing.md). A few ideas of things that would be helpful:

* Starter and template projects, generators, etc.
* A better plugin mechanism
* Storage interfaces for persisting conversation state.
* Plugins for common functionality like analytics and observability.
* Better documentation and more examples

Or just build things with it and give us your feedback and let us know what you've made!

## Getting started - an echo bot

1. Create a new project:

```shell
npm init
```

2. Install the framework:

```shell
npm install --save @google/chat-sdk
```

3. Create an `index.js` file for the bot:

```javascript
const { Bot } = require("@google/chat-sdk");

// Create the bot using http transport
// Note: set the project number to enable authentication of incoming
// messages.
const bot = Bot.http({
  projectNumber: process.env.GOOGLE_PROJECT_NUMBER,
});

// Echo back any at-mentions
bot.message(async ({reply, messageText}) => {
  await reply({
     text: `You said: ${messageText}`
  });
});

// Start the bot
bot.start();
```

See the [Google Chat bot documentation](https://developers.google.com/chat/how-tos/bots-publish#enable_the_google_chat_api)
for instructions on how to register your bot.

You can also experiment on [glitch.com](https://glitch.com) by remixing [this project](https://glitch.com/edit/#!/bald-gold-vole?path=server.js%3A14%3A12)

## Configuring transports

The framework supports both HTTPS and Cloud PubSub transports.

To create a bot using https, use the `Bot.http(opts)` factory method. Options include:

* `port` (default: `3000`) - Port to listen on
* `path` (default: `'/'`) - URL path for incoming messages.
* `trustProxy` (default: `true`) - Enables recognition of X-forward-for headers in requests
* `projectNumber` (default: `undefined`) - Project # of the bot in the [developer console](https://console.cloud.google.com).
  Enables verification of the authorization headers in incoming events.

For PubSub, use the `Bot.pubsub(opts)` factory method. Options include:

* `subscriptionName` (default: `undefined`) - Name of the subscription to listen on

Note: PubSub bots do not currently support all features and may have issues with interactive
cards and dialogs.

You can also implement your own transport (e.g. a fake for testing) by implementing the
[`Transport`](docs/reference/interfaces/google_chat_sdk.Transport.md) interface and
setting the transport via the `bot.transport` property.

If either `Bot.http()` or `Bot.pubsub()` are called without options, the bot will attempt to autoconfigure
itself based on the environment.

* `PROJECT_NUMBER` - Project number for validating incoming JWTs. When running on GCP, the bot will also
attempt to read this from the GCP Metadata API.
* `PORT` - Port number to listen on
* `GOOGLE_CHAT_SUBSCRIPTION_NAME` - The name of the subscription the bot will receive messages on (pubsub only)
* `GOOGLE_APPLICATION_CREDENTIALS` - Te bot uses the [application default credentials](https://cloud.google.com/docs/authentication/production)
mechanism to authenticate itself. When running on GCP, the framework should automatically discover
its credentials. When running locally or on another cloud, set the `GOOGLE_APPLICATION_CREDENTIALS`
environment variable to the service account credentials for the bot.

## Adding event handlers

Add event handlers to the bot to respond to user interactions. The bot framework automatically
detects the type of event based on the event type and message content and dispatches
the event to the appropriate handler.

Handlers are called with a [context](docs/reference/classes/google_chat_sdk.EventContext.md) object
that provides quick access to common fields in the event along with methods for replying to, creating, and updating
messages and dialogs.

Note that the context object can be safely destructured if desired.

### Handling @ mentions and DM messages

Register a message handler using `bot.message()` method. THe handler will be invoked
for any message that @ mentions the bot or user text in a DM. For example:

```typescript
// Echo back any useer text
bot.message(async (ctx) => {
  await ctx.reply({
    text: ctx.messageText
  })    
})
```

Message handlers typically reply with the `ctx.reply()` method to post a new message in the conversation.

Bots can also register handlers with regular expressions to filter and match. When filters
are used, multiple message handlers can be registered. Note that only 1 handler is invoked,
and patterns are evaluated in the order they're registered.

```typescript
// Respond to "@bot help"
bot.message(/help/, async (ctx) => {
  await ctx.reply({
    text: 'Here are some things you can try...'
  });
});

// Catch all other messages.
bot.message(async (ctx) => {
  // ....
})
```

### Handling slash commands

Register a slash command handler using `bot.command()` method. Slash commands can be identified
by either the numeric command ID or the command name itself:

```typescript
// Handle the slash command with id 1
bot.command(1, async (ctx) => {
  // ...
})

// Handle the '/poll' command
bot.command('/poll', async (ctx) => {
  // ...
})
```

For slash commands that display dialogs, use `ctx.showDialog()` to reply with the dialog:

```typescript
bot.command('/poll', async (ctx) => {
  const pollConfigCard = {
    sections: [
      {
        widgets: [
          // ...
        ]
      }
    ]
  };
  await ctx.showDialog(pollConfigCard)
})
```

### Handling actions

Register action handlers for interactive cards and dialogs using `bot.action()` with the action name:

```typescript
// Handle the slash command with id 1
bot.action('submit', async (ctx) => {
  // ...
})
```

### Link unfurling (launching soon!)

For bots that have configured URLs to unfurl in the developer console, use the
`bot.unfurl()` method to handle unfurl requests. A bot can use either a single generic handler
for all unfurl requests or multiple hanlders with [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
to match specific URLs. When patterns are used, the resulting match and any capture groups
are exposed via `ctx.urlPatternResult`.

Use `ctx.updateMessage()` to display additional information where the URL was referenced.

Example with pattern matching:

```typescript
bot.unfurl({
  hostname: ':customer.issuetracker.example.com',
  pathname: '/issues/:issueId'
}, async (ctx) => {
  const customer = ctx.urlPatternResult.hostname.groups.customer;
  const issueId = ctx.urlPatternResult.pathname.groups.issueId;
  
  const issue = lookupIssue(customer, issueId);
  const card = buildIssueCard(issue);
  
  await ctx.updateMessage({
    cards: [card]
  })
})
```

## Add to and remove from space events

To be notified when a bot is added or removed to a space, use `bot.addedToSpace()` and `bot.removedFromSpace()` methods.

```typescript
bot.addedToSpace(async ctx => {
  ctx.newMessageInSpace({
    text: 'Here are a few things you can try...'
  });
});
```

Note that when a bot is first added to a space via an @mention, Chat only sends a single event. If an ADDED_TO_SPACE
event contains a message, this framework internally dispatches the event twice; once for any `addedToSpace` listeners,
then a second synthetic event for any `messages` listeners that match the user content.

## Replying to events

The `Context` instance supplied to handlers includes several methods for replying to events:

* `reply` - Replies directly to the user's message with a new message
* `updateMessage` - For actions on interactive cards and link unfurls, updates the previous message where
  the action occurred.
* `newMessageInThread` - Similar to reply, but for sending additional messages on the thread.
* `newMessageInSpace` - Starts a new thread in the space
* `showDialog` - Shows a dialog, either in respond to a slash command or dialog action
* `closeDialog` - Closes the current dialog when called from an action handler.

These helpers automatically merges the space and thread names into the message. You only need to supply
the message content itself.

## Sending unsolicited events

The `bot.sendMessage()` event can be used to send an unsolicited message to a space, such as when
notifying the user about an external event. This method is a wrapper around the chat
API and is bound to the bot's configured identity.

