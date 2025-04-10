// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Scan Address
   */
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressScanResponse> {
    return this._client.post('/v0/stellar/address/scan', { body, ...options });
  }
}

export interface AddressScanResponse {
  address: string;

  chain: string;

  features: Array<AddressScanResponse.Feature>;

  result_type: string;
}

export namespace AddressScanResponse {
  export interface Feature {
    address: string;

    description: string;

    feature_id: string;

    type: 'Benign' | 'Warning' | 'Malicious' | 'Info';
  }
}

export interface AddressScanParams {
  address: string;
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
