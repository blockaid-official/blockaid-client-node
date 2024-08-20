// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AddressAPI from './address';
import * as SolanaAPI from './solana';

export class Address extends APIResource {
  /**
   * Gets an address and returns a full security assessment indicating weather or not
   * this address is malicious as well as textual reasons of why the address was
   * flagged that way.
   */
  scan(
    body: AddressScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SolanaAPI.SolanaAddressScanResponse> {
    return this._client.post('/v0/solana/address/scan', { body, ...options });
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
  export import AddressScanParams = AddressAPI.AddressScanParams;
}
