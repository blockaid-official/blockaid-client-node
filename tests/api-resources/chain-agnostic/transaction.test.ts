// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.chainAgnostic.transaction.scan({
      data: {
        amount: 1,
        asset: { symbol: 'BTC' },
        chain: 'bitcoin',
        to: 'bc1qanrfutwqh854g74lqrygr55jkgf99em4lpfm80',
      },
      metadata: {},
      options: ['validation'],
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
    const response = await client.chainAgnostic.transaction.scan({
      data: {
        amount: 1,
        asset: { symbol: 'BTC' },
        chain: 'bitcoin',
        to: 'bc1qanrfutwqh854g74lqrygr55jkgf99em4lpfm80',
        from: 'from',
      },
      metadata: {
        account: {
          account_id: '1',
          account_creation_timestamp: '2019-12-27T18:11:19.117Z',
          user_age: 1,
          user_country_code: 'user_country_code',
        },
        connection: { ip_address: '1.1.1.1', user_agent: '1' },
      },
      options: ['validation'],
    });
  });
});
