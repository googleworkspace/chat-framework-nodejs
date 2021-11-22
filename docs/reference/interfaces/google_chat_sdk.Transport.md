[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / Transport

# Interface: Transport

[@google/chat-sdk](../modules/google_chat_sdk.md).Transport

## Hierarchy

- `PublicEmitterMethods`

  ↳ **`Transport`**

## Table of contents

### Methods

- [clearListeners](google_chat_sdk.Transport.md#clearlisteners)
- [off](google_chat_sdk.Transport.md#off)
- [on](google_chat_sdk.Transport.md#on)
- [sendAsync](google_chat_sdk.Transport.md#sendasync)
- [start](google_chat_sdk.Transport.md#start)
- [stop](google_chat_sdk.Transport.md#stop)

## Methods

### clearListeners

▸ **clearListeners**<`Name`\>(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](google_chat_sdk.TransportEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`void`

#### Inherited from

PublicEmitterMethods.clearListeners

#### Defined in

packages/core/node_modules/emittery/index.d.ts:551

___

### off

▸ **off**<`Name`\>(`eventName`, `listener`): `void`

Remove one or more event subscriptions.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();

const listener = data => console.log(data);
(async () => {
emitter.on(['🦄', '🐶', '🦊'], listener);
await emitter.emit('🦄', 'a');
await emitter.emit('🐶', 'b');
await emitter.emit('🦊', 'c');
emitter.off('🦄', listener);
emitter.off(['🐶', '🦊'], listener);
await emitter.emit('🦄', 'a'); // nothing happens
await emitter.emit('🐶', 'b'); // nothing happens
await emitter.emit('🦊', 'c'); // nothing happens
})();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](google_chat_sdk.TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` \| `Name`[] |
| `listener` | (`eventData`: [`TransportEvents`](google_chat_sdk.TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

PublicEmitterMethods.off

#### Defined in

packages/core/node_modules/emittery/index.d.ts:430

___

### on

▸ **on**<`Name`\>(`eventName`, `listener`): `UnsubscribeFn`

Subscribe to one or more events.

Using the same listener multiple times for the same event will result in only one method call per emitted event.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();

emitter.on('🦄', data => {
console.log(data);
});

emitter.on(['🦄', '🐶'], data => {
console.log(data);
});

emitter.emit('🦄', '🌈'); // log => '🌈' x2
emitter.emit('🐶', '🍖'); // log => '🍖'
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](google_chat_sdk.TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` \| `Name`[] |
| `listener` | (`eventData`: [`TransportEvents`](google_chat_sdk.TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

An unsubscribe method.

#### Inherited from

PublicEmitterMethods.on

#### Defined in

packages/core/node_modules/emittery/index.d.ts:315

___

### sendAsync

▸ **sendAsync**(`spaceName`, `message`, `options?`): `Promise`<[`Schema$Message`](google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceName` | `string` |
| `message` | [`Schema$Message`](google_chat_sdk.chat_v1.Schema_Message.md) |
| `options?` | `Partial`<[`SendOptions`](google_chat_sdk.SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/transport/index.ts:57](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L57)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:55](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L55)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:56](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/index.ts#L56)
