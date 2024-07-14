// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.stellar.transaction.scan({
      account_address: 'account_address',
      chain: 'pubnet',
      metadata: { type: 'wallet', url: 'url' },
      transactions: ['string', 'string', 'string'],
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
    const response = await blockaid.stellar.transaction.scan({
      account_address: 'account_address',
      chain: 'pubnet',
      metadata: { type: 'wallet', url: 'url' },
      transactions: ['string', 'string', 'string'],
      options: ['validation'],
    });
  });
});
