// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.hedera.transaction.scan({
      account_address: '0.0.9352077',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'https://example.com' },
      transaction:
        'KmEKXQoVCgwIjvztygYQn6yo3QISBRiawrcDEgIYBhiAwtcvIgIIeDIVSEJBUiB0cmFuc2ZlciBleGFtcGxlciAKHgoNCgUYjee6BBD/p9a5BwoNCgUYha/rARCAqNa5BxIA',
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
    const response = await client.hedera.transaction.scan({
      account_address: '0.0.9352077',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'https://example.com' },
      transaction:
        'KmEKXQoVCgwIjvztygYQn6yo3QISBRiawrcDEgIYBhiAwtcvIgIIeDIVSEJBUiB0cmFuc2ZlciBleGFtcGxlciAKHgoNCgUYjee6BBD/p9a5BwoNCgUYha/rARCAqNa5BxIA',
      options: ['simulation'],
    });
  });
});
