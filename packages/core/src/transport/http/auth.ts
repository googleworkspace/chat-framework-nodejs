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

import express from 'express';
import {jwtVerify} from 'jose/jwt/verify';
import {createRemoteJWKSet} from 'jose/jwks/remote';
import Debug from 'debug';
import {URL} from 'url';

const debug = Debug('chat:transport');

const CHAT_JWT_ISSUER = 'chat@system.gserviceaccount.com';
const JWKS = createRemoteJWKSet(
  new URL(`https://www.googleapis.com/robot/v1/metadata/jwk/${CHAT_JWT_ISSUER}`)
);

/**
 * Express middleware for authenticating chat requests.
 * @param projectNumber - Project # for the bot, used to validate the audience.
 * @returns Express middleware handler
 */
export function authenticateRequest(
  projectNumber: number | string
): express.Handler {
  const audience = `${projectNumber}`;
  return async (req, res, next) => {
    const jwt = req.token;
    if (!jwt) {
      debug('Unable to authenticate request, no token present');
      res.sendStatus(401);
      return;
    }
    try {
      const {payload} = await jwtVerify(jwt, JWKS, {
        issuer: CHAT_JWT_ISSUER,
        audience: audience,
      });
      debug('Decoded JWT: %O', payload);
    } catch (err) {
      debug('Unable to authenticate request: %O', err);
      res.sendStatus(401);
      return;
    }
    next();
  };
}
