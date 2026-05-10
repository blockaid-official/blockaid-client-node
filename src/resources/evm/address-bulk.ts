// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from './evm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AddressBulk extends APIResource {
  /**
   * Gets a list of addresses and returns a security assessment of each address.
   *
   * @example
   * ```ts
   * const response = await client.evm.addressBulk.scan({
   *   addresses: [
   *     '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
   *     '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
   *     '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
   *     '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
   *   ],
   *   chain: 'ethereum',
   *   metadata: {},
   * });
   * ```
   */
  scan(body: AddressBulkScanParams, options?: RequestOptions): APIPromise<AddressBulkScanResponse> {
    return this._client.post('/v0/evm/address-bulk/scan', { body, ...options });
  }

  /**
   * Gets a list of addresses and returns a security assessment with the feature
   * information of each address.
   *
   * @example
   * ```ts
   * const validateBulkExtendedAddressesResponse =
   *   await client.evm.addressBulk.scanExtended({
   *     addresses: [
   *       '0xb85492afC686d5CA405E3CD4f50b05D358c75Ede',
   *       '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97',
   *       '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
   *       '0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf',
   *     ],
   *     chain: 'ethereum',
   *     metadata: {
   *       account: {
   *         account_id: 'user123',
   *         created: '2021-01-01T00:00:00Z',
   *         age_in_years: 3,
   *         user_country_code: 'US',
   *       },
   *       connection: {
   *         user_agent:
   *           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
   *         ip_address: '192.168.1.1',
   *       },
   *     },
   *   });
   * ```
   */
  scanExtended(
    body: AddressBulkScanExtendedParams,
    options?: RequestOptions,
  ): APIPromise<EvmAPI.ValidateBulkExtendedAddressesResponse> {
    return this._client.post('/v0/evm/address-bulk/scan-extended', { body, ...options });
  }
}

export type AddressBulkScanResponse = { [key: string]: 'Malicious' | 'Warning' | 'Benign' | 'Error' };

export interface AddressBulkScanParams {
  /**
   * List of addresses to validate.
   */
  addresses: Array<string>;

  /**
   * The chain name
   */
  chain: EvmAPI.TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata:
    | AddressBulkScanParams.RoutersEvmModelsMetadataNonDapp
    | AddressBulkScanParams.RoutersEvmModelsMetadataDapp;
}

export namespace AddressBulkScanParams {
  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Account information associated with the request
     */
    account?: RoutersEvmModelsMetadataNonDapp.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: RoutersEvmModelsMetadataNonDapp.Connection;

    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export namespace RoutersEvmModelsMetadataNonDapp {
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

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Account information associated with the request
     */
    account?: RoutersEvmModelsMetadataDapp.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: RoutersEvmModelsMetadataDapp.Connection;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
  }

  export namespace RoutersEvmModelsMetadataDapp {
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

export interface AddressBulkScanExtendedParams {
  /**
   * List of addresses to validate.
   */
  addresses: Array<string>;

  /**
   * The chain name
   */
  chain: EvmAPI.TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., integration source, user/account
   * details). Used to enrich results and reduce false positives/negatives.
   */
  metadata: AddressBulkScanExtendedParams.Metadata;
}

export namespace AddressBulkScanExtendedParams {
  /**
   * Additional context for the scan (e.g., integration source, user/account
   * details). Used to enrich results and reduce false positives/negatives.
   */
  export interface Metadata {
    account: Metadata.Account;

    connection: Metadata.Connection;
  }

  export namespace Metadata {
    export interface Account {
      account_id: string;

      user_country_code: string;

      age_in_years?: number;

      created?: string;
    }

    export interface Connection {
      ip_address: string;

      user_agent: string;
    }
  }
}

export declare namespace AddressBulk {
  export {
    type AddressBulkScanResponse as AddressBulkScanResponse,
    type AddressBulkScanParams as AddressBulkScanParams,
    type AddressBulkScanExtendedParams as AddressBulkScanExtendedParams,
  };
}
