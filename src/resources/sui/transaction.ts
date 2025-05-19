// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SuiAPI from './sui';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   *
   * @example
   * ```ts
   * const suiTransactionScanResponse =
   *   await client.sui.transaction.scan({
   *     account_address:
   *       '0x45e90b3ea2e1920c43d92d224630d6a865c1b58a7b4e770c2ac156eab30eb491',
   *     chain: 'mainnet',
   *     metadata: { type: 'wallet', url: 'localhost' },
   *     transaction:
   *       'AAACAAgA4fUFAAAAAAAgHvls2mKzo/48s/fPdWP8xKtE4BhIjR2O8gMaZ6bI1+sCAgABAQAAAQECAAABAQBF6Qs+ouGSDEPZLSJGMNaoZcG1intOdwwqwVbqsw60kQFySkLceU6uis9QxxK4CDYqttqK3ilc9/yEcCgxdaeA0cl/xhwAAAAAIEuXU9TpAtIJmbPVFpxdc70+RWUqlSrfyIUKT9q1Au0ERekLPqLhkgxD2S0iRjDWqGXBtYp7TncMKsFW6rMOtJHuAgAAAAAAACAKNQAAAAAAAA==',
   *     options: ['simulation'],
   *   });
   * ```
   */
  scan(
    body: TransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SuiAPI.SuiTransactionScanResponse> {
    return this._client.post('/v0/sui/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: unknown;

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
