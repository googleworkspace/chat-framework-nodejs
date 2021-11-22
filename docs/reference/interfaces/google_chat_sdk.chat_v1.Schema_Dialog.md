[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$Dialog

# Interface: Schema$Dialog

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$Dialog

Wrapper around the card body of the dialog.

## Table of contents

### Properties

- [body](google_chat_sdk.chat_v1.Schema_Dialog.md#body)

## Properties

### body

• `Optional` **body**: [`Schema$GoogleAppsCardV1Card`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md)

Body of the dialog, which will be rendered in a modal. NOTE: The following fields within the objects are not supported: google.apps.card.v1.Widget.date_time_picker google.apps.card.v1.DecoratedText.SwitchControl.on_change_action google.apps.card.v1.TextInput.on_change_action google.apps.card.v1.SelectionInput.on_change_action google.apps.card.v1.DateTimePicker.on_change_action Setting the fields above will have no effect on the dialog.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:385
