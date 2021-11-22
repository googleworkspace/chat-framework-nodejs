[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1SelectionInput

# Interface: Schema$GoogleAppsCardV1SelectionInput

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1SelectionInput

A widget that creates a UI item (for example, a drop-down list) with options for users to select.

## Table of contents

### Properties

- [items](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md#items)
- [label](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md#label)
- [name](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md#name)
- [onChangeAction](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md#onchangeaction)
- [type](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md#type)

## Properties

### items

• `Optional` **items**: [`Schema$GoogleAppsCardV1SelectionItem`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionItem.md)[]

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:838

___

### label

• `Optional` **label**: ``null`` \| `string`

The label displayed ahead of the switch control.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:842

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of the text input which is used in formInput.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:846

___

### onChangeAction

• `Optional` **onChangeAction**: [`Schema$GoogleAppsCardV1Action`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md)

If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:850

___

### type

• `Optional` **type**: ``null`` \| `string`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:851
