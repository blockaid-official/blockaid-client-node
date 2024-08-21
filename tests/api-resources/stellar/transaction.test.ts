// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource transaction', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.stellar.transaction.scan({
      account_address: 'GDPMFLKUGASUTWBN2XGYYKD27QGHCYH4BUFUTER4L23INYQ4JHDWFOIE',
      chain: 'pubnet',
      metadata: { type: 'wallet', url: 'localhost' },
      transaction:
        'AAAAAgAAAADewq1UMCVJ2C3VzYwoevwMcWD8DQtJkjxetobiHEnHYgAAAAEAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAA3sKtVDAlSdgt1c2MKHr8DHFg/A0LSZI8XraG4hxJx2IAAAABAAAAACI40RTBOFEE7uT5mZkoq30mbvxLPJpMUm9cIFHgK9SRAAAAAAAAAAAAmJaAAAAAAAAAAAA=',
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
    const response = await client.stellar.transaction.scan({
      account_address: 'GDPMFLKUGASUTWBN2XGYYKD27QGHCYH4BUFUTER4L23INYQ4JHDWFOIE',
      chain: 'pubnet',
      metadata: { type: 'wallet', url: 'localhost' },
      transaction:
        'AAAAAgAAAADewq1UMCVJ2C3VzYwoevwMcWD8DQtJkjxetobiHEnHYgAAAAEAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAA3sKtVDAlSdgt1c2MKHr8DHFg/A0LSZI8XraG4hxJx2IAAAABAAAAACI40RTBOFEE7uT5mZkoq30mbvxLPJpMUm9cIFHgK9SRAAAAAAAAAAAAmJaAAAAAAAAAAAA=',
      options: ['validation', 'simulation'],
    });
  });
});
