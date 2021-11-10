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
import {FormInputs} from '../form';

const TEST_INPUTS: Record<string, chat_v1.Schema$Inputs> = {
  singleTextValue: {
    stringInputs: {
      value: ['hello'],
    },
  },
  multiTextValue: {
    stringInputs: {
      value: ['hello', 'world'],
    },
  },
  singleNumericValue: {
    stringInputs: {
      value: ['123'],
    },
  },
  multiNumericValue: {
    stringInputs: {
      value: ['123', '456'],
    },
  },
  emptyStringValue: {
    stringInputs: {
      value: [],
    },
  },
};

describe('With inputs', () => {
  const form = new FormInputs(TEST_INPUTS);

  test('returns exists for valid inputs', () => {
    expect(form.get('singleTextValue').exists).toBeTruthy();
  });

  test('returns not exists for invalid inputs', () => {
    expect(form.get('doesNotExist').exists).toBeFalsy();
  });

  test('returns default for non-existant inputs', () => {
    expect(form.get('doesNotExist').asString('foo')).toEqual('foo');
  });

  test('returns string value', () => {
    expect(form.get('singleTextValue').asString()).toEqual('hello');
  });

  test('returns string values', () => {
    expect(form.get('multiTextValue').asStringArray()).toEqual([
      'hello',
      'world',
    ]);
  });

  test('returns numeric value', () => {
    expect(form.get('singleNumericValue').asNumber()).toEqual(123);
  });

  test('returns numeric value', () => {
    expect(form.get('multiNumericValue').asNumberArray()).toEqual([123, 456]);
  });

  test('returns NaN for non-coercible number values', () => {
    expect(form.get('singleTextValue').asNumber()).toEqual(NaN);
  });
});
