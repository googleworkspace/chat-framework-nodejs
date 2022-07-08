[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Resource$Spaces$Messages$Attachments

# Class: Resource$Spaces$Messages$Attachments

[chat_v1](../modules/chat_v1.md).Resource$Spaces$Messages$Attachments

## Table of contents

### Constructors

- [constructor](chat_v1.Resource_Spaces_Messages_Attachments.md#constructor)

### Properties

- [context](chat_v1.Resource_Spaces_Messages_Attachments.md#context)

### Methods

- [get](chat_v1.Resource_Spaces_Messages_Attachments.md#get)

## Constructors

### constructor

• **new Resource$Spaces$Messages$Attachments**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2875

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2874

## Methods

### get

▸ **get**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Gets the metadata of a message attachment. The attachment data is fetched using the media API.

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
  const res = await chat.spaces.messages.attachments.get({
    // Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
    name: 'spaces/my-space/messages/my-message/attachments/my-attachment',
  });
  console.log(res.data);

  // Example response
  // {
  //   "attachmentDataRef": {},
  //   "contentName": "my_contentName",
  //   "contentType": "my_contentType",
  //   "downloadUri": "my_downloadUri",
  //   "driveDataRef": {},
  //   "name": "my_name",
  //   "source": "my_source",
  //   "thumbnailUri": "my_thumbnailUri"
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
| `params` | [`Params$Resource$Spaces$Messages$Attachments$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Messages_Attachments_Get.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2933

▸ **get**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Messages$Attachments$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Messages_Attachments_Get.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2934

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Attachments$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Messages_Attachments_Get.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2935

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Attachments$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Messages_Attachments_Get.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2936

▸ **get**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Messages$Attachments$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Messages_Attachments_Get.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2937

▸ **get**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Attachment`](../interfaces/chat_v1.Schema_Attachment.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2938
