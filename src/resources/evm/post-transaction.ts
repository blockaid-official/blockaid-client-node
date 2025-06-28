// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class PostTransaction extends APIResource {
  /**
   * Report for misclassification of an EVM post transaction.
   *
   * @example
   * ```ts
   * const response = await client.evm.postTransaction.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_NEGATIVE',
   *   report: {
   *     type: 'request_id',
   *     request_id: '11111111-1111-1111-1111-111111111111',
   *   },
   * });
   * ```
   */
  report(body: PostTransactionReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/post-transaction/report', { body, ...options });
  }

  /**
   * Scan a transaction that was already executed on chain, returns validation with
   * features indicating address poisoning entites and malicious operators.
   *
   * @example
   * ```ts
   * const transactionScanResponse =
   *   await client.evm.postTransaction.scan({
   *     chain: 'ethereum',
   *     data: {
   *       tx_hash:
   *         '0xc01780dadc107754b331250b4797606949cb3d0087facc0a737122d5e973c83c',
   *     },
   *     metadata: { non_dapp: true },
   *     options: ['validation', 'simulation'],
   *   });
   * ```
   */
  scan(
    body: PostTransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/v0/evm/post-transaction/scan', { body, ...options });
  }
}

export type PostTransactionReportResponse = unknown;

export interface PostTransactionReportParams {
  /**
   * Details about the report.
   */
  details: string;

  /**
   * The event type of the report. Could be FALSE_POSITIVE or FALSE_NEGATIVE.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * The report parameters.
   */
  report:
    | PostTransactionReportParams.ParamReportChainTransactionHashParams
    | PostTransactionReportParams.RequestIDReport;
}

export namespace PostTransactionReportParams {
  export interface ParamReportChainTransactionHashParams {
    params: ParamReportChainTransactionHashParams.Params;

    type: 'params';
  }

  export namespace ParamReportChainTransactionHashParams {
    export interface Params {
      /**
       * The chain name
       */
      chain: EvmAPI.TransactionScanSupportedChain;

      /**
       * The transaction hash to report on.
       */
      tx_hash: string;
    }
  }

  export interface RequestIDReport {
    request_id: string;

    type: 'request_id';
  }
}

export interface PostTransactionScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  data: PostTransactionScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: PostTransactionScanParams.Metadata;

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
  state_override?: { [key: string]: PostTransactionScanParams.StateOverride };
}

export namespace PostTransactionScanParams {
  export interface Data {
    /**
     * The transaction hash to scan
     */
    tx_hash: string;
  }

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

export declare namespace PostTransaction {
  export {
    type PostTransactionReportResponse as PostTransactionReportResponse,
    type PostTransactionReportParams as PostTransactionReportParams,
    type PostTransactionScanParams as PostTransactionScanParams,
  };
}
