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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatApiClient = exports.DEFAULT_AUTH = void 0;
const chat_1 = require("@googleapis/chat");
exports.DEFAULT_AUTH = new chat_1.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/chat.bot'],
});
exports.chatApiClient = (0, chat_1.chat)({
    version: 'v1',
    auth: exports.DEFAULT_AUTH,
});
//# sourceMappingURL=client.js.map