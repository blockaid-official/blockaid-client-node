// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenWebhooks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tokenWebhooks.create('arbitrum', { url: 'https://example.com/' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.tokenWebhooks.create('arbitrum', {
      url: 'https://example.com/',
      filter: {
        token_addresses: ['0x1234567890abcdef1234567890abcdef12345678'],
        filter_type: 'token_address',
      },
      shared_secret_key: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    });
  });

  test('delete', async () => {
    const responsePromise = client.tokenWebhooks.delete('arbitrum');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tokenWebhooks.delete('arbitrum', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Blockaid.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.tokenWebhooks.get('arbitrum');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tokenWebhooks.get('arbitrum', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Blockaid.NotFoundError,
    );
  });

  test('getAll', async () => {
    const responsePromise = client.tokenWebhooks.getAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tokenWebhooks.getAll({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Blockaid.NotFoundError,
    );
  });
});
