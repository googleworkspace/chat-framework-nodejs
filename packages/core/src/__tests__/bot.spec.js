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
const bot_1 = require("../bot");
const transport_1 = require("../transport");
class MockTransport extends transport_1.BaseTransport {
    async sendEvent(event) {
        const transportEvent = {
            ack: jest.fn(),
            reply: jest.fn(),
            event: event,
        };
        await this.emit('messageReceived', transportEvent);
        return transportEvent;
    }
}
describe('With added to space events', () => {
    test('triggers added to space handler', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.addedToSpace(cb);
        await transport.sendEvent({
            type: 'ADDED_TO_SPACE',
            eventTime: '2021-10-29T19:35:57.295055Z',
            user: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
        });
        expect(cb).toBeCalled();
    });
    test('dispatches space and message events when message present', async () => {
        const addedToSpaceHandler = jest.fn();
        const messageHandler = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.addedToSpace(addedToSpaceHandler);
        bot.message(messageHandler);
        await transport.sendEvent({
            type: 'ADDED_TO_SPACE',
            eventTime: '2021-10-29T19:35:57.295055Z',
            user: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
            message: {
                name: 'spaces/-oMssgAAAAE/messages/23uyeXbLIqM.23uyeXbLIqM',
                sender: {
                    name: 'users/110196301251425681004',
                    displayName: 'Steven Bazyl',
                    type: 'HUMAN',
                    domainId: '2czyt31',
                },
                createTime: '2021-10-29T19:35:57.295055Z',
                text: 'test',
                thread: {
                    name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
                },
                space: {
                    name: 'spaces/-oMssgAAAAE',
                    type: 'DM',
                    singleUserBotDm: true,
                },
                argumentText: 'test',
                lastUpdateTime: '2021-10-29T19:35:57.295055Z',
            },
        });
        expect(addedToSpaceHandler).toBeCalled();
        expect(messageHandler).toBeCalled();
    });
    test('does not dispatch message event when no message present', async () => {
        const messageHandler = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.message(messageHandler);
        await transport.sendEvent({
            type: 'ADDED_TO_SPACE',
            eventTime: '2021-10-29T19:35:57.295055Z',
            user: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
        });
        expect(messageHandler).not.toBeCalled();
    });
});
describe('With removed from space events', () => {
    test('triggers removed from space handler', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.removedFromSpace(cb);
        await transport.sendEvent({
            type: 'REMOVED_FROM_SPACE',
            eventTime: '2021-10-29T19:35:57.295055Z',
            user: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
        });
        expect(cb).toBeCalled();
    });
});
describe('With message events', () => {
    const event = {
        type: 'MESSAGE',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
        message: {
            name: 'spaces/-oMssgAAAAE/messages/23uyeXbLIqM.23uyeXbLIqM',
            sender: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            createTime: '2021-10-29T19:35:57.295055Z',
            text: 'test',
            thread: {
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
            argumentText: 'test',
            lastUpdateTime: '2021-10-29T19:35:57.295055Z',
        },
    };
    test('triggers generic message handler', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.message(cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalled();
    });
    test('correctly filters handlers', async () => {
        const uncalledHandler = jest.fn();
        const calledHandler = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.message(/foo/i, uncalledHandler);
        bot.message(/test/, calledHandler);
        bot.message(uncalledHandler);
        await transport.sendEvent(event);
        expect(calledHandler).toBeCalled();
        expect(uncalledHandler).not.toBeCalled();
    });
});
describe('With unfurl events', () => {
    const event = {
        type: 'MESSAGE',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
        message: {
            name: 'spaces/-oMssgAAAAE/messages/23uyeXbLIqM.23uyeXbLIqM',
            sender: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            createTime: '2021-10-29T19:35:57.295055Z',
            text: 'test',
            thread: {
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
            matchedUrl: {
                url: 'https://www.example.com/books/123/chapter/1',
            },
            lastUpdateTime: '2021-10-29T19:35:57.295055Z',
        },
    };
    test('triggers generic unfurl handler', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.unfurl(cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalled();
    });
    test('allows URLPatternInit patterns', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.unfurl({
            hostname: ':subdomain.example.com',
        }, cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalled();
    });
    test('correctly filters handlers', async () => {
        const uncalledHandler = jest.fn();
        const calledHandler = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.unfurl('*\\://www.google.com/*', uncalledHandler);
        bot.unfurl('*\\://www.example.com/*', calledHandler);
        bot.unfurl(uncalledHandler);
        await transport.sendEvent(event);
        expect(calledHandler).toBeCalled();
        expect(uncalledHandler).not.toBeCalled();
    });
    test('extracts URL parameters', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.unfurl('*\\://www.example.com/books/:bookId/chapter/:chapterId', cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalledWith(expect.objectContaining({
            urlPatternResult: expect.objectContaining({
                pathname: expect.objectContaining({
                    groups: {
                        bookId: '123',
                        chapterId: '1',
                    },
                }),
            }),
        }));
    });
});
describe('With action events', () => {
    const event = {
        type: 'CARD_CLICKED',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
        action: {
            actionMethodName: 'foo',
        },
        lastUpdateTime: '2021-10-29T19:35:57.295055Z',
    };
    test('correctly filters handlers', async () => {
        const uncalledHandler = jest.fn();
        const calledHandler = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.action('bar', uncalledHandler);
        bot.action('foo', calledHandler);
        await transport.sendEvent(event);
        expect(calledHandler).toBeCalled();
        expect(uncalledHandler).not.toBeCalled();
    });
});
describe('With slash command events', () => {
    const event = {
        type: 'MESSAGE',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
        message: {
            name: 'spaces/-oMssgAAAAE/messages/23uyeXbLIqM.23uyeXbLIqM',
            sender: {
                name: 'users/110196301251425681004',
                displayName: 'Steven Bazyl',
                type: 'HUMAN',
                domainId: '2czyt31',
            },
            createTime: '2021-10-29T19:35:57.295055Z',
            text: 'test',
            slashCommand: {
                commandId: '1',
            },
            annotations: [
                {
                    type: 'SLASH_COMMAND',
                    slashCommand: {
                        commandId: '1',
                        commandName: '/test',
                    },
                },
            ],
            thread: {
                name: 'spaces/-oMssgAAAAE/threads/23uyeXbLIqM',
            },
            space: {
                name: 'spaces/-oMssgAAAAE',
                type: 'DM',
                singleUserBotDm: true,
            },
            argumentText: 'test',
            lastUpdateTime: '2021-10-29T19:35:57.295055Z',
        },
    };
    test('matches by command id', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.command(1, cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalled();
    });
    test('matches by command name', async () => {
        const cb = jest.fn();
        const transport = new MockTransport();
        const bot = new bot_1.Bot(transport);
        bot.command('/test', cb);
        await transport.sendEvent(event);
        expect(cb).toBeCalled();
    });
});
test('acks unhandled events', async () => {
    const transport = new MockTransport();
    new bot_1.Bot(transport);
    const event = await transport.sendEvent({
        type: 'ADDED_TO_SPACE',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
    });
    expect(event.ack).toBeCalled();
});
test('acks handled events that do not reply', async () => {
    const transport = new MockTransport();
    const bot = new bot_1.Bot(transport);
    bot.addedToSpace(async () => { });
    const event = await transport.sendEvent({
        type: 'ADDED_TO_SPACE',
        eventTime: '2021-10-29T19:35:57.295055Z',
        user: {
            name: 'users/110196301251425681004',
            displayName: 'Steven Bazyl',
            type: 'HUMAN',
            domainId: '2czyt31',
        },
        space: {
            name: 'spaces/-oMssgAAAAE',
            type: 'DM',
            singleUserBotDm: true,
        },
    });
    expect(event.ack).toBeCalled();
});
test('emits error events', async () => {
    const transport = new MockTransport();
    const cb = jest.fn();
    const bot = new bot_1.Bot(transport);
    bot.message(async () => { });
    bot.on('error', cb);
    await transport.sendEvent({});
    expect(cb).toBeCalledWith(expect.any(Error));
});
//# sourceMappingURL=bot.spec.js.map