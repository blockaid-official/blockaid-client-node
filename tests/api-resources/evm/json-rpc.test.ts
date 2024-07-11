// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const blockaid = new Blockaid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jsonRpc', () => {
  test('scan: only required params', async () => {
    const responsePromise = blockaid.evm.jsonRpc.scan({
      chain: 'ethereum',
      data: {
        method: 'eth_signTypedData_v4',
        params: [
          '0x49c73c9d361c04769a452E85D343b41aC38e0EE4',
          '{"domain":{"chainId":1,"name":"Aave interest bearing WETH","version":"1","verifyingContract":"0x030ba81f1c18d280636f32af80b9aad02cf0854e"},"message":{"owner":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4","spender":"0xa74cbd5b80f73b5950768c8dc467f1c6307c00fd","value":"115792089237316195423570985008687907853269984665640564039457584007913129639935","nonce":"0","deadline":"1988064000","holder":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4"},"primaryType":"Permit","types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"Permit":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}]}}',
        ],
      },
      metadata: { domain: 'https://boredapeyartclub.com' },
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
    const response = await blockaid.evm.jsonRpc.scan({
      chain: 'ethereum',
      data: {
        method: 'eth_signTypedData_v4',
        params: [
          '0x49c73c9d361c04769a452E85D343b41aC38e0EE4',
          '{"domain":{"chainId":1,"name":"Aave interest bearing WETH","version":"1","verifyingContract":"0x030ba81f1c18d280636f32af80b9aad02cf0854e"},"message":{"owner":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4","spender":"0xa74cbd5b80f73b5950768c8dc467f1c6307c00fd","value":"115792089237316195423570985008687907853269984665640564039457584007913129639935","nonce":"0","deadline":"1988064000","holder":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4"},"primaryType":"Permit","types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"Permit":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}]}}',
        ],
      },
      metadata: { domain: 'https://boredapeyartclub.com' },
      account_address: '0x49c73c9d361c04769a452E85D343b41aC38e0EE4',
      block: '18370320',
      options: ['simulation', 'validation'],
    });
  });
});
