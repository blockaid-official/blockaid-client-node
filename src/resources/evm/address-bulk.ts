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
   *   chain: 'arbitrum',
   *   metadata: { domain: 'www.example.xyz' },
   * });
   * ```
   */
  scan(body: AddressBulkScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressBulkScanResponse> {
    return this._client.post('/v0/evm/address-bulk/scan', { body, ...options });
  }
}

export type AddressBulkScanResponse = Record<string, 'Malicious' | 'Warning' | 'Benign' | 'Error'>;

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

export declare namespace AddressBulk {
  export {
    type AddressBulkScanResponse as AddressBulkScanResponse,
    type AddressBulkScanParams as AddressBulkScanParams,
  };
}
