"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const supertest_1 = __importDefault(require("supertest"));
// Mock key fetching to test auth. Allows generating JWTs similar to chat.
jest.mock('jose/jwks/remote');
const jose_1 = require("jose");
let publicKey;
let privateKey;
async function makeJwt(payload = {}) {
    return await new jose_1.SignJWT(Object.assign({
        aud: '12345',
        iss: 'chat@system.gserviceaccount.com',
    }, payload))
        .setIssuedAt()
        .setExpirationTime('1h')
        .setProtectedHeader({ alg: 'RS512' })
        .sign(privateKey);
}
beforeAll(async () => {
    const keys = await (0, jose_1.generateKeyPair)('RS512');
    publicKey = keys.publicKey;
    privateKey = keys.privateKey;
});
jose_1.createRemoteJWKSet.mockReturnValue(async () => publicKey);
// Important: Import after mock setup
const index_1 = require("../index");
describe('With auth disabled ', () => {
    const transport = new index_1.HttpTransport({
        port: 0,
    });
    transport.on('messageReceived', ctx => ctx.ack());
    beforeAll(async () => {
        await transport.start();
    });
    afterAll(async () => {
        await transport.stop();
    });
    test('Ignores authorization headers', async () => {
        await (0, supertest_1.default)(transport.app)
            .post('/')
            .set('Authorization', 'Bearer not-a-valid-token')
            .send({})
            .expect(200);
    });
});
describe('With auth enabled ', () => {
    const transport = new index_1.HttpTransport({
        projectNumber: 12345,
        port: 0,
    });
    transport.on('messageReceived', ctx => ctx.ack());
    beforeAll(async () => {
        await transport.start();
    });
    afterAll(async () => {
        await transport.stop();
    });
    test('Rejects unauthenticated requests', async () => {
        await (0, supertest_1.default)(transport.app).post('/').send({}).expect(401);
    });
    test('Rejects invalid issuer', async () => {
        const jwt = await makeJwt({
            iss: 'not-chat@system.gserviceaccount.com',
        });
        await (0, supertest_1.default)(transport.app)
            .post('/')
            .set('Authorization', `Bearer ${jwt}`)
            .send({})
            .expect(401);
    });
    test('Rejects invalid audience', async () => {
        const jwt = await makeJwt({
            aud: 'abc',
        });
        await (0, supertest_1.default)(transport.app)
            .post('/')
            .set('Authorization', `Bearer ${jwt}`)
            .send({})
            .expect(401);
    });
    test('Accepts valid token', async () => {
        const jwt = await makeJwt();
        await (0, supertest_1.default)(transport.app)
            .post('/')
            .set('Authorization', `Bearer ${jwt}`)
            .send({})
            .expect(200);
    });
});
//# sourceMappingURL=http.spec.js.map