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

import {chat_v1} from '@googleapis/chat';
import {TransportEventContext} from './transport';
import {Event} from "./types/event";
import {FormInputs} from "./form";
import {Bot} from "./bot";
import type { URLPatternResult } from './types/urlpattern';

/**
 * Context provided to event handlers. This provides access to the underlying event
 * as well as a set of convenience accessors and methods for commonly used fields
 * and operations such as replying to the message, closing or updating dialogs, etc.
 *
 * All fields can be safely destructured in handlers.
 */
export class EventContext {
  /** The raw event from chat */
  event: Event;
  /** Whether or not this event has been handled. Used internally. */
  handled = false;
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

  constructor(private bot: Bot, private transportContext: TransportEventContext) {
    this.event = transportContext.event;

    if (this.event.space?.threaded && this.event.message) {
      this.conversationKey = this.event.message!.thread!.name!;
    } else {
      this.conversationKey = this.event.space!.name!;
    }
  }

  /**
   * Wraps and returns form inputs for easier access.
   */
  get formInputs(): FormInputs {
    return new FormInputs(this.event.common?.formInputs ?? {});
  }

  /**
   * Returns any action parameters in the event.
   */
  get parameters(): Record<string, string> {
    return this.event.common?.parameters || {};
  }

  /**
   * Returns the message portion of the event, if present.
   */
  get message(): chat_v1.Schema$Message | undefined {
    return this.event.message;
  }

  /**
   * Returns the user that triggered the event.
   */
  get user(): chat_v1.Schema$User | undefined {
    return this.event.user;
  }

  /**
   * Returns the trimmed text supplied by the user.
   */
  get messageText(): string | undefined {
    let text = this.message?.argumentText?.trim();
    if (text === undefined || text == '') {
      return undefined;
    }
    return text;
  }

  /**
   * Acks receipt of the message. Handlers should call this method if handling the event
   * but not sending any other reply.
   */
  ack(): void {
    this.transportContext.ack();
  }

  /**
   * Replies to the message in the current event. The thread name is automatically injected
   * into the message.
   *
   * @param message
   */
  async reply(message: chat_v1.Schema$Message) {
    message = Object.assign({
      thread: this.event.message?.thread
    }, message);
    return this.transportContext.reply(message);
  }

  /**
   * For interactive cards and unfurl requests, performans an in-place update of message that triggered this event.
   *
   * @param message
   */
  async updateMessage(message: chat_v1.Schema$Message) {
    const actionResponseType = this.event.message?.sender?.type === 'HUMAN' ?
      'UPDATE_USER_MESSAGE_CARDS' :
      'UPDATE_MESSAGE';
    message = Object.assign({
      thread: this.event.message?.thread,
      actionResponse: {
        type: actionResponseType
      }
    }, message);
    return this.transportContext.reply(message);
  }

  /**
   * Displays or updates the dialog presented to users. Only valid for slash commands and action events
   * where a dialog is expected to be displayed.
   *
   * @param body
   */
  async showDialog(body: chat_v1.Schema$GoogleAppsCardV1Card) {
    return this.reply({
      actionResponse: {
        type: 'DIALOG',
        dialogAction: {
          dialog: {
            body: body,
          },
        },
      }
    });
  }

  /**
   * Closes a dialog. Only valid for action events initiated from a dialog.
   *
   * @param toast
   */
  async closeDialog(toast?: string) {
    return this.reply({
      actionResponse: {
        type: 'DIALOG',
        dialogAction: {
          actionStatus: {
            statusCode: 'OK',
            userFacingMessage: toast
          },
        },
      }
    });
  }

  /**
   * Creates a new message in response to the current thread. This message is sent asynchronously, not as a reply
   * to the current event.
   *
   * @param message
   */
  async newMessageInThread(message: chat_v1.Schema$Message): Promise<chat_v1.Schema$Message> {
    message = Object.assign({
      thread: this.event.message?.thread
    }, message);
    return this.bot.sendMessage(this.event.space?.name!, message);
  }

  /**
   * Creates a new thread in the current space. This message is sent asynchronously, not as a reply
   * to the current event.
   *
   * @param message
   */
  async newMessageInSpace(message: chat_v1.Schema$Message): Promise<chat_v1.Schema$Message> {
    return this.bot.sendMessage(this.event.space?.name!, message);
  }
}
