// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blockaid from '@blockaid/client';
import { Response } from 'node-fetch';

const client = new Blockaid({
  clientId: 'My Client ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource userOperation', () => {
  test('scan: only required params', async () => {
    const responsePromise = client.evm.userOperation.scan({
      chain: 'arbitrum',
      data: { operation: {} },
      metadata: { domain: 'example.com' },
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
    const response = await client.evm.userOperation.scan({
      chain: 'arbitrum',
      data: {
        operation: {
          call_data:
            '0x51945447000000000000000000000000aeed57a826a998f9388ce2fd6cdb0b6aa75e3d190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000050a9266605ba303b659ff105919205570f2af971000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000',
          call_gas_limit: '0x3c38',
          init_code: '0x',
          max_fee_per_gas: '0x218fe7',
          max_priority_fee_per_gas: '0xf4240',
          nonce: '0x22',
          paymaster_and_data:
            '0x9d6ac51b972544251fcc0f2902e633e3f9bd3f290000000000000000000000000000000000000000000000000000000065cc4c990000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001eb8343d03ec9fc28a877c2fcad21d9923c56e6ad156ea6647282a35ce215c931f9fbdf3bec37168f9c9b49e33a0818731c5892ff626852f9465e619538540221c',
          pre_verification_gas: '0x2496ebc',
          sender: '0x77bA5AC3ca4864be26CA3112baDf07286CcC3324',
          signature: '0x',
          verification_gas_limit: '0x1659f',
        },
        entrypoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
      },
      metadata: { domain: 'example.com' },
      account_address: '0x77bA5AC3ca4864be26CA3112baDf07286CcC3324',
      block: '0x5c6fd5',
      options: ['validation', 'simulation'],
    });
  });
});
