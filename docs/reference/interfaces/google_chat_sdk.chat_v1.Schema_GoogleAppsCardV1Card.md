[Google Chat SDK](../README.md) / [@google/chat-sdk](../modules/google_chat_sdk.md) / [chat\_v1](../modules/google_chat_sdk.chat_v1.md) / Schema$GoogleAppsCardV1Card

# Interface: Schema$GoogleAppsCardV1Card

[@google/chat-sdk](../modules/google_chat_sdk.md).[chat_v1](../modules/google_chat_sdk.chat_v1.md).Schema$GoogleAppsCardV1Card

A card is a UI element that can contain UI widgets such as text and images. For more information, see Cards . For example, the following JSON creates a card that has a header with the name, position, icons, and link for a contact, followed by a section with contact information like email and phone number. ``` { "header": { "title": "Heba Salam", "subtitle": "Software Engineer", "imageStyle": "ImageStyle.AVATAR", "imageUrl": "https://example.com/heba_salam.png", "imageAltText": "Avatar for Heba Salam" \}, "sections" : [ { "header": "Contact Info", "widgets": [ { "decorated_text": { "icon": { "knownIcon": "EMAIL" \}, "content": "heba.salam@example.com" \} \}, { "decoratedText": { "icon": { "knownIcon": "PERSON" \}, "content": "Online" \} \}, { "decoratedText": { "icon": { "knownIcon": "PHONE" \}, "content": "+1 (555) 555-1234" \} \}, { "buttons": [ { "textButton": { "text": "Share", \}, "onClick": { "openLink": { "url": "https://example.com/share" \} \} \}, { "textButton": { "text": "Edit", \}, "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \} ] \} ], "collapsible": true, "uncollapsibleWidgetsCount": 3 \} ], "cardActions": [ { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ], "name": "contact-card-K3wB6arF2H9L" \} ```

## Table of contents

### Properties

- [cardActions](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#cardactions)
- [displayStyle](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#displaystyle)
- [fixedFooter](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#fixedfooter)
- [header](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#header)
- [name](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#name)
- [peekCardHeader](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#peekcardheader)
- [sections](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Card.md#sections)

## Properties

### cardActions

• `Optional` **cardActions**: [`Schema$GoogleAppsCardV1CardAction`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardAction.md)[]

The actions of this card. They are added to a card's generated toolbar menu. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Setting", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \}, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ] ```

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:517

___

### displayStyle

• `Optional` **displayStyle**: ``null`` \| `string`

The display style for peekCardHeader.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:521

___

### fixedFooter

• `Optional` **fixedFooter**: [`Schema$GoogleAppsCardV1CardFixedFooter`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardFixedFooter.md)

The fixed footer shown at the bottom of this card.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:525

___

### header

• `Optional` **header**: [`Schema$GoogleAppsCardV1CardHeader`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardHeader.md)

The header of the card. A header usually contains a title and an image.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:529

___

### name

• `Optional` **name**: ``null`` \| `string`

Name of the card, which is used as a identifier for the card in card navigation.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:533

___

### peekCardHeader

• `Optional` **peekCardHeader**: [`Schema$GoogleAppsCardV1CardHeader`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1CardHeader.md)

When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:537

___

### sections

• `Optional` **sections**: [`Schema$GoogleAppsCardV1Section`](google_chat_sdk.chat_v1.Schema_GoogleAppsCardV1Section.md)[]

Sections are separated by a line divider.

#### Defined in

node_modules/@googleapis/chat/build/v1.d.ts:541
