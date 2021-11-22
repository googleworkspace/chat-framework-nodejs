[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Resource$Media

# Class: Resource$Media

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Resource$Media

## Table of contents

### Constructors

- [constructor](google_chat_sdk.chat_v1.Resource_Media.md#constructor)

### Properties

- [context](google_chat_sdk.chat_v1.Resource_Media.md#context)

### Methods

- [download](google_chat_sdk.chat_v1.Resource_Media.md#download)

## Constructors

### constructor

• **new Resource$Media**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1727

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1726

## Methods

### download

▸ **download**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Downloads media. Download is supported on the URI `/v1/media/{+name\}?alt=media`.

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
  const res = await chat.media.download({
    // Name of the media that is being downloaded. See ReadRequest.resource_name.
    resourceName: '.*',
  });
  console.log(res.data);

  // Example response
  // {
  //   "resourceName": "my_resourceName"
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
| `params` | [`Params$Resource$Media$Download`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Media_Download.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1778

▸ **download**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Media$Download`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Media_Download.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1779

▸ **download**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Media$Download`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Media_Download.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1780

▸ **download**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Media$Download`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Media_Download.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1781

▸ **download**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Media$Download`](../interfaces/google_chat_sdk.chat_v1.Params_Resource_Media_Download.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1782

▸ **download**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Media`](../interfaces/google_chat_sdk.chat_v1.Schema_Media.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1783
