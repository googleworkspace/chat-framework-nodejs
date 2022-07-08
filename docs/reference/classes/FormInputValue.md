[Google Chat SDK](../README.md) / FormInputValue

# Class: FormInputValue

Wraps a form input value to provide easier parsing and type coercion

## Table of contents

### Constructors

- [constructor](FormInputValue.md#constructor)

### Accessors

- [exists](FormInputValue.md#exists)

### Methods

- [asNumber](FormInputValue.md#asnumber)
- [asNumberArray](FormInputValue.md#asnumberarray)
- [asString](FormInputValue.md#asstring)
- [asStringArray](FormInputValue.md#asstringarray)

## Constructors

### constructor

• **new FormInputValue**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Schema$Inputs`](../interfaces/chat_v1.Schema_Inputs.md) |

#### Defined in

[packages/core/src/form.ts:23](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L23)

## Accessors

### exists

• `get` **exists**(): `boolean`

Whether or not the field is present.

#### Returns

`boolean`

#### Defined in

[packages/core/src/form.ts:28](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L28)

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

[packages/core/src/form.ts:70](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L70)

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

[packages/core/src/form.ts:90](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L90)

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

[packages/core/src/form.ts:38](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L38)

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

[packages/core/src/form.ts:54](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/form.ts#L54)
