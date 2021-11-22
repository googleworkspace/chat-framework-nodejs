[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / FormInputValue

# Class: FormInputValue

[@google/chat-sdk](../modules/google_chat_sdk.md).FormInputValue

Wraps a form input value to provide easier parsing and type coercion

## Table of contents

### Constructors

- [constructor](google_chat_sdk.FormInputValue.md#constructor)

### Accessors

- [exists](google_chat_sdk.FormInputValue.md#exists)

### Methods

- [asNumber](google_chat_sdk.FormInputValue.md#asnumber)
- [asNumberArray](google_chat_sdk.FormInputValue.md#asnumberarray)
- [asString](google_chat_sdk.FormInputValue.md#asstring)
- [asStringArray](google_chat_sdk.FormInputValue.md#asstringarray)

## Constructors

### constructor

• **new FormInputValue**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Schema$Inputs`](../interfaces/google_chat_sdk.chat_v1.Schema_Inputs.md) |

#### Defined in

[packages/core/src/form.ts:23](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L23)

## Accessors

### exists

• `get` **exists**(): `boolean`

Whether or not the field is present.

#### Returns

`boolean`

#### Defined in

[packages/core/src/form.ts:28](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L28)

## Methods

### asNumber

▸ **asNumber**(`defaultValue?`): `undefined` \| `number`

Gets the value as a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue?` | `number` | value to return if not present |

#### Returns

`undefined` \| `number`

value

#### Defined in

[packages/core/src/form.ts:70](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L70)

___

### asNumberArray

▸ **asNumberArray**(`defaultValue?`): `undefined` \| `number`[]

Gets the value as a number array (if input supports multiple values.)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue?` | `number`[] | value to return if not present |

#### Returns

`undefined` \| `number`[]

value

#### Defined in

[packages/core/src/form.ts:90](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L90)

___

### asString

▸ **asString**(`defaultValue?`): `undefined` \| `string`

Gets the value as a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue?` | `string` | value to return if not present |

#### Returns

`undefined` \| `string`

value

#### Defined in

[packages/core/src/form.ts:38](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L38)

___

### asStringArray

▸ **asStringArray**(`defaultValue?`): `undefined` \| `string`[]

Gets the value as a string array (if input supports multiple values).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue?` | `string`[] | value to return if not present |

#### Returns

`undefined` \| `string`[]

value

#### Defined in

[packages/core/src/form.ts:54](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/form.ts#L54)
