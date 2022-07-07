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
exports.fetchAttachment = void 0;
const client_1 = require("./client");
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('chat:client');
/**
 * Fetch an attachment. Currently only media downloads are supported. Drive attachments
 * can not be downloaded as the bot is not automatically added to the ACL. However, the Drive
 * API can be used with end user oauth credentials if the bot requests access.
 *
 * @param attachment - Attachment info from chat message
 * @param options
 * @return Readable stream.
 */
async function fetchAttachment(attachment, options) {
    if (attachment.driveDataRef) {
        // Note: Omitting support for Drive for two reasons:
        // - Bots are ignored by the ACL fixer and lack permission to the content (b/202527481)
        // - Need additional options for dealing with native files/exporting
        throw new Error('Downloading drive attachments currently unsupported.');
    }
    if (attachment.attachmentDataRef &&
        attachment.attachmentDataRef.resourceName) {
        debug('Fetching attachment: %O', attachment);
        const request = Object.assign({
            resourceName: attachment.attachmentDataRef.resourceName,
            alt: 'media',
        }, options);
        const res = await client_1.chatApiClient.media.download(request, {
            responseType: 'stream',
        });
        return res.data;
    }
    throw new Error('Unable to handle attachment. No media ref provided.');
}
exports.fetchAttachment = fetchAttachment;
//# sourceMappingURL=attachment.js.map