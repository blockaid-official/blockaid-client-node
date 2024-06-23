// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postTransactionBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.postTransactionBulk.scan({
      chain: 'ethereum',
      data: [{ from: 'string' }, { from: 'string' }],
      metadata: { domain: 'string' },
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
    const response = await blockaid.evm.postTransactionBulk.scan({
      chain: 'ethereum',
      data: [
        { from: 'string', to: 'string', data: 'string', value: 'string', gas: 'string', gas_price: 'string' },
        { from: 'string', to: 'string', data: 'string', value: 'string', gas: 'string', gas_price: 'string' },
      ],
      metadata: { domain: 'string' },
      options: ['validation', 'simulation'],
    });
  });
});
