Google Chat SDK

# Google Chat SDK

## Table of contents

### Namespaces

- [chat\_v1](modules/chat_v1.md)

### Classes

- [Bot](classes/Bot.md)
- [EventContext](classes/EventContext.md)
- [FormInputValue](classes/FormInputValue.md)
- [FormInputs](classes/FormInputs.md)
- [HttpTransport](classes/HttpTransport.md)
- [PubSubTransport](classes/PubSubTransport.md)

### Interfaces

- [FetchOptions](interfaces/FetchOptions.md)
- [HttpOptions](interfaces/HttpOptions.md)
- [LifecycleEvents](interfaces/LifecycleEvents.md)
- [PubSubOptions](interfaces/PubSubOptions.md)
- [SendOptions](interfaces/SendOptions.md)
- [Transport](interfaces/Transport.md)
- [TransportEventContext](interfaces/TransportEventContext.md)
- [TransportEvents](interfaces/TransportEvents.md)

### Type aliases

- [AuthClients](README.md#authclients)
- [EventHandler](README.md#eventhandler)

### Variables

- [chatApiClient](README.md#chatapiclient)

### Functions

- [fetchAttachment](README.md#fetchattachment)

## Type aliases

### AuthClients

Ƭ **AuthClients**: `string` \| `OAuth2Client` \| `JWT` \| `Compute` \| `UserRefreshClient` \| `BaseExternalAccountClient` \| `GoogleAuth` \| `Impersonated` \| `undefined`

#### Defined in

[packages/core/src/utils/client.ts:36](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/utils/client.ts#L36)

___

### EventHandler

Ƭ **EventHandler**: (`context`: [`EventContext`](classes/EventContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`context`): `Promise`<`void`\>

Callbacks for handling events

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`EventContext`](classes/EventContext.md) |

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:55](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/bot.ts#L55)

## Variables

### chatApiClient

• `Const` **chatApiClient**: [`Chat`](classes/chat_v1.Chat.md)

#### Defined in

[packages/core/src/utils/client.ts:31](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/utils/client.ts#L31)

## Functions

### fetchAttachment

▸ **fetchAttachment**(`attachment`, `options?`): `Promise`<`Readable`\>

Fetch an attachment. Currently only media downloads are supported. Drive attachments
can not be downloaded as the bot is not automatically added to the ACL. However, the Drive
API can be used with end user oauth credentials if the bot requests access.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachment` | [`Schema$Attachment`](interfaces/chat_v1.Schema_Attachment.md) | Attachment info from chat message |
| `options?` | `Partial`<[`FetchOptions`](interfaces/FetchOptions.md)\> |  |

#### Returns

`Promise`<`Readable`\>

Readable stream.

#### Defined in

[packages/core/src/utils/attachment.ts:41](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/utils/attachment.ts#L41)
