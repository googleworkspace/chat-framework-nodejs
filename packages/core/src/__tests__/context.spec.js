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
jest.mock('../bot');
const utils_1 = require("ts-jest/utils");
const bot_1 = require("../bot");
const index_1 = require("../index");
const MockBot = (0, utils_1.mocked)(bot_1.Bot, true);
const message = {
    type: 'MESSAGE',
    eventTime: '2021-10-29T19:35:57.295055Z',
    message: {
        name: 'spaces/-oMssgAAAAE/messages/23uyeXbLIqM.23uyeXbLIqM',
        sender: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            avatarUrl: 'https://lh3.googleusercontent.com/a/AATXAJz8h-s8lLn5KL9Mr_ztGe80qDAD40hKGl404EUg=k',
            email: 'me@sbazyl.dev',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        createTime: '2021-10-29T19:35:57.295055Z',
        text: 'test',
        thread: {
            name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            retentionSettings: [Object],
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
            spaceThreadingState: 'FLAT_MESSAGES',
            spaceType: 'DIRECT_MESSAGE',
        },
        argumentText: 'test',
        lastUpdateTime: '2021-10-29T19:35:57.295055Z',
    },
    user: {
        name: 'users/110196301251425681004',
        displayName: 'Steven Bazyl',
        avatarUrl: 'https://lh3.googleusercontent.com/a/AATXAJz8h-s8lLn5KL9Mr_ztGe80qDAD40hKGl404EUg=k',
        email: 'me@sbazyl.dev',
        type: 'HUMAN',
        domainId: '2czyt31',
    },
    space: {
        name: 'spaces/-oMssgAAAAE',
        type: 'DM',
        singleUserBotDm: true,
        spaceThreadingState: 'FLAT_MESSAGES',
        spaceType: 'DIRECT_MESSAGE',
    },
    configCompleteRedirectUrl: 'https://chat.google.com/api/bot_config_complete?token=AAJCfVXgRHYpgqR1KIkwoIguK5cwGywsg4yOjHEhGGjmLdpdqcSiShXXNLNIs-X8dUXxSTu9mZW6QP61jLDGHg3DnkT41FHQkJ0eS8INUegFDcMg1ybgUdzA6BKiXULCk48y12PekxPz0fEcZvWGGtk%3D',
};
describe('With message event', () => {
    const bot = new bot_1.Bot();
    const transportEvent = {
        ack: jest.fn(),
        reply: jest.fn(),
        event: message,
    };
    const context = new index_1.EventContext(bot, transportEvent);
    beforeEach(() => {
        MockBot.mockClear();
        bot.sendMessage.mockClear();
    });
    test('it provides message', () => {
        expect(context.message).toHaveProperty('argumentText');
    });
    test('it acks transport message', () => {
        context.ack();
        expect(transportEvent.ack).toBeCalled();
    });
    test('it sends replies', () => {
        context.reply({ text: 'hello' });
        expect(transportEvent.reply).toBeCalledWith(expect.objectContaining({
            text: 'hello',
        }));
    });
    test('it injects thread name in reply', () => {
        context.reply({ text: 'hello' });
        expect(transportEvent.reply).toBeCalledWith(expect.objectContaining({
            thread: expect.objectContaining({
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            }),
        }));
    });
    test('it injects thread name in reply', () => {
        context.reply({ text: 'hello' });
        expect(transportEvent.reply).toBeCalledWith(expect.objectContaining({
            thread: expect.objectContaining({
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            }),
        }));
    });
    test('it injects thread name for async replies', () => {
        context.newMessageInThread({ text: 'hello' });
        expect(bot.sendMessage).toBeCalledWith('spaces/-oMssgAAAAE', expect.objectContaining({
            thread: expect.objectContaining({
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            }),
        }));
    });
    test('it does not inject thread name for new topics', () => {
        context.newMessageInSpace({ text: 'hello' });
        expect(bot.sendMessage).toBeCalledWith('spaces/-oMssgAAAAE', expect.not.objectContaining({
            thread: expect.anything(),
        }), undefined);
    });
});
//# sourceMappingURL=context.spec.js.map