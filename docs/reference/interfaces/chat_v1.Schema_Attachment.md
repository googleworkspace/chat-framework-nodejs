[Google Chat SDK](../README.md) / [chat\_v1](../modules/chat_v1.md) / Schema$Attachment

# Interface: Schema$Attachment

[chat_v1](../modules/chat_v1.md).Schema$Attachment

An attachment in Google Chat.

## Table of contents

### Properties

- [attachmentDataRef](chat_v1.Schema_Attachment.md#attachmentdataref)
- [contentName](chat_v1.Schema_Attachment.md#contentname)
- [contentType](chat_v1.Schema_Attachment.md#contenttype)
- [downloadUri](chat_v1.Schema_Attachment.md#downloaduri)
- [driveDataRef](chat_v1.Schema_Attachment.md#drivedataref)
- [name](chat_v1.Schema_Attachment.md#name)
- [source](chat_v1.Schema_Attachment.md#source)
- [thumbnailUri](chat_v1.Schema_Attachment.md#thumbnailuri)

## Properties

### attachmentDataRef

• `Optional` **attachmentDataRef**: [`Schema$AttachmentDataRef`](chat_v1.Schema_AttachmentDataRef.md)

A reference to the attachment data. This is used with the media API to download the attachment data.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:152

___

### contentName

• `Optional` **contentName**: ``null`` \| `string`

The original file name for the content, not the full path.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:156

___

### contentType

• `Optional` **contentType**: ``null`` \| `string`

The content type (MIME type) of the file.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:160

___

### downloadUri

• `Optional` **downloadUri**: ``null`` \| `string`

Output only. The download URL which should be used to allow a human user to download the attachment. Bots should not use this URL to download attachment content.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:164

___

### driveDataRef

• `Optional` **driveDataRef**: [`Schema$DriveDataRef`](chat_v1.Schema_DriveDataRef.md)

A reference to the drive attachment. This is used with the Drive API.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:168

___

### name

• `Optional` **name**: ``null`` \| `string`

Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:172

___

### source

• `Optional` **source**: ``null`` \| `string`

The source of the attachment.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:176

___

### thumbnailUri

• `Optional` **thumbnailUri**: ``null`` \| `string`

Output only. The thumbnail URL which should be used to preview the attachment to a human user. Bots should not use this URL to download attachment content.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:180
