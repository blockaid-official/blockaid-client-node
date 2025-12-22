// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StarknetAPI from './starknet';

export class Transaction extends APIResource {
  /**
   * Report Transaction
   *
   * @example
   * ```ts
   * const response = await client.starknet.transaction.report({
   *   details: 'details',
   *   event: 'should_be_malicious',
   *   report: { id: 'id' },
   * });
   * ```
   */
  report(
    body: TransactionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionReportResponse> {
    return this._client.post('/v0/starknet/transaction/report', { body, ...options });
  }

  /**
   * Scan Transactions
   *
   * @example
   * ```ts
   * const starknetTransactionScanResponse = await client.starknet.transaction.scan({
   *   account_address: '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
   *   chain: 'mainnet',
   *   metadata: { type: 'wallet', url: 'giftnostra.com' },
   *   transaction: {
   *     version: 3,
   *     nonce: '0xc',
   *     sender_address: '0x1840b3c89a446c74a3962647a2a7fb449d83905c4511027dfa9e099c6886691',
   *     calldata: [
   *       '0x1',
   *       '0x4b33a775b537a39c8960120806e815764f173e4fa76546e6706c31aa1b0ac4a',
   *       '0x994f23fef04108984d50a4f870723cd46f95d592ed3de9a13f97d5c55846fb',
   *       '0x9',
   *       '0x1',
   *       '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
   *       '0x1',
   *       '0x62a2959fa6502b30cbfb51199fbbe72e72ee4f5a86ec754b4172c7d7beb6ff4',
   *       '0x1',
   *       '0x5f612ce',
   *       '0x0',
   *       '0x0',
   *       '0x0',
   *     ],
   *     chain_id: '0x534e5f4d41494e',
   *     nonce_data_availability_mode: 0,
   *     paymaster_data: [],
   *     account_deployment_data: [],
   *   },
   *   block_number: '0xa12e3',
   *   options: ['simulation', 'validation'],
   * });
   * ```
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StarknetAPI.StarknetTransactionScanResponse> {
    return this._client.post('/v0/starknet/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = number;

export interface TransactionReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign' | 'wrong_simulation_result';

  report:
    | TransactionReportParams.StarknetAppealRequestID
    | TransactionReportParams.StarknetAppealTransactionDataReport;
}

export namespace TransactionReportParams {
  export interface StarknetAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface StarknetAppealTransactionDataReport {
    params: StarknetAPI.StarknetTransactionScanRequest;

    type?: 'params';
  }
}

export interface TransactionScanParams {
  account_address: string;

  /**
   * The chain name or chain ID
   */
  chain: 'mainnet' | (string & {});

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.StarknetWalletRequestMetadata
    | TransactionScanParams.StarknetInAppRequestMetadata;

  transaction:
    | TransactionScanParams.StarknetInvokeV1TransactionSchema
    | TransactionScanParams.StarknetInvokeV3TransactionSchema
    | TransactionScanParams.StarknetDeployAccountV1TransactionSchema
    | TransactionScanParams.StarknetDeployAccountV3TransactionSchema;

  /**
   * Optional block number or tag context for the simulation
   */
  block_number?: string | null;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionScanParams {
  export interface StarknetWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface StarknetInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }

  export interface StarknetInvokeV1TransactionSchema {
    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The address of the sender.
     */
    sender_address: string;

    /**
     * The version of the transaction.
     */
    version: 1;

    /**
     * The arguments that are passed to the validate and execute functions.
     */
    calldata?: Array<string>;
  }

  export interface StarknetInvokeV3TransactionSchema {
    /**
     * The arguments that are passed to the validate and execute functions.
     */
    calldata: Array<string>;

    /**
     * The id of the chain to which the transaction is sent.
     */
    chain_id: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The address of the sender.
     */
    sender_address: string;

    /**
     * The version of the transaction.
     */
    version: 3;

    /**
     * For future use. Currently this value is always empty.
     */
    account_deployment_data?: Array<string>;

    /**
     * The nonce data availability mode.
     */
    nonce_data_availability_mode?: number;

    /**
     * For future use. Currently this value is always empty.
     */
    paymaster_data?: Array<string>;
  }

  export interface StarknetDeployAccountV1TransactionSchema {
    /**
     * The hash of the contract class.
     */
    class_hash: string;

    /**
     * The arguments that are passed to the constructor function.
     */
    constructor_calldata: Array<string>;

    /**
     * The salt of the contract address.
     */
    contract_address_salt: string;

    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The version of the transaction.
     */
    version: 1;
  }

  export interface StarknetDeployAccountV3TransactionSchema {
    /**
     * The hash of the contract class.
     */
    class_hash: string;

    /**
     * The arguments that are passed to the constructor function.
     */
    constructor_calldata: Array<string>;

    /**
     * The salt of the contract address.
     */
    contract_address_salt: string;

    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The version of the transaction.
     */
    version: 3;
  }
}

export declare namespace Transaction {
  export {
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
