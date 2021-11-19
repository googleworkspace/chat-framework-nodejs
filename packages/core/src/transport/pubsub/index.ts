/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TransportEventContext, BaseTransport} from '..';
import {PubSub, Message, Subscription} from '@google-cloud/pubsub';
import assert from 'assert';
import {chat_v1} from '@googleapis/chat';
import {Event} from '../../types/event';
import Debug from 'debug';

const debug = Debug('chat:transport');

const SUBSCRIPTION_NAME_ENV_KEY = 'GOOGLE_CHAT_SUBSCRIPTION_NAME';

/**
 * Options for configuring the pubsub transport
 */
export interface PubSubOptions {
  /** Name of the subscription to listen on */
  subscriptionName: string | undefined;
}

/**
 * Wraps the pubsub event for dispatching.
 */
class PubSubEvent implements TransportEventContext {
  readonly event: Event;
  private acknowledged = false;

  constructor(private adapter: PubSubTransport, private message: Message) {
    const content = this.message.data.toString('utf-8');
    this.event = JSON.parse(content);
  }

  ack(): void {
    debug('Acknowledging message');
    if (!this.acknowledged) {
      this.message.ack();
      this.acknowledged = true;
    }
  }

  async reply(message: chat_v1.Schema$Message): Promise<void> {
    debug('Replying with payload: %O', message);
    assert(this.event.space?.name);
    this.ack();
    await this.adapter.sendAsync(this.event.space?.name, message);
  }
}

/**
 * Pubsub-based implementation of transport.
 */
export class PubSubTransport extends BaseTransport {
  private options: PubSubOptions;
  private pubSubClient: PubSub;
  private subscription: Subscription | undefined;

  constructor(options?: Partial<PubSubOptions>) {
    super();
    this.pubSubClient = new PubSub();
    const defaultOpts = {
      subscriptionName: process.env[SUBSCRIPTION_NAME_ENV_KEY] ?? undefined,
    };
    this.options = Object.assign({}, defaultOpts, options ?? {});
  }

  async start() {
    debug('Starting pubsub transport');
    assert(this.options.subscriptionName);
    this.subscription = this.pubSubClient.subscription(
      this.options.subscriptionName
    );

    this.subscription.on('message', async (msg: Message) => {
      debug('Received message: %O', msg);
      const ctx = new PubSubEvent(this, msg);
      try {
        await this.emit('messageReceived', ctx);
      } catch (err) {
        debug('Unexpected error dispatch events: %O', err);
        msg.nack();
        this.emit('error', err);
      }
    });

    this.subscription.on('error', err => {
      debug('Received transport error: %O', err);
      this.emit('error', err);
    });
  }

  async stop() {
    debug('Stopping pubsub transport');
    if (!this.subscription) {
      return;
    }
    this.subscription.close();
    this.subscription = undefined;
  }
}
