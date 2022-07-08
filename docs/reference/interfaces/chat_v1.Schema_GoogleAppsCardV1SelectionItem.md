[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1SelectionItem

# Interface: Schema$GoogleAppsCardV1SelectionItem

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1SelectionItem

The item in the switch control. A radio button, at most one of the items is selected.

## Table of contents

### Properties

- [selected](chat_v1.Schema_GoogleAppsCardV1SelectionItem.md#selected)
- [text](chat_v1.Schema_GoogleAppsCardV1SelectionItem.md#text)
- [value](chat_v1.Schema_GoogleAppsCardV1SelectionItem.md#value)

## Properties

### selected

• `Optional` **selected**: ``null`` \| `boolean`

If more than one item is selected for `RADIO_BUTTON` and `DROPDOWN`, the first selected item is treated as selected and the ones after are ignored.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:860

___

### text

• `Optional` **text**: ``null`` \| `string`

The text to be displayed.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:864

___

### value

• `Optional` **value**: ``null`` \| `string`

The value associated with this item. The client should use this as a form input value.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:868
