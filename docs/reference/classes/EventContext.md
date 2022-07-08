[Google Chat SDK](../README.md) / EventContext

# Class: EventContext

Context provided to event handlers. This provides access to the underlying event
as well as a set of convenience accessors and methods for commonly used fields
and operations such as replying to the message, closing or updating dialogs, etc.

All fields can be safely destructured in handlers.

## Hierarchy

- `Emittery`<`Events`\>

  ↳ **`EventContext`**

## Table of contents

### Constructors

- [constructor](EventContext.md#constructor)

### Properties

- [conversationKey](EventContext.md#conversationkey)
- [event](EventContext.md#event)
- [regExpExecResult](EventContext.md#regexpexecresult)
- [urlPatternResult](EventContext.md#urlpatternresult)
- [listenerAdded](EventContext.md#listeneradded)
- [listenerRemoved](EventContext.md#listenerremoved)

### Accessors

- [formInputs](EventContext.md#forminputs)
- [message](EventContext.md#message)
- [messageText](EventContext.md#messagetext)
- [parameters](EventContext.md#parameters)
- [user](EventContext.md#user)

### Methods

- [ack](EventContext.md#ack)
- [anyEvent](EventContext.md#anyevent)
- [bindMethods](EventContext.md#bindmethods)
- [clearListeners](EventContext.md#clearlisteners)
- [closeDialog](EventContext.md#closedialog)
- [emit](EventContext.md#emit)
- [emitSerial](EventContext.md#emitserial)
- [events](EventContext.md#events)
- [listenerCount](EventContext.md#listenercount)
- [newMessageInSpace](EventContext.md#newmessageinspace)
- [newMessageInThread](EventContext.md#newmessageinthread)
- [off](EventContext.md#off)
- [offAny](EventContext.md#offany)
- [on](EventContext.md#on)
- [onAny](EventContext.md#onany)
- [once](EventContext.md#once)
- [reply](EventContext.md#reply)
- [showDialog](EventContext.md#showdialog)
- [updateMessage](EventContext.md#updatemessage)
- [mixin](EventContext.md#mixin)

## Constructors

### constructor

• **new EventContext**(`bot`, `transportContext`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](Bot.md) |
| `transportContext` | [`TransportEventContext`](../interfaces/TransportEventContext.md) |

#### Overrides

Emittery&lt;Events\&gt;.constructor

#### Defined in

[packages/core/src/context.ts:66](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L66)

## Properties

### conversationKey

• **conversationKey**: `string`

Unique ID for keying any conversation related storage. Maps to either
the space name or thread name depending on the space settings.

#### Defined in

[packages/core/src/context.ts:54](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L54)

___

### event

• **event**: [`Schema$DeprecatedEvent`](../interfaces/chat_v1.Schema_DeprecatedEvent.md)

The raw event from chat

#### Defined in

[packages/core/src/context.ts:44](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L44)

___

### regExpExecResult

• **regExpExecResult**: `undefined` \| `RegExpExecArray`

For regexp matches on messages, the result of the `exec` call.

#### Defined in

[packages/core/src/context.ts:64](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L64)

___

### urlPatternResult

• **urlPatternResult**: `undefined` \| `URLPatternResult`

For pattern-matched unfurl events, contains the result of the `URLPattern.exec()` call for access
to any capturing groups in the pattern.

#### Defined in

[packages/core/src/context.ts:59](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L59)

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

Emittery.listenerAdded

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

Emittery.listenerRemoved

#### Defined in

node_modules/emittery/index.d.ts:105

## Accessors

### formInputs

• `get` **formInputs**(): [`FormInputs`](FormInputs.md)

Wraps and returns form inputs for easier access.

#### Returns

[`FormInputs`](FormInputs.md)

#### Defined in

[packages/core/src/context.ts:88](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L88)

___

### message

• `get` **message**(): `undefined` \| [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)

Returns the message portion of the event, if present.

#### Returns

`undefined` \| [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)

#### Defined in

[packages/core/src/context.ts:102](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L102)

___

### messageText

• `get` **messageText**(): `undefined` \| `string`

Returns the trimmed text supplied by the user.

#### Returns

`undefined` \| `string`

#### Defined in

[packages/core/src/context.ts:116](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L116)

___

### parameters

• `get` **parameters**(): `Record`<`string`, `string`\>

Returns any action parameters in the event.

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[packages/core/src/context.ts:95](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L95)

___

### user

• `get` **user**(): `undefined` \| [`Schema$User`](../interfaces/chat_v1.Schema_User.md)

Returns the user that triggered the event.

#### Returns

`undefined` \| [`Schema$User`](../interfaces/chat_v1.Schema_User.md)

#### Defined in

[packages/core/src/context.ts:109](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L109)

## Methods

### ack

▸ **ack**(): `void`

Acks receipt of the message. Handlers should call this method if handling the event
but not sending any other reply.

#### Returns

`void`

#### Defined in

[packages/core/src/context.ts:128](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L128)

___

### anyEvent

▸ **anyEvent**(): `AsyncIterableIterator`<[``"finish"``, [`EventContext`](EventContext.md)]\>

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

`AsyncIterableIterator`<[``"finish"``, [`EventContext`](EventContext.md)]\>

#### Inherited from

Emittery.anyEvent

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

Emittery.bindMethods

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
| `eventName?` | ``"finish"`` |

#### Returns

`void`

#### Inherited from

Emittery.clearListeners

#### Defined in

node_modules/emittery/index.d.ts:386

___

### closeDialog

▸ **closeDialog**(`toast?`): `Promise`<`void`\>

Closes a dialog. Only valid for action events initiated from a dialog.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toast?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/context.ts:194](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L194)

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

Emittery.emit

#### Defined in

node_modules/emittery/index.d.ts:302

▸ **emit**<`Name`\>(`eventName`, `eventData`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `eventData` | `Events`[`Name`] |

#### Returns

`Promise`<`void`\>

#### Inherited from

Emittery.emit

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

Emittery.emitSerial

#### Defined in

node_modules/emittery/index.d.ts:315

▸ **emitSerial**<`Name`\>(`eventName`, `eventData`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `eventData` | `Events`[`Name`] |

#### Returns

`Promise`<`void`\>

#### Inherited from

Emittery.emitSerial

#### Defined in

node_modules/emittery/index.d.ts:316

___

### events

▸ **events**<`Name`\>(`eventName`): `AsyncIterableIterator`<`Events`[`Name`]\>

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
| `Name` | extends ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` \| `Name`[] |

#### Returns

`AsyncIterableIterator`<`Events`[`Name`]\>

#### Inherited from

Emittery.events

#### Defined in

node_modules/emittery/index.d.ts:239

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | ``"finish"`` |

#### Returns

`number`

#### Inherited from

Emittery.listenerCount

#### Defined in

node_modules/emittery/index.d.ts:391

___

### newMessageInSpace

▸ **newMessageInSpace**(`message`, `options?`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Creates a new thread in the current space. This message is sent asynchronously, not as a reply
to the current event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) |
| `options?` | `Partial`<[`SendOptions`](../interfaces/SendOptions.md)\> |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/context.ts:233](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L233)

___

### newMessageInThread

▸ **newMessageInThread**(`message`): `Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

Creates a new message in response to the current thread. This message is sent asynchronously, not as a reply
to the current event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) |

#### Returns

`Promise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

[packages/core/src/context.ts:214](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L214)

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
| `Name` | extends keyof `OmnipresentEventData` \| ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: `Events` & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

Emittery.off

#### Defined in

node_modules/emittery/index.d.ts:266

___

### offAny

▸ **offAny**(`listener`): `void`

Remove an `onAny` subscription.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`eventName`: ``"finish"``, `eventData`: [`EventContext`](EventContext.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

Emittery.offAny

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
| `Name` | extends keyof `OmnipresentEventData` \| ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: `Events` & `OmnipresentEventData`[`Name`]) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

An unsubscribe method.

#### Inherited from

Emittery.on

#### Defined in

node_modules/emittery/index.d.ts:151

___

### onAny

▸ **onAny**(`listener`): `UnsubscribeFn`

Subscribe to be notified about any event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`eventName`: ``"finish"``, `eventData`: [`EventContext`](EventContext.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`UnsubscribeFn`

A method to unsubscribe.

#### Inherited from

Emittery.onAny

#### Defined in

node_modules/emittery/index.d.ts:326

___

### once

▸ **once**<`Name`\>(`eventName`): `Promise`<`Events` & `OmnipresentEventData`[`Name`]\>

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
| `Name` | extends keyof `OmnipresentEventData` \| ``"finish"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

`Promise`<`Events` & `OmnipresentEventData`[`Name`]\>

The event data when `eventName` is emitted.

#### Inherited from

Emittery.once

#### Defined in

node_modules/emittery/index.d.ts:295

___

### reply

▸ **reply**(`message`): `Promise`<`void`\>

Replies to the message in the current event. The thread name is automatically injected
into the message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) & `CardsV2` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/context.ts:138](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L138)

___

### showDialog

▸ **showDialog**(`body`): `Promise`<`void`\>

Displays or updates the dialog presented to users. Only valid for slash commands and action events
where a dialog is expected to be displayed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`Schema$GoogleAppsCardV1Card`](../interfaces/chat_v1.Schema_GoogleAppsCardV1Card.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/context.ts:176](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L176)

___

### updateMessage

▸ **updateMessage**(`message`): `Promise`<`void`\>

For interactive cards and unfurl requests, performs an in-place update of message that triggered this event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Schema$Message`](../interfaces/chat_v1.Schema_Message.md) & `CardsV2` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/context.ts:153](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/context.ts#L153)

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

Emittery.mixin

#### Defined in

node_modules/emittery/index.d.ts:122
