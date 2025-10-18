// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Gets an address and returns a full security assessment indicating whether or not
   * this address is malicious as well as textual reasons of why the address was
   * flagged that way.
   *
   * @example
   * ```ts
   * const response = await client.solana.address.scan({
   *   address: '2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S',
   *   chain: 'mainnet',
   * });
   * ```
   */
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressScanResponse> {
    return this._client.post('/v0/solana/address/scan', { body, ...options });
  }
}

export interface AddressScanResponse {
  /**
   * Verdict of the validation
   */
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Error';

  /**
   * A list of textual features about this transaction that can be presented to the
   * user.
   */
  features?: Array<AddressScanResponse.Feature>;
}

export namespace AddressScanResponse {
  export interface Feature {
    description: string;

    feature_id: string;

    type: 'Benign' | 'Warning' | 'Malicious' | 'Info';
  }
}

export interface AddressScanParams {
  address: string;

  chain?:
    | 'mainnet'
    | 'eclipse_mainnet'
    | 'sonic_mainnet'
    | '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp'
    | 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1'
    | 'EAQLJCV2mh23BsK2P9oYpV5CHVLDNHTxY';
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
