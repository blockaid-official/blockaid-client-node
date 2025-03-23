// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource message', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.solana.message.scan({
      encoding: 'base58',
      chain: 'mainnet',
      method: 'signAndSendTransaction',
      options: ['simulation', 'validation'],
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTrGZVzb8QmCKyzMu9kMiSWpFtaFrNN8zb9grr81N3R3njrFgxCxNSjboFtomLyZ3iUQBaBkRF1DyzGyc1r1kd8FnptaDWteNCXJHUYFeH8wBDwZJzNZfz71CiugXhxBTJSAqSNC8JEWm7kmCqwjUqLd23L2x2s',
      ],
      metadata: { url: 'https://example.com' },
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
      encoding: 'base58',
      chain: 'mainnet',
      method: 'signAndSendTransaction',
      options: ['simulation', 'validation'],
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTrGZVzb8QmCKyzMu9kMiSWpFtaFrNN8zb9grr81N3R3njrFgxCxNSjboFtomLyZ3iUQBaBkRF1DyzGyc1r1kd8FnptaDWteNCXJHUYFeH8wBDwZJzNZfz71CiugXhxBTJSAqSNC8JEWm7kmCqwjUqLd23L2x2s',
      ],
      metadata: { url: 'https://example.com' },
    });
  });
});
