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

/**
 * Wraps a form input value to provide easier parsing and type coercion
 */
export class FormInputValue {
  constructor(private value: chat_v1.Schema$Inputs | undefined) {}

  /**
   * Whether or not the field is present.
   */
  get exists(): boolean {
    return this.value !== undefined;
  }

  /**
   * Gets the value as a string.
   *
   * @param defaultValue - value to return if not present
   * @return value
   */
  asString(defaultValue?: string): string | undefined {
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
  asStringArray(defaultValue?: string[]): string[] | undefined {
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
  asNumber(defaultValue?: number): number | undefined {
    if (!this.exists) {
      return defaultValue;
    }
    if (this.value?.stringInputs) {
      let value = this.value.stringInputs.value?.[0];
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
  asNumberArray(defaultValue?: number[]): number[] | undefined {
    if (!this.exists) {
      return defaultValue;
    }
    if (this.value?.stringInputs) {
      return this.value.stringInputs?.value?.map(Number) ?? defaultValue;
    }
    throw new Error('Unsupported coercion');
  }

  // TODO - Other common coercions
}

/**
 * Utility class for working with form inputs.
 */
export class FormInputs {
  private readonly inputs: Record<string,chat_v1.Schema$Inputs>;

  constructor(inputs?: Record<string,chat_v1.Schema$Inputs>) {
    this.inputs = inputs ?? {};
  }

  /**
   * Fetches an input value. Note that this will always return an object, even if the field
   * is not present.
   *
   * @param key
   */
  get(key: string): FormInputValue {
    return new FormInputValue(this.inputs[key]);
  }
}
