[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1GridItem

# Interface: Schema$GoogleAppsCardV1GridItem

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1GridItem

Represents a single item in the grid layout.

## Table of contents

### Properties

- [id](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#id)
- [image](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#image)
- [layout](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#layout)
- [subtitle](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#subtitle)
- [textAlignment](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#textalignment)
- [title](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1GridItem.md#title)

## Properties

### id

• `Optional` **id**: ``null`` \| `string`

A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:702

___

### image

• `Optional` **image**: [`Schema$GoogleAppsCardV1ImageComponent`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1ImageComponent.md)

The image that displays in the grid item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:706

___

### layout

• `Optional` **layout**: ``null`` \| `string`

The layout to use for the grid item.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:710

___

### subtitle

• `Optional` **subtitle**: ``null`` \| `string`

The grid item's subtitle.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:714

___

### textAlignment

• `Optional` **textAlignment**: ``null`` \| `string`

The horizontal alignment of the grid item's text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:718

___

### title

• `Optional` **title**: ``null`` \| `string`

The grid item's title.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:722
