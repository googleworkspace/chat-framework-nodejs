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
exports.Bot = void 0;
const context_1 = require("./context");
const http_1 = require("./transport/http");
const pubsub_1 = require("./transport/pubsub");
const auto_bind_1 = __importDefault(require("auto-bind"));
const emittery_1 = __importDefault(require("emittery"));
require("urlpattern-polyfill");
const assert_1 = __importDefault(require("assert"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('chat:bot');
/**
 * Retrieves the slash command id and name if present.
 *
 * @param message
 * @return command id & name or undefined if not present in event.
 */
function findSlashCommandInfo(message) {
    if (!message.annotations) {
        return undefined;
    }
    for (const annotation of message.annotations) {
        if (annotation.type !== 'SLASH_COMMAND') {
            continue;
        }
        const id = parseInt(annotation.slashCommand.commandId);
        const name = annotation.slashCommand.commandName;
        return { id, name };
    }
    return undefined;
}
/**
 * Decorates a user-supplied handler to customize distpatching logic. Adds a filter function and logic for preventing
 * multiple handlers from executing on the same event.
 * @param handler
 * @param filter
 * @return decorated handler
 */
function wrapHandler(handler, filter) {
    return async (ctx) => {
        if (ctx.handled) {
            debug('Event already handled, skipping handler');
            return;
        }
        if (filter === undefined || filter(ctx)) {
            debug('Invoking handler for event');
            await handler(ctx);
            ctx.handled = true;
        }
    };
}
/**
 * Represent a chat bot/app and provides simplified routing/dispatching of events to handlers.
 *
 * A minimal echo bot:
 *
 * ```typescript
 * import { Bot } from '@google/chat-app'
 *
 * const bot = Bot.http({
 *  projectNumber: parseInt(process.env.GOOGLE_PROJECT_NUMBER)
 * }
 *
 * bot.message((messageText, reply) => {
 *   reply({
 *     text: `Echo: ${messageText}`
 *   });
 * });
 *
 * bot.start();
 * ```
 *
 */
class Bot {
    /**
     * Createa bot with given transport.
     * @param transport
     */
    constructor(transport) {
        this._emitter = new emittery_1.default();
        this.transport = transport;
    }
    on(eventName, listener) {
        return this._emitter.on(eventName, listener);
    }
    off(eventName, listener) {
        this._emitter.off(eventName, listener);
    }
    /**
     * Replaces the current transport
     * @param transport
     */
    set transport(transport) {
        if (this._transport !== undefined) {
            this._transport.clearListeners();
        }
        debug('Setting transport: %O', transport);
        this._transport = transport;
        if (this._transport) {
            this._transport.on('messageReceived', this.dispatch.bind(this));
            this._transport.on('error', err => this._emitter.emit('error', err));
        }
    }
    get transport() {
        return this._transport;
    }
    /**
     * Convenience factory method for building a bot with the HTTP transport.
     * @param options
     */
    static http(options) {
        const transport = new http_1.HttpTransport(options);
        return new Bot(transport);
    }
    /**
     * Convenience factory method for building a bot with the pubsub transport.
     * @param options
     */
    static pubsub(options) {
        const transport = new pubsub_1.PubSubTransport(options);
        return new Bot(transport);
    }
    /**
     * Starts the underlying transport and begins listening for events.
     */
    async start() {
        debug('Starting bot...');
        (0, assert_1.default)(this.transport);
        await this.transport.start();
        debug('Bot started');
    }
    /**
     * Stops the bot amd underlying transport.
     */
    async stop() {
        debug('Stopping bot...');
        (0, assert_1.default)(this.transport);
        await this.transport.stop();
        debug('Bot stopped');
    }
    /**
     * Registers a slash command handler. Slash commands can be registered either by
     * the numberic command ID or the command name itself (including the leading slash.)
     *
     * via command id:
     *
     * ```typescript
     * bot.command(1, ctx => {
     *   // ...
     * });
     * ```
     *
     * or by name:
     *
     * ```typescript
     * bot.command('/poll', ctx => {
     *   /// ...
     * });
     * ```
     *
     * @param command - command id or name
     * @param handler - function to handle matching incoming messages
     */
    command(command, handler) {
        debug('Registering slash command handler: %s', command.toString);
        const matcher = ctx => {
            if (!ctx.message) {
                return false;
            }
            const invokedCommand = findSlashCommandInfo(ctx.message);
            debug('Matching: %s %O', command, invokedCommand);
            return invokedCommand?.name === command || invokedCommand?.id === command;
        };
        this._emitter.on('command', wrapHandler(handler, matcher));
    }
    /**
     * Registers a handler for when the bot is added to a space. Note that in some cases
     * a bot may be added to a space via an at-mention. In those cases, a separate
     * synthentic message event will also be dispatched.
     *
     * @param handler - function to handle matching incoming messages
     */
    addedToSpace(handler) {
        debug('Registering ADDED_TO_SPACE event handler');
        this._emitter.on('space_add', wrapHandler(handler));
    }
    /**
     * Registers a handler for when the bot is removed from a space.
     *
     * @param handler - function to handle matching incoming messages
     */
    removedFromSpace(handler) {
        debug('Registering REMOVED_FROM_SPACE event handler');
        this._emitter.on('space_remove', wrapHandler(handler));
    }
    message(handlerOrPattern, handler) {
        if (handler) {
            debug('Registering message handler with filter: %O', handlerOrPattern);
            const re = new RegExp(handlerOrPattern);
            const matcher = ctx => {
                return re.test(ctx.messageText ?? '');
            };
            this._emitter.on('message', wrapHandler(async (ctx) => {
                ctx.regExpExecResult = re.exec(ctx.messageText ?? '') ?? undefined;
                await handler(ctx);
            }, matcher));
        }
        else {
            debug('Registering catch-all message handler');
            this._emitter.on('message', wrapHandler(handlerOrPattern));
        }
    }
    /**
     * Registers a handler for card actions (interactive cards and dialogs.)
     *
     * ```typescript
     * bot.action('submit_form', ctx => {
     *   // ...
     * });
     * ```
     *
     * @param actionName - Name of action (corresponds to actionMethodName in onclick action)
     * @param handler - function to handle matching incoming messages
     */
    action(actionName, handler) {
        debug('Registering action handler: %s', actionName);
        const matcher = ctx => {
            return actionName === ctx.event.action?.actionMethodName;
        };
        this._emitter.on('action', wrapHandler(handler, matcher));
    }
    unfurl(patternOrHandler, handler) {
        if (handler) {
            debug('Registering link unfurl handler: %s', patternOrHandler);
            const re = new URLPattern(patternOrHandler);
            const matcher = ctx => {
                const url = ctx.message?.matchedUrl?.url;
                return url !== undefined && re.test(url);
            };
            this._emitter.on('unfurl', wrapHandler(async (ctx) => {
                // Preprocess the request to inject matched patterns from the URL
                debug('Injecting URL parameters into request');
                const url = ctx.message.matchedUrl.url;
                ctx.urlPatternResult = re.exec(url) ?? undefined;
                await handler(ctx);
            }, matcher));
        }
        else {
            debug('Registering catch-all link unfurl handler');
            this._emitter.on('unfurl', wrapHandler(patternOrHandler));
        }
    }
    /**
     * Sends an unsolicited message to a space.
     *
     * @param spaceName - Resource name of space to message
     * @param message - Message body
     * @param options
     */
    async sendMessage(spaceName, message, options) {
        (0, assert_1.default)(this.transport);
        return this.transport.sendAsync(spaceName, message, options);
    }
    /**
     * Sends an unsolicited request to update an existing message.
     *
     * @param spaceName - Resource name of space to message
     * @param message - Message body
     * @param options
     */
    async updateMessage(messageName, message, options) {
        (0, assert_1.default)(this.transport);
        return this.transport.updateAsync(messageName, message, options);
    }
    /**
     * Internal event dispatching. Infers the event type based on the underlying
     * event type and presence of fields.
     *
     * @param msg
     * @protected
     */
    async dispatch(msg) {
        debug('Dispatching event: %O', msg.event);
        try {
            const event = msg.event;
            const context = (0, auto_bind_1.default)(new context_1.EventContext(this, msg));
            await this._emitter.emit('eventReceived', context);
            let eventName;
            if (event.type === 'ADDED_TO_SPACE') {
                // Dispatch add to space first as a separate event. Event *may* also contain
                // a message to the bot, which will be dispatched separately.
                await this._emitter.emitSerial('space_add', context);
                if (event.message) {
                    // If message, mark as unhandled so it can be dispatched again
                    context.handled = false;
                    context.event.type = 'MESSAGE';
                }
            }
            if (event.type === 'REMOVED_FROM_SPACE') {
                eventName = 'space_remove';
            }
            else if (event.type === 'CARD_CLICKED') {
                eventName = 'action';
            }
            else if (event.type === 'MESSAGE') {
                eventName = 'message';
                const slashCommand = findSlashCommandInfo(event.message);
                if (slashCommand) {
                    eventName = 'command';
                }
                else if (event.message.matchedUrl?.url !== undefined) {
                    eventName = 'unfurl';
                }
            }
            if (eventName === undefined) {
                debug('Unrecognized event, nothing to dispatch');
                await msg.ack();
                await context.finish();
                return;
            }
            // Important: Emit serially since only one handler should
            // handle the message. This gives initial handlers the opportunity
            // to decide if handled or not without risking race conditions.
            await this._emitter.emitSerial(eventName, context);
            await msg.ack();
            await context.finish();
        }
        catch (err) {
            debug(err);
            await this._emitter.emit('error', err);
        }
    }
}
exports.Bot = Bot;
//# sourceMappingURL=bot.js.map