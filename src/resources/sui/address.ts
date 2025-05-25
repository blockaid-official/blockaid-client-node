// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Scan Address
   *
   * @example
   * ```ts
   * const response = await client.sui.address.scan({
   *   address: {},
   *   chain: 'mainnet',
   * });
   * ```
   */
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressScanResponse> {
    return this._client.post('/v0/sui/address/scan', { body, ...options });
  }
}

export interface AddressScanResponse {
  /**
   * Verdict of the validation
   */
  result_type: 'Benign' | 'Warning' | 'Malicious';

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
  address: unknown;

  chain: 'mainnet' | 'testnet' | 'devnet';
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
