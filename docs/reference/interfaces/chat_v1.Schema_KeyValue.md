[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$KeyValue

# Interface: Schema$KeyValue

[chat_v1](../modules/chat_v1.md).Schema$KeyValue

A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.

## Table of contents

### Properties

- [bottomLabel](chat_v1.Schema_KeyValue.md#bottomlabel)
- [button](chat_v1.Schema_KeyValue.md#button)
- [content](chat_v1.Schema_KeyValue.md#content)
- [contentMultiline](chat_v1.Schema_KeyValue.md#contentmultiline)
- [icon](chat_v1.Schema_KeyValue.md#icon)
- [iconUrl](chat_v1.Schema_KeyValue.md#iconurl)
- [onClick](chat_v1.Schema_KeyValue.md#onclick)
- [topLabel](chat_v1.Schema_KeyValue.md#toplabel)

## Properties

### bottomLabel

• `Optional` **bottomLabel**: ``null`` \| `string`

The text of the bottom label. Formatted text supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1052

___

### button

• `Optional` **button**: [`Schema$Button`](chat_v1.Schema_Button.md)

A button that can be clicked to trigger an action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1056

___

### content

• `Optional` **content**: ``null`` \| `string`

The text of the content. Formatted text supported and always required.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1060

___

### contentMultiline

• `Optional` **contentMultiline**: ``null`` \| `boolean`

If the content should be multiline.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1064

___

### icon

• `Optional` **icon**: ``null`` \| `string`

An enum value that will be replaced by the Chat API with the corresponding icon image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1068

___

### iconUrl

• `Optional` **iconUrl**: ``null`` \| `string`

The icon specified by a URL.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1072

___

### onClick

• `Optional` **onClick**: [`Schema$OnClick`](chat_v1.Schema_OnClick.md)

The onclick action. Only the top label, bottom label and content region are clickable.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1076

___

### topLabel

• `Optional` **topLabel**: ``null`` \| `string`

The text of the top label. Formatted text supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1080
