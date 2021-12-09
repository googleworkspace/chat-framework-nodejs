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
import request from 'supertest';

// Mock key fetching to test auth. Allows generating JWTs similar to chat.
jest.mock('jose/jwks/remote');
import {createRemoteJWKSet, KeyLike, generateKeyPair, SignJWT} from 'jose';
let publicKey: KeyLike;
let privateKey: KeyLike;

async function makeJwt(payload = {}) {
  return await new SignJWT(
    Object.assign(
      {
        aud: '12345',
        iss: 'chat@system.gserviceaccount.com',
      },
      payload
    )
  )
    .setIssuedAt()
    .setExpirationTime('1h')
    .setProtectedHeader({alg: 'RS512'})
    .sign(privateKey);
}

beforeAll(async () => {
  const keys = await generateKeyPair('RS512');
  publicKey = keys.publicKey;
  privateKey = keys.privateKey;
});

(
  createRemoteJWKSet as jest.MockedFunction<typeof createRemoteJWKSet>
).mockReturnValue(async () => publicKey);

// Important: Import after mock setup
import {HttpTransport} from '../index';

describe('With auth disabled ', () => {
  const transport = new HttpTransport({
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
    await request(transport.app)
      .post('/')
      .set('Authorization', 'Bearer not-a-valid-token')
      .send({})
      .expect(200);
  });
});

describe('With auth enabled ', () => {
  const transport = new HttpTransport({
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
    await request(transport.app).post('/').send({}).expect(401);
  });

  test('Rejects invalid issuer', async () => {
    const jwt = await makeJwt({
      iss: 'not-chat@system.gserviceaccount.com',
    });
    await request(transport.app)
      .post('/')
      .set('Authorization', `Bearer ${jwt}`)
      .send({})
      .expect(401);
  });

  test('Rejects invalid audience', async () => {
    const jwt = await makeJwt({
      aud: 'abc',
    });
    await request(transport.app)
      .post('/')
      .set('Authorization', `Bearer ${jwt}`)
      .send({})
      .expect(401);
  });

  test('Accepts valid token', async () => {
    const jwt = await makeJwt();
    await request(transport.app)
      .post('/')
      .set('Authorization', `Bearer ${jwt}`)
      .send({})
      .expect(200);
  });
});
