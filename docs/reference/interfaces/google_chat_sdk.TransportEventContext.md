[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / TransportEventContext

# Interface: TransportEventContext

[@google/chat-sdk](../modules/google_chat_sdk.md).TransportEventContext

Wrapper event for events received by a transport.

## Table of contents

### Properties

- [event](google_chat_sdk.TransportEventContext.md#event)

### Methods

- [ack](google_chat_sdk.TransportEventContext.md#ack)
- [reply](google_chat_sdk.TransportEventContext.md#reply)

## Properties

### event

• `Readonly` **event**: [`Schema$DeprecatedEvent`](google_chat_sdk.chat_v1.Schema_DeprecatedEvent.md)

Event message from chat

#### Defined in

[packages/core/src/transport/index.ts:42](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L42)

## Methods

### ack

▸ **ack**(): `void`

Ack receipt when no reply is being sent.

#### Returns

`void`

#### Defined in

[packages/core/src/transport/index.ts:44](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L44)

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

Send a message as a reply

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](google_chat_sdk.chat_v1.Schema_Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:46](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L46)
