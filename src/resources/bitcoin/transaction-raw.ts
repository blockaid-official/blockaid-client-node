// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BitcoinAPI from './bitcoin';

export class TransactionRaw extends APIResource {
  /**
   * Submit an appeal or false-positive report for a Bitcoin transaction scan. Use
   * when you believe a scan result was incorrect (e.g. should_be_benign,
   * should_be_malicious, wrong_simulation_result).
   */
  report(
    body: TransactionRawReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRawReportResponse> {
    return this._client.post('/v0/bitcoin/transaction/report', { body, ...options });
  }

  /**
   * Scan a raw Bitcoin transaction for security risks before signing. Returns a
   * validation verdict (Benign, Warning, or Malicious) and, when requested, a
   * simulation of asset changes.
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
  /**
   * Free-text explanation or context for the report.
   */
  details: string;

  /**
   * Type of appeal: what you believe was wrong with the scan result.
   */
  event: 'should_be_malicious' | 'should_be_benign' | 'wrong_simulation_result';

  /**
   * Either a prior scan request ID or the full transaction parameters being
   * reported.
   */
  report:
    | TransactionRawReportParams.BitcoinAppealRequestID
    | TransactionRawReportParams.BitcoinAppealTransactionDataReport;
}

export namespace TransactionRawReportParams {
  export interface BitcoinAppealRequestID {
    /**
     * Request ID from a previous transaction scan response.
     */
    id: string;

    /**
     * Discriminator; use "request_id" when referencing a prior scan.
     */
    type?: 'request_id';
  }

  export interface BitcoinAppealTransactionDataReport {
    /**
     * Full transaction scan request (same shape as the scan endpoint).
     */
    params: BitcoinAPI.BitcoinTransactionScanRequest;

    /**
     * Discriminator; use "params" when supplying full transaction data.
     */
    type?: 'params';
  }
}

export interface TransactionRawScanParams {
  /**
   * The Bitcoin address that owns the UTXOs being spent.
   */
  account_address: string;

  chain: 'bitcoin';

  /**
   * Context of where the transaction was initiated: use wallet metadata when the
   * user is signing in a wallet for an external site; use in-app metadata when the
   * transaction is created within your own app.
   *
   * Choosing the correct type improves risk analysis and reporting.
   */
  metadata:
    | TransactionRawScanParams.BitcoinWalletRequestMetadata
    | TransactionRawScanParams.BitcoinInAppRequestMetadata;

  /**
   * The raw unsigned transaction in hexadecimal, as produced by the wallet or your
   * app. This is the same payload the user would sign.
   */
  transaction: string;

  /**
   * Which parts of the response you need:
   *
   * - **validation** — Security verdict (Benign/Warning/Malicious) and risk
   *   explanation. Use when deciding whether to block or warn.
   * - **simulation** — Predicted summary of balance and asset changes (e.g. "You
   *   will send 0.01 BTC to bc1q..."). Use when showing the user what the
   *   transaction does.
   *
   * You can request one or both; default is both.
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionRawScanParams {
  export interface BitcoinWalletRequestMetadata {
    /**
     * Identifies the request as a wallet signing a transaction on behalf of an
     * external dApp. The type improves threat context and helps attribute risk to
     * specific origins.
     */
    type: 'wallet';

    /**
     * The full URL of the dApp or page where the user initiated the transaction (e.g.
     * https://app.example.com/swap).
     */
    url: string;
  }

  export interface BitcoinInAppRequestMetadata {
    /**
     * Identifies the request as coming from your own app (e.g. in-app send, swap, or
     * internal flow).
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
