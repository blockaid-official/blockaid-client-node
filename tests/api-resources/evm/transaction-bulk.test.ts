// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactionBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.evm.transactionBulk.scan({
      chain: 'ethereum',
      data: [
        { from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
        { from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
      ],
      metadata: { domain: 'https://example.com' },
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
    const response = await client.evm.transactionBulk.scan({
      chain: 'ethereum',
      data: [
        {
          from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
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
          to: '0xA4e5961B58DBE487639929643dCB1Dc3848dAF5E',
          value: '0x100000000000',
        },
        {
          from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
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
          to: '0x0D524a5B52737C0a02880d5E84F7D20b8d66bfba',
          value: '0xdeadbeef',
        },
      ],
      metadata: { domain: 'https://example.com' },
      aggregated: true,
      block: '20224477',
      options: ['validation'],
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
