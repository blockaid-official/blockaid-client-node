// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BitcoinAPI from './bitcoin';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BitcoinAPI.BitcoinTransactionScanResponse> {
    return this._client.post('/v0/bitcoin/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: string;

  chain: 'bitcoin';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.BitcoinWalletRequestMetadata
    | TransactionScanParams.BitcoinInAppRequestMetadata;

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

export declare namespace Transaction {
  export { type TransactionScanParams as TransactionScanParams };
}
