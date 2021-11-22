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

import {EventContext} from './context';
import {SendOptions, Transport, TransportEventContext} from './transport';
import {HttpTransport, HttpOptions} from './transport/http';
import {PubSubTransport, PubSubOptions} from './transport/pubsub';
import autobind from 'auto-bind';
import {chat_v1} from '@googleapis/chat';
import Emittery from 'emittery';
// @ts-ignore
import {URLPattern} from 'urlpattern-polyfill/dist/index.umd.js';
import type {URLPatternInit} from './types/urlpattern';
import assert from 'assert';
import Debug from 'debug';
import {MatchedUrl} from './types/message';

const debug = Debug('chat:bot');

/**
 * Typo info for lifecycle events emitted by bot
 */
export interface LifecycleEvents {
  started: void;
  stopped: void;
  eventReceived: EventContext; // Before an event is dispatched
  error: unknown; // Unhandled exception during dispatch
}

/**
 * Typo info for events emitted by bot
 */
interface Events extends LifecycleEvents {
  space_add: EventContext;
  space_remove: EventContext;
  command: EventContext;
  unfurl: EventContext;
  action: EventContext;
  message: EventContext;
}

/** Callbacks for handling events */
export type EventHandler = (context: EventContext) => Promise<void>;

type FilterFn = (context: EventContext) => boolean;
type CommandInfo = {id: number; name: string};

/**
 * Retrieves the slash command id and name if present.
 *
 * @param message
 * @return command id & name or undefined if not present in event.
 */
