// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StellarAPI from './stellar';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StellarAPI.StellarTransactionScanResponse> {
    return this._client.post('/v0/stellar/transaction/scan', { body, ...options });
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
  export { type TransactionScanParams as TransactionScanParams };
}
