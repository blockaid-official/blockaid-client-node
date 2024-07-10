// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as AddressAPI from '@blockaid/client/resources/solana/address';

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
   * An enumeration.
   */
  result_type: 'Malicious' | 'Warning' | 'Benign';
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

export namespace Address {
  export import AddressScanResponse = AddressAPI.AddressScanResponse;
  export import AddressScanParams = AddressAPI.AddressScanParams;
}
