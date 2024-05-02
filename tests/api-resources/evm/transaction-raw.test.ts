// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactionRaw', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.transactionRaw.scan({
      account_address: '0x362320f3a3eeeb4c4699b1b9062a84B2612bcdba',
      data: '0x02f903f8018208488405f5e100850a9a03feb38302fa6a941111111254eeb25477b68fb85ed929f73a96058280b9038862e238bb00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ab3e25398a24d6af080000000000000000000000000000000000000000000000000000000070db68f000000000000000000000000000000000000000000000000000000c0c2f020e4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000006e2a43be0b1d33b726f0ca3b8de60b3482b8b050000000000000000000000000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000773594000000000000000000000000000000000000000000000000b4b34aede8e617e060000000a4000000a4000000a4000000a400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a4bf15fcd8000000000000000000000000303389f541ff2d620e42832f180a08e767b28e10000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000242cc2878d0064b6509600000000060000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a946fd8d5b9e873563a1411cbdf290b8310d8cdddc94da3aebf95b16a6dc0bf56d736ece63e3906527b7dcf08aa845d6a5cd4e0d99c9994f617b6faa378317f71c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e26b9977c001a0386a78e05b5ab3b4badbae843aaa6ed379b2f4353aa730c8f360141e72cba692a036ed37a00c6364685e58bc0cd9cdd1c140d6690c3c0d216c1b67e3d262e2f0f9',
      metadata: { domain: 'https://app.1inch.io' },
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
    const response = await blockaid.evm.transactionRaw.scan({
      account_address: '0x362320f3a3eeeb4c4699b1b9062a84B2612bcdba',
      data: '0x02f903f8018208488405f5e100850a9a03feb38302fa6a941111111254eeb25477b68fb85ed929f73a96058280b9038862e238bb00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ab3e25398a24d6af080000000000000000000000000000000000000000000000000000000070db68f000000000000000000000000000000000000000000000000000000c0c2f020e4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000006e2a43be0b1d33b726f0ca3b8de60b3482b8b050000000000000000000000000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000773594000000000000000000000000000000000000000000000000b4b34aede8e617e060000000a4000000a4000000a4000000a400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a4bf15fcd8000000000000000000000000303389f541ff2d620e42832f180a08e767b28e10000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000242cc2878d0064b6509600000000060000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a946fd8d5b9e873563a1411cbdf290b8310d8cdddc94da3aebf95b16a6dc0bf56d736ece63e3906527b7dcf08aa845d6a5cd4e0d99c9994f617b6faa378317f71c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e26b9977c001a0386a78e05b5ab3b4badbae843aaa6ed379b2f4353aa730c8f360141e72cba692a036ed37a00c6364685e58bc0cd9cdd1c140d6690c3c0d216c1b67e3d262e2f0f9',
      metadata: { domain: 'https://app.1inch.io' },
      chain: 'ethereum',
      options: ['simulation', 'validation'],
    });
  });
});
