[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Params$Resource$Spaces$Messages$Update

# Interface: Params$Resource$Spaces$Messages$Update

[chat_v1](../modules/chat_v1.md).Params$Resource$Spaces$Messages$Update

## Hierarchy

- `StandardParameters`

  ↳ **`Params$Resource$Spaces$Messages$Update`**

## Table of contents

### Properties

- [$.xgafv](chat_v1.Params_Resource_Spaces_Messages_Update.md#$.xgafv)
- [access\_token](chat_v1.Params_Resource_Spaces_Messages_Update.md#access_token)
- [alt](chat_v1.Params_Resource_Spaces_Messages_Update.md#alt)
- [auth](chat_v1.Params_Resource_Spaces_Messages_Update.md#auth)
- [callback](chat_v1.Params_Resource_Spaces_Messages_Update.md#callback)
- [fields](chat_v1.Params_Resource_Spaces_Messages_Update.md#fields)
- [key](chat_v1.Params_Resource_Spaces_Messages_Update.md#key)
- [name](chat_v1.Params_Resource_Spaces_Messages_Update.md#name)
- [oauth\_token](chat_v1.Params_Resource_Spaces_Messages_Update.md#oauth_token)
- [prettyPrint](chat_v1.Params_Resource_Spaces_Messages_Update.md#prettyprint)
- [quotaUser](chat_v1.Params_Resource_Spaces_Messages_Update.md#quotauser)
- [requestBody](chat_v1.Params_Resource_Spaces_Messages_Update.md#requestbody)
- [updateMask](chat_v1.Params_Resource_Spaces_Messages_Update.md#updatemask)
- [uploadType](chat_v1.Params_Resource_Spaces_Messages_Update.md#uploadtype)
- [upload\_protocol](chat_v1.Params_Resource_Spaces_Messages_Update.md#upload_protocol)

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

### name

• `Optional` **name**: `string`

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2863

___

### oauth\_token

• `Optional` **oauth\_token**: `string`

OAuth 2.0 token for the current user.

#### Inherited from

StandardParameters.oauth\_token

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:40

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

• `Optional` **requestBody**: [`Schema$Message`](chat_v1.Schema_Message.md)

Request body metadata

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2871

___

### updateMask

• `Optional` **updateMask**: `string`

Required. The field paths to be updated, comma separated if there are multiple. Currently supported field paths: * text * cards * gsuite_message_integration_render_data * attachment

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:2867

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
