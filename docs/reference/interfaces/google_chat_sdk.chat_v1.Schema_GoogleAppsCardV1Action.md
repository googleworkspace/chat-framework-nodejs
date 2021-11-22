[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1Action

# Interface: Schema$GoogleAppsCardV1Action

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1Action

An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.

## Table of contents

### Properties

- [function](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md#function)
- [loadIndicator](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md#loadindicator)
- [parameters](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md#parameters)
- [persistValues](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md#persistvalues)

## Properties

### function

• `Optional` **function**: ``null`` \| `string`

Apps Script function to invoke when the containing element is clicked/activated.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:434

___

### loadIndicator

• `Optional` **loadIndicator**: ``null`` \| `string`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:435

___

### parameters

• `Optional` **parameters**: [`Schema$GoogleAppsCardV1ActionParameter`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1ActionParameter.md)[]

List of action parameters.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:439

___

### persistValues

• `Optional` **persistValues**: ``null`` \| `boolean`

Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. When using [LoadIndicator.NONE](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for actions, `persist_values` = `true`is recommended, as it ensures that any changes made by the user after form or on change actions are sent to the server are not overwritten by the response. If `false`, the form values are cleared when the action is triggered. When `persist_values` is set to `false`, it is strongly recommended that the card use [LoadIndicator.SPINNER](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for all actions, as this locks the UI to ensure no changes are made by the user while the action is being processed.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:443
