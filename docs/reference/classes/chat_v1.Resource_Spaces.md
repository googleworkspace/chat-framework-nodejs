[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Resource$Spaces

# Class: Resource$Spaces

[chat_v1](../modules/chat_v1.md).Resource$Spaces

## Table of contents

### Constructors

- [constructor](chat_v1.Resource_Spaces.md#constructor)

### Properties

- [context](chat_v1.Resource_Spaces.md#context)
- [members](chat_v1.Resource_Spaces.md#members)
- [messages](chat_v1.Resource_Spaces.md#messages)

### Methods

- [get](chat_v1.Resource_Spaces.md#get)
- [list](chat_v1.Resource_Spaces.md#list)
- [webhooks](chat_v1.Resource_Spaces.md#webhooks)

## Constructors

### constructor

• **new Resource$Spaces**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2128

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2125

___

### members

• **members**: [`Resource$Spaces$Members`](chat_v1.Resource_Spaces_Members.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2126

___

### messages

• **messages**: [`Resource$Spaces$Messages`](chat_v1.Resource_Spaces_Messages.md)

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2127

## Methods

### get

▸ **get**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Returns a space.

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
  const res = await chat.spaces.get({
    // Required. Resource name of the space, in the form "spaces/x". Example: spaces/AAAAMpdlehY
    name: 'spaces/my-space',
  });
  console.log(res.data);

  // Example response
  // {
  //   "displayName": "my_displayName",
  //   "name": "my_name",
  //   "singleUserBotDm": false,
  //   "threaded": false,
  //   "type": "my_type"
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
| `params` | [`Params$Resource$Spaces$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Get.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2183

▸ **get**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Get.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2184

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Get.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2185

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Get.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2186

▸ **get**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Get.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2187

▸ **get**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Space`](../interfaces/chat_v1.Schema_Space.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2188

___

### list

▸ **list**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Lists spaces the caller is a member of.

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
  const res = await chat.spaces.list({
    // Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
    pageSize: 'placeholder-value',
    // A token identifying a page of results the server should return.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);

  // Example response
  // {
  //   "nextPageToken": "my_nextPageToken",
  //   "spaces": []
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
| `params` | [`Params$Resource$Spaces$List`](../interfaces/chat_v1.Params_Resource_Spaces_List.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2242

▸ **list**(`params?`, `options?`): `GaxiosPromise`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$List`](../interfaces/chat_v1.Params_Resource_Spaces_List.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2243

▸ **list**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$List`](../interfaces/chat_v1.Params_Resource_Spaces_List.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2244

▸ **list**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$List`](../interfaces/chat_v1.Params_Resource_Spaces_List.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2245

▸ **list**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$List`](../interfaces/chat_v1.Params_Resource_Spaces_List.md) |
| `callback` | `BodyResponseCallback`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2246

▸ **list**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$ListSpacesResponse`](../interfaces/chat_v1.Schema_ListSpacesResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2247

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
  const res = await chat.spaces.webhooks({
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
| `params` | [`Params$Resource$Spaces$Webhooks`](../interfaces/chat_v1.Params_Resource_Spaces_Webhooks.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2336

▸ **webhooks**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Webhooks`](../interfaces/chat_v1.Params_Resource_Spaces_Webhooks.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2337

▸ **webhooks**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Webhooks`](../interfaces/chat_v1.Params_Resource_Spaces_Webhooks.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2338

▸ **webhooks**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Webhooks`](../interfaces/chat_v1.Params_Resource_Spaces_Webhooks.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2339

▸ **webhooks**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Webhooks`](../interfaces/chat_v1.Params_Resource_Spaces_Webhooks.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2340

▸ **webhooks**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Message`](../interfaces/chat_v1.Schema_Message.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2341
