// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource message', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.solana.message.scan({
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      metadata: {},
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTCv27zKyx1AHWDepVVoS5ZV2Sb3Nuw8RGrmjsZgU3hvPzE9hRBosY25Xpbyqo4b3Vr1BLfrVRBqsz7PvB74APZ7dHxfH49Xb2edrFS2DZ84SwtsZYLyTGF5wtZ6WHWiZN3ixjKGMAh5NLNmT9imKMBgtxuTMAw',
      ],
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
    const response = await blockaid.solana.message.scan({
      account_address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
      metadata: { url: 'https://example.com' },
      transactions: [
        'vxBNpvao9QJmLKXUThbbjRnxm3ufu4Wku97kHd5a67FDjSqeHwcPrBKTjAHp4ECr61eWwoxvUEVTuuWX65P9bCNDJrTJpX64vjdtpHA8cogA4C92Ubj813wUUA8Ey4Bvcrdj5c1bSTCv27zKyx1AHWDepVVoS5ZV2Sb3Nuw8RGrmjsZgU3hvPzE9hRBosY25Xpbyqo4b3Vr1BLfrVRBqsz7PvB74APZ7dHxfH49Xb2edrFS2DZ84SwtsZYLyTGF5wtZ6WHWiZN3ixjKGMAh5NLNmT9imKMBgtxuTMAw',
      ],
      chain: 'mainnet',
      encoding: 'base58',
      method: 'signAndSendTransaction',
    });
  });
});
