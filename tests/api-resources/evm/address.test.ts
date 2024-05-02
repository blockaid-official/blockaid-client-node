// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from 'blockaid';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource address', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.address.scan({
      address: '0x946D45c866AFD5b8F436d40E551D8E50A5B84230',
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
    const response = await blockaid.evm.address.scan({
      address: '0x946D45c866AFD5b8F436d40E551D8E50A5B84230',
      metadata: { domain: 'https://example.com' },
    });
  });
});
