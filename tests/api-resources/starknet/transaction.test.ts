// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('report: only required params', async () => {
    const responsePromise = client.starknet.transaction.report({
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
    const response = await client.starknet.transaction.report({
      details: 'details',
      event: 'should_be_malicious',
      report: { id: 'id', type: 'request_id' },
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.starknet.transaction.scan({
      account_address: '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'giftnostra.com' },
      transaction: {
        calldata: [
          '0x1',
          '0x4b33a775b537a39c8960120806e815764f173e4fa76546e6706c31aa1b0ac4a',
          '0x994f23fef04108984d50a4f870723cd46f95d592ed3de9a13f97d5c55846fb',
          '0x9',
          '0x1',
          '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
          '0x1',
          '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
          '0x1',
          '0x5f612ce',
          '0x0',
          '0x0',
          '0x0',
        ],
        chain_id: '0x534e5f4d41494e',
        nonce: '0xc',
        sender_address: '0x1840b3c89a446c74a3962647a2a7fb449d83905c4511027dfa9e099c6886691',
        version: 3,
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

  test('scan: required and optional params', async () => {
    const response = await client.starknet.transaction.scan({
      account_address: '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
      chain: 'mainnet',
      metadata: { type: 'wallet', url: 'giftnostra.com' },
      transaction: {
        calldata: [
          '0x1',
          '0x4b33a775b537a39c8960120806e815764f173e4fa76546e6706c31aa1b0ac4a',
          '0x994f23fef04108984d50a4f870723cd46f95d592ed3de9a13f97d5c55846fb',
          '0x9',
          '0x1',
          '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
          '0x1',
          '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
          '0x1',
          '0x5f612ce',
          '0x0',
          '0x0',
          '0x0',
        ],
        chain_id: '0x534e5f4d41494e',
        nonce: '0xc',
        sender_address: '0x1840b3c89a446c74a3962647a2a7fb449d83905c4511027dfa9e099c6886691',
        version: 3,
        account_deployment_data: [],
        nonce_data_availability_mode: 0,
        paymaster_data: [],
      },
      block_number: '0xa12e3',
      options: ['validation', 'simulation'],
    });
  });
});
