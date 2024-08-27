// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.bitcoin.transaction.scan({
      options: ['simulation'],
      transaction:
        '0100000001cca758769ae4cdecc89d9defb6baf74dd997b8ee656a737412f736b66b5771280000000000ffffffff0b544b0600000000001976a91439309fb127bba85d50c3379be9ac2d05edff0d7388ac544b0600000000001976a9146606e4efd46f43aa0bafe74f61402366329edda688ac544b0600000000001976a914163f1a3342956eda716d056be582f317ffbfc2ef88ac544b0600000000001976a91404246d84e0125114def10c5a6c7e02d1cadf189688ac544b0600000000001976a914cfb9b949ef347daa8afaa92538be145dd7f4907288ac544b0600000000001976a914070e1228753fbf00f3ec25ae94e186e3414541a288ac544b0600000000001976a914a3b1289cda60e3fad45f03636096516f838a61b388ac544b0600000000001976a9142457ae343ff877bd029491f7858baceb1c0a78a188ac544b0600000000001976a9145a27d6993f3583ecd6d0d134f9d9a69cb143c7d888ac544b0600000000001976a914b50cf380d7e52814854f4c35a7088eb963fb9f3688ac20a10700000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac00000000',
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
    const response = await client.bitcoin.transaction.scan({
      options: ['simulation'],
      transaction:
        '0100000001cca758769ae4cdecc89d9defb6baf74dd997b8ee656a737412f736b66b5771280000000000ffffffff0b544b0600000000001976a91439309fb127bba85d50c3379be9ac2d05edff0d7388ac544b0600000000001976a9146606e4efd46f43aa0bafe74f61402366329edda688ac544b0600000000001976a914163f1a3342956eda716d056be582f317ffbfc2ef88ac544b0600000000001976a91404246d84e0125114def10c5a6c7e02d1cadf189688ac544b0600000000001976a914cfb9b949ef347daa8afaa92538be145dd7f4907288ac544b0600000000001976a914070e1228753fbf00f3ec25ae94e186e3414541a288ac544b0600000000001976a914a3b1289cda60e3fad45f03636096516f838a61b388ac544b0600000000001976a9142457ae343ff877bd029491f7858baceb1c0a78a188ac544b0600000000001976a9145a27d6993f3583ecd6d0d134f9d9a69cb143c7d888ac544b0600000000001976a914b50cf380d7e52814854f4c35a7088eb963fb9f3688ac20a10700000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac00000000',
      chain: 'bitcoin',
      metadata: { type: 'in_app' },
    });
  });
});
