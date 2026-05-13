// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scan', () => {
  test('report: only required params', async () => {
    const responsePromise = client.scan.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      metadata: {},
      request_id: '11111111-1111-1111-1111-111111111111',
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
    const response = await client.scan.report({
      details: 'Details about the report',
      event: 'FALSE_POSITIVE',
      metadata: {
        account: {
          account_id: 'user-abc-123',
          account_creation_timestamp: '2023-01-15T00:00:00Z',
          user_age: 30,
          user_country_code: 'US',
        },
        connection: {
          ip_address: '192.168.1.1',
          user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        },
        domain: 'https://app.uniswap.org',
      },
      request_id: '11111111-1111-1111-1111-111111111111',
    });
  });

  test('status: only required params', async () => {
    const responsePromise = client.scan.status({
      request_id: '7f959417-76c1-4c4d-89e8-5fdedab76a8d',
      status: 'accepted',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.scan.status({
      request_id: '7f959417-76c1-4c4d-89e8-5fdedab76a8d',
      status: 'accepted',
    });
  });
});
