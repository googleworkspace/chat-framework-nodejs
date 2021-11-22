[Google Chat SDK](../README.md) / @google/chat-sdk

# Module: @google/chat-sdk

## Table of contents

### Namespaces

- [chat\_v1](google_chat_sdk.chat_v1.md)

### Classes

- [Bot](../classes/google_chat_sdk.Bot.md)
- [EventContext](../classes/google_chat_sdk.EventContext.md)
- [FormInputValue](../classes/google_chat_sdk.FormInputValue.md)
- [FormInputs](../classes/google_chat_sdk.FormInputs.md)
- [HttpTransport](../classes/google_chat_sdk.HttpTransport.md)
- [PubSubTransport](../classes/google_chat_sdk.PubSubTransport.md)

### Interfaces

- [FetchOptions](../interfaces/google_chat_sdk.FetchOptions.md)
- [HttpOptions](../interfaces/google_chat_sdk.HttpOptions.md)
- [LifecycleEvents](../interfaces/google_chat_sdk.LifecycleEvents.md)
- [PubSubOptions](../interfaces/google_chat_sdk.PubSubOptions.md)
- [SendOptions](../interfaces/google_chat_sdk.SendOptions.md)
- [Transport](../interfaces/google_chat_sdk.Transport.md)
- [TransportEventContext](../interfaces/google_chat_sdk.TransportEventContext.md)
- [TransportEvents](../interfaces/google_chat_sdk.TransportEvents.md)

### Type aliases

- [AuthClients](google_chat_sdk.md#authclients)
- [EventHandler](google_chat_sdk.md#eventhandler)

### Variables

- [chatApiClient](google_chat_sdk.md#chatapiclient)

### Functions

- [fetchAttachment](google_chat_sdk.md#fetchattachment)

## Type aliases

### AuthClients

Ƭ **AuthClients**: `string` \| `OAuth2Client` \| `JWT` \| `Compute` \| `UserRefreshClient` \| `BaseExternalAccountClient` \| `GoogleAuth`

#### Defined in

[packages/core/src/utils/client.ts:36](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/utils/client.ts#L36)

___

### EventHandler

Ƭ **EventHandler**: (`context`: [`EventContext`](../classes/google_chat_sdk.EventContext.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`context`): `Promise`<`void`\>

Callbacks for handling events

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`EventContext`](../classes/google_chat_sdk.EventContext.md) |

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/bot.ts:56](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/bot.ts#L56)

## Variables

### chatApiClient

• **chatApiClient**: [`Chat`](../classes/google_chat_sdk.chat_v1.Chat.md)

#### Defined in

[packages/core/src/utils/client.ts:31](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/utils/client.ts#L31)

## Functions

### fetchAttachment

▸ **fetchAttachment**(`attachment`, `options?`): `Promise`<`Readable`\>

Fetch an attachment. Currently only media downloads are supported. Drive attachments
can not be downloaded as the bot is not automatically added to the ACL. However, the Drive
API can be used with end user oauth credentials if the bot requests access.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachment` | [`Schema$Attachment`](../interfaces/google_chat_sdk.chat_v1.Schema_Attachment.md) | Attachment info from chat message |
| `options?` | `Partial`<[`FetchOptions`](../interfaces/google_chat_sdk.FetchOptions.md)\> |  |

#### Returns

`Promise`<`Readable`\>

Readable stream.

#### Defined in

[packages/core/src/utils/attachment.ts:41](https://github.com/googlestaging/chat-framework-nodejs/blob/1a0ee86/packages/core/src/utils/attachment.ts#L41)
