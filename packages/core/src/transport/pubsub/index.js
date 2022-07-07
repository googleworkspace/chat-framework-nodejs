"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubTransport = void 0;
const __1 = require("..");
const pubsub_1 = require("@google-cloud/pubsub");
const assert_1 = __importDefault(require("assert"));
const debug_1 = __importDefault(require("debug"));
const client_1 = require("../../utils/client");
const debug = (0, debug_1.default)('chat:transport');
const SUBSCRIPTION_NAME_ENV_KEY = 'GOOGLE_CHAT_SUBSCRIPTION_NAME';
/**
 * Wraps the pubsub event for dispatching.
 */
class PubSubEvent {
    constructor(transport, message) {
        this.transport = transport;
        this.message = message;
        this.acknowledged = false;
        const content = this.message.data.toString('utf-8');
        this.event = JSON.parse(content);
    }
    ack() {
        debug('Acknowledging message');
        if (!this.acknowledged) {
            this.message.ack();
            this.acknowledged = true;
        }
    }
    async reply(message) {
        debug('Replying with payload: %O', message);
        (0, assert_1.default)(this.event.space?.name);
        this.ack();
        if ((0, __1.isUpdate)(message) && this.event.message?.name) {
            await this.transport.updateAsync(this.event.message.name, message);
            return;
        }
        await this.transport.sendAsync(this.event.space?.name, message);
    }
}
/**
 * Pubsub-based implementation of transport.
 */
class PubSubTransport extends __1.BaseTransport {
    constructor(options) {
        super();
        this.pubSubClient = new pubsub_1.PubSub();
        const defaultOpts = {
            subscriptionName: process.env[SUBSCRIPTION_NAME_ENV_KEY] ?? undefined,
            credentials: client_1.DEFAULT_AUTH,
        };
        this.options = Object.assign({}, defaultOpts, options ?? {});
    }
    async start() {
        debug('Starting pubsub transport');
        (0, assert_1.default)(this.options.subscriptionName);
        if (this.options.credentials) {
            this.auth = Promise.resolve(this.options.credentials);
        }
        this.subscription = this.pubSubClient.subscription(this.options.subscriptionName);
        this.subscription.on('message', async (msg) => {
            debug('Received message: %O', msg);
            const ctx = new PubSubEvent(this, msg);
            try {
                await this.emit('messageReceived', ctx);
            }
            catch (err) {
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
exports.PubSubTransport = PubSubTransport;
//# sourceMappingURL=index.js.map