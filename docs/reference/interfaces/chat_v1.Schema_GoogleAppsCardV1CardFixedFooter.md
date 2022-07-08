[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1CardFixedFooter

# Interface: Schema$GoogleAppsCardV1CardFixedFooter

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1CardFixedFooter

A persistent (sticky) footer that is added to the bottom of the card.

## Table of contents

### Properties

- [primaryButton](chat_v1.Schema_GoogleAppsCardV1CardFixedFooter.md#primarybutton)
- [secondaryButton](chat_v1.Schema_GoogleAppsCardV1CardFixedFooter.md#secondarybutton)

## Properties

### primaryButton

• `Optional` **primaryButton**: [`Schema$GoogleAppsCardV1Button`](chat_v1.Schema_GoogleAppsCardV1Button.md)

The primary button of the fixed footer. The button must be a text button with text and color set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:563

___

### secondaryButton

• `Optional` **secondaryButton**: [`Schema$GoogleAppsCardV1Button`](chat_v1.Schema_GoogleAppsCardV1Button.md)

The secondary button of the fixed footer. The button must be a text button with text and color set. `primaryButton` must be set if `secondaryButton` is set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:567
