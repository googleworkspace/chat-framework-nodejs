[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$ListMembershipsResponse

# Interface: Schema$ListMembershipsResponse

[chat_v1](../modules/chat_v1.md).Schema$ListMembershipsResponse

## Table of contents

### Properties

- [memberships](chat_v1.Schema_ListMembershipsResponse.md#memberships)
- [nextPageToken](chat_v1.Schema_ListMembershipsResponse.md#nextpagetoken)

## Properties

### memberships

• `Optional` **memberships**: [`Schema$Membership`](chat_v1.Schema_Membership.md)[]

List of memberships in the requested (or first) page.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1086

___

### nextPageToken

• `Optional` **nextPageToken**: ``null`` \| `string`

Continuation token to retrieve the next page of results. It will be empty for the last page of results.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:1090
