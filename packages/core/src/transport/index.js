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
exports.isUpdate = exports.BaseTransport = void 0;
const emittery_1 = __importDefault(require("emittery"));
const client_1 = require("../utils/client");
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('chat:transport');
function filterObject(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(entry => keys.indexOf(entry[0]) !== -1));
}
/**
 * Base interface for transports
 */
class BaseTransport extends emittery_1.default {
    constructor() {
        super(...arguments);
        this.auth = Promise.resolve(client_1.DEFAULT_AUTH);
    }
    /** Start listening */
    async start() { }
    /** Stop listening */
    async stop() { }
    /**
     * Sends an async message to a space
     * @param spaceName
     * @param message
     * @param options
     */
    async sendAsync(spaceName, message, options) {
        const request = Object.assign({
            parent: spaceName,
            requestBody: message,
            auth: await this.auth,
        }, options);
        debug('Sending async message: %O', request);
        const res = await client_1.chatApiClient.spaces.messages.create(request);
        return res.data;
    }
    /**
     * Sends an async message to a space
     * @param spaceName
     * @param message
     * @param options
     */
    async updateAsync(messageName, message, options) {
        const keys = ['text', 'cards', 'cardsV2', 'attachments'];
        const filteredMessage = filterObject(message, keys);
        const request = Object.assign({
            name: messageName,
            updateMask: Object.keys(filteredMessage).join(','),
            requestBody: filteredMessage,
            auth: await this.auth,
        }, options);
        debug('Sending async message update: %O', request);
        const res = await client_1.chatApiClient.spaces.messages.update(request);
        return res.data;
    }
}
exports.BaseTransport = BaseTransport;
function isUpdate(message) {
    if (!message) {
        return false;
    }
    const types = ['UPDATE_MESSAGE', 'UPDATE_USER_MESSAGE_CARDS'];
    return (message.actionResponse?.type && types.includes(message.actionResponse.type));
}
exports.isUpdate = isUpdate;
//# sourceMappingURL=index.js.map