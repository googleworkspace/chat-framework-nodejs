[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$ImageButton

# Interface: Schema$ImageButton

[chat_v1](../modules/chat_v1.md).Schema$ImageButton

An image button with an onclick action.

## Table of contents

### Properties

- [icon](chat_v1.Schema_ImageButton.md#icon)
- [iconUrl](chat_v1.Schema_ImageButton.md#iconurl)
- [name](chat_v1.Schema_ImageButton.md#name)
- [onClick](chat_v1.Schema_ImageButton.md#onclick)

## Properties

### icon

• `Optional` **icon**: ``null`` \| `string`

The icon specified by an enum that indices to an icon provided by Chat API.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1022

___

### iconUrl

• `Optional` **iconUrl**: ``null`` \| `string`

The icon specified by a URL.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1026

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1030

___

### onClick

• `Optional` **onClick**: [`Schema$OnClick`](chat_v1.Schema_OnClick.md)

The onclick action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1034
