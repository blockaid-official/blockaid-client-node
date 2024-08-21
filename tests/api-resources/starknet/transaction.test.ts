// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.starknet.transaction.scan({
      account_address: 'account_address',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'url' },
      transaction: { max_fee: 'max_fee', nonce: 'nonce', sender_address: 'sender_address', version: 1 },
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
    const response = await client.starknet.transaction.scan({
      account_address: 'account_address',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'url' },
      transaction: {
        max_fee: 'max_fee',
        nonce: 'nonce',
        sender_address: 'sender_address',
        version: 1,
        calldata: ['string', 'string', 'string'],
      },
      options: ['validation'],
    });
  });
});
