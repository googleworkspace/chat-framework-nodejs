[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1Section

# Interface: Schema$GoogleAppsCardV1Section

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1Section

A section contains a collection of widgets that are rendered vertically in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties, for example, float.

## Table of contents

### Properties

- [collapsible](chat_v1.Schema_GoogleAppsCardV1Section.md#collapsible)
- [header](chat_v1.Schema_GoogleAppsCardV1Section.md#header)
- [uncollapsibleWidgetsCount](chat_v1.Schema_GoogleAppsCardV1Section.md#uncollapsiblewidgetscount)
- [widgets](chat_v1.Schema_GoogleAppsCardV1Section.md#widgets)

## Properties

### collapsible

• `Optional` **collapsible**: ``null`` \| `boolean`

Indicates whether this section is collapsible. If a section is collapsible, the description must be given.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:820

___

### header

• `Optional` **header**: ``null`` \| `string`

The header of the section. Formatted text is supported.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:824

___

### uncollapsibleWidgetsCount

• `Optional` **uncollapsibleWidgetsCount**: ``null`` \| `number`

The number of uncollapsible widgets. For example, when a section contains five widgets and the `numUncollapsibleWidget` is set to `2`, the first two widgets are always shown and the last three are collapsed as default. The `numUncollapsibleWidget` is taken into account only when collapsible is set to `true`.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:828

___

### widgets

• `Optional` **widgets**: [`Schema$GoogleAppsCardV1Widget`](chat_v1.Schema_GoogleAppsCardV1Widget.md)[]

A section must contain at least 1 widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:832
