[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$ActionStatus

# Interface: Schema$ActionStatus

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$ActionStatus

ActionStatus represents status of a request from the bot developer's side. In specific, for each request a bot gets, the bot developer will set both fields below in relation to what the response status and message related to status should be.

## Table of contents

### Properties

- [statusCode](google_chat_sdk.chat_v1.Schema_ActionStatus.md#statuscode)
- [userFacingMessage](google_chat_sdk.chat_v1.Schema_ActionStatus.md#userfacingmessage)

## Properties

### statusCode

• `Optional` **statusCode**: ``null`` \| `string`

The status code.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:114

___

### userFacingMessage

• `Optional` **userFacingMessage**: ``null`` \| `string`

This message will be the corresponding string to the above status_code. If unset, an appropriate generic message based on the status_code will be shown to the user. If this field is set then the message will be surfaced to the user for both successes and errors.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:118
