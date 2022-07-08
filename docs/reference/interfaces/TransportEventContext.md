[Google Chat SDK](../README.md) / TransportEventContext

# Interface: TransportEventContext

Wrapper event for events received by a transport.

## Table of contents

### Properties

- [event](TransportEventContext.md#event)

### Methods

- [ack](TransportEventContext.md#ack)
- [reply](TransportEventContext.md#reply)

## Properties

### event

• `Readonly` **event**: [`Schema$DeprecatedEvent`](chat_v1.Schema_DeprecatedEvent.md)

Event message from chat

#### Defined in

[packages/core/src/transport/index.ts:54](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L54)

## Methods

### ack

▸ **ack**(): `void`

Ack receipt when no reply is being sent.

#### Returns

`void`

#### Defined in

[packages/core/src/transport/index.ts:56](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L56)

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

Send a message as a reply

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](chat_v1.Schema_Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:58](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L58)
