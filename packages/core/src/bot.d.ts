import { EventContext } from './context';
import { SendOptions, Transport, TransportEventContext } from './transport';
import { HttpOptions } from './transport/http';
import { PubSubOptions } from './transport/pubsub';
import { chat_v1 } from '@googleapis/chat';
import Emittery from 'emittery';
import 'urlpattern-polyfill';
/**
 * Typo info for lifecycle events emitted by bot
 */
export interface LifecycleEvents {
    started: void;
    stopped: void;
    eventReceived: EventContext;
    error: unknown;
}
/** Callbacks for handling events */
export declare type EventHandler = (context: EventContext) => Promise<void>;
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
export declare class Bot {
    private _transport;
    private _emitter;
    /**
     * Createa bot with given transport.
     * @param transport
     */
    constructor(transport?: Transport);
    on<Name extends keyof LifecycleEvents>(eventName: Name, listener: (eventData: LifecycleEvents[Name]) => void | Promise<void>): Emittery.UnsubscribeFn;
    off<Name extends keyof LifecycleEvents>(eventName: Name, listener: (eventData: LifecycleEvents[Name]) => void | Promise<void>): void;
    /**
     * Replaces the current transport
     * @param transport
     */
    set transport(transport: Transport | undefined);
    get transport(): Transport | undefined;
    /**
     * Convenience factory method for building a bot with the HTTP transport.
     * @param options
     */
    static http(options: Partial<HttpOptions>): Bot;
    /**
     * Convenience factory method for building a bot with the pubsub transport.
     * @param options
     */
    static pubsub(options: Partial<PubSubOptions>): Bot;
    /**
     * Starts the underlying transport and begins listening for events.
     */
    start(): Promise<void>;
    /**
     * Stops the bot amd underlying transport.
     */
    stop(): Promise<void>;
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
    command(command: number | string, handler: EventHandler): void;
    /**
     * Registers a handler for when the bot is added to a space. Note that in some cases
     * a bot may be added to a space via an at-mention. In those cases, a separate
     * synthentic message event will also be dispatched.
     *
     * @param handler - function to handle matching incoming messages
     */
    addedToSpace(handler: EventHandler): void;
    /**
     * Registers a handler for when the bot is removed from a space.
     *
     * @param handler - function to handle matching incoming messages
     */
    removedFromSpace(handler: EventHandler): void;
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
    action(actionName: string, handler: EventHandler): void;
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
    /**
     * Sends an unsolicited message to a space.
     *
     * @param spaceName - Resource name of space to message
     * @param message - Message body
     * @param options
     */
    sendMessage(spaceName: string, message: chat_v1.Schema$Message, options?: Partial<SendOptions>): Promise<chat_v1.Schema$Message>;
    /**
     * Sends an unsolicited request to update an existing message.
     *
     * @param spaceName - Resource name of space to message
     * @param message - Message body
     * @param options
     */
    updateMessage(messageName: string, message: Partial<chat_v1.Schema$Message>, options?: Partial<SendOptions>): Promise<chat_v1.Schema$Message>;
    /**
     * Internal event dispatching. Infers the event type based on the underlying
     * event type and presence of fields.
     *
     * @param msg
     * @protected
     */
    protected dispatch(msg: TransportEventContext): Promise<void>;
}
