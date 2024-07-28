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
          to: '0xA4e5961B58DBE487639929643dCB1Dc3848dAF5E',
          data: '0x',
          value: '0x100000000000',
          gas: 'gas',
          gas_price: 'gas_price',
        },
        {
          from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          to: '0x0D524a5B52737C0a02880d5E84F7D20b8d66bfba',
          data: '0x',
          value: '0xdeadbeef',
          gas: 'gas',
          gas_price: 'gas_price',
        },
      ],
      metadata: { domain: 'https://example.com' },
      block: '20224477',
      options: ['validation'],
    });
  });
});
