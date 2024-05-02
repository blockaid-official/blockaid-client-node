// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.transaction.scan({
      account_address: 'string',
      chain: 'ethereum',
      data: { from: '0x5e1a0d484c5f0de722e82f9dca3a9d5a421d47cb' },
      metadata: { domain: 'https://boredapeyartclub.com' },
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
    const response = await blockaid.evm.transaction.scan({
      account_address: 'string',
      chain: 'ethereum',
      data: {
        from: '0x5e1a0d484c5f0de722e82f9dca3a9d5a421d47cb',
        to: '0x0d524a5b52737c0a02880d5e84f7d20b8d66bfba',
        data: '0x',
        value: '0x1000000000000000',
        gas: 'string',
        gas_price: 'string',
      },
      metadata: { domain: 'https://boredapeyartclub.com' },
      options: ['simulation', 'validation'],
    });
  });
});
