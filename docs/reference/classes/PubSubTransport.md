[Google Chat SDK](../README.md) / PubSubTransport

# Class: PubSubTransport

Pubsub-based implementation of transport.

## Hierarchy

- `BaseTransport`

  ↳ **`PubSubTransport`**

## Table of contents

### Constructors

- [constructor](PubSubTransport.md#constructor)

### Properties

- [auth](PubSubTransport.md#auth)
- [listenerAdded](PubSubTransport.md#listeneradded)
- [listenerRemoved](PubSubTransport.md#listenerremoved)

### Methods

- [anyEvent](PubSubTransport.md#anyevent)
- [bindMethods](PubSubTransport.md#bindmethods)
- [clearListeners](PubSubTransport.md#clearlisteners)
- [emit](PubSubTransport.md#emit)
- [emitSerial](PubSubTransport.md#emitserial)
- [events](PubSubTransport.md#events)
- [listenerCount](PubSubTransport.md#listenercount)
- [off](PubSubTransport.md#off)
- [offAny](PubSubTransport.md#offany)
- [on](PubSubTransport.md#on)
- [onAny](PubSubTransport.md#onany)
- [once](PubSubTransport.md#once)
- [sendAsync](PubSubTransport.md#sendasync)
- [start](PubSubTransport.md#start)
- [stop](PubSubTransport.md#stop)
- [updateAsync](PubSubTransport.md#updateasync)
- [mixin](PubSubTransport.md#mixin)

## Constructors

### constructor

• **new PubSubTransport**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`PubSubOptions`](../interfaces/PubSubOptions.md)\> |

#### Overrides

BaseTransport.constructor

#### Defined in

[packages/core/src/transport/pubsub/index.ts:78](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/pubsub/index.ts#L78)

## Properties

### auth

• **auth**: `undefined` \| `Promise`<[`AuthClients`](../README.md#authclients)\>

#### Inherited from

BaseTransport.auth

#### Defined in

[packages/core/src/transport/index.ts:88](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L88)

___

### listenerAdded

▪ `Static` `Readonly` **listenerAdded**: typeof `listenerAdded`

Fires when an event listener was added.

An object with `listener` and `eventName` (if `on` or `off` was used) is provided as event data.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();

emitter.on(Emittery.listenerAdded, ({listener, eventName}) => {
console.log(listener);
//=> data => {}

console.log(eventName);
//=> '🦄'
});

emitter.on('🦄', data => {
// Handle data
});
```

#### Inherited from

BaseTransport.listenerAdded

#### Defined in

node_modules/emittery/index.d.ts:77

___

### listenerRemoved

▪ `Static` `Readonly` **listenerRemoved**: typeof `listenerRemoved`

Fires when an event listener was removed.

An object with `listener` and `eventName` (if `on` or `off` was used) is provided as event data.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();

const off = emitter.on('🦄', data => {
// Handle data
});

emitter.on(Emittery.listenerRemoved, ({listener, eventName}) => {
console.log(listener);
//=> data => {}

console.log(eventName);
//=> '🦄'
});

off();
```

#### Inherited from

BaseTransport.listenerRemoved

#### Defined in

node_modules/emittery/index.d.ts:105

## Methods

### anyEvent

▸ **anyEvent**(): `AsyncIterableIterator`<[keyof [`TransportEvents`](../interfaces/TransportEvents.md), `unknown`]\>

Get an async iterator which buffers a tuple of an event name and data each time an event is emitted.

Call `return()` on the iterator to remove the subscription.

In the same way as for `events`, you can subscribe by using the `for await` statement.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();
const iterator = emitter.anyEvent();

emitter.emit('🦄', '🌈1'); // Buffered
emitter.emit('🌟', '🌈2'); // Buffered

iterator.next()
.then(({value, done}) => {
// done is false
// value is ['🦄', '🌈1']
return iterator.next();
})
.then(({value, done}) => {
// done is false
// value is ['🌟', '🌈2']
// revoke subscription
return iterator.return();
})
.then(({done}) => {
// done is true
});
```

#### Returns

`AsyncIterableIterator`<[keyof [`TransportEvents`](../interfaces/TransportEvents.md), `unknown`]\>

#### Inherited from

BaseTransport.anyEvent

#### Defined in

node_modules/emittery/index.d.ts:367

___

### bindMethods

▸ **bindMethods**(`target`, `methodNames?`): `void`

Bind the given `methodNames`, or all `Emittery` methods if `methodNames` is not defined, into the `target` object.

**`example`**
```
import Emittery = require('emittery');

const object = {};

new Emittery().bindMethods(object);

object.emit('event');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Record`<`string`, `unknown`\> |
| `methodNames?` | readonly `string`[] |

#### Returns

`void`

#### Inherited from

BaseTransport.bindMethods

#### Defined in

node_modules/emittery/index.d.ts:407

___

### clearListeners

▸ **clearListeners**(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | keyof [`TransportEvents`](../interfaces/TransportEvents.md) |

#### Returns

`void`

#### Inherited from

BaseTransport.clearListeners

#### Defined in

node_modules/emittery/index.d.ts:386

___

### emit

▸ **emit**<`Name`\>(`eventName`): `Promise`<`void`\>

Trigger an event asynchronously, optionally with some data. Listeners are called in the order they were added, but executed concurrently.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

`Promise`<`void`\>

A promise that resolves when all the event listeners are done. *Done* meaning executed if synchronous or resolved when an async/promise-returning function. You usually wouldn't want to wait for this, but you could for example catch possible errors. If any of the listeners throw/reject, the returned promise will be rejected with the error, but the other listeners will not be affected.

#### Inherited from

BaseTransport.emit

#### Defined in

node_modules/emittery/index.d.ts:302

▸ **emit**<`Name`\>(`eventName`, `eventData`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `eventData` | [`TransportEvents`](../interfaces/TransportEvents.md)[`Name`] |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseTransport.emit

#### Defined in

node_modules/emittery/index.d.ts:303

___

### emitSerial

▸ **emitSerial**<`Name`\>(`eventName`): `Promise`<`void`\>

Same as `emit()`, but it waits for each listener to resolve before triggering the next one. This can be useful if your events depend on each other. Although ideally they should not. Prefer `emit()` whenever possible.

If any of the listeners throw/reject, the returned promise will be rejected with the error and the remaining listeners will *not* be called.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

`Promise`<`void`\>

A promise that resolves when all the event listeners are done.

#### Inherited from

BaseTransport.emitSerial

#### Defined in

node_modules/emittery/index.d.ts:315

▸ **emitSerial**<`Name`\>(`eventName`, `eventData`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `eventData` | [`TransportEvents`](../interfaces/TransportEvents.md)[`Name`] |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseTransport.emitSerial

#### Defined in

node_modules/emittery/index.d.ts:316

___

### events

▸ **events**<`Name`\>(`eventName`): `AsyncIterableIterator`<[`TransportEvents`](../interfaces/TransportEvents.md)[`Name`]\>

Get an async iterator which buffers data each time an event is emitted.

Call `return()` on the iterator to remove the subscription.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();
const iterator = emitter.events('🦄');

emitter.emit('🦄', '🌈1'); // Buffered
emitter.emit('🦄', '🌈2'); // Buffered

iterator
.next()
.then(({value, done}) => {
// done === false
// value === '🌈1'
return iterator.next();
})
.then(({value, done}) => {
// done === false
// value === '🌈2'
// Revoke subscription
return iterator.return();
})
.then(({done}) => {
// done === true
});
```

In practice you would usually consume the events using the [for await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) statement. In that case, to revoke the subscription simply break the loop.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();
const iterator = emitter.events('🦄');

emitter.emit('🦄', '🌈1'); // Buffered
emitter.emit('🦄', '🌈2'); // Buffered

// In an async context.
for await (const data of iterator) {
if (data === '🌈2') {
break; // Revoke the subscription when we see the value `🌈2`.
}
}
```

It accepts multiple event names.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();
const iterator = emitter.events(['🦄', '🦊']);

emitter.emit('🦄', '🌈1'); // Buffered
emitter.emit('🦊', '🌈2'); // Buffered

iterator
.next()
.then(({value, done}) => {
// done === false
// value === '🌈1'
return iterator.next();
})
.then(({value, done}) => {
// done === false
// value === '🌈2'
// Revoke subscription
return iterator.return();
})
.then(({done}) => {
// done === true
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` \| `Name`[] |

#### Returns

`AsyncIterableIterator`<[`TransportEvents`](../interfaces/TransportEvents.md)[`Name`]\>

#### Inherited from

BaseTransport.events

#### Defined in

node_modules/emittery/index.d.ts:239

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | keyof [`TransportEvents`](../interfaces/TransportEvents.md) |

#### Returns

`number`

#### Inherited from

BaseTransport.listenerCount

#### Defined in

node_modules/emittery/index.d.ts:391

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
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`TransportEvents`](../interfaces/TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

BaseTransport.off

#### Defined in

node_modules/emittery/index.d.ts:266

___

### offAny

▸ **offAny**(`listener`): `void`

Remove an `onAny` subscription.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`eventName`: keyof [`TransportEvents`](../interfaces/TransportEvents.md), `eventData`: `unknown`) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

BaseTransport.offAny

#### Defined in

node_modules/emittery/index.d.ts:374

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
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`TransportEvents`](../interfaces/TransportEvents.md) & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

An unsubscribe method.

#### Inherited from

BaseTransport.on

#### Defined in

node_modules/emittery/index.d.ts:151

___

### onAny

▸ **onAny**(`listener`): `UnsubscribeFn`

Subscribe to be notified about any event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`eventName`: keyof [`TransportEvents`](../interfaces/TransportEvents.md), `eventData`: `unknown`) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

A method to unsubscribe.

#### Inherited from

BaseTransport.onAny

#### Defined in

node_modules/emittery/index.d.ts:326

___

### once

▸ **once**<`Name`\>(`eventName`): `Promise`<[`TransportEvents`](../interfaces/TransportEvents.md) & `OmnipresentEventData`[`Name`]\>

Subscribe to one or more events only once. It will be unsubscribed after the first
event.

**`example`**
```
import Emittery = require('emittery');

const emitter = new Emittery();

emitter.once('🦄').then(data => {
console.log(data);
//=> '🌈'
});
emitter.once(['🦄', '🐶']).then(data => {
console.log(data);
});

emitter.emit('🦄', '🌈'); // Logs `🌈` twice
emitter.emit('🐶', '🍖'); // Nothing happens
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`TransportEvents`](../interfaces/TransportEvents.md) \| keyof `OmnipresentEventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

`Promise`<[`TransportEvents`](../interfaces/TransportEvents.md) & `OmnipresentEventData`[`Name`]\>

The event data when `eventName` is emitted.

#### Inherited from

BaseTransport.once

#### Defined in

node_modules/emittery/index.d.ts:295

___

### sendAsync

▸ **sendAsync**(`spaceName`, `message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Sends an async message to a space

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceName` | `string` |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) |
| `options?` | `Partial`<[`SendOptions`](../interfaces/SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Inherited from

BaseTransport.sendAsync

#### Defined in

[packages/core/src/transport/index.ts:101](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L101)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

BaseTransport.start

#### Defined in

[packages/core/src/transport/pubsub/index.ts:88](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/pubsub/index.ts#L88)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

BaseTransport.stop

#### Defined in

[packages/core/src/transport/pubsub/index.ts:118](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/pubsub/index.ts#L118)

___

### updateAsync

▸ **updateAsync**(`messageName`, `message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Sends an async message to a space

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageName` | `string` |
| `message` | `Partial`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |
| `options?` | `Partial`<[`SendOptions`](../interfaces/SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Inherited from

BaseTransport.updateAsync

#### Defined in

[packages/core/src/transport/index.ts:126](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/index.ts#L126)

___

### mixin

▸ `Static` **mixin**(`emitteryPropertyName`, `methodNames?`): <T\>(`klass`: `T`) => `T`

In TypeScript, it returns a decorator which mixins `Emittery` as property `emitteryPropertyName` and `methodNames`, or all `Emittery` methods if `methodNames` is not defined, into the target class.

**`example`**
```
import Emittery = require('emittery');

@Emittery.mixin('emittery')
class MyClass {}

const instance = new MyClass();

instance.emit('event');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitteryPropertyName` | `string` \| `symbol` |
| `methodNames?` | readonly `string`[] |

#### Returns

`fn`

▸ <`T`\>(`klass`): `T`

In TypeScript, it returns a decorator which mixins `Emittery` as property `emitteryPropertyName` and `methodNames`, or all `Emittery` methods if `methodNames` is not defined, into the target class.

**`example`**
```
import Emittery = require('emittery');

@Emittery.mixin('emittery')
class MyClass {}

const instance = new MyClass();

instance.emit('event');
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends () => `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `klass` | `T` |

##### Returns

`T`

#### Inherited from

BaseTransport.mixin

#### Defined in

node_modules/emittery/index.d.ts:122