function findSlashCommandInfo(
  message: chat_v1.Schema$Message
): CommandInfo | undefined {
  if (!message.annotations) {
    return undefined;
  }
  for (const annotation of message.annotations) {
    if (annotation.type !== 'SLASH_COMMAND') {
      continue;
    }
    const id = parseInt(annotation.slashCommand!.commandId!);
    const name = annotation.slashCommand!.commandName!;
    return {id, name};
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
function wrapHandler(handler: EventHandler, filter?: FilterFn): EventHandler {
  return async (ctx: EventContext) => {
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
export class Bot {
  private _transport: Transport | undefined;
  private _emitter = new Emittery<Events>();

  /**
   * Createa bot with given transport.
   * @param transport
   */
  constructor(transport?: Transport) {
    this.transport = transport;
  }

  on<Name extends keyof LifecycleEvents>(
    eventName: Name,
    listener: (eventData: LifecycleEvents[Name]) => void | Promise<void>
  ): Emittery.UnsubscribeFn {
    return this._emitter.on(eventName, listener);
  }

  off<Name extends keyof LifecycleEvents>(
    eventName: Name,
    listener: (eventData: LifecycleEvents[Name]) => void | Promise<void>
  ): void {
    this._emitter.off(eventName, listener);
  }

  /**
   * Replaces the current transport
   * @param transport
   */
  set transport(transport: Transport | undefined) {
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

  get transport(): Transport | undefined {
    return this._transport;
  }

  /**
   * Convenience factory method for building a bot with the HTTP transport.
   * @param options
   */
  static http(options: Partial<HttpOptions>) {
    const transport = new HttpTransport(options);
    return new Bot(transport);
  }

  /**
   * Convenience factory method for building a bot with the pubsub transport.
   * @param options
   */
  static pubsub(options: Partial<PubSubOptions>) {
    const transport = new PubSubTransport(options);
    return new Bot(transport);
  }

  /**
   * Starts the underlying transport and begins listening for events.
   */
  async start() {
    debug('Starting bot...');
    assert(this.transport);
    await this.transport.start();
    debug('Bot started');
  }

  /**
   * Stops the bot amd underlying transport.
   */
  async stop() {
    debug('Stopping bot...');
    assert(this.transport);
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
  command(command: number | string, handler: EventHandler): void {
    debug('Registering slash command handler: %s', command.toString);
    const matcher: FilterFn = ctx => {
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
  addedToSpace(handler: EventHandler): void {
    debug('Registering ADDED_TO_SPACE event handler');
    this._emitter.on('space_add', wrapHandler(handler));
  }

  /**
   * Registers a handler for when the bot is removed from a space.
   *
   * @param handler - function to handle matching incoming messages
   */
  removedFromSpace(handler: EventHandler): void {
    debug('Registering REMOVED_FROM_SPACE event handler');
    this._emitter.on('space_remove', wrapHandler(handler));
  }

  /**
   * Registers a handler for text messages/at-mentions. Handlers can either handle all mentions, or
   * can use regular expresses to route matching text to different handlers. Note that when multiple
   * message handlers are registered, they're evaluated in the order registered. Only the first matching
   * handler is executed.
   *
   * ```typescript
   * // Match help requests (e.g. "@mybot help")
   * bot.message(/help/, ctx => {
   *   // ...
   * });
   *
   * // Catch all other messages
   * bot.message(ctx => {
   *   // ...
   * });
   * ```
   *
   * @param handler - function to handle matching incoming messages
   */
  message(handler: EventHandler): void;

  /**
   * Registers a handler for text messages/at-mentions. Handlers can either handle all mentions, or
   * can use regular expresses to route matching text to different handlers. Note that when multiple
   * message handlers are registered, they're evaluated in the order registered. Only the first matching
   * handler is executed.
   *
   * ```typescript
   * // Match help requests (e.g. "@mybot help")
   * bot.message(/help/, ctx => {
   *   // ...
   * });
   *
   * // Catch all other messages
   * bot.message(ctx => {
   *   // ...
   * });
   * ```
   *
   * @param pattern - Only handle messages matching this regular expression.
   * @param handler - function to handle matching incoming messages
   */
  message(pattern: RegExp | string, handler: EventHandler): void;

  message(
    handlerOrPattern: RegExp | string | EventHandler,
    handler?: EventHandler
  ): void {
    if (handler) {
      debug('Registering message handler with filter: %O', handlerOrPattern);
      const re = new RegExp(handlerOrPattern as RegExp | string);
      const matcher: FilterFn = ctx => {
        return re.test(ctx.messageText ?? '');
      };
      this._emitter.on(
        'message',
        wrapHandler(async ctx => {
          ctx.regExpExecResult = re.exec(ctx.messageText ?? '') ?? undefined;
          await handler(ctx);
        }, matcher)
      );
    } else {
      debug('Registering catch-all message handler');
      this._emitter.on(
        'message',
        wrapHandler(handlerOrPattern as EventHandler)
      );
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
  action(actionName: string, handler: EventHandler): void {
    debug('Registering action handler: %s', actionName);
    const matcher: FilterFn = ctx => {
      return actionName === ctx.event.action?.actionMethodName;
    };
    this._emitter.on('action', wrapHandler(handler, matcher));
  }

  /**
   * Registers a handler for link unfurling events. Either all URL matches
   * can be handled by a single callback, or pattern matching can be
   * used to register multiple handlers.
   *
   * URL pattern matching is based on [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
   * (currently via polyfill.) Capturing groups are also supported and the resulting matches are injected
   * into the request context in the `urlPatternResult` property.
   *
   * ```typescript
   * // Match URL by pattern (string syntax)
   * bot.unfurl('*\\://www.example.com/books/:bookId/chapter/:chapterId', ctx => {
   *   // ...
   * });
   *
   * // Match URL by pattern (URLPatternInit)
   * bot.unfurl({
   *   hostname: ':subdomain.example.com'
   * }, ctx => {
   *   // ...
   * });
   *
   * // Catch-all handler for unfurls
   * bot.unfurl(ctx => {
   *   // ...
   * });
   * ```
   *
   * @param handler - function to handle matching incoming messages
   */
  unfurl(handler: EventHandler): void;
  /**
   * Registers a handler for link unfurling events. Either all URL matches
   * can be handled by a single callback, or pattern matching can be
   * used to register multiple handlers.
   *
   * URL pattern matching is based on [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
   * (currently via polyfill.) Capturing groups are also supported and the resulting matches are injected
   * into the request context in the `urlPatternResult` property.
   *
   * ```typescript
   * // Match URL by pattern (string syntax)
   * bot.unfurl('*\\://www.example.com/books/:bookId/chapter/:chapterId', ctx => {
   *   // ...
   * });
   *
   * // Match URL by pattern (URLPatternInit)
   * bot.unfurl({
   *   hostname: ':subdomain.example.com'
   * }, ctx => {
   *   // ...
   * });
   *
   * // Catch-all handler for unfurls
   * bot.unfurl(ctx => {
   *   // ...
   * });
   * ```
   *
   * @param pattern - string or object pattern to match with
   * @param handler - function to handle matching incoming messages
   */
  unfurl(pattern: string | URLPatternInit, handler: EventHandler): void;
  unfurl(
    patternOrHandler: string | URLPatternInit | EventHandler,
    handler?: EventHandler
  ): void {
    if (handler) {
      debug('Registering link unfurl handler: %s', patternOrHandler);
      const re = new URLPattern(patternOrHandler as string | URLPatternInit);
      const matcher: FilterFn = ctx => {
        const url = (ctx.message as MatchedUrl)?.matchedUrl?.url;
        return url !== undefined && re.test(url);
      };
      this._emitter.on(
        'unfurl',
        wrapHandler(async ctx => {
          // Preprocess the request to inject matched patterns from the URL
          debug('Injecting URL parameters into request');
          const url = (ctx.message as MatchedUrl)!.matchedUrl!.url;
          ctx.urlPatternResult = re.exec(url) ?? undefined;
          await handler(ctx);
        }, matcher)
      );
    } else {
      debug('Registering catch-all link unfurl handler');
      this._emitter.on('unfurl', wrapHandler(patternOrHandler as EventHandler));
    }
  }

  /**
   * Sends an unsolicited message to a space.
   *
   * @param spaceName - Resource name of space to message
   * @param message - Message body
   * @param options
   */
  async sendMessage(
    spaceName: string,
    message: chat_v1.Schema$Message,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message> {
    assert(this.transport);
    return this.transport.sendAsync(spaceName, message, options);
  }

  /**
   * Internal event dispatching. Infers the event type based on the underlying
   * event type and presence of fields.
   *
   * @param msg
   * @protected
   */
  protected async dispatch(msg: TransportEventContext) {
    debug('Dispatching event: %O', msg.event);
    try {
      const event = msg.event;
      const context = autobind(new EventContext(this, msg));
      await this._emitter.emit('eventReceived', context);
      let eventName: keyof Events | undefined;

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
      } else if (event.type === 'CARD_CLICKED') {
        eventName = 'action';
      } else if (event.type === 'MESSAGE') {
        eventName = 'message';
        const slashCommand = findSlashCommandInfo(event.message!);
        if (slashCommand) {
          eventName = 'command';
        } else if (
          (event.message as MatchedUrl).matchedUrl?.url !== undefined
        ) {
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
    } catch (err) {
      await this._emitter.emit('error', err);
    }
  }
}
