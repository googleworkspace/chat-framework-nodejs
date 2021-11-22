[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$KeyValue

# Interface: Schema$KeyValue

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$KeyValue

A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.

## Table of contents

### Properties

- [bottomLabel](google_chat_sdk.chat_v1.Schema_KeyValue.md#bottomlabel)
- [button](google_chat_sdk.chat_v1.Schema_KeyValue.md#button)
- [content](google_chat_sdk.chat_v1.Schema_KeyValue.md#content)
- [contentMultiline](google_chat_sdk.chat_v1.Schema_KeyValue.md#contentmultiline)
- [icon](google_chat_sdk.chat_v1.Schema_KeyValue.md#icon)
- [iconUrl](google_chat_sdk.chat_v1.Schema_KeyValue.md#iconurl)
- [onClick](google_chat_sdk.chat_v1.Schema_KeyValue.md#onclick)
- [topLabel](google_chat_sdk.chat_v1.Schema_KeyValue.md#toplabel)

## Properties

### bottomLabel

• `Optional` **bottomLabel**: ``null`` \| `string`

The text of the bottom label. Formatted text supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1052

___

### button

• `Optional` **button**: [`Schema$Button`](google_chat_sdk.chat_v1.Schema_Button.md)

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

• `Optional` **onClick**: [`Schema$OnClick`](google_chat_sdk.chat_v1.Schema_OnClick.md)

The onclick action. Only the top label, bottom label and content region are clickable.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1076

___

### topLabel

• `Optional` **topLabel**: ``null`` \| `string`

The text of the top label. Formatted text supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1080
