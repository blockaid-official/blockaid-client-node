// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postTransactionBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.evm.postTransactionBulk.scan({
      chain: 'ethereum',
      data: [
        '0x11c865addc39f1e1c4f0f6c9a84533c501e3705a6397988af942b2103d5e87a2',
        '0x50a109a2c2dd396e49710613dcf652728656055d90f80094f10c3ddd05150d2e',
      ],
      metadata: { domain: 'domain' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scan: required and optional params', async () => {
    const response = await client.evm.postTransactionBulk.scan({
      chain: 'ethereum',
      data: [
        '0x11c865addc39f1e1c4f0f6c9a84533c501e3705a6397988af942b2103d5e87a2',
        '0x50a109a2c2dd396e49710613dcf652728656055d90f80094f10c3ddd05150d2e',
      ],
      metadata: { domain: 'domain' },
      block: 0,
      options: ['validation', 'simulation'],
      simulate_with_estimated_gas: true,
      state_override: {
        foo: {
          balance: 'balance',
          code: 'code',
          movePrecompileToAddress: 'movePrecompileToAddress',
          nonce: 'nonce',
          state: { foo: 'string' },
          stateDiff: { foo: 'string' },
        },
      },
    });
  });
});
