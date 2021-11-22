[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / Bot

# Class: Bot

[@google/chat-sdk](../modules/google_chat_sdk.md).Bot

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

- [constructor](google_chat_sdk.Bot.md#constructor)

### Accessors

- [transport](google_chat_sdk.Bot.md#transport)

### Methods

- [action](google_chat_sdk.Bot.md#action)
- [addedToSpace](google_chat_sdk.Bot.md#addedtospace)
- [command](google_chat_sdk.Bot.md#command)
- [message](google_chat_sdk.Bot.md#message)
- [off](google_chat_sdk.Bot.md#off)
- [on](google_chat_sdk.Bot.md#on)
- [removedFromSpace](google_chat_sdk.Bot.md#removedfromspace)
- [sendMessage](google_chat_sdk.Bot.md#sendmessage)
- [start](google_chat_sdk.Bot.md#start)
- [stop](google_chat_sdk.Bot.md#stop)
- [unfurl](google_chat_sdk.Bot.md#unfurl)
- [http](google_chat_sdk.Bot.md#http)
- [pubsub](google_chat_sdk.Bot.md#pubsub)

## Constructors

### constructor

• **new Bot**(`transport?`)

Createa bot with given transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport?` | [`Transport`](../interfaces/google_chat_sdk.Transport.md) |

#### Defined in

[packages/core/src/bot.ts:135](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L135)

## Accessors

### transport

• `get` **transport**(): `undefined` \| [`Transport`](../interfaces/google_chat_sdk.Transport.md)

Replaces the current transport

#### Returns

`undefined` \| [`Transport`](../interfaces/google_chat_sdk.Transport.md)

#### Defined in

[packages/core/src/bot.ts:169](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L169)

• `set` **transport**(`transport`): `void`

Replaces the current transport

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `undefined` \| [`Transport`](../interfaces/google_chat_sdk.Transport.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:157](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L157)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:352](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L352)

___

### addedToSpace

▸ **addedToSpace**(`handler`): `void`

Registers a handler for when the bot is added to a space. Note that in some cases
a bot may be added to a space via an at-mention. In those cases, a separate
synthentic message event will also be dispatched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:254](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L254)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:234](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L234)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:289](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L289)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:312](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L312)

___

### off

▸ **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`LifecycleEvents`](../interfaces/google_chat_sdk.LifecycleEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`LifecycleEvents`](../interfaces/google_chat_sdk.LifecycleEvents.md)[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:146](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L146)

___

### on

▸ **on**<`Name`\>(`eventName`, `listener`): `UnsubscribeFn`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`LifecycleEvents`](../interfaces/google_chat_sdk.LifecycleEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`LifecycleEvents`](../interfaces/google_chat_sdk.LifecycleEvents.md)[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

#### Defined in

[packages/core/src/bot.ts:139](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L139)

___

### removedFromSpace

▸ **removedFromSpace**(`handler`): `void`

Registers a handler for when the bot is removed from a space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:264](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L264)

___

### sendMessage

▸ **sendMessage**(`spaceName`, `message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

Sends an unsolicited message to a space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spaceName` | `string` | Resource name of space to message |
| `message` | [`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md) | Message body |
| `options?` | `Partial`<[`SendOptions`](../interfaces/google_chat_sdk.SendOptions.md)\> |  |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/bot.ts:457](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L457)

___

### start

▸ **start**(): `Promise`<`void`\>

Starts the underlying transport and begins listening for events.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:194](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L194)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stops the bot amd underlying transport.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:204](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L204)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:390](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L390)

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
| `handler` | [`EventHandler`](../modules/google_chat_sdk.md#eventhandler) | function to handle matching incoming messages |

#### Returns

`void`

#### Defined in

[packages/core/src/bot.ts:422](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L422)

___

### http

▸ `Static` **http**(`options`): [`Bot`](google_chat_sdk.Bot.md)

Convenience factory method for building a bot with the HTTP transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`HttpOptions`](../interfaces/google_chat_sdk.HttpOptions.md)\> |

#### Returns

[`Bot`](google_chat_sdk.Bot.md)

#### Defined in

[packages/core/src/bot.ts:177](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L177)

___

### pubsub

▸ `Static` **pubsub**(`options`): [`Bot`](google_chat_sdk.Bot.md)

Convenience factory method for building a bot with the pubsub transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`PubSubOptions`](../interfaces/google_chat_sdk.PubSubOptions.md)\> |

#### Returns

[`Bot`](google_chat_sdk.Bot.md)

#### Defined in

[packages/core/src/bot.ts:186](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L186)
