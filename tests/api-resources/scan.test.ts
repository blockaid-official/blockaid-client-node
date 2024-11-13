// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scan', () => {
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
