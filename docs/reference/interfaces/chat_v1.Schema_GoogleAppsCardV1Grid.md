[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1Grid

# Interface: Schema$GoogleAppsCardV1Grid

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1Grid

Represents a Grid widget that displays items in a configurable grid layout.

## Table of contents

### Properties

- [borderStyle](chat_v1.Schema_GoogleAppsCardV1Grid.md#borderstyle)
- [columnCount](chat_v1.Schema_GoogleAppsCardV1Grid.md#columncount)
- [items](chat_v1.Schema_GoogleAppsCardV1Grid.md#items)
- [onClick](chat_v1.Schema_GoogleAppsCardV1Grid.md#onclick)
- [title](chat_v1.Schema_GoogleAppsCardV1Grid.md#title)

## Properties

### borderStyle

• `Optional` **borderStyle**: [`Schema$GoogleAppsCardV1BorderStyle`](chat_v1.Schema_GoogleAppsCardV1BorderStyle.md)

The border style to apply to each grid item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:677

___

### columnCount

• `Optional` **columnCount**: ``null`` \| `number`

The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:681

___

### items

• `Optional` **items**: [`Schema$GoogleAppsCardV1GridItem`](chat_v1.Schema_GoogleAppsCardV1GridItem.md)[]

The items to display in the grid.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:685

___

### onClick

• `Optional` **onClick**: [`Schema$GoogleAppsCardV1OnClick`](chat_v1.Schema_GoogleAppsCardV1OnClick.md)

This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:689

___

### title

• `Optional` **title**: ``null`` \| `string`

The text that displays in the grid header.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:693
