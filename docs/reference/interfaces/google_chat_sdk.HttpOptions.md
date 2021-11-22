[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / HttpOptions

# Interface: HttpOptions

[@google/chat-sdk](../modules/google_chat_sdk.md).HttpOptions

Options for configuring the HTTP transport

## Table of contents

### Properties

- [path](google_chat_sdk.HttpOptions.md#path)
- [port](google_chat_sdk.HttpOptions.md#port)
- [projectNumber](google_chat_sdk.HttpOptions.md#projectnumber)
- [trustProxy](google_chat_sdk.HttpOptions.md#trustproxy)

## Properties

### path

• **path**: `string`

Path to mount, defaults to '/'

#### Defined in

[packages/core/src/transport/http/index.ts:37](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/http/index.ts#L37)

___

### port

• **port**: `number`

Port number to listen on

#### Defined in

[packages/core/src/transport/http/index.ts:35](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/http/index.ts#L35)

___

### projectNumber

• **projectNumber**: `undefined` \| `string` \| `number`

Project # for bot to validate JWTs. If unspecified and the environment variable
GOOGLE_CHAT_PROJECT_NUMBER is unset, no authentication is performed.

#### Defined in

[packages/core/src/transport/http/index.ts:42](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/http/index.ts#L42)

___

### trustProxy

• **trustProxy**: `boolean`

Whether or not app is behind a proxy and should trust X-Forward-For headers

#### Defined in

[packages/core/src/transport/http/index.ts:39](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/transport/http/index.ts#L39)
