// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Gets an address and returns a full security assessment indicating weather or not
   * this address is malicious as well as textual reasons of why the address was
   * flagged that way.
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
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';
}

export namespace AddressScanResponse {
  export interface Feature {
    /**
     * Description of the feature
     */
    description: string;

    /**
     * ID of the feature
     */
    feature_id: string;

    /**
     * An enumeration.
     */
    type: 'Malicious' | 'Warning' | 'Benign' | 'Info';
  }
}

export interface AddressScanParams {
  /**
   * Encoded public key
   */
  address: string;

  metadata: AddressScanParams.Metadata;

  /**
   * Chain to scan the transaction on
   */
  chain?: string;
}

export namespace AddressScanParams {
  export interface Metadata {
    /**
     * URL of the dApp related to the address
     */
    url: string;
  }
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
