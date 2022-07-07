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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpTransport = void 0;
const express_1 = __importDefault(require("express"));
const __1 = require("..");
const express_bearer_token_1 = __importDefault(require("express-bearer-token"));
const assert_1 = __importDefault(require("assert"));
const debug_1 = __importDefault(require("debug"));
const auth_1 = require("./auth");
const gcpMetadata = __importStar(require("gcp-metadata"));
const client_1 = require("../../utils/client");
const debug = (0, debug_1.default)('chat:transport');
/**
 * Default options.
 */
const DEFAULT_OPTIONS = {
    port: 8080,
    path: '/',
    trustProxy: true,
    projectNumber: undefined,
    credentials: client_1.DEFAULT_AUTH,
};
const PROJECT_NUMBER_ENV_KEY = 'PROJECT_NUMBER';
const PORT_NUMBER_ENV_KEY = 'PORT';
/**
 * Attempts to autoconfigure the transport based on the environment (e.g. GCP metadata + env vars)
 */
async function autoconfigure() {
    const options = { ...DEFAULT_OPTIONS };
    const hasMetadata = await gcpMetadata.isAvailable();
    if (hasMetadata) {
        // If on GCP, fetch project # for verifying JWTs
        const projectId = await gcpMetadata.project('numeric-project-id');
        options.projectNumber = Number(projectId);
    }
    else if (process.env[PROJECT_NUMBER_ENV_KEY]) {
        options.projectNumber = Number(process.env[PROJECT_NUMBER_ENV_KEY]);
    }
    if (process.env[PORT_NUMBER_ENV_KEY]) {
        options.port = Number(process.env[PORT_NUMBER_ENV_KEY]);
    }
    return options;
}
/**
 * Wraps the request/response for dispatching as an event.
 */
class HttpEvent {
    constructor(transport, req, res) {
        this.transport = transport;
        this.req = req;
        this.res = res;
        this.sent = false;
        this.event = this.req.body;
    }
    ack() {
        if (!this.sent) {
            debug('Acknowledging messaging with empty 200 status');
            this.sent = true;
            this.res.status(200);
            this.res.end();
        }
    }
    async reply(message) {
        debug('Replying to message with payload: %O', message);
        if (this.sent) {
            (0, assert_1.default)(this.event.space?.name);
            if ((0, __1.isUpdate)(message) && this.event.message?.name) {
                await this.transport.updateAsync(this.event.message.name, message);
                return;
            }
            await this.transport.sendAsync(this.event.space?.name, message);
        }
        else {
            this.sent = true;
            this.res.status(200).json(message);
        }
    }
}
/**
 * Express-based implementation of transport, for web-hook style bots.
 */
class HttpTransport extends __1.BaseTransport {
    constructor(options) {
        super();
        /** Express app instance */
        this.app = (0, express_1.default)();
        /** Router specific to the bot. Middleware is enabled here instead of the app. */
        this.router = express_1.default.Router();
        if (options) {
            this.options = Object.assign({}, DEFAULT_OPTIONS, options);
            this.deferredInit(this.options);
        }
    }
    deferredInit(options) {
        this.options = options;
        this.app.set('trust proxy', options.trustProxy);
        this.app.use(options.path, this.router);
        this.router.use(express_1.default.json());
        this.router.use((0, express_bearer_token_1.default)());
        if (options.projectNumber === undefined) {
            console.log('WARNING: Project number is not configured, authentication of messages is disabled.');
        }
        else {
            this.router.use((0, auth_1.authenticateRequest)(options.projectNumber));
        }
        this.router.post('/', async (req, res) => {
            debug('Received request');
            const ctx = new HttpEvent(this, req, res);
            try {
                await this.emit('messageReceived', ctx);
            }
            catch (err) {
                debug('Unexpected error dispatching event: %O', err);
                await this.emit('error', err);
                res.status(500).json(err);
            }
        });
        if (options.credentials) {
            this.auth = Promise.resolve(options.credentials);
        }
    }
    async start() {
        debug('Starting HTTPS transport');
        if (!this.options) {
            this.options = await autoconfigure();
            this.deferredInit(this.options);
        }
        const port = this.options.port;
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(port, (...args) => {
                if (args.length && args[0]) {
                    return reject(args[0]);
                }
                console.log('Running on port %d', port);
                console.log('Press CTRL-C to stop\n');
                resolve();
            });
        });
    }
    async stop() {
        debug('Stopping HTTPS transport');
        if (this.server) {
            return new Promise((resolve, reject) => {
                this.server.close(err => {
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
exports.HttpTransport = HttpTransport;
//# sourceMappingURL=index.js.map