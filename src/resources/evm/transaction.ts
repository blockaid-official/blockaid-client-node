// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionAPI from './transaction';
import * as EvmAPI from './evm';

export class Transaction extends APIResource {
  /**
   * Report for misclassification of a transaction.
   */
  report(body: TransactionReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/transaction/report', { body, ...options });
  }

  /**
   * Gets a transaction and returns a full simulation indicating what will happen in
   * the transaction together with a recommended action and some textual reasons of
   * why the transaction was flagged that way.
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.EvmTransactionScanResponse> {
    return this._client.post('/v0/evm/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = unknown;

export interface TransactionReportParams {
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
    | TransactionReportParams.ParamReportTransactionReportParams
    | TransactionReportParams.RequestIDReport;
}

export namespace TransactionReportParams {
  export interface ParamReportTransactionReportParams {
    params: ParamReportTransactionReportParams.Params;

    type: 'params';
  }

  export namespace ParamReportTransactionReportParams {
    export interface Params {
      /**
       * The address to relate the transaction to. Account address determines in which
       * perspective the transaction is simulated and validated.
       */
      account_address: string;

      /**
       * The chain name
       */
      chain: EvmAPI.EvmTransactionScanSupportedChain;

      /**
       * Transaction parameters
       */
      data: Params.Transaction | Params.JsonRpc;

      /**
       * Object of additional information to validate against.
       */
      metadata: EvmAPI.Metadata;
    }

    export namespace Params {
      export interface Transaction {
        /**
         * The source address of the transaction in hex string format
         */
        from: string;

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

      export interface JsonRpc {
        /**
         * The method of the JSON-RPC request
         */
        method: string;

        /**
         * The parameters of the JSON-RPC request in JSON format
         */
        params: Array<unknown>;
      }
    }
  }

  export interface RequestIDReport {
    request_id: string;

    type: 'request_id';
  }
}

export interface TransactionScanParams {
  /**
   * The address to relate the transaction to. Account address determines in which
   * perspective the transaction is simulated and validated.
   */
  account_address: string;

  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.EvmTransactionScanSupportedChain | (string & {});

  /**
   * Transaction parameters
   */
  data: TransactionScanParams.Data;

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

export namespace TransactionScanParams {
  /**
   * Transaction parameters
   */
  export interface Data {
    /**
     * The source address of the transaction in hex string format
     */
    from: string;

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
}

export namespace Transaction {
  export import TransactionReportResponse = TransactionAPI.TransactionReportResponse;
  export import TransactionReportParams = TransactionAPI.TransactionReportParams;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
