[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Resource$Spaces$Members

# Class: Resource$Spaces$Members

[chat_v1](../modules/chat_v1.md).Resource$Spaces$Members

## Table of contents

### Constructors

- [constructor](chat_v1.Resource_Spaces_Members.md#constructor)

### Properties

- [context](chat_v1.Resource_Spaces_Members.md#context)

### Methods

- [get](chat_v1.Resource_Spaces_Members.md#get)
- [list](chat_v1.Resource_Spaces_Members.md#list)

## Constructors

### constructor

• **new Resource$Spaces$Members**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `APIRequestContext` |

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2375

## Properties

### context

• **context**: `APIRequestContext`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2374

## Methods

### get

▸ **get**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Returns a membership.

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
  const res = await chat.spaces.members.get({
    // Required. Resource name of the membership to be retrieved, in the form "spaces/x/members/x". Example: spaces/AAAAMpdlehY/members/105115627578887013105
    name: 'spaces/my-space/members/my-member',
  });
  console.log(res.data);

  // Example response
  // {
  //   "createTime": "my_createTime",
  //   "member": {},
  //   "name": "my_name",
  //   "state": "my_state"
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
| `params` | [`Params$Resource$Spaces$Members$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Members_Get.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2429

▸ **get**(`params?`, `options?`): `GaxiosPromise`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Members$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Members_Get.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2430

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Members_Get.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2431

▸ **get**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Members_Get.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2432

▸ **get**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$Get`](../interfaces/chat_v1.Params_Resource_Spaces_Members_Get.md) |
| `callback` | `BodyResponseCallback`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2433

▸ **get**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$Membership`](../interfaces/chat_v1.Schema_Membership.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2434

___

### list

▸ **list**(`params`, `options`): `GaxiosPromise`<`Readable`\>

Lists human memberships in a space.

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
  const res = await chat.spaces.members.list({
    // Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
    pageSize: 'placeholder-value',
    // A token identifying a page of results the server should return.
    pageToken: 'placeholder-value',
    // Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/x". Example: spaces/AAAAMpdlehY
    parent: 'spaces/my-space',
  });
  console.log(res.data);

  // Example response
  // {
  //   "memberships": [],
  //   "nextPageToken": "my_nextPageToken"
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
| `params` | [`Params$Resource$Spaces$Members$List`](../interfaces/chat_v1.Params_Resource_Spaces_Members_List.md) | Parameters for request |
| `options` | `StreamMethodOptions` | Optionally override request options, such as `url`, `method`, and `encoding`. |

#### Returns

`GaxiosPromise`<`Readable`\>

A promise if used with async/await, or void if used with a callback.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2490

▸ **list**(`params?`, `options?`): `GaxiosPromise`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Params$Resource$Spaces$Members$List`](../interfaces/chat_v1.Params_Resource_Spaces_Members_List.md) |
| `options?` | `MethodOptions` |

#### Returns

`GaxiosPromise`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\>

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2491

▸ **list**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$List`](../interfaces/chat_v1.Params_Resource_Spaces_Members_List.md) |
| `options` | `StreamMethodOptions` \| `BodyResponseCallback`<`Readable`\> |
| `callback` | `BodyResponseCallback`<`Readable`\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2492

▸ **list**(`params`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$List`](../interfaces/chat_v1.Params_Resource_Spaces_Members_List.md) |
| `options` | `MethodOptions` \| `BodyResponseCallback`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\> |
| `callback` | `BodyResponseCallback`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2493

▸ **list**(`params`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Params$Resource$Spaces$Members$List`](../interfaces/chat_v1.Params_Resource_Spaces_Members_List.md) |
| `callback` | `BodyResponseCallback`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2494

▸ **list**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `BodyResponseCallback`<[`Schema$ListMembershipsResponse`](../interfaces/chat_v1.Schema_ListMembershipsResponse.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2495
