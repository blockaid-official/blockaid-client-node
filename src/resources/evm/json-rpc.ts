// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class JsonRpc extends APIResource {
  /**
   * Gets a json-rpc request and returns a full simulation indicating what will
   * happen in the transaction together with a recommended action and some textual
   * reasons of why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const transactionScanResponse =
   *   await client.evm.jsonRpc.scan({
   *     chain: 'ethereum',
   *     data: {
   *       method: 'eth_signTypedData_v4',
   *       params: [
   *         '0x49c73c9d361c04769a452E85D343b41aC38e0EE4',
   *         '{"domain":{"chainId":1,"name":"Aave interest bearing WETH","version":"1","verifyingContract":"0x030ba81f1c18d280636f32af80b9aad02cf0854e"},"message":{"owner":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4","spender":"0xa74cbd5b80f73b5950768c8dc467f1c6307c00fd","value":"115792089237316195423570985008687907853269984665640564039457584007913129639935","nonce":"0","deadline":"1988064000","holder":"0x49c73c9d361c04769a452E85D343b41aC38e0EE4"},"primaryType":"Permit","types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"Permit":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}]}}',
   *       ],
   *       options: {
   *         domain: 'rewards.yfdai.org',
   *         url: 'https://rewards.yfdai.org/',
   *         faviconURL: 'https://rewards.yfdai.org/Favicon.png',
   *         title: 'YFDAI Finance',
   *         tabId: 265105513,
   *       },
   *       timestamp: 1686151800667,
   *     },
   *     metadata: { domain: 'https://boredapeyartclub.com' },
   *     account_address:
   *       '0x49c73c9d361c04769a452E85D343b41aC38e0EE4',
   *     block: '18370320',
   *     options: ['simulation', 'validation'],
   *   });
   * ```
   */
  scan(
    body: JsonRpcScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/v0/evm/json-rpc/scan', { body, ...options });
  }
}

export interface JsonRpcScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * JSON-RPC request that was received by the wallet.
   */
  data: JsonRpcScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.MetadataNonDappParam | JsonRpcScanParams.MetadataDapp;

  /**
   * The address of the account (wallet) that received the request, in hex string
   * format
   */
  account_address?: string;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * List of one or more of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. "gas_estimation" - include gas estimation
   * result in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * Simulate transactions using gas estimation result. This requires
   * "gas_estimation" option to be enabled.
   */
  simulate_with_estimated_gas?: boolean;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: { [key: string]: JsonRpcScanParams.StateOverride };
}

export namespace JsonRpcScanParams {
  /**
   * JSON-RPC request that was received by the wallet.
   */
  export interface Data {
    /**
     * An enumeration.
     */
    method:
      | 'eth_sendTransaction'
      | 'eth_sendRawTransaction'
      | 'eth_signTransaction'
      | 'eth_signTypedData'
      | 'eth_signTypedData_v1'
      | 'eth_signTypedData_v2'
      | 'eth_signTypedData_v3'
      | 'eth_signTypedData_v4'
      | 'eth_sendUserOperation'
      | 'personal_sign'
      | 'eth_sign'
      | 'wallet_sendCalls';

    /**
     * The parameters of the JSON-RPC request in JSON format
     */
    params: Array<unknown | string>;
  }

  export interface MetadataDapp {
    /**
     * cross reference transaction against the domain.
     */
    domain: string;
  }

  export interface StateOverride {
    /**
     * Fake balance to set for the account before executing the call.
     */
    balance?: string;

    /**
     * Fake EVM bytecode to inject into the account before executing the call.
     */
    code?: string;

    /**
     * Moves precompile to given address
     */
    movePrecompileToAddress?: string;

    /**
     * Fake nonce to set for the account before executing the call.
     */
    nonce?: string;

    /**
     * Fake key-value mapping to override all slots in the account storage before
     * executing the call.
     */
    state?: { [key: string]: string };

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: { [key: string]: string };
  }
}

export declare namespace JsonRpc {
  export { type JsonRpcScanParams as JsonRpcScanParams };
}
