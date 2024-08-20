// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PostTransactionAPI from './post-transaction';
import * as EvmAPI from './evm';

export class PostTransaction extends APIResource {
  /**
   * Report for misclassification of an EVM post transaction.
   */
  report(body: PostTransactionReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/post-transaction/report', { body, ...options });
  }

  /**
   * Scan a transaction that was already executed on chain, returns validation with
   * features indicating address poisoning entites and malicious operators.
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
   * An enumeration.
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
}

export namespace PostTransactionScanParams {
  export interface Data {
    /**
     * The transaction hash to scan
     */
    tx_hash: string;
  }
}

export namespace PostTransaction {
  export import PostTransactionReportResponse = PostTransactionAPI.PostTransactionReportResponse;
  export import PostTransactionReportParams = PostTransactionAPI.PostTransactionReportParams;
  export import PostTransactionScanParams = PostTransactionAPI.PostTransactionScanParams;
}
