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

import {Event} from '../types/event';
import Emittery from 'emittery';
import {AuthClients, chatApiClient} from '../utils/client';
import {chat_v1} from '@googleapis/chat';
import Debug from 'debug';
const debug = Debug('chat:transport');

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

type PublicEmitterMethods = Pick<
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
}

/**
 * Base interface for transports
 */
export class BaseTransport
  extends Emittery<TransportEvents>
  implements Transport
{
  /** Start listening */
  async start() {}
  /** Stop listening */
  async stop() {}

  /**
   * Sends an async message to a space
   * @param spaceName
   * @param message
   * @param options
   */
  async sendAsync(
    spaceName: string,
    message: chat_v1.Schema$Message,
    options?: Partial<SendOptions>
  ): Promise<chat_v1.Schema$Message> {
    const request: chat_v1.Params$Resource$Spaces$Messages$Create =
      Object.assign(
        {
          parent: spaceName,
          requestBody: message,
        },
        options
      );
    debug('Sending async message: %O', request);
    const res = await chatApiClient.spaces.messages.create(request);
    return res.data;
  }
}
