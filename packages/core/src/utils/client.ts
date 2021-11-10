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

import {chat, auth} from '@googleapis/chat';
import {
  BaseExternalAccountClient,
  Compute,
  JWT,
  OAuth2Client,
  UserRefreshClient,
} from 'googleapis-common';
import {GoogleAuth} from 'google-auth-library';

export const DEFAULT_AUTH = new auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/chat.bot'],
});

export const chatApiClient = chat({
  version: 'v1',
  auth: DEFAULT_AUTH,
});

export type AuthClients =
  | string
  | OAuth2Client
  | JWT
  | Compute
  | UserRefreshClient
  | BaseExternalAccountClient
  | GoogleAuth;
