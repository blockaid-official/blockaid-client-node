// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class Address extends APIResource {
  /**
   * Report for misclassification of an EVM address.
   *
   * @example
   * ```ts
   * const response = await client.evm.address.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_NEGATIVE',
   *   report: {
   *     type: 'request_id',
   *     request_id: '11111111-1111-1111-1111-111111111111',
   *   },
   * });
   * ```
   */
  report(body: AddressReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/address/report', { body, ...options });
  }

  /**
   * Gets an address and returns a full security assessment indicating weather or not
   * this address is malicious as well as textual reasons of why the address was
   * flagged that way.
   *
   * @example
   * ```ts
   * const addressValidation = await client.evm.address.scan({
   *   address: '0x946D45c866AFD5b8F436d40E551D8E50A5B84230',
   *   chain: 'ethereum',
   *   metadata: { domain: 'https://example.com' },
   * });
   * ```
   */
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<EvmAPI.AddressValidation> {
    return this._client.post('/v0/evm/address/scan', { body, ...options });
  }
}

export type AddressReportResponse = unknown;

export interface AddressReportParams {
  /**
   * Details about the report.
   */
  details: string;

  /**
   * The event type of the report. Could be FALSE_POSITIVE or FALSE_NEGATIVE.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * The report parameters.
   */
  report: AddressReportParams.ParamReportAddressReportParams | AddressReportParams.RequestIDReport;
}

export namespace AddressReportParams {
  export interface ParamReportAddressReportParams {
    params: EvmAPI.AddressReportParams;

    type: 'params';
  }

  export interface RequestIDReport {
    request_id: string;

    type: 'request_id';
  }
}

export interface AddressScanParams {
  /**
   * The address to validate.
   */
  address: string;

  /**
   * The chain name
   */
  chain: EvmAPI.TransactionScanSupportedChain;

  /**
   * Object of additional information to validate against.
   */
  metadata: AddressScanParams.Metadata;
}

export namespace AddressScanParams {
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

export declare namespace Address {
  export {
    type AddressReportResponse as AddressReportResponse,
    type AddressReportParams as AddressReportParams,
    type AddressScanParams as AddressScanParams,
  };
}
