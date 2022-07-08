[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1DecoratedText

# Interface: Schema$GoogleAppsCardV1DecoratedText

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1DecoratedText

A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.

## Table of contents

### Properties

- [bottomLabel](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#bottomlabel)
- [button](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#button)
- [endIcon](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#endicon)
- [icon](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#icon)
- [onClick](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#onclick)
- [startIcon](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#starticon)
- [switchControl](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#switchcontrol)
- [text](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#text)
- [topLabel](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#toplabel)
- [wrapText](chat_v1.Schema_GoogleAppsCardV1DecoratedText.md#wraptext)

## Properties

### bottomLabel

• `Optional` **bottomLabel**: ``null`` \| `string`

The formatted text label that shows below the main text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:627

___

### button

• `Optional` **button**: [`Schema$GoogleAppsCardV1Button`](chat_v1.Schema_GoogleAppsCardV1Button.md)

A button that can be clicked to trigger an action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:631

___

### endIcon

• `Optional` **endIcon**: [`Schema$GoogleAppsCardV1Icon`](chat_v1.Schema_GoogleAppsCardV1Icon.md)

An icon displayed after the text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:635

___

### icon

• `Optional` **icon**: [`Schema$GoogleAppsCardV1Icon`](chat_v1.Schema_GoogleAppsCardV1Icon.md)

Deprecated in favor of start_icon.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:639

___

### onClick

• `Optional` **onClick**: [`Schema$GoogleAppsCardV1OnClick`](chat_v1.Schema_GoogleAppsCardV1OnClick.md)

Only the top and bottom label and content region are clickable.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:643

___

### startIcon

• `Optional` **startIcon**: [`Schema$GoogleAppsCardV1Icon`](chat_v1.Schema_GoogleAppsCardV1Icon.md)

The icon displayed in front of the text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:647

___

### switchControl

• `Optional` **switchControl**: [`Schema$GoogleAppsCardV1SwitchControl`](chat_v1.Schema_GoogleAppsCardV1SwitchControl.md)

A switch widget can be clicked to change its state or trigger an action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:651

___

### text

• `Optional` **text**: ``null`` \| `string`

Required. The main widget formatted text. See Text formatting for details.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:655

___

### topLabel

• `Optional` **topLabel**: ``null`` \| `string`

The formatted text label that shows above the main text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:659

___

### wrapText

• `Optional` **wrapText**: ``null`` \| `boolean`

The wrap text setting. If `true`, the text is wrapped and displayed in multiline. Otherwise, the text is truncated.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:663
