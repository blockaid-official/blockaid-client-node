// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  apiKey: 'My API Key',
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.bitcoin.transaction.scan({
      options: ['simulation'],
      transaction:
        '0100000001194ebd43f14daef7ea1479a5b694e0cbfe8f036bf8b3debaffb9e7e217b3abf70100000000ffffffff0200e1f505000000001976a9143ec6c3ed8dfc3ceabcc1cbdb0c5aef4e2d02873c88acdf84448f0c00000017a914e8a4c2bc45640654bb0b915f98c5e72508cff3768700000000',
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
        '0100000001194ebd43f14daef7ea1479a5b694e0cbfe8f036bf8b3debaffb9e7e217b3abf70100000000ffffffff0200e1f505000000001976a9143ec6c3ed8dfc3ceabcc1cbdb0c5aef4e2d02873c88acdf84448f0c00000017a914e8a4c2bc45640654bb0b915f98c5e72508cff3768700000000',
      chain: 'bitcoin',
      metadata: { type: 'in_app' },
      skip_utxo_check: true,
    });
  });
});
