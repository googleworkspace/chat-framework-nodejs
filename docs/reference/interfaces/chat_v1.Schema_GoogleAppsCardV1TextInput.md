[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1TextInput

# Interface: Schema$GoogleAppsCardV1TextInput

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1TextInput

A text input is a UI item where users can input text. A text input can also have an onChange action and suggestions.

## Table of contents

### Properties

- [autoCompleteAction](chat_v1.Schema_GoogleAppsCardV1TextInput.md#autocompleteaction)
- [hintText](chat_v1.Schema_GoogleAppsCardV1TextInput.md#hinttext)
- [initialSuggestions](chat_v1.Schema_GoogleAppsCardV1TextInput.md#initialsuggestions)
- [label](chat_v1.Schema_GoogleAppsCardV1TextInput.md#label)
- [name](chat_v1.Schema_GoogleAppsCardV1TextInput.md#name)
- [onChangeAction](chat_v1.Schema_GoogleAppsCardV1TextInput.md#onchangeaction)
- [type](chat_v1.Schema_GoogleAppsCardV1TextInput.md#type)
- [value](chat_v1.Schema_GoogleAppsCardV1TextInput.md#value)

## Properties

### autoCompleteAction

• `Optional` **autoCompleteAction**: [`Schema$GoogleAppsCardV1Action`](chat_v1.Schema_GoogleAppsCardV1Action.md)

The refresh function that returns suggestions based on the user's input text. If the callback is not specified, autocomplete is done in client side based on the initial suggestion items.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:914

___

### hintText

• `Optional` **hintText**: ``null`` \| `string`

The hint text.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:918

___

### initialSuggestions

• `Optional` **initialSuggestions**: [`Schema$GoogleAppsCardV1Suggestions`](chat_v1.Schema_GoogleAppsCardV1Suggestions.md)

The initial suggestions made before any user input.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:922

___

### label

• `Optional` **label**: ``null`` \| `string`

At least one of label and hintText must be specified.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:926

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of the text input which is used in formInput.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:930

___

### onChangeAction

• `Optional` **onChangeAction**: [`Schema$GoogleAppsCardV1Action`](chat_v1.Schema_GoogleAppsCardV1Action.md)

The onChange action, for example, invoke a function.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:934

___

### type

• `Optional` **type**: ``null`` \| `string`

The style of the text, for example, a single line or multiple lines.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:938

___

### value

• `Optional` **value**: ``null`` \| `string`

The default value when there is no input from the user.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:942
