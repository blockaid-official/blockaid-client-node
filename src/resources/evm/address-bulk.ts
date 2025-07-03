// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

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
   *   metadata: { domain: 'www.example.xyz' },
   * });
   * ```
   */
  scan(body: AddressBulkScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressBulkScanResponse> {
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.ValidateBulkExtendedAddressesResponse> {
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
   * Object of additional information to validate against.
   */
  metadata: AddressBulkScanParams.Metadata;
}

export namespace AddressBulkScanParams {
  /**
   * Object of additional information to validate against.
   */
  export interface Metadata {
    /**
     * cross reference transaction against the domain.
     */
    domain: string;
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
   * Object of additional information to validate against.
   */
  metadata: AddressBulkScanExtendedParams.Metadata;
}

export namespace AddressBulkScanExtendedParams {
  /**
   * Object of additional information to validate against.
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
