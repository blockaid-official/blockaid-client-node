// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('report: only required params', async () => {
    const responsePromise = client.evm.transaction.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      report: { request_id: '11111111-1111-1111-1111-111111111111', type: 'request_id' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('report: required and optional params', async () => {
    const response = await client.evm.transaction.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      report: { request_id: '11111111-1111-1111-1111-111111111111', type: 'request_id' },
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.evm.transaction.scan({
      account_address: 'account_address',
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
    const response = await client.evm.transaction.scan({
      account_address: 'account_address',
      chain: 'ethereum',
      data: {
        from: '0x5e1a0d484c5f0de722e82f9dca3a9d5a421d47cb',
        authorization_list: [
          {
            address: 'address',
            chainId: 'chainId',
            eoa: 'eoa',
            nonce: 'nonce',
            r: 'r',
            s: 's',
            yParity: 'yParity',
          },
        ],
        data: '0x',
        gas: 'gas',
        gas_price: 'gas_price',
        to: '0x0d524a5b52737c0a02880d5e84f7d20b8d66bfba',
        value: '0x1000000000000000',
      },
      metadata: { domain: 'https://boredapeyartclub.com' },
      block: '21211118',
      options: ['simulation', 'validation'],
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
