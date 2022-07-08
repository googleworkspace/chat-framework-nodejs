[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$CardAction

# Interface: Schema$CardAction

[chat_v1](../modules/chat_v1.md).Schema$CardAction

A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.

## Table of contents

### Properties

- [actionLabel](chat_v1.Schema_CardAction.md#actionlabel)
- [onClick](chat_v1.Schema_CardAction.md#onclick)

## Properties

### actionLabel

• `Optional` **actionLabel**: ``null`` \| `string`

The label used to be displayed in the action menu item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:232

___

### onClick

• `Optional` **onClick**: [`Schema$OnClick`](chat_v1.Schema_OnClick.md)

The onclick action for this action item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:236
