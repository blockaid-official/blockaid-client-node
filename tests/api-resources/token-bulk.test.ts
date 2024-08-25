// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenBulk', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.tokenBulk.scan({
      chain: 'arbitrum',
      tokens: ['0x66587563e933bbf3974b89156b47bb82b921eb35', '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
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
    const response = await client.tokenBulk.scan({
      chain: 'arbitrum',
      tokens: ['0x66587563e933bbf3974b89156b47bb82b921eb35', '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
      metadata: { domain: 'domain' },
    });
  });
});
