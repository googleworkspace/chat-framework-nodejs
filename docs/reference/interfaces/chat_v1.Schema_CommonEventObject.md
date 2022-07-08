[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$CommonEventObject

# Interface: Schema$CommonEventObject

[chat_v1](../modules/chat_v1.md).Schema$CommonEventObject

Next available ID = 8

## Table of contents

### Properties

- [formInputs](chat_v1.Schema_CommonEventObject.md#forminputs)
- [hostApp](chat_v1.Schema_CommonEventObject.md#hostapp)
- [invokedFunction](chat_v1.Schema_CommonEventObject.md#invokedfunction)
- [parameters](chat_v1.Schema_CommonEventObject.md#parameters)
- [platform](chat_v1.Schema_CommonEventObject.md#platform)
- [timeZone](chat_v1.Schema_CommonEventObject.md#timezone)
- [userLocale](chat_v1.Schema_CommonEventObject.md#userlocale)

## Properties

### formInputs

• `Optional` **formInputs**: ``null`` \| { `[key: string]`: [`Schema$Inputs`](chat_v1.Schema_Inputs.md);  }

The keys are the string IDs associated with the widget and the values are inputs with a widget in the card.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:284

___

### hostApp

• `Optional` **hostApp**: ``null`` \| `string`

The hostApp enum which indicates the app the add-on is invoked from

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:290

___

### invokedFunction

• `Optional` **invokedFunction**: ``null`` \| `string`

Name of the invoked function associated with the widget. This field is currently only set for chat.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:294

___

### parameters

• `Optional` **parameters**: ``null`` \| { `[key: string]`: `string`;  }

Any additional parameters.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:298

___

### platform

• `Optional` **platform**: ``null`` \| `string`

The platform enum which indicates the platform where the add-on is running.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:304

___

### timeZone

• `Optional` **timeZone**: [`Schema$TimeZone`](chat_v1.Schema_TimeZone.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:305

___

### userLocale

• `Optional` **userLocale**: ``null`` \| `string`

The full locale.displayName in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US"

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:309
