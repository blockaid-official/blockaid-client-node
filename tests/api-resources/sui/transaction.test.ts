// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.sui.transaction.scan({
      account_address: '0x45e90b3ea2e1920c43d92d224630d6a865c1b58a7b4e770c2ac156eab30eb491',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'https://example.com' },
      transaction:
        'AAACAAgA4fUFAAAAAAAgHvls2mKzo/48s/fPdWP8xKtE4BhIjR2O8gMaZ6bI1+sCAgABAQAAAQECAAABAQBF6Qs+ouGSDEPZLSJGMNaoZcG1intOdwwqwVbqsw60kQFySkLceU6uis9QxxK4CDYqttqK3ilc9/yEcCgxdaeA0cl/xhwAAAAAIEuXU9TpAtIJmbPVFpxdc70+RWUqlSrfyIUKT9q1Au0ERekLPqLhkgxD2S0iRjDWqGXBtYp7TncMKsFW6rMOtJHuAgAAAAAAACAKNQAAAAAAAA==',
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
    const response = await client.sui.transaction.scan({
      account_address: '0x45e90b3ea2e1920c43d92d224630d6a865c1b58a7b4e770c2ac156eab30eb491',
      chain: 'mainnet',
      metadata: {
        type: 'wallet',
        url: 'https://example.com',
        account: {
          account_id: 'account_id',
          account_creation_timestamp: '2019-12-27T18:11:19.117Z',
          user_age: 1,
          user_country_code: 'user_country_code',
        },
        connection: { ip_address: 'ip_address', user_agent: 'user_agent' },
      },
      transaction:
        'AAACAAgA4fUFAAAAAAAgHvls2mKzo/48s/fPdWP8xKtE4BhIjR2O8gMaZ6bI1+sCAgABAQAAAQECAAABAQBF6Qs+ouGSDEPZLSJGMNaoZcG1intOdwwqwVbqsw60kQFySkLceU6uis9QxxK4CDYqttqK3ilc9/yEcCgxdaeA0cl/xhwAAAAAIEuXU9TpAtIJmbPVFpxdc70+RWUqlSrfyIUKT9q1Au0ERekLPqLhkgxD2S0iRjDWqGXBtYp7TncMKsFW6rMOtJHuAgAAAAAAACAKNQAAAAAAAA==',
      options: ['simulation'],
    });
  });
});
