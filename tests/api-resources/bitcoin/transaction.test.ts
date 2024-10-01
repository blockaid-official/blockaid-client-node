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
        '0100000002c5b20d466c445318b0028069042525cd7d18d167d48391ebb17948965edc51460000000000ffffffffcca758769ae4cdecc89d9defb6baf74dd997b8ee656a737412f736b66b5771280000000000ffffffff022a240000000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac68744b00000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac00000000',
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
        '0100000002c5b20d466c445318b0028069042525cd7d18d167d48391ebb17948965edc51460000000000ffffffffcca758769ae4cdecc89d9defb6baf74dd997b8ee656a737412f736b66b5771280000000000ffffffff022a240000000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac68744b00000000001976a914f5d7afc3df015ecfd309dd591acf1b8f1e0c4ec088ac00000000',
      chain: 'bitcoin',
      metadata: { type: 'in_app' },
    });
  });
});
