// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addressBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.evm.addressBulk.scan({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
      chain: 'ethereum',
      metadata: { domain: 'www.example.xyz' },
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
    const response = await client.evm.addressBulk.scan({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
      chain: 'ethereum',
      metadata: { domain: 'www.example.xyz' },
    });
  });

  test('scanExtended: only required params', async () => {
    const responsePromise = client.evm.addressBulk.scanExtended({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
      chain: 'ethereum',
      metadata: {
        account: { account_id: 'user123', user_country_code: 'US' },
        connection: {
          ip_address: '192.168.1.1',
          user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scanExtended: required and optional params', async () => {
    const response = await client.evm.addressBulk.scanExtended({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
      chain: 'ethereum',
      metadata: {
        account: {
          account_id: 'user123',
          user_country_code: 'US',
          age_in_years: 3,
          created: '2021-01-01T00:00:00Z',
        },
        connection: {
          ip_address: '192.168.1.1',
          user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
    });
  });
});
