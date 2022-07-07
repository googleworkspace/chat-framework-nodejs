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
exports.StatusCode = void 0;
/**
 * Well-known status codes for dialog actions.
 * Note: Other than OK, all other status codes are treated equally as errors
 * and are not exposed to users.
 */
var StatusCode;
(function (StatusCode) {
    StatusCode["OK"] = "OK";
    StatusCode["CANCELLED"] = "CANCELLED";
    StatusCode["UNKNOWN"] = "UNKNOWN";
    StatusCode["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    StatusCode["DEADLINE_EXCEEDED"] = "DEADLINE_EXCEEDED";
    StatusCode["NOT_FOUND"] = "NOT_FOUND";
    StatusCode["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    StatusCode["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    StatusCode["UNAUTHENTICATED"] = "UNAUTHENTICATED";
    StatusCode["RESOURCE_EXHAUSTED"] = "RESOURCE_EXHAUSTED";
    StatusCode["FAILED_PRECONDITION"] = "FAILED_PRECONDITION";
    StatusCode["ABORTED"] = "ABORTED";
    StatusCode["OUT_OF_RANGE"] = "OUT_OF_RANGE";
    StatusCode["UNIMPLEMENTED"] = "UNIMPLEMENTED";
    StatusCode["INTERNAL"] = "INTERNAL";
    StatusCode["UNAVAILABLE"] = "UNAVAILABLE";
    StatusCode["DATA_LOSS"] = "DATA_LOSS";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=status.js.map