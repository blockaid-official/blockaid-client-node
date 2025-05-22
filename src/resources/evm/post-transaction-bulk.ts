// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class PostTransactionBulk extends APIResource {
  /**
   * Scan transactions that were already executed on chain, returns validation with
   * features indicating address poisoning entites and malicious operators.
   *
   * @example
   * ```ts
   * const transactionScanResponses =
   *   await client.evm.postTransactionBulk.scan({
   *     chain: 'ethereum',
   *     data: [
   *       '0x11c865addc39f1e1c4f0f6c9a84533c501e3705a6397988af942b2103d5e87a2',
   *       '0x50a109a2c2dd396e49710613dcf652728656055d90f80094f10c3ddd05150d2e',
   *     ],
   *     metadata: { non_dapp: true },
   *     options: ['validation', 'simulation'],
   *   });
   * ```
   */
  scan(
    body: PostTransactionBulkScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTransactionBulkScanResponse> {
    return this._client.post('/v0/evm/post-transaction-bulk/scan', { body, ...options });
  }
}

export type PostTransactionBulkScanResponse = Array<EvmAPI.TransactionScanResponse>;

export interface PostTransactionBulkScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Transaction hashes to scan
   */
  data: Array<string>;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.MetadataParam;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: Record<string, PostTransactionBulkScanParams.StateOverride>;
}

export namespace PostTransactionBulkScanParams {
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

export declare namespace PostTransactionBulk {
  export {
    type PostTransactionBulkScanResponse as PostTransactionBulkScanResponse,
    type PostTransactionBulkScanParams as PostTransactionBulkScanParams,
  };
}
