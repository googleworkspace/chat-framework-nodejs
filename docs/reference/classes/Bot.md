[Google Chat SDK](../README.md) / Bot

# Class: Bot

Represent a chat bot/app and provides simplified routing/dispatching of events to handlers.

A minimal echo bot:

```typescript
import { Bot } from '@google/chat-app'

const bot = Bot.http({
 projectNumber: parseInt(process.env.GOOGLE_PROJECT_NUMBER)
}

bot.message((messageText, reply) => {
  reply({
    text: `Echo: ${messageText}`
  });
});

bot.start();
```

## Table of contents

### Constructors

- [constructor](Bot.md#constructor)

### Accessors

- [transport](Bot.md#transport)

### Methods

- [action](Bot.md#action)
- [addedToSpace](Bot.md#addedtospace)
- [command](Bot.md#command)
- [message](Bot.md#message)
- [off](Bot.md#off)
- [on](Bot.md#on)
- [removedFromSpace](Bot.md#removedfromspace)
- [sendMessage](Bot.md#sendmessage)
- [start](Bot.md#start)
- [stop](Bot.md#stop)
- [unfurl](Bot.md#unfurl)
- [updateMessage](Bot.md#updatemessage)
- [http](Bot.md#http)
- [pubsub](Bot.md#pubsub)

## Constructors

### constructor

• **new Bot**(`transport?`)

Createa bot with given transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport?` | [`Transport`](../interfaces/Transport.md) |

#### Defined in

[packages/core/src/bot.ts:134](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L134)

## Accessors

### transport

• `get` **transport**(): `undefined` \| [`Transport`](../interfaces/Transport.md)

Replaces the current transport

#### Returns

`undefined` \| [`Transport`](../interfaces/Transport.md)

#### Defined in

[packages/core/src/bot.ts:168](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L168)

• `set` **transport**(`transport`): `void`

Replaces the current transport

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `undefined` \| [`Transport`](../interfaces/Transport.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:156](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L156)

## Methods

### action

▸ **action**(`actionName`, `handler`): `void`

Registers a handler for card actions (interactive cards and dialogs.)

```typescript
bot.action('submit_form', ctx => {
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionName` | `string` | Name of action (corresponds to actionMethodName in onclick action) |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:351](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L351)

___

### addedToSpace

▸ **addedToSpace**(`handler`): `void`

Registers a handler for when the bot is added to a space. Note that in some cases
a bot may be added to a space via an at-mention. In those cases, a separate
synthentic message event will also be dispatched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:253](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L253)

___

### command

▸ **command**(`command`, `handler`): `void`

Registers a slash command handler. Slash commands can be registered either by
the numberic command ID or the command name itself (including the leading slash.)

via command id:

```typescript
bot.command(1, ctx => {
  // ...
});
```

or by name:

```typescript
bot.command('/poll', ctx => {
  /// ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number` | command id or name |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:233](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L233)

___

### message

▸ **message**(`handler`): `void`

Registers a handler for text messages/at-mentions. Handlers can either handle all mentions, or
can use regular expresses to route matching text to different handlers. Note that when multiple
message handlers are registered, they're evaluated in the order registered. Only the first matching
handler is executed.

```typescript
// Match help requests (e.g. "@mybot help")
bot.message(/help/, ctx => {
  // ...
});

// Catch all other messages
bot.message(ctx => {
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:288](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L288)

▸ **message**(`pattern`, `handler`): `void`

Registers a handler for text messages/at-mentions. Handlers can either handle all mentions, or
can use regular expresses to route matching text to different handlers. Note that when multiple
message handlers are registered, they're evaluated in the order registered. Only the first matching
handler is executed.

```typescript
// Match help requests (e.g. "@mybot help")
bot.message(/help/, ctx => {
  // ...
});

// Catch all other messages
bot.message(ctx => {
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `RegExp` | Only handle messages matching this regular expression. |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:311](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L311)

___

### off

▸ **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`LifecycleEvents`](../interfaces/LifecycleEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`LifecycleEvents`](../interfaces/LifecycleEvents.md)[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:145](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L145)

___

### on

▸ **on**<`Name`\>(`eventName`, `listener`): `UnsubscribeFn`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`LifecycleEvents`](../interfaces/LifecycleEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`LifecycleEvents`](../interfaces/LifecycleEvents.md)[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

#### Defined in

[packages/core/src/bot.ts:138](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L138)

___

### removedFromSpace

▸ **removedFromSpace**(`handler`): `void`

Registers a handler for when the bot is removed from a space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:263](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L263)

___

### sendMessage

▸ **sendMessage**(`spaceName`, `message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Sends an unsolicited message to a space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spaceName` | `string` | Resource name of space to message |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) | Message body |
| `options?` | `Partial`<[`SendOptions`](../interfaces/SendOptions.md)\> |  |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/bot.ts:456](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L456)

___

### start

▸ **start**(): `Promise`<`void`\>

Starts the underlying transport and begins listening for events.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:193](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L193)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stops the bot amd underlying transport.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:203](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L203)

___

### unfurl

▸ **unfurl**(`handler`): `void`

Registers a handler for link unfurling events. Either all URL matches
can be handled by a single callback, or pattern matching can be
used to register multiple handlers.

URL pattern matching is based on [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
(currently via polyfill.) Capturing groups are also supported and the resulting matches are injected
into the request context in the `urlPatternResult` property.

```typescript
// Match URL by pattern (string syntax)
bot.unfurl('*\\://www.example.com/books/:bookId/chapter/:chapterId', ctx => {
  // ...
});

// Match URL by pattern (URLPatternInit)
bot.unfurl({
  hostname: ':subdomain.example.com'
}, ctx => {
  // ...
});

// Catch-all handler for unfurls
bot.unfurl(ctx => {
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:389](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L389)

▸ **unfurl**(`pattern`, `handler`): `void`

Registers a handler for link unfurling events. Either all URL matches
can be handled by a single callback, or pattern matching can be
used to register multiple handlers.

URL pattern matching is based on [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
(currently via polyfill.) Capturing groups are also supported and the resulting matches are injected
into the request context in the `urlPatternResult` property.

```typescript
// Match URL by pattern (string syntax)
bot.unfurl('*\\://www.example.com/books/:bookId/chapter/:chapterId', ctx => {
  // ...
});

// Match URL by pattern (URLPatternInit)
bot.unfurl({
  hostname: ':subdomain.example.com'
}, ctx => {
  // ...
});

// Catch-all handler for unfurls
bot.unfurl(ctx => {
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` \| `URLPatternInit` | string or object pattern to match with |
| `handler` | [`EventHandler`](../README.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:421](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L421)

___

### updateMessage

▸ **updateMessage**(`messageName`, `message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Sends an unsolicited request to update an existing message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageName` | `string` | - |
| `message` | `Partial`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> | Message body |
| `options?` | `Partial`<[`SendOptions`](../interfaces/SendOptions.md)\> |  |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/bot.ts:472](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L472)

___

### http

▸ `Static` **http**(`options`): [`Bot`](Bot.md)

Convenience factory method for building a bot with the HTTP transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`HttpOptions`](../interfaces/HttpOptions.md)\> |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[packages/core/src/bot.ts:176](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L176)

___

### pubsub

▸ `Static` **pubsub**(`options`): [`Bot`](Bot.md)

Convenience factory method for building a bot with the pubsub transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`PubSubOptions`](../interfaces/PubSubOptions.md)\> |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[packages/core/src/bot.ts:185](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L185)
