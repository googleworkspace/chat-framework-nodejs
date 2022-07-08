[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1ActionParameter

# Interface: Schema$GoogleAppsCardV1ActionParameter

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.

## Table of contents

### Properties

- [key](chat_v1.Schema_GoogleAppsCardV1ActionParameter.md#key)
- [value](chat_v1.Schema_GoogleAppsCardV1ActionParameter.md#value)

## Properties

### key

• `Optional` **key**: ``null`` \| `string`

The name of the parameter for the action script.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:452

___

### value

• `Optional` **value**: ``null`` \| `string`

The value of the parameter.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:456
