// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class Transaction extends APIResource {
  /**
   * Report for misclassification of a transaction.
   *
   * @example
   * ```ts
   * const response = await client.evm.transaction.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_POSITIVE',
   *   report: {
   *     type: 'request_id',
   *     request_id: '11111111-1111-1111-1111-111111111111',
   *   },
   * });
   * ```
   */
  report(body: TransactionReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/transaction/report', { body, ...options });
  }

  /**
   * Gets a transaction and returns a full simulation indicating what will happen in
   * the transaction together with a recommended action and some textual reasons of
   * why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const transactionScanResponse =
   *   await client.evm.transaction.scan({
   *     account_address: 'account_address',
   *     chain: 'ethereum',
   *     data: {
   *       from: '0x5e1a0d484c5f0de722e82f9dca3a9d5a421d47cb',
   *       to: '0x0d524a5b52737c0a02880d5e84f7d20b8d66bfba',
   *       data: '0x',
   *       value: '0x1000000000000000',
   *     },
   *     metadata: { domain: 'https://boredapeyartclub.com' },
   *     block: '21211118',
   *     options: ['simulation', 'validation'],
   *   });
   * ```
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
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
   * The event type of the report. Could be FALSE_POSITIVE or FALSE_NEGATIVE.
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
      chain: EvmAPI.TransactionScanSupportedChain;

      /**
       * Transaction parameters
       */
      data: Params.Transaction | Params.JsonRpc;

      /**
       * Object of additional information to validate against.
       */
      metadata: Params.Metadata;
    }

    export namespace Params {
      export interface Transaction {
        /**
         * The source address of the transaction in hex string format
         */
        from: string;

        /**
         * The authorization list
         */
        authorization_list?: Array<Transaction.AuthorizationList>;

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

      export namespace Transaction {
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

      export interface JsonRpc {
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
          | 'eth_sign';

        /**
         * The parameters of the JSON-RPC request in JSON format
         */
        params: Array<unknown | string>;
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
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Transaction parameters
   */
  data: TransactionScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: TransactionScanParams.Metadata;

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
  state_override?: { [key: string]: TransactionScanParams.StateOverride };
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

export declare namespace Transaction {
  export {
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
