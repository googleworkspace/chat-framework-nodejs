[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$WidgetMarkup

# Interface: Schema$WidgetMarkup

[chat_v1](../modules/chat_v1.md).Schema$WidgetMarkup

A widget is a UI element that presents texts, images, etc.

## Table of contents

### Properties

- [buttons](chat_v1.Schema_WidgetMarkup.md#buttons)
- [image](chat_v1.Schema_WidgetMarkup.md#image)
- [keyValue](chat_v1.Schema_WidgetMarkup.md#keyvalue)
- [textParagraph](chat_v1.Schema_WidgetMarkup.md#textparagraph)

## Properties

### buttons

• `Optional` **buttons**: [`Schema$Button`](chat_v1.Schema_Button.md)[]

A list of buttons. Buttons is also oneof data and only one of these fields should be set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1378

___

### image

• `Optional` **image**: [`Schema$Image`](chat_v1.Schema_Image.md)

Display an image in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1382

___

### keyValue

• `Optional` **keyValue**: [`Schema$KeyValue`](chat_v1.Schema_KeyValue.md)

Display a key value item in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1386

___

### textParagraph

• `Optional` **textParagraph**: [`Schema$TextParagraph`](chat_v1.Schema_TextParagraph.md)

Display a text paragraph in this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1390
