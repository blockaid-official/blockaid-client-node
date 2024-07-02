// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as TransactionAPI from '@blockaid/client/resources/stellar/transaction';
import * as StellarAPI from '@blockaid/client/resources/stellar/stellar';

export class Transaction extends APIResource {
  /**
   * Scan Transactions
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StellarAPI.TransactionScanResponse> {
    return this._client.post('/v0/stellar/scan/transaction', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.StellarWalletRequestMetadata
    | TransactionScanParams.StellarInAppRequestMetadata;

  /**
   * List of XDR-encoded transactions to be scanned
   */
  transactions: Array<string>;

  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   * - `validation`: Include security validation of the transaction in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionScanParams {
  export interface StellarWalletRequestMetadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url: string;

    /**
     * Metadata for wallet requests
     */
    type?: 'wallet';
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export namespace Transaction {
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
