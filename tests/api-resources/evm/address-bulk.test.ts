// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from 'blockaid';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addressBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.addressBulk.scan({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
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
    const response = await blockaid.evm.addressBulk.scan({
      addresses: [
        '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
        '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
        '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
        '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
      ],
      metadata: { domain: 'string' },
    });
  });
});
