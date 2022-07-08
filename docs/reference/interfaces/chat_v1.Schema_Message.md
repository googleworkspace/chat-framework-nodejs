[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$Message

# Interface: Schema$Message

[chat_v1](../modules/chat_v1.md).Schema$Message

A message in Google Chat.

## Table of contents

### Properties

- [actionResponse](chat_v1.Schema_Message.md#actionresponse)
- [annotations](chat_v1.Schema_Message.md#annotations)
- [argumentText](chat_v1.Schema_Message.md#argumenttext)
- [attachment](chat_v1.Schema_Message.md#attachment)
- [cards](chat_v1.Schema_Message.md#cards)
- [createTime](chat_v1.Schema_Message.md#createtime)
- [fallbackText](chat_v1.Schema_Message.md#fallbacktext)
- [lastUpdateTime](chat_v1.Schema_Message.md#lastupdatetime)
- [name](chat_v1.Schema_Message.md#name)
- [previewText](chat_v1.Schema_Message.md#previewtext)
- [sender](chat_v1.Schema_Message.md#sender)
- [slashCommand](chat_v1.Schema_Message.md#slashcommand)
- [space](chat_v1.Schema_Message.md#space)
- [text](chat_v1.Schema_Message.md#text)
- [thread](chat_v1.Schema_Message.md#thread)

## Properties

### actionResponse

• `Optional` **actionResponse**: [`Schema$ActionResponse`](chat_v1.Schema_ActionResponse.md)

Input only. Parameters that a bot can use to configure how its response is posted.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1136

___

### annotations

• `Optional` **annotations**: [`Schema$Annotation`](chat_v1.Schema_Annotation.md)[]

Output only. Annotations associated with the text in this message.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1140

___

### argumentText

• `Optional` **argumentText**: ``null`` \| `string`

Plain-text body of the message with all bot mentions stripped out.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1144

___

### attachment

• `Optional` **attachment**: [`Schema$Attachment`](chat_v1.Schema_Attachment.md)[]

User uploaded attachment.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1148

___

### cards

• `Optional` **cards**: [`Schema$Card`](chat_v1.Schema_Card.md)[]

Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1152

___

### createTime

• `Optional` **createTime**: ``null`` \| `string`

Output only. The time at which the message was created in Google Chat server.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1156

___

### fallbackText

• `Optional` **fallbackText**: ``null`` \| `string`

A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1160

___

### lastUpdateTime

• `Optional` **lastUpdateTime**: ``null`` \| `string`

Output only. The time at which the message was last updated in Google Chat server. If the message was never updated, this field will be same as create_time.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1164

___

### name

• `Optional` **name**: ``null`` \| `string`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1165

___

### previewText

• `Optional` **previewText**: ``null`` \| `string`

Text for generating preview chips. This text will not be displayed to the user, but any links to images, web pages, videos, etc. included here will generate preview chips.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1169

___

### sender

• `Optional` **sender**: [`Schema$User`](chat_v1.Schema_User.md)

The user who created the message.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1173

___

### slashCommand

• `Optional` **slashCommand**: [`Schema$SlashCommand`](chat_v1.Schema_SlashCommand.md)

Slash command information, if applicable.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1177

___

### space

• `Optional` **space**: [`Schema$Space`](chat_v1.Schema_Space.md)

The space the message belongs to.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1181

___

### text

• `Optional` **text**: ``null`` \| `string`

Plain-text body of the message.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1185

___

### thread

• `Optional` **thread**: [`Schema$Thread`](chat_v1.Schema_Thread.md)

The thread the message belongs to.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1189
