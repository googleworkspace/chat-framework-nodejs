[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$FormAction

# Interface: Schema$FormAction

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$FormAction

A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.

## Table of contents

### Properties

- [actionMethodName](google_chat_sdk.chat_v1.Schema_FormAction.md#actionmethodname)
- [parameters](google_chat_sdk.chat_v1.Schema_FormAction.md#parameters)

## Properties

### actionMethodName

• `Optional` **actionMethodName**: ``null`` \| `string`

The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the bot as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:421

___

### parameters

• `Optional` **parameters**: [`Schema$ActionParameter`](google_chat_sdk.chat_v1.Schema_ActionParameter.md)[]

List of action parameters.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:425
