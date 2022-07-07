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
exports.authenticateRequest = void 0;
const jose_1 = require("jose");
const jose_2 = require("jose");
const debug_1 = __importDefault(require("debug"));
const url_1 = require("url");
const debug = (0, debug_1.default)('chat:transport');
const CHAT_JWT_ISSUER = 'chat@system.gserviceaccount.com';
const JWKS = (0, jose_2.createRemoteJWKSet)(new url_1.URL(`https://www.googleapis.com/robot/v1/metadata/jwk/${CHAT_JWT_ISSUER}`));
/**
 * Express middleware for authenticating chat requests.
 * @param projectNumber - Project # for the bot, used to validate the audience.
 * @returns Express middleware handler
 */
function authenticateRequest(projectNumber) {
    const audience = `${projectNumber}`;
    return async (req, res, next) => {
        const jwt = req.token;
        if (!jwt) {
            debug('Unable to authenticate request, no token present');
            res.sendStatus(401);
            return;
        }
        try {
            const { payload } = await (0, jose_1.jwtVerify)(jwt, JWKS, {
                issuer: CHAT_JWT_ISSUER,
                audience: audience,
            });
            debug('Decoded JWT: %O', payload);
        }
        catch (err) {
            debug('Unable to authenticate request: %O', err);
            res.sendStatus(401);
            return;
        }
        next();
    };
}
exports.authenticateRequest = authenticateRequest;
//# sourceMappingURL=auth.js.map