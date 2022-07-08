[Google Chat SDK](../README.md) / PubSubOptions

# Interface: PubSubOptions

Options for configuring the pubsub transport

## Table of contents

### Properties

- [credentials](PubSubOptions.md#credentials)
- [subscriptionName](PubSubOptions.md#subscriptionname)

## Properties

### credentials

• **credentials**: [`AuthClients`](../README.md#authclients) \| `Promise`<[`AuthClients`](../README.md#authclients)\>

Credentials used to identify bot. Defaults to ADC if unspecified.

#### Defined in

[packages/core/src/transport/pubsub/index.ts:35](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/pubsub/index.ts#L35)

___

### subscriptionName

• **subscriptionName**: `undefined` \| `string`

Name of the subscription to listen on

#### Defined in

[packages/core/src/transport/pubsub/index.ts:33](https://github.com/googleworkspace/chat-framework-nodejs/blob/aa06265/packages/core/src/transport/pubsub/index.ts#L33)
