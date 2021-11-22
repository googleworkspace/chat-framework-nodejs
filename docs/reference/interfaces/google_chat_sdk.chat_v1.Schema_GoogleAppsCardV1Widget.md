[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1Widget

# Interface: Schema$GoogleAppsCardV1Widget

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1Widget

A widget is a UI element that presents texts, images, etc.

## Table of contents

### Properties

- [buttonList](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#buttonlist)
- [dateTimePicker](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#datetimepicker)
- [decoratedText](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#decoratedtext)
- [divider](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#divider)
- [grid](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#grid)
- [horizontalAlignment](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#horizontalalignment)
- [image](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#image)
- [selectionInput](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#selectioninput)
- [textInput](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#textinput)
- [textParagraph](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Widget.md#textparagraph)

## Properties

### buttonList

• `Optional` **buttonList**: [`Schema$GoogleAppsCardV1ButtonList`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1ButtonList.md)

A list of buttons. For example, the following JSON creates two buttons. The first is a filled text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ "button": { "text": "Edit", "Color": { "Red": 255 "Green": 255 "Blue": 255 \} "disabled": true \}, "button": { "icon": { "knownIcon": "INVITE" "altText": "check calendar" \}, "onClick": { "openLink": { "url": "https://example.com/calendar" \} \} \}, ] \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:960

___

### dateTimePicker

• `Optional` **dateTimePicker**: [`Schema$GoogleAppsCardV1DateTimePicker`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1DateTimePicker.md)

Displays a selection/input widget for date/time. For example, the following JSON creates a date/time picker for an appointment time: ``` "date_time_picker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DateTimePickerType.DATE_AND_TIME", "valueMsEpoch": "796435200000" \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:964

___

### decoratedText

• `Optional` **decoratedText**: [`Schema$GoogleAppsCardV1DecoratedText`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1DecoratedText.md)

Displays a decorated text item in this widget. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" \}, "topLabel": "Email Address", "content": "heba.salam@example.com", "bottomLabel": "This is a new Email address!", "switchWidget": { "name": "has_send_welcome_email_to_heba_salam", "selected": false, "controlType": "ControlType.CHECKBOX" \} \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:968

___

### divider

• `Optional` **divider**: [`Schema$GoogleAppsCardV1Divider`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Divider.md)

Displays a divider. For example, the following JSON creates a divider: ``` "divider": { \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:972

___

### grid

• `Optional` **grid**: [`Schema$GoogleAppsCardV1Grid`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Grid.md)

Displays a grid with a collection of items. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 \}, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" \} \} \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:976

___

### horizontalAlignment

• `Optional` **horizontalAlignment**: ``null`` \| `string`

The horizontal alignment of this widget.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:980

___

### image

• `Optional` **image**: [`Schema$GoogleAppsCardV1Image`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Image.md)

Displays an image in this widget. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://example.com/heba_salam.png" "altText": "Avatar for Heba Salam" \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:984

___

### selectionInput

• `Optional` **selectionInput**: [`Schema$GoogleAppsCardV1SelectionInput`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1SelectionInput.md)

Displays a switch control in this widget. For example, the following JSON creates a dropdown selection for size: ``` "switchControl": { "name": "size", "label": "Size" "type": "SelectionType.DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false \}, { "text": "M", "value": "medium", "selected": true \}, { "text": "L", "value": "large", "selected": false \}, { "text": "XL", "value": "extra_large", "selected": false \} ] \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:988

___

### textInput

• `Optional` **textInput**: [`Schema$GoogleAppsCardV1TextInput`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1TextInput.md)

Displays a text input in this widget. For example, the following JSON creates a text input for mail address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" \} ``` As another example, the following JSON creates a text input for programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" \}, { "text": "Java" \}, { "text": "JavaScript" \}, { "text": "Python" \} ] \} \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:992

___

### textParagraph

• `Optional` **textParagraph**: [`Schema$GoogleAppsCardV1TextParagraph`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1TextParagraph.md)

Displays a text paragraph in this widget. For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" \} ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:996
