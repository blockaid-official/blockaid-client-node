// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource message', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.solana.message.scan({
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      metadata: {},
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTrGZVzb8QmCKyzMu9kMiSWpFtaFrNN8zb9grr81N3R3njrFgxCxNSjboFtomLyZ3iUQBaBkRF1DyzGyc1r1kd8FnptaDWteNCXJHUYFeH8wBDwZJzNZfz71CiugXhxBTJSAqSNC8JEWm7kmCqwjUqLd23L2x2s',
      ],
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
    const response = await client.solana.message.scan({
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      metadata: {
        account: {
          account_id: 'account_id',
          account_creation_timestamp: '2019-12-27T18:11:19.117Z',
          user_age: 1,
          user_country_code: 'user_country_code',
        },
        connection: { ip_address: 'ip_address', user_agent: 'user_agent' },
        url: 'https://example.com',
      },
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTrGZVzb8QmCKyzMu9kMiSWpFtaFrNN8zb9grr81N3R3njrFgxCxNSjboFtomLyZ3iUQBaBkRF1DyzGyc1r1kd8FnptaDWteNCXJHUYFeH8wBDwZJzNZfz71CiugXhxBTJSAqSNC8JEWm7kmCqwjUqLd23L2x2s',
      ],
      chain: 'mainnet',
      encoding: 'base58',
      execution_mode: 'standard',
      method: 'signAndSendTransaction',
      options: ['simulation', 'validation'],
    });
  });
});
