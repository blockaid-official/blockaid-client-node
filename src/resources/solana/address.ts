// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Scan Address
   *
   * @example
   * ```ts
   * const response = await client.solana.address.scan({
   *   address: '2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S',
   *   metadata: { url: 'https://example.com' },
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
   * Features about the result
   */
  features: Array<AddressScanResponse.Feature>;

  /**
   * Verdict of Result
   */
  result_type: 'Benign' | 'Warning' | 'Malicious';
}

export namespace AddressScanResponse {
  export interface Feature {
    /**
     * Address the feature refers to
     */
    address: string | null;

    /**
     * Textual description
     */
    description: string;

    feature_id: string;

    /**
     * Feature Classification
     */
    type: 'Benign' | 'Warning' | 'Malicious' | 'Info';
  }
}

export interface AddressScanParams {
  address: string;

  metadata: AddressScanParams.Metadata;

  chain?: string;
}

export namespace AddressScanParams {
  export interface Metadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url?: string | null;
  }
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
