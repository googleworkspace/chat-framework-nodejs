[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1SwitchControl

# Interface: Schema$GoogleAppsCardV1SwitchControl

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1SwitchControl

## Table of contents

### Properties

- [controlType](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SwitchControl.md#controltype)
- [name](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SwitchControl.md#name)
- [onChangeAction](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SwitchControl.md#onchangeaction)
- [selected](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SwitchControl.md#selected)
- [value](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SwitchControl.md#value)

## Properties

### controlType

• `Optional` **controlType**: ``null`` \| `string`

The control type, either switch or checkbox.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:889

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of the switch widget that's used in formInput.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:893

___

### onChangeAction

• `Optional` **onChangeAction**: [`Schema$GoogleAppsCardV1Action`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Action.md)

The action when the switch state is changed.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:897

___

### selected

• `Optional` **selected**: ``null`` \| `boolean`

If the switch is selected.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:901

___

### value

• `Optional` **value**: ``null`` \| `string`

The value is what is passed back in the callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:905
