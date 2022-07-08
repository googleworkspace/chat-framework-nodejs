[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$GoogleAppsCardV1DateTimePicker

# Interface: Schema$GoogleAppsCardV1DateTimePicker

[chat_v1](../modules/chat_v1.md).Schema$GoogleAppsCardV1DateTimePicker

The widget that lets users to specify a date and time.

## Table of contents

### Properties

- [label](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#label)
- [name](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#name)
- [onChangeAction](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#onchangeaction)
- [timezoneOffsetDate](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#timezoneoffsetdate)
- [type](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#type)
- [valueMsEpoch](chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md#valuemsepoch)

## Properties

### label

• `Optional` **label**: ``null`` \| `string`

The label for the field that displays to the user.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:598

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of the text input that's used in formInput, and uniquely identifies this input.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:602

___

### onChangeAction

• `Optional` **onChangeAction**: [`Schema$GoogleAppsCardV1Action`](chat_v1.Schema_GoogleAppsCardV1Action.md)

Triggered when the user clicks Save or Clear from the date/time picker dialog. This is only triggered if the value changed as a result of the Save/Clear operation.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:606

___

### timezoneOffsetDate

• `Optional` **timezoneOffsetDate**: ``null`` \| `number`

The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:610

___

### type

• `Optional` **type**: ``null`` \| `string`

The type of the date/time picker.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:614

___

### valueMsEpoch

• `Optional` **valueMsEpoch**: ``null`` \| `string`

The value to display as the default value before user input or previous user input. It is represented in milliseconds (Epoch time). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, you can set epoch time to `3 * 60 * 60 * 1000` to represent 3am.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:618
