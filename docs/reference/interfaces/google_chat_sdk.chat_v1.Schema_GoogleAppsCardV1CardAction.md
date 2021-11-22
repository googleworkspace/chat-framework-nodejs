[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1CardAction

# Interface: Schema$GoogleAppsCardV1CardAction

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1CardAction

A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.

## Table of contents

### Properties

- [actionLabel](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardAction.md#actionlabel)
- [onClick](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardAction.md#onclick)

## Properties

### actionLabel

• `Optional` **actionLabel**: ``null`` \| `string`

The label that displays as the action menu item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:550

___

### onClick

• `Optional` **onClick**: [`Schema$GoogleAppsCardV1OnClick`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1OnClick.md)

The onclick action for this action item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:554
