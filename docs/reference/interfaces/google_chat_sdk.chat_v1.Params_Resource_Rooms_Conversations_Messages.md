[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Params$Resource$Rooms$Conversations$Messages

# Interface: Params$Resource$Rooms$Conversations$Messages

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Params$Resource$Rooms$Conversations$Messages

## Hierarchy

- `StandardParameters`

  ↳ **`Params$Resource$Rooms$Conversations$Messages`**

## Table of contents

### Properties

- [$.xgafv](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#$.xgafv)
- [access\_token](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#access_token)
- [alt](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#alt)
- [auth](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#auth)
- [callback](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#callback)
- [fields](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#fields)
- [key](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#key)
- [oauth\_token](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#oauth_token)
- [parent](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#parent)
- [prettyPrint](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#prettyprint)
- [quotaUser](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#quotauser)
- [requestBody](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#requestbody)
- [threadKey](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#threadkey)
- [uploadType](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#uploadtype)
- [upload\_protocol](google_chat_sdk.chat_v1.Params_Resource_Rooms_Conversations_Messages.md#upload_protocol)

## Properties

### $.xgafv

• `Optional` **$.xgafv**: `string`

V1 error format.

#### Inherited from

StandardParameters.$.xgafv

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:16

___

### access\_token

• `Optional` **access\_token**: `string`

OAuth access token.

#### Inherited from

StandardParameters.access\_token

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:20

___

### alt

• `Optional` **alt**: `string`

Data format for response.

#### Inherited from

StandardParameters.alt

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:24

___

### auth

• `Optional` **auth**: `string` \| `OAuth2Client` \| `JWT` \| `Compute` \| `UserRefreshClient` \| `BaseExternalAccountClient` \| `GoogleAuth`

Auth client or API Key for the request

#### Inherited from

StandardParameters.auth

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:12

___

### callback

• `Optional` **callback**: `string`

JSONP

#### Inherited from

StandardParameters.callback

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:28

___

### fields

• `Optional` **fields**: `string`

Selector specifying which fields to include in a partial response.

#### Inherited from

StandardParameters.fields

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:32

___

### key

• `Optional` **key**: `string`

API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Inherited from

StandardParameters.key

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:36

___

### oauth\_token

• `Optional` **oauth\_token**: `string`

OAuth 2.0 token for the current user.

#### Inherited from

StandardParameters.oauth\_token

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:40

___

### parent

• `Optional` **parent**: `string`

Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2114

___

### prettyPrint

• `Optional` **prettyPrint**: `boolean`

Returns response with indentations and line breaks.

#### Inherited from

StandardParameters.prettyPrint

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:44

___

### quotaUser

• `Optional` **quotaUser**: `string`

Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

#### Inherited from

StandardParameters.quotaUser

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:48

___

### requestBody

• `Optional` **requestBody**: [`Schema$Message`](google_chat_sdk.chat_v1.Schema_Message.md)

Request body metadata

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2122

___

### threadKey

• `Optional` **threadKey**: `string`

Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2118

___

### uploadType

• `Optional` **uploadType**: `string`

Legacy upload protocol for media (e.g. "media", "multipart").

#### Inherited from

StandardParameters.uploadType

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:52

___

### upload\_protocol

• `Optional` **upload\_protocol**: `string`

Upload protocol for media (e.g. "raw", "multipart").

#### Inherited from

StandardParameters.upload\_protocol

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:56
