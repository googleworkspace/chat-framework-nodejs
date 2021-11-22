[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1Button

# Interface: Schema$GoogleAppsCardV1Button

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1Button

A button. Can be a text button or an image button.

## Table of contents

### Properties

- [altText](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#alttext)
- [color](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#color)
- [disabled](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#disabled)
- [icon](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#icon)
- [onClick](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#onclick)
- [text](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md#text)

## Properties

### altText

• `Optional` **altText**: ``null`` \| `string`

The alternative text used for accessibility. Has no effect when an icon is set; use `icon.alt_text` instead.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:482

___

### color

• `Optional` **color**: [`Schema$Color`](google_chat_sdk.chat_v1.Schema_Color.md)

If set, the button is filled with a solid background.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:486

___

### disabled

• `Optional` **disabled**: ``null`` \| `boolean`

If true, the button is displayed in a disabled state and doesn't respond to user actions.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:490

___

### icon

• `Optional` **icon**: [`Schema$GoogleAppsCardV1Icon`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Icon.md)

The icon image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:494

___

### onClick

• `Optional` **onClick**: [`Schema$GoogleAppsCardV1OnClick`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1OnClick.md)

The action to perform when the button is clicked.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:498

___

### text

• `Optional` **text**: ``null`` \| `string`

The text of the button.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:502
