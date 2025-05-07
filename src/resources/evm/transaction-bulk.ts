// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class TransactionBulk extends APIResource {
  /**
   * Gets a bulk of transactions and returns a simulation showcasing the outcome
   * after executing the transactions synchronously, along with a suggested course of
   * action and textual explanations highlighting the reasons for flagging the bulk
   * in that manner.
   *
   * @example
   * ```ts
   * const transactionScanResponses =
   *   await client.evm.transactionBulk.scan({
   *     chain: 'ethereum',
   *     data: [
   *       {
   *         data: '0x',
   *         value: '0x100000000000',
   *         to: '0xA4e5961B58DBE487639929643dCB1Dc3848dAF5E',
   *         from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
   *       },
   *       {
   *         data: '0x',
   *         value: '0xdeadbeef',
   *         to: '0x0D524a5B52737C0a02880d5E84F7D20b8d66bfba',
   *         from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
   *       },
   *     ],
   *     metadata: { domain: 'https://example.com' },
   *     block: '20224477',
   *     options: ['validation'],
   *   });
   * ```
   */
  scan(
    body: TransactionBulkScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionBulkScanResponse> {
    return this._client.post('/v0/evm/transaction-bulk/scan', { body, ...options });
  }
}

export type TransactionBulkScanResponse = Array<EvmAPI.TransactionScanResponse>;

export interface TransactionBulkScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Transaction bulk parameters
   */
  data: Array<TransactionBulkScanParams.Data>;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.MetadataParam;

  /**
   * Should aggregate the results to one result
   */
  aggregated?: boolean;

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
  state_override?: Record<string, TransactionBulkScanParams.StateOverride>;
}

export namespace TransactionBulkScanParams {
  export interface Data {
    /**
     * The source address of the transaction in hex string format
     */
    from: string;

    /**
     * The authorization list
     */
    authorization_list?: Array<Data.AuthorizationList>;

    /**
     * The encoded call data of the transaction in hex string format
     */
    data?: string;

    /**
     * The gas required for the transaction in hex string format.
     */
    gas?: string;

    /**
     * The gas price for the transaction in hex string format.
     */
    gas_price?: string;

    /**
     * The destination address of the transaction in hex string format
     */
    to?: string;

    /**
     * The value of the transaction in Wei in hex string format
     */
    value?: string;
  }

  export namespace Data {
    export interface AuthorizationList {
      /**
       * The delegation designation address
       */
      address: string;

      chainId?: string;

      /**
       * The authority address of the delegation, should be provided when the signature
       * (r,s,yParity) is not provided in order to simulate the transaction with the
       * correct delegation
       */
      eoa?: string;

      nonce?: string;

      r?: string;

      s?: string;

      yParity?: string;
    }
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
    state?: Record<string, string>;

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: Record<string, string>;
  }
}

export declare namespace TransactionBulk {
  export {
    type TransactionBulkScanResponse as TransactionBulkScanResponse,
    type TransactionBulkScanParams as TransactionBulkScanParams,
  };
}
