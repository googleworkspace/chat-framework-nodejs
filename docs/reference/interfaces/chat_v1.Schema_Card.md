[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$Card

# Interface: Schema$Card

[chat_v1](../modules/chat_v1.md).Schema$Card

A card is a UI element that can contain UI widgets such as texts, images.

## Table of contents

### Properties

- [cardActions](chat_v1.Schema_Card.md#cardactions)
- [header](chat_v1.Schema_Card.md#header)
- [name](chat_v1.Schema_Card.md#name)
- [sections](chat_v1.Schema_Card.md#sections)

## Properties

### cardActions

• `Optional` **cardActions**: [`Schema$CardAction`](chat_v1.Schema_CardAction.md)[]

The actions of this card.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:211

___

### header

• `Optional` **header**: [`Schema$CardHeader`](chat_v1.Schema_CardHeader.md)

The header of the card. A header usually contains a title and an image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:215

___

### name

• `Optional` **name**: ``null`` \| `string`

Name of the card.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:219

___

### sections

• `Optional` **sections**: [`Schema$Section`](chat_v1.Schema_Section.md)[]

Sections are separated by a line divider.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:223
