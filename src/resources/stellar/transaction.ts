// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StellarAPI from './stellar';

export class Transaction extends APIResource {
  /**
   * Report Transaction
   *
   * @example
   * ```ts
   * const response = await client.stellar.transaction.report({
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
    return this._client.post('/v0/stellar/transaction/report', { body, ...options });
  }

  /**
   * Gets a transaction and returns a full simulation indicating what will happen in
   * the transaction together with a recommended action and some textual reasons of
   * why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const stellarTransactionScanResponse =
   *   await client.stellar.transaction.scan({
   *     account_address:
   *       'GDPMFLKUGASUTWBN2XGYYKD27QGHCYH4BUFUTER4L23INYQ4JHDWFOIE',
   *     chain: 'pubnet',
   *     metadata: { type: 'wallet', url: 'localhost' },
   *     transaction:
   *       'AAAAAgAAAADewq1UMCVJ2C3VzYwoevwMcWD8DQtJkjxetobiHEnHYgAAAAEAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAA3sKtVDAlSdgt1c2MKHr8DHFg/A0LSZI8XraG4hxJx2IAAAABAAAAACI40RTBOFEE7uT5mZkoq30mbvxLPJpMUm9cIFHgK9SRAAAAAAAAAAAAmJaAAAAAAAAAAAA=',
   *     options: ['validation', 'simulation'],
   *   });
   * ```
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StellarAPI.StellarTransactionScanResponse> {
    return this._client.post('/v0/stellar/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = number;

export interface TransactionReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign' | 'wrong_simulation_result';

  report:
    | TransactionReportParams.StellarAppealRequestID
    | TransactionReportParams.StellarAppealTransactionDataReport;
}

export namespace TransactionReportParams {
  export interface StellarAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface StellarAppealTransactionDataReport {
    params: StellarAPI.StellarTransactionScanRequest;

    type?: 'params';
  }
}

export interface TransactionScanParams {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet' | 'testnet';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.StellarWalletRequestMetadata
    | TransactionScanParams.StellarInAppRequestMetadata;

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

export namespace TransactionScanParams {
  export interface StellarWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export declare namespace Transaction {
  export {
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
