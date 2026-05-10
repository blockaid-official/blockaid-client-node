// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SuiAPI from './sui';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Transaction extends APIResource {
  /**
   * Get a risk recommendation with plain-language reasons for a Sui transaction.
   *
   * @example
   * ```ts
   * const suiTransactionScanResponse =
   *   await client.sui.transaction.scan({
   *     account_address:
   *       '0x45e90b3ea2e1920c43d92d224630d6a865c1b58a7b4e770c2ac156eab30eb491',
   *     chain: 'mainnet',
   *     metadata: {
   *       type: 'wallet',
   *       url: 'https://example.com',
   *     },
   *     transaction:
   *       'AAACAAgA4fUFAAAAAAAgHvls2mKzo/48s/fPdWP8xKtE4BhIjR2O8gMaZ6bI1+sCAgABAQAAAQECAAABAQBF6Qs+ouGSDEPZLSJGMNaoZcG1intOdwwqwVbqsw60kQFySkLceU6uis9QxxK4CDYqttqK3ilc9/yEcCgxdaeA0cl/xhwAAAAAIEuXU9TpAtIJmbPVFpxdc70+RWUqlSrfyIUKT9q1Au0ERekLPqLhkgxD2S0iRjDWqGXBtYp7TncMKsFW6rMOtJHuAgAAAAAAACAKNQAAAAAAAA==',
   *     options: ['simulation'],
   *   });
   * ```
   */
  scan(body: TransactionScanParams, options?: RequestOptions): APIPromise<SuiAPI.SuiTransactionScanResponse> {
    return this._client.post('/v0/sui/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: string;

  chain: 'mainnet';

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

    /**
     * Account information associated with the request
     */
    account?: SuiWalletRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: SuiWalletRequestMetadata.Connection;
  }

  export namespace SuiWalletRequestMetadata {
    /**
     * Account information associated with the request
     */
    export interface Account {
      /**
       * Unique identifier for the account.
       */
      account_id: string;

      /**
       * Timestamp when the account was created.
       */
      account_creation_timestamp?: string;

      /**
       * Age of the user in years
       */
      user_age?: number;

      /**
       * ISO country code of the user's location.
       */
      user_country_code?: string;
    }

    /**
     * Connection metadata including user agent and IP information
     */
    export interface Connection {
      /**
       * IP address of the customer making the request.
       */
      ip_address: string;

      /**
       * User agent string from the client's browser or application.
       */
      user_agent?: string;
    }
  }

  export interface SuiInAppRequestMetadata {
    /**
     * Account information associated with the request
     */
    account?: SuiInAppRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: SuiInAppRequestMetadata.Connection;

    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }

  export namespace SuiInAppRequestMetadata {
    /**
     * Account information associated with the request
     */
    export interface Account {
      /**
       * Unique identifier for the account.
       */
      account_id: string;

      /**
       * Timestamp when the account was created.
       */
      account_creation_timestamp?: string;

      /**
       * Age of the user in years
       */
      user_age?: number;

      /**
       * ISO country code of the user's location.
       */
      user_country_code?: string;
    }

    /**
     * Connection metadata including user agent and IP information
     */
    export interface Connection {
      /**
       * IP address of the customer making the request.
       */
      ip_address: string;

      /**
       * User agent string from the client's browser or application.
       */
      user_agent?: string;
    }
  }
}

export declare namespace Transaction {
  export { type TransactionScanParams as TransactionScanParams };
}
