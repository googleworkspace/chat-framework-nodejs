[Google Chat SDK](../README.md) / FormInputs

# Class: FormInputs

Utility class for working with form inputs.

## Table of contents

### Constructors

- [constructor](FormInputs.md#constructor)

### Methods

- [get](FormInputs.md#get)

## Constructors

### constructor

• **new FormInputs**(`inputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs?` | `Record`<`string`, [`Schema$Inputs`](../interfaces/chat_v1.Schema_Inputs.md)\> |

#### Defined in

[packages/core/src/form.ts:109](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L109)

## Methods

### get

▸ **get**(`key`): [`FormInputValue`](FormInputValue.md)

Fetches an input value. Note that this will always return an object, even if the field
is not present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`FormInputValue`](FormInputValue.md)

#### Defined in

[packages/core/src/form.ts:119](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L119)
