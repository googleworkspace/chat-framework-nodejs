[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$CardHeader

# Interface: Schema$CardHeader

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$CardHeader

## Table of contents

### Properties

- [imageStyle](google_chat_sdk.chat_v1.Schema_CardHeader.md#imagestyle)
- [imageUrl](google_chat_sdk.chat_v1.Schema_CardHeader.md#imageurl)
- [subtitle](google_chat_sdk.chat_v1.Schema_CardHeader.md#subtitle)
- [title](google_chat_sdk.chat_v1.Schema_CardHeader.md#title)

## Properties

### imageStyle

• `Optional` **imageStyle**: ``null`` \| `string`

The image's type (e.g. square border or circular border).

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:242

___

### imageUrl

• `Optional` **imageUrl**: ``null`` \| `string`

The URL of the image in the card header.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:246

___

### subtitle

• `Optional` **subtitle**: ``null`` \| `string`

The subtitle of the card header.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:250

___

### title

• `Optional` **title**: ``null`` \| `string`

The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:254
