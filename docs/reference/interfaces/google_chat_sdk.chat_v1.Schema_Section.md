[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$Section

# Interface: Schema$Section

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$Section

A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).

## Table of contents

### Properties

- [header](google_chat_sdk.chat_v1.Schema_Section.md#header)
- [widgets](google_chat_sdk.chat_v1.Schema_Section.md#widgets)

## Properties

### header

• `Optional` **header**: ``null`` \| `string`

The header of the section, text formatted supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1220

___

### widgets

• `Optional` **widgets**: [`Schema$WidgetMarkup`](google_chat_sdk.chat_v1.Schema_WidgetMarkup.md)[]

A section must contain at least 1 widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1224
