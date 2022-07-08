[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$ListSpacesResponse

# Interface: Schema$ListSpacesResponse

[chat_v1](../modules/chat_v1.md).Schema$ListSpacesResponse

## Table of contents

### Properties

- [nextPageToken](chat_v1.Schema_ListSpacesResponse.md#nextpagetoken)
- [spaces](chat_v1.Schema_ListSpacesResponse.md#spaces)

## Properties

### nextPageToken

• `Optional` **nextPageToken**: ``null`` \| `string`

Continuation token to retrieve the next page of results. It will be empty for the last page of results. Tokens expire in an hour. An error is thrown if an expired token is passed.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1096

___

### spaces

• `Optional` **spaces**: [`Schema$Space`](chat_v1.Schema_Space.md)[]

List of spaces in the requested (or first) page.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1100
