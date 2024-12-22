// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactionRaw', () => {
  test('report: only required params', async () => {
    const responsePromise = client.bitcoin.transactionRaw.report({
      details: 'details',
      event: 'should_be_malicious',
      report: { id: 'id' },
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
    const response = await client.bitcoin.transactionRaw.report({
      details: 'details',
      event: 'should_be_malicious',
      report: { id: 'id', type: 'request_id' },
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.bitcoin.transactionRaw.scan({
      account_address: 'account_address',
      chain: 'bitcoin',
      metadata: { type: 'wallet', url: 'url' },
      transaction: 'transaction',
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
    const response = await client.bitcoin.transactionRaw.scan({
      account_address: 'account_address',
      chain: 'bitcoin',
      metadata: { type: 'wallet', url: 'url' },
      transaction: 'transaction',
      options: ['validation'],
    });
  });
});
