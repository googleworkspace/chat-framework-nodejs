[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1OnClick

# Interface: Schema$GoogleAppsCardV1OnClick

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1OnClick

## Table of contents

### Properties

- [action](chat_v1.Schema_GoogleAppsCardV1OnClick.md#action)
- [card](chat_v1.Schema_GoogleAppsCardV1OnClick.md#card)
- [openDynamicLinkAction](chat_v1.Schema_GoogleAppsCardV1OnClick.md#opendynamiclinkaction)
- [openLink](chat_v1.Schema_GoogleAppsCardV1OnClick.md#openlink)

## Properties

### action

• `Optional` **action**: [`Schema$GoogleAppsCardV1Action`](chat_v1.Schema_GoogleAppsCardV1Action.md)

If specified, an action is triggered by this onClick.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:791

___

### card

• `Optional` **card**: [`Schema$GoogleAppsCardV1Card`](chat_v1.Schema_GoogleAppsCardV1Card.md)

A new card is pushed to the card stack after clicking if specified.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:795

___

### openDynamicLinkAction

• `Optional` **openDynamicLinkAction**: [`Schema$GoogleAppsCardV1Action`](chat_v1.Schema_GoogleAppsCardV1Action.md)

An add-on triggers this action when the action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:799

___

### openLink

• `Optional` **openLink**: [`Schema$GoogleAppsCardV1OpenLink`](chat_v1.Schema_GoogleAppsCardV1OpenLink.md)

If specified, this onClick triggers an open link action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:803
