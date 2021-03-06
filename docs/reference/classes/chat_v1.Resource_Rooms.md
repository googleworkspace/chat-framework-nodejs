[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Resource$Rooms

# Class: Resource$Rooms

[chat_v1](../modules/chat_v1.md).Resource$Rooms

## Table of contents

### Constructors

- [constructor](chat_v1.Resource_Rooms.md#constructor)

### Properties

- [context](chat_v1.Resource_Rooms.md#context)
- [conversations](chat_v1.Resource_Rooms.md#conversations)

### Methods

- [messages](chat_v1.Resource_Rooms.md#messages)
- [webhooks](chat_v1.Resource_Rooms.md#webhooks)

## Constructors

### constructor

• **new Resource$Rooms**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1794

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1792

___

### conversations

• **conversations**: [`Resource$Rooms$Conversations`](chat_v1.Resource_Rooms_Conversations.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1793

## Methods

### messages

▸ **messages**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Legacy path for creating message. Calling these will result in a BadRequest response.

**`example`**
```js
// Before running the sample:
// - Enable the API at:
//   https://console.developers.google.com/apis/api/chat.googleapis.com
// - Login into gcloud by running:
//   `$ gcloud auth application-default login`
// - Install the npm module by running:
//   `$ npm install googleapis`

const {google} = require('googleapis');
const chat = google.chat('v1');

async function main() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options({auth: authClient});

  // Do the magic
  const res = await chat.rooms.messages({
    // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
    parent: 'rooms/my-room',
    // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
    threadKey: 'placeholder-value',

    // Request body metadata
    requestBody: {
      // request body parameters
      // {
      //   "actionResponse": {},
      //   "annotations": [],
      //   "argumentText": "my_argumentText",
      //   "attachment": [],
      //   "cards": [],
      //   "createTime": "my_createTime",
      //   "fallbackText": "my_fallbackText",
      //   "lastUpdateTime": "my_lastUpdateTime",
      //   "name": "my_name",
      //   "previewText": "my_previewText",
      //   "sender": {},
      //   "slashCommand": {},
      //   "space": {},
      //   "text": "my_text",
      //   "thread": {}
      // }
    },
  });
  console.log(res.data);

  // Example response
  // {
  //   "actionResponse": {},
  //   "annotations": [],
  //   "argumentText": "my_argumentText",
  //   "attachment": [],
  //   "cards": [],
  //   "createTime": "my_createTime",
  //   "fallbackText": "my_fallbackText",
  //   "lastUpdateTime": "my_lastUpdateTime",
  //   "name": "my_name",
  //   "previewText": "my_previewText",
  //   "sender": {},
  //   "slashCommand": {},
  //   "space": {},
  //   "text": "my_text",
  //   "thread": {}
  // }
}

main().catch(e => {
  console.error(e);
  throw e;
});

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`Params$Resource$Rooms$Messages`](../interfaces/chat_v1.Params_Resource_Rooms_Messages.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1883

▸ **messages**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Rooms$Messages`](../interfaces/chat_v1.Params_Resource_Rooms_Messages.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1884

▸ **messages**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Messages`](../interfaces/chat_v1.Params_Resource_Rooms_Messages.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1885

▸ **messages**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Messages`](../interfaces/chat_v1.Params_Resource_Rooms_Messages.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1886

▸ **messages**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Messages`](../interfaces/chat_v1.Params_Resource_Rooms_Messages.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1887

▸ **messages**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1888

___

### webhooks

▸ **webhooks**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Legacy path for creating message. Calling these will result in a BadRequest response.

**`example`**
```js
// Before running the sample:
// - Enable the API at:
//   https://console.developers.google.com/apis/api/chat.googleapis.com
// - Login into gcloud by running:
//   `$ gcloud auth application-default login`
// - Install the npm module by running:
//   `$ npm install googleapis`

const {google} = require('googleapis');
const chat = google.chat('v1');

async function main() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options({auth: authClient});

  // Do the magic
  const res = await chat.rooms.webhooks({
    // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
    parent: 'rooms/my-room',
    // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
    threadKey: 'placeholder-value',

    // Request body metadata
    requestBody: {
      // request body parameters
      // {
      //   "actionResponse": {},
      //   "annotations": [],
      //   "argumentText": "my_argumentText",
      //   "attachment": [],
      //   "cards": [],
      //   "createTime": "my_createTime",
      //   "fallbackText": "my_fallbackText",
      //   "lastUpdateTime": "my_lastUpdateTime",
      //   "name": "my_name",
      //   "previewText": "my_previewText",
      //   "sender": {},
      //   "slashCommand": {},
      //   "space": {},
      //   "text": "my_text",
      //   "thread": {}
      // }
    },
  });
  console.log(res.data);

  // Example response
  // {
  //   "actionResponse": {},
  //   "annotations": [],
  //   "argumentText": "my_argumentText",
  //   "attachment": [],
  //   "cards": [],
  //   "createTime": "my_createTime",
  //   "fallbackText": "my_fallbackText",
  //   "lastUpdateTime": "my_lastUpdateTime",
  //   "name": "my_name",
  //   "previewText": "my_previewText",
  //   "sender": {},
  //   "slashCommand": {},
  //   "space": {},
  //   "text": "my_text",
  //   "thread": {}
  // }
}

main().catch(e => {
  console.error(e);
  throw e;
});

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`Params$Resource$Rooms$Webhooks`](../interfaces/chat_v1.Params_Resource_Rooms_Webhooks.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1977

▸ **webhooks**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Rooms$Webhooks`](../interfaces/chat_v1.Params_Resource_Rooms_Webhooks.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1978

▸ **webhooks**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Webhooks`](../interfaces/chat_v1.Params_Resource_Rooms_Webhooks.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1979

▸ **webhooks**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Webhooks`](../interfaces/chat_v1.Params_Resource_Rooms_Webhooks.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1980

▸ **webhooks**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Rooms$Webhooks`](../interfaces/chat_v1.Params_Resource_Rooms_Webhooks.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1981

▸ **webhooks**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1982
