// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postTransaction', () => {
  test('report: only required params', async () => {
    const responsePromise = client.evm.postTransaction.report({
      details: 'Details about the report',
      event: 'FALSE_NEGATIVE',
      report: { request_id: '11111111-1111-1111-1111-111111111111', type: 'request_id' },
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
    const response = await client.evm.postTransaction.report({
      details: 'Details about the report',
      event: 'FALSE_NEGATIVE',
      report: { request_id: '11111111-1111-1111-1111-111111111111', type: 'request_id' },
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.evm.postTransaction.scan({
      chain: 'ethereum',
      data: { tx_hash: '0xc01780dadc107754b331250b4797606949cb3d0087facc0a737122d5e973c83c' },
      metadata: {},
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
    const response = await client.evm.postTransaction.scan({
      chain: 'ethereum',
      data: { tx_hash: '0xc01780dadc107754b331250b4797606949cb3d0087facc0a737122d5e973c83c' },
      metadata: {
        account: {
          account_id: 'account_id',
          account_creation_timestamp: '2019-12-27T18:11:19.117Z',
          user_age: 1,
          user_country_code: 'user_country_code',
        },
        connection: { ip_address: 'ip_address', user_agent: 'user_agent' },
        non_dapp: true,
      },
      block: 0,
      options: ['validation', 'simulation'],
      simulate_with_estimated_gas: true,
      state_override: {
        foo: {
          balance: 'balance',
          code: 'code',
          movePrecompileToAddress: 'movePrecompileToAddress',
          nonce: 'nonce',
          state: { foo: 'string' },
          stateDiff: { foo: 'string' },
        },
      },
    });
  });
});
