// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Address extends APIResource {
  /**
   * Scan Address
   *
   * @example
   * ```ts
   * const response = await client.hedera.address.scan({
   *   address: '0.0.1456986',
   *   chain: 'mainnet',
   * });
   * ```
   */
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<AddressScanResponse> {
    return this._client.post('/v0/hedera/address/scan', { body, ...options });
  }
}

export interface AddressScanResponse {
  /**
   * The outcome of the address scan, indicating the assessed risk level of the
   * scanned address. <br /> Possible values: <br /> - `Malicious` — The address is
   * confirmed to be associated with malicious activity. <br /> - `High-Risk` — The
   * address shows strong indicators of high-risk or potentially malicious behavior.
   * <br /> - `Warning` — The address exhibits suspicious signals that may require
   * caution. <br /> - `Benign` — No known malicious or risky activity was detected
   * for the address. <br /> - `Error` — The scan could not be completed
   * successfully.
   */
  result_type: 'Malicious' | 'High-Risk' | 'Warning' | 'Benign' | 'Error';

  /**
   * A list of human-readable textual features describing the scanned address,
   * intended for display to the end user.
   */
  features?: Array<AddressScanResponse.Feature>;
}

export namespace AddressScanResponse {
  export interface Feature {
    /**
     * A human-readable description explaining the feature.
     */
    description: string;

    /**
     * The unique identifier for the feature.
     */
    feature_id: string;

    /**
     * The risk classification indicated by the feature. Possible values are
     * `Malicious`, `High-Risk`, `Warning`, `Benign`, or `Info`.
     */
    type: 'Malicious' | 'Warning' | 'Benign' | 'High-Risk' | 'Info' | (string & {});
  }
}

export interface AddressScanParams {
  /**
   * The address to validate.
   */
  address: string;

  /**
   * The chain the transaction runs on.
   */
  chain: 'mainnet';
}

export declare namespace Address {
  export { type AddressScanResponse as AddressScanResponse, type AddressScanParams as AddressScanParams };
}
