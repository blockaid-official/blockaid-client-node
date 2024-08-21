// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionAPI from './transaction';
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
  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   */
  options: Array<'simulation'>;

  /**
   * The transaction encoded as a hex string
   */
  transaction: string;

  chain?: 'bitcoin';

  /**
   * Metadata
   */
  metadata?:
    | TransactionScanParams.BitcoinInAppRequestMetadata
    | TransactionScanParams.BitcoinWalletRequestMetadata;

  /**
   * Allows simulating mined transactions where the UTXOs have already been spent
   */
  skip_utxo_check?: boolean;
}

export namespace TransactionScanParams {
  export interface BitcoinInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type: 'in_app';
  }

  export interface BitcoinWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp that originated the transaction
     */
    url: string;
  }
}

export namespace Transaction {
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
