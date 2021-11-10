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

import express, {Request, Response} from 'express';
import http from 'http';
import {BaseTransport, TransportEventContext} from '..';
import bearerToken from 'express-bearer-token';
import assert from 'assert';
import {Event} from "../../types/event";
import Debug from 'debug';
import {authenticateRequest} from "./auth";
import { chat_v1 } from '@googleapis/chat';

const debug = Debug('chat:transport');

/**
 * Options for configuring the HTTP transport
 */
export interface HttpOptions {
  /** Port number to listen on */
  port: number;
  /** Path to mount, defaults to '/' */
  path: string;
  /** Whether or not app is behind a proxy and should trust X-Forward-For headers */
  trustProxy: boolean;
  /** Project # for bot to validate JWTs */
  projectNumber: number | string | undefined;
}

/**
 * Default options.
 */
const DEFAULT_OPTIONS = {
  port: 3000,
  path: '/',
  trustProxy: true,
  projectNumber: undefined,
};

/**
 * Wraps the request/response for dispatching as an event.
 */
class HttpEvent implements TransportEventContext {
  readonly event: Event;
  private sent = false

  constructor(private transport: HttpTransport, private req: Request, private res: Response) {
    this.event = this.req.body as Event;
  }

  ack() {
    if (!this.sent) {
      debug('Acknowledging messaging with empty 200 status');
      this.sent = true;
      this.res.status(200);
      this.res.end();
    }
  }

  async reply(message: chat_v1.Schema$Message): Promise<void> {
    debug('Replying to message with payload: %O', message);
    await this.transport.emit('sendMessage', message);
    try {
      if (this.sent) {
        assert(this.event.space?.name);
        await this.transport.sendAsync(this.event.space?.name, message);
      } else {
        this.sent = true;
        this.res.status(200).json(message);
      }
    } finally {
      await this.transport.emit('messageSent', message);
    }
  }
}

/**
 * Express-based implementation of transport, for web-hook style bots.
 */
export class HttpTransport extends BaseTransport {
  /** Express app instance */
  readonly app = express();
  /** Router specific to the bot. Middleware is enabled here instead of the app. */
  readonly router = express.Router();
  private readonly options: HttpOptions;
  private server: http.Server | undefined;

  constructor(options?: Partial<HttpOptions>) {
    super();
    this.options = Object.assign({}, DEFAULT_OPTIONS, options ?? {});
    this.app.set('trust proxy', this.options.trustProxy);
    this.router.use(express.json());
    this.router.use(bearerToken());

    if (this.options.projectNumber === undefined) {
      console.log("WARNING: Project number is not configured, authentication of messages is disabled.");
    } else {
      this.router.use(authenticateRequest(this.options.projectNumber));
    }

    this.router.post('/', async (req, res) => {
      debug('Received request');
      const ctx = new HttpEvent(this, req, res);
      try {
        await this.emit('messageReceived', ctx);
      } catch (err) {
        debug('Unexpected error dispatching event: %O', err);
        await this.emit('error', err);
        res.status(500).json(err);
      }
    });

    this.app.use(this.options.path, this.router);
  }

  async start() {
    debug('Starting HTTPS transport');
    return new Promise<void>((resolve, reject) => {
      this.server = this.app.listen(this.options.port, () => {
        if (arguments.length && arguments[0]) {
          return reject(arguments[0]);
        }
        console.log('Running on port %d', this.options.port);
        console.log('Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  async stop() {
    debug('Stopping HTTPS transport');
    if (this.server) {
      return new Promise<void>((resolve, reject) => {
        this.server!.close((err) => {
          if (err) {
            return reject(err);
          }
          console.log('Server stopped.');
          this.server = undefined;
          resolve();
        });
      });
    }
  }
}
