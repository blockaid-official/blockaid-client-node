// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'blockaid/core';
import { APIResource } from 'blockaid/resource';
import * as AddressBulkAPI from 'blockaid/resources/evm/address-bulk';

export class AddressBulk extends APIResource {
  /**
   * Gets a list of addresses and returns a security assessment of each address.
   */
  scan(body: AddressBulkScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressBulkScanResponse> {
    return this._client.post('/evm/address-bulk/scan', { body, ...options });
  }
}

/**
 * An enumeration.
 */
export type AddressValidationResultType = 'Malicious' | 'Warning' | 'Benign' | 'Error';

export type AddressBulkScanResponse = Record<string, AddressValidationResultType>;

export interface AddressBulkScanParams {
  /**
   * List of addresses to validate.
   */
  addresses: Array<string>;

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

export namespace AddressBulk {
  export import AddressValidationResultType = AddressBulkAPI.AddressValidationResultType;
  export import AddressBulkScanResponse = AddressBulkAPI.AddressBulkScanResponse;
  export import AddressBulkScanParams = AddressBulkAPI.AddressBulkScanParams;
}
