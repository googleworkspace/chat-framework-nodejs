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
exports.FormInputs = exports.FormInputValue = void 0;
/**
 * Wraps a form input value to provide easier parsing and type coercion
 */
class FormInputValue {
    constructor(value) {
        this.value = value;
    }
    /**
     * Whether or not the field is present.
     */
    get exists() {
        return this.value !== undefined;
    }
    /**
     * Gets the value as a string.
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asString(defaultValue) {
        if (!this.exists) {
            return defaultValue;
        }
        if (this.value?.stringInputs) {
            return this.value?.stringInputs.value?.[0] ?? defaultValue;
        }
        throw new Error('Unsupported coercion');
    }
    /**
     * Gets the value as a string array (if input supports multiple values).
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asStringArray(defaultValue) {
        if (!this.exists) {
            return defaultValue;
        }
        if (this.value?.stringInputs) {
            return this.value.stringInputs?.value ?? defaultValue;
        }
        throw new Error('Unsupported coercion');
    }
    /**
     * Gets the value as a number.
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asNumber(defaultValue) {
        if (!this.exists) {
            return defaultValue;
        }
        if (this.value?.stringInputs) {
            const value = this.value.stringInputs.value?.[0];
            if (value === undefined) {
                return defaultValue;
            }
            return Number(value);
        }
        throw new Error('Unsupported coercion');
    }
    /**
     * Gets the value as a number array (if input supports multiple values.)
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asNumberArray(defaultValue) {
        if (!this.exists) {
            return defaultValue;
        }
        if (this.value?.stringInputs) {
            return this.value.stringInputs?.value?.map(Number) ?? defaultValue;
        }
        throw new Error('Unsupported coercion');
    }
}
exports.FormInputValue = FormInputValue;
/**
 * Utility class for working with form inputs.
 */
class FormInputs {
    constructor(inputs) {
        this.inputs = inputs ?? {};
    }
    /**
     * Fetches an input value. Note that this will always return an object, even if the field
     * is not present.
     *
     * @param key
     */
    get(key) {
        return new FormInputValue(this.inputs[key]);
    }
}
exports.FormInputs = FormInputs;
//# sourceMappingURL=form.js.map