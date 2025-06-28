// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class TransactionRaw extends APIResource {
  /**
   * Gets a raw transaction and returns a full simulation indicating what will happen
   * in the transaction together with a recommended action and some textual reasons
   * of why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const transactionScanResponse =
   *   await client.evm.transactionRaw.scan({
   *     account_address:
   *       '0x362320f3a3eeeb4c4699b1b9062a84B2612bcdba',
   *     chain: 'ethereum',
   *     data: '0x02f903f8018208488405f5e100850a9a03feb38302fa6a941111111254eeb25477b68fb85ed929f73a96058280b9038862e238bb00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ab3e25398a24d6af080000000000000000000000000000000000000000000000000000000070db68f000000000000000000000000000000000000000000000000000000c0c2f020e4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000006e2a43be0b1d33b726f0ca3b8de60b3482b8b050000000000000000000000000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000773594000000000000000000000000000000000000000000000000b4b34aede8e617e060000000a4000000a4000000a4000000a400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a4bf15fcd8000000000000000000000000303389f541ff2d620e42832f180a08e767b28e10000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000242cc2878d0064b6509600000000060000b78ed0dd769e3fbd8e2b526f6f75dcccc7e2af4f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a946fd8d5b9e873563a1411cbdf290b8310d8cdddc94da3aebf95b16a6dc0bf56d736ece63e3906527b7dcf08aa845d6a5cd4e0d99c9994f617b6faa378317f71c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e26b9977c001a0386a78e05b5ab3b4badbae843aaa6ed379b2f4353aa730c8f360141e72cba692a036ed37a00c6364685e58bc0cd9cdd1c140d6690c3c0d216c1b67e3d262e2f0f9',
   *     metadata: { domain: 'https://app.1inch.io' },
   *     block: '17718858',
   *     options: ['simulation', 'validation'],
   *   });
   * ```
   */
  scan(
    body: TransactionRawScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/v0/evm/transaction-raw/scan', { body, ...options });
  }
}

export interface TransactionRawScanParams {
  /**
   * The address to relate the transaction to. Account address determines in which
   * perspective the transaction is simulated and validated.
   */
  account_address: string;

  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Hex string of the raw transaction data
   */
  data: string;

  /**
   * Object of additional information to validate against.
   */
  metadata: TransactionRawScanParams.Metadata;

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
  state_override?: { [key: string]: TransactionRawScanParams.StateOverride };
}

export namespace TransactionRawScanParams {
  /**
   * Object of additional information to validate against.
   */
  export interface Metadata {
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

export declare namespace TransactionRaw {
  export { type TransactionRawScanParams as TransactionRawScanParams };
}
