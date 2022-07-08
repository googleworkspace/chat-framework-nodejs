[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$SlashCommandMetadata

# Interface: Schema$SlashCommandMetadata

[chat_v1](../modules/chat_v1.md).Schema$SlashCommandMetadata

Annotation metadata for slash commands (/).

## Table of contents

### Properties

- [bot](chat_v1.Schema_SlashCommandMetadata.md#bot)
- [commandId](chat_v1.Schema_SlashCommandMetadata.md#commandid)
- [commandName](chat_v1.Schema_SlashCommandMetadata.md#commandname)
- [triggersDialog](chat_v1.Schema_SlashCommandMetadata.md#triggersdialog)
- [type](chat_v1.Schema_SlashCommandMetadata.md#type)

## Properties

### bot

• `Optional` **bot**: [`Schema$User`](chat_v1.Schema_User.md)

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
