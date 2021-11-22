[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$ActionResponse

# Interface: Schema$ActionResponse

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$ActionResponse

Parameters that a bot can use to configure how it's response is posted.

## Table of contents

### Properties

- [dialogAction](google_chat_sdk.chat_v1.Schema_ActionResponse.md#dialogaction)
- [type](google_chat_sdk.chat_v1.Schema_ActionResponse.md#type)
- [url](google_chat_sdk.chat_v1.Schema_ActionResponse.md#url)

## Properties

### dialogAction

• `Optional` **dialogAction**: [`Schema$DialogAction`](google_chat_sdk.chat_v1.Schema_DialogAction.md)

This response is for Dialog related events and must be accompanied by ResponseType.Dialog

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:97

___

### type

• `Optional` **type**: ``null`` \| `string`

The type of bot response.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:101

___

### url

• `Optional` **url**: ``null`` \| `string`

URL for users to auth or config. (Only for REQUEST_CONFIG response types.)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:105
