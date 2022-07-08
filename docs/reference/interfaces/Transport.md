[Google Chat SDK](../README.md) / Transport

# Interface: Transport

## Hierarchy

- `PublicEmitterMethods`

  ↳ **`Transport`**

## Table of contents

### Methods

- [clearListeners](Transport.md#clearlisteners)
- [off](Transport.md#off)
- [on](Transport.md#on)
- [sendAsync](Transport.md#sendasync)
- [start](Transport.md#start)
- [stop](Transport.md#stop)
- [updateAsync](Transport.md#updateasync)

## Methods

### clearListeners

▸ **clearListeners**(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | keyof [`TransportEvents`](TransportEvents.md) |

#### Returns

`void`

#### Inherited from

PublicEmitterMethods.clearListeners

#### Defined in

node_modules/emittery/index.d.ts:386

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
| `Name` | extends keyof [`TransportEvents`](TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`TransportEvents`](TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

PublicEmitterMethods.off

#### Defined in

node_modules/emittery/index.d.ts:266

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
| `Name` | extends keyof [`TransportEvents`](TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`TransportEvents`](TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

An unsubscribe method.

#### Inherited from

PublicEmitterMethods.on

#### Defined in

node_modules/emittery/index.d.ts:151

___

### sendAsync

▸ **sendAsync**(`spaceName`, `message`, `options?`): `Promise`<[`Schema$Message`](chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceName` | `string` |
| `message` | [`Schema$Message`](chat_v1.Schema_Message.md) |
| `options?` | `Partial`<[`SendOptions`](SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/transport/index.ts:69](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L69)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:67](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L67)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/transport/index.ts:68](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L68)

___

### updateAsync

▸ **updateAsync**(`messageName`, `message`, `options?`): `Promise`<[`Schema$Message`](chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageName` | `string` |
| `message` | `Partial`<[`Schema$Message`](chat_v1.Schema_Message.md)\> |
| `options?` | `Partial`<[`SendOptions`](SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/transport/index.ts:74](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L74)
