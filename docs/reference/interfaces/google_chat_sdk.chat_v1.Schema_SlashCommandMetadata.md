[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$SlashCommandMetadata

# Interface: Schema$SlashCommandMetadata

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$SlashCommandMetadata

Annotation metadata for slash commands (/).

## Table of contents

### Properties

- [bot](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md#bot)
- [commandId](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md#commandid)
- [commandName](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md#commandname)
- [triggersDialog](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md#triggersdialog)
- [type](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md#type)

## Properties

### bot

• `Optional` **bot**: [`Schema$User`](google_chat_sdk.chat_v1.Schema_User.md)

The bot whose command was invoked.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1242

___

### commandId

• `Optional` **commandId**: ``null`` \| `string`

The command id of the invoked slash command.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1246

___

### commandName

• `Optional` **commandName**: ``null`` \| `string`

The name of the invoked slash command.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1250

___

### triggersDialog

• `Optional` **triggersDialog**: ``null`` \| `boolean`

Indicating whether the slash command is for a dialog.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1254

___

### type

• `Optional` **type**: ``null`` \| `string`

The type of slash command.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1258
