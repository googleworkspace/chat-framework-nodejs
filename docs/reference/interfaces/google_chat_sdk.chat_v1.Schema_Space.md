[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$Space

# Interface: Schema$Space

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$Space

A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat bot.

## Table of contents

### Properties

- [displayName](google_chat_sdk.chat_v1.Schema_Space.md#displayname)
- [name](google_chat_sdk.chat_v1.Schema_Space.md#name)
- [singleUserBotDm](google_chat_sdk.chat_v1.Schema_Space.md#singleuserbotdm)
- [threaded](google_chat_sdk.chat_v1.Schema_Space.md#threaded)
- [type](google_chat_sdk.chat_v1.Schema_Space.md#type)

## Properties

### displayName

• `Optional` **displayName**: ``null`` \| `string`

Output only. The display name (only if the space is of type `ROOM`). Please note that this field might not be populated in direct messages between humans.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1267

___

### name

• `Optional` **name**: ``null`` \| `string`

Resource name of the space, in the form "spaces/x". Example: spaces/AAAAMpdlehYs

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1271

___

### singleUserBotDm

• `Optional` **singleUserBotDm**: ``null`` \| `boolean`

Whether the space is a DM between a bot and a single human.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1275

___

### threaded

• `Optional` **threaded**: ``null`` \| `boolean`

Whether the messages are threaded in this space.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1279

___

### type

• `Optional` **type**: ``null`` \| `string`

Output only. The type of a space. This is deprecated. Use `single_user_bot_dm` instead.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1283
