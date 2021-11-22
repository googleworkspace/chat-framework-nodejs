[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$Annotation

# Interface: Schema$Annotation

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$Annotation

Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" \}, "type":"MENTION" \} \}] ```

## Table of contents

### Properties

- [length](google_chat_sdk.chat_v1.Schema_Annotation.md#length)
- [slashCommand](google_chat_sdk.chat_v1.Schema_Annotation.md#slashcommand)
- [startIndex](google_chat_sdk.chat_v1.Schema_Annotation.md#startindex)
- [type](google_chat_sdk.chat_v1.Schema_Annotation.md#type)
- [userMention](google_chat_sdk.chat_v1.Schema_Annotation.md#usermention)

## Properties

### length

• `Optional` **length**: ``null`` \| `number`

Length of the substring in the plain-text message body this annotation corresponds to.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:127

___

### slashCommand

• `Optional` **slashCommand**: [`Schema$SlashCommandMetadata`](google_chat_sdk.chat_v1.Schema_SlashCommandMetadata.md)

The metadata for a slash command.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:131

___

### startIndex

• `Optional` **startIndex**: ``null`` \| `number`

Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:135

___

### type

• `Optional` **type**: ``null`` \| `string`

The type of this annotation.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:139

___

### userMention

• `Optional` **userMention**: [`Schema$UserMentionMetadata`](google_chat_sdk.chat_v1.Schema_UserMentionMetadata.md)

The metadata of user mention.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:143
