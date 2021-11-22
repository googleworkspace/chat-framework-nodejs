[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$WidgetMarkup

# Interface: Schema$WidgetMarkup

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$WidgetMarkup

A widget is a UI element that presents texts, images, etc.

## Table of contents

### Properties

- [buttons](google_chat_sdk.chat_v1.Schema_WidgetMarkup.md#buttons)
- [image](google_chat_sdk.chat_v1.Schema_WidgetMarkup.md#image)
- [keyValue](google_chat_sdk.chat_v1.Schema_WidgetMarkup.md#keyvalue)
- [textParagraph](google_chat_sdk.chat_v1.Schema_WidgetMarkup.md#textparagraph)

## Properties

### buttons

• `Optional` **buttons**: [`Schema$Button`](google_chat_sdk.chat_v1.Schema_Button.md)[]

A list of buttons. Buttons is also oneof data and only one of these fields should be set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1378

___

### image

• `Optional` **image**: [`Schema$Image`](google_chat_sdk.chat_v1.Schema_Image.md)

Display an image in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1382

___

### keyValue

• `Optional` **keyValue**: [`Schema$KeyValue`](google_chat_sdk.chat_v1.Schema_KeyValue.md)

Display a key value item in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1386

___

### textParagraph

• `Optional` **textParagraph**: [`Schema$TextParagraph`](google_chat_sdk.chat_v1.Schema_TextParagraph.md)

Display a text paragraph in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1390
