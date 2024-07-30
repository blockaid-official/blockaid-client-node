// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource site', () => {
  test('report: only required params', async () => {
    const responsePromise = client.site.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      report: { type: 'request_id', request_id: '11111111-1111-1111-1111-111111111111' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('report: required and optional params', async () => {
    const response = await client.site.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      report: { type: 'request_id', request_id: '11111111-1111-1111-1111-111111111111' },
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.site.scan({ url: 'https://app.uniswap.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scan: required and optional params', async () => {
    const response = await client.site.scan({
      url: 'https://app.uniswap.org',
      metadata: { type: 'catalog' },
    });
  });
});
