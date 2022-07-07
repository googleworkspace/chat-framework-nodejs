import {Event} from '../types/event';
import Emittery from 'emittery';
import {AuthClients} from '../utils/client';
import {chat_v1} from '@googleapis/chat';
/**
 * Type info for events emitted by transport
 */
export interface TransportEvents {
  messageReceived: TransportEventContext;
  error: unknown;
}
export interface SendOptions {
  threadKey?: string;
  auth?: AuthClients;
}
/**
 * Wrapper event for events received by a transport.
 */
export interface TransportEventContext {
  /** Event message from chat */
  readonly event: Event;
  /** Ack receipt when no reply is being sent. */
  ack(): void;
  /** Send a message as a reply */
  reply(message: chat_v1.Schema$Message): Promise<void>;
}
declare type PublicEmitterMethods = Pick<
  Emittery<TransportEvents>,
  'on' | 'off' | 'clearListeners'
>;
export interface Transport extends PublicEmitterMethods {
  start(): Promise<void>;
  stop(): Promise<void>;
  sendAsync(
    spaceName: string,
    message: chat_v1.Schema$Message,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message>;
  updateAsync(
    messageName: string,
    message: Partial<chat_v1.Schema$Message>,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message>;
}
/**
 * Base interface for transports
 */
export declare class BaseTransport
  extends Emittery<TransportEvents>
  implements Transport
{
  auth: Promise<AuthClients> | undefined;
  /** Start listening */
  start(): Promise<void>;
  /** Stop listening */
  stop(): Promise<void>;
  /**
   * Sends an async message to a space
   * @param spaceName
   * @param message
   * @param options
   */
  sendAsync(
    spaceName: string,
    message: chat_v1.Schema$Message,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message>;
  /**
   * Sends an async message to a space
   * @param spaceName
   * @param message
   * @param options
   */
  updateAsync(
    messageName: string,
    message: Partial<chat_v1.Schema$Message>,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message>;
}
export declare function isUpdate(
  message?: chat_v1.Schema$Message
): boolean | '' | null | undefined;
export {};
