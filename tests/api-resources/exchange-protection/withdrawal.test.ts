// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource withdrawal', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.exchangeProtection.withdrawal.scan({
      account: { account_id: 'account_id', user_country_code: 'user_country_code' },
      event_time: '2019-12-27T18:11:19.117Z',
      onchain_transaction: { amount: 1, asset: 'asset', chain: 'ethereum', to_address: 'to_address' },
      withdrawal_id: 'withdrawal_id',
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
    const response = await client.exchangeProtection.withdrawal.scan({
      account: {
        account_id: 'account_id',
        user_country_code: 'user_country_code',
        age_in_years: 1,
        created: '2019-12-27T18:11:19.117Z',
      },
      event_time: '2019-12-27T18:11:19.117Z',
      onchain_transaction: { amount: 1, asset: 'asset', chain: 'ethereum', to_address: 'to_address' },
      withdrawal_id: 'withdrawal_id',
      connection_metadata: { customer_ip: 'customer_ip', user_agent: 'user_agent' },
    });
  });
});
