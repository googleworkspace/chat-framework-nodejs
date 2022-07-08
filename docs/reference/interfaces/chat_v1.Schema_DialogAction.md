[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$DialogAction

# Interface: Schema$DialogAction

[chat_v1](../modules/chat_v1.md).Schema$DialogAction

Contains dialog if present as well as the ActionStatus for the request sent from user.

## Table of contents

### Properties

- [actionStatus](chat_v1.Schema_DialogAction.md#actionstatus)
- [dialog](chat_v1.Schema_DialogAction.md#dialog)

## Properties

### actionStatus

• `Optional` **actionStatus**: [`Schema$ActionStatus`](chat_v1.Schema_ActionStatus.md)

Status for either invoke dialog or submit dialog requests. This will be used to display a status and message to user if needed. For example in case of an error or success.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:394

___

### dialog

• `Optional` **dialog**: [`Schema$Dialog`](chat_v1.Schema_Dialog.md)

Dialog for the request.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:398
