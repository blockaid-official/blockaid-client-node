// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SuiAPI from './sui';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SuiAPI.SuiTransactionScanResponse> {
    return this._client.post('/v0/sui/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: string;

  chain: 'mainnet' | 'testnet' | 'devnet';

  /**
   * Metadata
   */
  metadata: TransactionScanParams.SuiWalletRequestMetadata | TransactionScanParams.SuiInAppRequestMetadata;

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
  export interface SuiWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface SuiInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export declare namespace Transaction {
  export { type TransactionScanParams as TransactionScanParams };
}
