[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Chat

# Class: Chat

[chat_v1](../modules/chat_v1.md).Chat

Google Chat API

Enables bots to fetch information and perform actions in Google Chat. Authentication using a service account is a prerequisite for using the Google Chat REST API.

**`example`**
```js
const {google} = require('googleapis');
const chat = google.chat('v1');
```

## Table of contents

### Constructors

- [constructor](chat_v1.Chat.md#constructor)

### Properties

- [context](chat_v1.Chat.md#context)
- [dms](chat_v1.Chat.md#dms)
- [media](chat_v1.Chat.md#media)
- [rooms](chat_v1.Chat.md#rooms)
- [spaces](chat_v1.Chat.md#spaces)

## Constructors

### constructor

• **new Chat**(`options`, `google?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GlobalOptions` |
| `google?` | `GoogleConfigurable` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:75

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:70

___

### dms

• **dms**: [`Resource$Dms`](chat_v1.Resource_Dms.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:71

___

### media

• **media**: [`Resource$Media`](chat_v1.Resource_Media.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:72

___

### rooms

• **rooms**: [`Resource$Rooms`](chat_v1.Resource_Rooms.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:73

___

### spaces

• **spaces**: [`Resource$Spaces`](chat_v1.Resource_Spaces.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:74
