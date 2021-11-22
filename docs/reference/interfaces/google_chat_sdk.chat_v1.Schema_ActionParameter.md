[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$ActionParameter

# Interface: Schema$ActionParameter

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.

## Table of contents

### Properties

- [key](google_chat_sdk.chat_v1.Schema_ActionParameter.md#key)
- [value](google_chat_sdk.chat_v1.Schema_ActionParameter.md#value)

## Properties

### key

• `Optional` **key**: ``null`` \| `string`

The name of the parameter for the action script.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:84

___

### value

• `Optional` **value**: ``null`` \| `string`

The value of the parameter.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:88
