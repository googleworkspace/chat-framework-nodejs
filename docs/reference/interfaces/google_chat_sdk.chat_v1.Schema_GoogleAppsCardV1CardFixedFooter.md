[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1CardFixedFooter

# Interface: Schema$GoogleAppsCardV1CardFixedFooter

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1CardFixedFooter

A persistent (sticky) footer that is added to the bottom of the card.

## Table of contents

### Properties

- [primaryButton](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardFixedFooter.md#primarybutton)
- [secondaryButton](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardFixedFooter.md#secondarybutton)

## Properties

### primaryButton

• `Optional` **primaryButton**: [`Schema$GoogleAppsCardV1Button`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md)

The primary button of the fixed footer. The button must be a text button with text and color set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:563

___

### secondaryButton

• `Optional` **secondaryButton**: [`Schema$GoogleAppsCardV1Button`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Button.md)

The secondary button of the fixed footer. The button must be a text button with text and color set. `primaryButton` must be set if `secondaryButton` is set.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:567
