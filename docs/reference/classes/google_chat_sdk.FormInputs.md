[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / FormInputs

# Class: FormInputs

[@google/chat-sdk](../modules/google_chat_sdk.md).FormInputs

Utility class for working with form inputs.

## Table of contents

### Constructors

- [constructor](google_chat_sdk.FormInputs.md#constructor)

### Methods

- [get](google_chat_sdk.FormInputs.md#get)

## Constructors

### constructor

• **new FormInputs**(`inputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs?` | `Record`<`string`, [`Schema$Inputs`](../interfaces/google_chat_sdk.chat_v1.Schema_Inputs.md)\> |

#### Defined in

[packages/core/src/form.ts:109](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L109)

## Methods

### get

▸ **get**(`key`): [`FormInputValue`](google_chat_sdk.FormInputValue.md)

Fetches an input value. Note that this will always return an object, even if the field
is not present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`FormInputValue`](google_chat_sdk.FormInputValue.md)

#### Defined in

[packages/core/src/form.ts:119](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L119)
