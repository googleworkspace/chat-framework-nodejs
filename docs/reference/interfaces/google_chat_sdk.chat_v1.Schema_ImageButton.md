[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$ImageButton

# Interface: Schema$ImageButton

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$ImageButton

An image button with an onclick action.

## Table of contents

### Properties

- [icon](google_chat_sdk.chat_v1.Schema_ImageButton.md#icon)
- [iconUrl](google_chat_sdk.chat_v1.Schema_ImageButton.md#iconurl)
- [name](google_chat_sdk.chat_v1.Schema_ImageButton.md#name)
- [onClick](google_chat_sdk.chat_v1.Schema_ImageButton.md#onclick)

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

• `Optional` **onClick**: [`Schema$OnClick`](google_chat_sdk.chat_v1.Schema_OnClick.md)

The onclick action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1034
