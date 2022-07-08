[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Options

# Interface: Options

[chat_v1](../modules/chat_v1.md).Options

## Hierarchy

- `GlobalOptions`

  ↳ **`Options`**

## Table of contents

### Properties

- [agent](chat_v1.Options.md#agent)
- [auth](chat_v1.Options.md#auth)
- [baseURL](chat_v1.Options.md#baseurl)
- [baseUrl](chat_v1.Options.md#baseurl)
- [body](chat_v1.Options.md#body)
- [cert](chat_v1.Options.md#cert)
- [data](chat_v1.Options.md#data)
- [fetchImplementation](chat_v1.Options.md#fetchimplementation)
- [follow](chat_v1.Options.md#follow)
- [headers](chat_v1.Options.md#headers)
- [http2](chat_v1.Options.md#http2)
- [key](chat_v1.Options.md#key)
- [maxContentLength](chat_v1.Options.md#maxcontentlength)
- [maxRedirects](chat_v1.Options.md#maxredirects)
- [method](chat_v1.Options.md#method)
- [params](chat_v1.Options.md#params)
- [responseType](chat_v1.Options.md#responsetype)
- [retry](chat_v1.Options.md#retry)
- [retryConfig](chat_v1.Options.md#retryconfig)
- [rootUrl](chat_v1.Options.md#rooturl)
- [signal](chat_v1.Options.md#signal)
- [size](chat_v1.Options.md#size)
- [timeout](chat_v1.Options.md#timeout)
- [url](chat_v1.Options.md#url)
- [userAgentDirectives](chat_v1.Options.md#useragentdirectives)
- [version](chat_v1.Options.md#version)

### Methods

- [adapter](chat_v1.Options.md#adapter)
- [onUploadProgress](chat_v1.Options.md#onuploadprogress)
- [paramsSerializer](chat_v1.Options.md#paramsserializer)
- [validateStatus](chat_v1.Options.md#validatestatus)

## Properties

### agent

• `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

#### Inherited from

GlobalOptions.agent

#### Defined in

node_modules/gaxios/build/src/common.d.ts:58

___

### auth

• `Optional` **auth**: `string` \| `OAuth2Client` \| `BaseExternalAccountClient` \| `GoogleAuth`

#### Inherited from

GlobalOptions.auth

#### Defined in

node_modules/googleapis-common/build/src/api.d.ts:24

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

GlobalOptions.baseURL

#### Defined in

node_modules/gaxios/build/src/common.d.ts:37

___

### baseUrl

• `Optional` **baseUrl**: `string`

#### Inherited from

GlobalOptions.baseUrl

#### Defined in

node_modules/gaxios/build/src/common.d.ts:36

___

### body

• `Optional` **body**: `any`

#### Inherited from

GlobalOptions.body

#### Defined in

node_modules/gaxios/build/src/common.d.ts:41

___

### cert

• `Optional` **cert**: `string`

#### Inherited from

GlobalOptions.cert

#### Defined in

node_modules/gaxios/build/src/common.d.ts:70

___

### data

• `Optional` **data**: `any`

#### Inherited from

GlobalOptions.data

#### Defined in

node_modules/gaxios/build/src/common.d.ts:40

___

### fetchImplementation

• `Optional` **fetchImplementation**: `FetchImplementation`

Implementation of `fetch` to use when making the API call. By default,
will use the browser context if available, and fall back to `node-fetch`
in node.js otherwise.

#### Inherited from

GlobalOptions.fetchImplementation

#### Defined in

node_modules/gaxios/build/src/common.d.ts:69

___

### follow

• `Optional` **follow**: `number`

#### Inherited from

GlobalOptions.follow

#### Defined in

node_modules/gaxios/build/src/common.d.ts:50

___

### headers

• `Optional` **headers**: `Headers`

#### Inherited from

GlobalOptions.headers

#### Defined in

node_modules/gaxios/build/src/common.d.ts:39

___

### http2

• `Optional` **http2**: `boolean`

#### Inherited from

GlobalOptions.http2

#### Defined in

node_modules/googleapis-common/build/src/api.d.ts:28

___

### key

• `Optional` **key**: `string`

#### Inherited from

GlobalOptions.key

#### Defined in

node_modules/gaxios/build/src/common.d.ts:71

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

The maximum size of the http response content in bytes allowed.

#### Inherited from

GlobalOptions.maxContentLength

#### Defined in

node_modules/gaxios/build/src/common.d.ts:45

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

The maximum number of redirects to follow. Defaults to 20.

#### Inherited from

GlobalOptions.maxRedirects

#### Defined in

node_modules/gaxios/build/src/common.d.ts:49

___

### method

• `Optional` **method**: ``"GET"`` \| ``"HEAD"`` \| ``"POST"`` \| ``"DELETE"`` \| ``"PUT"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"`` \| ``"PATCH"``

#### Inherited from

GlobalOptions.method

#### Defined in

node_modules/gaxios/build/src/common.d.ts:38

___

### params

• `Optional` **params**: `any`

#### Inherited from

GlobalOptions.params

#### Defined in

node_modules/gaxios/build/src/common.d.ts:51

___

### responseType

• `Optional` **responseType**: ``"text"`` \| ``"arraybuffer"`` \| ``"blob"`` \| ``"json"`` \| ``"stream"``

#### Inherited from

GlobalOptions.responseType

#### Defined in

node_modules/gaxios/build/src/common.d.ts:57

___

### retry

• `Optional` **retry**: `boolean`

#### Inherited from

GlobalOptions.retry

#### Defined in

node_modules/gaxios/build/src/common.d.ts:61

___

### retryConfig

• `Optional` **retryConfig**: `RetryConfig`

#### Inherited from

GlobalOptions.retryConfig

#### Defined in

node_modules/gaxios/build/src/common.d.ts:60

___

### rootUrl

• `Optional` **rootUrl**: `string`

#### Inherited from

GlobalOptions.rootUrl

#### Defined in

node_modules/googleapis-common/build/src/api.d.ts:27

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

GlobalOptions.signal

#### Defined in

node_modules/gaxios/build/src/common.d.ts:62

___

### size

• `Optional` **size**: `number`

#### Inherited from

GlobalOptions.size

#### Defined in

node_modules/gaxios/build/src/common.d.ts:63

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

GlobalOptions.timeout

#### Defined in

node_modules/gaxios/build/src/common.d.ts:55

___

### url

• `Optional` **url**: `string`

#### Inherited from

GlobalOptions.url

#### Defined in

node_modules/gaxios/build/src/common.d.ts:35

___

### userAgentDirectives

• `Optional` **userAgentDirectives**: `UserAgentDirective`[]

#### Inherited from

GlobalOptions.userAgentDirectives

#### Defined in

node_modules/googleapis-common/build/src/api.d.ts:29

___

### version

• **version**: ``"v1"``

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:6

## Methods

### adapter

▸ `Optional` **adapter**<`T`\>(`options`, `defaultAdapter`): `GaxiosPromise`<`T`\>

Optional method to override making the actual HTTP request. Useful
for writing tests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GaxiosOptions` |
| `defaultAdapter` | (`options`: `GaxiosOptions`) => `GaxiosPromise`<`T`\> |

#### Returns

`GaxiosPromise`<`T`\>

#### Inherited from

GlobalOptions.adapter

#### Defined in

node_modules/gaxios/build/src/common.d.ts:34

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

GlobalOptions.onUploadProgress

#### Defined in

node_modules/gaxios/build/src/common.d.ts:56

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |

#### Returns

`string`

#### Inherited from

GlobalOptions.paramsSerializer

#### Defined in

node_modules/gaxios/build/src/common.d.ts:52

___

### validateStatus

▸ `Optional` **validateStatus**(`status`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |

#### Returns

`boolean`

#### Inherited from

GlobalOptions.validateStatus

#### Defined in

node_modules/gaxios/build/src/common.d.ts:59
