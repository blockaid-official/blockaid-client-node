// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BitcoinAPI from './bitcoin';

export class TransactionRaw extends APIResource {
  /**
   * Report Transaction
   */
  report(
    body: TransactionRawReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRawReportResponse> {
    return this._client.post('/v0/bitcoin/transaction/report', { body, ...options });
  }

  /**
   * Scan Transaction
   */
  scan(
    body: TransactionRawScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BitcoinAPI.BitcoinTransactionScanResponse> {
    return this._client.post('/v0/bitcoin/transaction-raw/scan', { body, ...options });
  }
}

export type TransactionRawReportResponse = number;

export interface TransactionRawReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign' | 'wrong_simulation_result';

  report:
    | TransactionRawReportParams.BitcoinAppealRequestID
    | TransactionRawReportParams.BitcoinAppealTransactionDataReport;
}

export namespace TransactionRawReportParams {
  export interface BitcoinAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface BitcoinAppealTransactionDataReport {
    params: BitcoinAPI.BitcoinTransactionScanRequest;

    type?: 'params';
  }
}

export interface TransactionRawScanParams {
  account_address: string;

  chain: 'bitcoin';

  /**
   * Metadata
   */
  metadata:
    | TransactionRawScanParams.BitcoinWalletRequestMetadata
    | TransactionRawScanParams.BitcoinInAppRequestMetadata;

  transaction: string;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionRawScanParams {
  export interface BitcoinWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface BitcoinInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export declare namespace TransactionRaw {
  export {
    type TransactionRawReportResponse as TransactionRawReportResponse,
    type TransactionRawReportParams as TransactionRawReportParams,
    type TransactionRawScanParams as TransactionRawScanParams,
  };
}
