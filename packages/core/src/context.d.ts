import { chat_v1 } from '@googleapis/chat';
import { SendOptions, TransportEventContext } from './transport';
import { Event } from './types/event';
import { FormInputs } from './form';
import { Bot } from './bot';
import Emittery from 'emittery';
export interface Events {
    finish: EventContext;
}
export interface CardsV2 {
    cardsV2?: {
        id: string;
        card: chat_v1.Schema$GoogleAppsCardV1Card;
    };
}
/**
 * Context provided to event handlers. This provides access to the underlying event
 * as well as a set of convenience accessors and methods for commonly used fields
 * and operations such as replying to the message, closing or updating dialogs, etc.
 *
 * All fields can be safely destructured in handlers.
 */
export declare class EventContext extends Emittery<Events> {
    private bot;
    private transportContext;
    /** The raw event from chat */
    event: Event;
    /**
     * Whether or not this event has been handled. Used internally.
     * @internal
     */
    handled: boolean;
    /**
     * Unique ID for keying any conversation related storage. Maps to either
     * the space name or thread name depending on the space settings.
     */
    conversationKey: string;
    /**
     * For pattern-matched unfurl events, contains the result of the `URLPattern.exec()` call for access
     * to any capturing groups in the pattern.
     */
    urlPatternResult: URLPatternResult | undefined;
    /**
     * For regexp matches on messages, the result of the `exec` call.
     */
    regExpExecResult: RegExpExecArray | undefined;
    constructor(bot: Bot, transportContext: TransportEventContext);
    /** @internal */
    finish(): Promise<void>;
    /**
     * Wraps and returns form inputs for easier access.
     */
    get formInputs(): FormInputs;
    /**
     * Returns any action parameters in the event.
     */
    get parameters(): Record<string, string>;
    /**
     * Returns the message portion of the event, if present.
     */
    get message(): chat_v1.Schema$Message | undefined;
    /**
     * Returns the user that triggered the event.
     */
    get user(): chat_v1.Schema$User | undefined;
    /**
     * Returns the trimmed text supplied by the user.
     */
    get messageText(): string | undefined;
    /**
     * Acks receipt of the message. Handlers should call this method if handling the event
     * but not sending any other reply.
     */
    ack(): void;
    /**
     * Replies to the message in the current event. The thread name is automatically injected
     * into the message.
     *
     * @param message
     */
    reply(message: chat_v1.Schema$Message & CardsV2): Promise<void>;
    /**
     * For interactive cards and unfurl requests, performs an in-place update of message that triggered this event.
     *
     * @param message
     */
    updateMessage(message: chat_v1.Schema$Message & CardsV2): Promise<void>;
    /**
     * Displays or updates the dialog presented to users. Only valid for slash commands and action events
     * where a dialog is expected to be displayed.
     *
     * @param body
     */
    showDialog(body: chat_v1.Schema$GoogleAppsCardV1Card): Promise<void>;
    /**
     * Closes a dialog. Only valid for action events initiated from a dialog.
     *
     * @param toast
     */
    closeDialog(toast?: string): Promise<void>;
    /**
     * Creates a new message in response to the current thread. This message is sent asynchronously, not as a reply
     * to the current event.
     *
     * @param message
     */
    newMessageInThread(message: chat_v1.Schema$Message): Promise<chat_v1.Schema$Message>;
    /**
     * Creates a new thread in the current space. This message is sent asynchronously, not as a reply
     * to the current event.
     *
     * @param message
     * @param options
     */
    newMessageInSpace(message: chat_v1.Schema$Message, options?: Partial<SendOptions>): Promise<chat_v1.Schema$Message>;
}
