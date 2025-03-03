// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class TransactionRaw extends APIResource {
  /**
   * Gets a raw transaction and returns a full simulation indicating what will happen
   * in the transaction together with a recommended action and some textual reasons
   * of why the transaction was flagged that way.
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
  metadata: EvmAPI.Metadata;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * list of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: Record<string, TransactionRawScanParams.StateOverride>;
}

export namespace TransactionRawScanParams {
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
    state?: Record<string, string>;

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: Record<string, string>;
  }
}

export declare namespace TransactionRaw {
  export { type TransactionRawScanParams as TransactionRawScanParams };
}
