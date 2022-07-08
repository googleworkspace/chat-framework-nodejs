[Google Chat SDK](../README.md) / HttpOptions

# Interface: HttpOptions

Options for configuring the HTTP transport

## Table of contents

### Properties

- [credentials](HttpOptions.md#credentials)
- [path](HttpOptions.md#path)
- [port](HttpOptions.md#port)
- [projectNumber](HttpOptions.md#projectnumber)
- [trustProxy](HttpOptions.md#trustproxy)

## Properties

### credentials

• **credentials**: [`AuthClients`](../README.md#authclients) \| `Promise`<[`AuthClients`](../README.md#authclients)\>

Credentials used to identify bot. Defaults to ADC if unspecified.

#### Defined in

[packages/core/src/transport/http/index.ts:45](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/http/index.ts#L45)

___

### path

• **path**: `string`

Path to mount, defaults to '/'

#### Defined in

[packages/core/src/transport/http/index.ts:38](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/http/index.ts#L38)

___

### port

• **port**: `number`

Port number to listen on

#### Defined in

[packages/core/src/transport/http/index.ts:36](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/http/index.ts#L36)

___

### projectNumber

• **projectNumber**: `undefined` \| `string` \| `number`

Project # for bot to validate JWTs. If unspecified and the environment variable
GOOGLE_CHAT_PROJECT_NUMBER is unset, no authentication is performed.

#### Defined in

[packages/core/src/transport/http/index.ts:43](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/http/index.ts#L43)

___

### trustProxy

• **trustProxy**: `boolean`

Whether or not app is behind a proxy and should trust X-Forward-For headers

#### Defined in

[packages/core/src/transport/http/index.ts:40](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/http/index.ts#L40)
