[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$Image

# Interface: Schema$Image

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$Image

An image that is specified by a URL and can have an onclick action.

## Table of contents

### Properties

- [aspectRatio](google_chat_sdk.chat_v1.Schema_Image.md#aspectratio)
- [imageUrl](google_chat_sdk.chat_v1.Schema_Image.md#imageurl)
- [onClick](google_chat_sdk.chat_v1.Schema_Image.md#onclick)

## Properties

### aspectRatio

• `Optional` **aspectRatio**: ``null`` \| `number`

The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1005

___

### imageUrl

• `Optional` **imageUrl**: ``null`` \| `string`

The URL of the image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1009

___

### onClick

• `Optional` **onClick**: [`Schema$OnClick`](google_chat_sdk.chat_v1.Schema_OnClick.md)

The onclick action.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1013
