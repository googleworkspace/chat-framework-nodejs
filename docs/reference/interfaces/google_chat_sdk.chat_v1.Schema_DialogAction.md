[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$DialogAction

# Interface: Schema$DialogAction

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$DialogAction

Contains dialog if present as well as the ActionStatus for the request sent from user.

## Table of contents

### Properties

- [actionStatus](google_chat_sdk.chat_v1.Schema_DialogAction.md#actionstatus)
- [dialog](google_chat_sdk.chat_v1.Schema_DialogAction.md#dialog)

## Properties

### actionStatus

• `Optional` **actionStatus**: [`Schema$ActionStatus`](google_chat_sdk.chat_v1.Schema_ActionStatus.md)

Status for either invoke dialog or submit dialog requests. This will be used to display a status and message to user if needed. For example in case of an error or success.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:394

___

### dialog

• `Optional` **dialog**: [`Schema$Dialog`](google_chat_sdk.chat_v1.Schema_Dialog.md)

Dialog for the request.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:398
