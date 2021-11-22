[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Resource$Spaces$Messages

# Class: Resource$Spaces$Messages

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Resource$Spaces$Messages

## Table of contents

### Constructors

- [constructor](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#constructor)

### Properties

- [attachments](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#attachments)
- [context](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#context)

### Methods

- [create](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#create)
- [delete](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#delete)
- [get](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#get)
- [update](google_chat_sdk.chat_v1.Resource_Spaces_Messages.md#update)

## Constructors

### constructor

• **new Resource$Spaces$Messages**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2520

## Properties

### attachments

• **attachments**: [`Resource$Spaces$Messages$Attachments`](google_chat_sdk.chat_v1.Resource_Spaces_Messages_Attachments.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2519

___

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2518

## Methods

### create

▸ **create**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Creates a message.

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
  const res = await chat.spaces.messages.create({
    // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
    parent: 'spaces/my-space',
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
| `params` | [`Params$Resource$Spaces$Messages$Create`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Create.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2609

▸ **create**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Messages$Create`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Create.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2610

▸ **create**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Create`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Create.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2611

▸ **create**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Create`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Create.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2612

▸ **create**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Create`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Create.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2613

▸ **create**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2614

___

### delete

▸ **delete**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Deletes a message.

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
  const res = await chat.spaces.messages.delete({
    // Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x" Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
    name: 'spaces/my-space/messages/my-message',
  });
  console.log(res.data);

  // Example response
  // {}
}

main().catch(e => {
  console.error(e);
  throw e;
});

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Delete`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Delete.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2663

▸ **delete**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Messages$Delete`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Delete.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2664

▸ **delete**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Delete`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Delete.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2665

▸ **delete**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Delete`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Delete.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2666

▸ **delete**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Delete`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Delete.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2667

▸ **delete**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Empty`](../interfaces/google_chat_sdk.chat_v1.Schema_Empty.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2668

___

### get

▸ **get**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Returns a message.

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
  const res = await chat.spaces.messages.get({
    // Required. Resource name of the message to be retrieved, in the form "spaces/x/messages/x". Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
    name: 'spaces/my-space/messages/my-message',
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
| `params` | [`Params$Resource$Spaces$Messages$Get`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Get.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2733

▸ **get**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Messages$Get`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Get.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2734

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Get`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Get.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2735

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Get`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Get.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2736

▸ **get**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Get`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Get.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2737

▸ **get**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2738

___

### update

▸ **update**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Updates a message.

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
  const res = await chat.spaces.messages.update({
    name: 'spaces/my-space/messages/my-message',
    // Required. The field paths to be updated, comma separated if there are multiple. Currently supported field paths: * text * cards * gsuite_message_integration_render_data * attachment
    updateMask: 'placeholder-value',

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
| `params` | [`Params$Resource$Spaces$Messages$Update`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Update.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2826

▸ **update**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Messages$Update`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Update.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2827

▸ **update**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Update`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Update.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2828

▸ **update**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Update`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Update.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2829

▸ **update**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Update`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Spaces_Messages_Update.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2830

▸ **update**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/google_chat_sdk.chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2831
