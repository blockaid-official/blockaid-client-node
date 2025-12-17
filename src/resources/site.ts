// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Site extends APIResource {
  /**
   * Report a misclassification of a site.
   *
   * @example
   * ```ts
   * const response = await client.site.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_POSITIVE',
   *   report: {
   *     type: 'request_id',
   *     request_id: '11111111-1111-1111-1111-111111111111',
   *   },
   * });
   * ```
   */
  report(body: SiteReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/site/report', { body, ...options });
  }

  /**
   * Scan Site
   *
   * @example
   * ```ts
   * const response = await client.site.scan({
   *   url: 'https://app.uniswap.org',
   *   metadata: { type: 'catalog' },
   * });
   * ```
   */
  scan(body: SiteScanParams, options?: Core.RequestOptions): Core.APIPromise<SiteScanResponse> {
    return this._client.post('/v0/site/scan', { body, ...options });
  }
}

export interface SiteScanHitResponse {
  attack_types: { [key: string]: SiteScanHitResponse.AttackTypes };

  contract_read: SiteScanHitResponse.ContractRead;

  contract_write: SiteScanHitResponse.ContractWrite;

  is_malicious: boolean;

  is_reachable: boolean;

  is_web3_site: boolean;

  json_rpc_operations: Array<string>;

  malicious_score: number;

  network_operations: Array<string>;

  scan_end_time: string;

  scan_start_time: string;

  status: 'hit';

  url: string;
}

export namespace SiteScanHitResponse {
  export interface AttackTypes {
    score: number;

    threshold: number;
  }

  export interface ContractRead {
    contract_addresses: Array<string>;

    functions: { [key: string]: Array<string> };
  }

  export interface ContractWrite {
    contract_addresses: Array<string>;

    functions: { [key: string]: Array<string> };
  }
}

export interface SiteScanMissResponse {
  status: 'miss';
}

export type SiteReportResponse = unknown;

export type SiteScanResponse = SiteScanHitResponse | SiteScanMissResponse;

export interface SiteReportParams {
  /**
   * Details about the report.
   */
  details: string;

  /**
   * The event type of the report. Could be `FALSE_POSITIVE` or `FALSE_NEGATIVE`.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * Parameters identifying the site to report, provided either as site details (url)
   * or as a request ID from a previous scan.
   */
  report: SiteReportParams.ParamReportSiteReportParams | SiteReportParams.RequestIDReport;
}

export namespace SiteReportParams {
  export interface ParamReportSiteReportParams {
    params: ParamReportSiteReportParams.Params;

    type: 'params';
  }

  export namespace ParamReportSiteReportParams {
    export interface Params {
      /**
       * The url of the site to report on.
       */
      url: string;
    }
  }

  export interface RequestIDReport {
    /**
     * The request ID of a previous request. This can be found in the value of the
     * `x-request-id` field in the headers of the response of the previous request. For
     * instance: `6c3cf6c1-a80d-4927-91b9-03d841ea61fe`.
     */
    request_id: string;

    /**
     * The type identifier indicating that a request ID from a previous scan is being
     * used.
     */
    type: 'request_id';
  }
}

export interface SiteScanParams {
  url: string;

  metadata?:
    | SiteScanParams.CatalogRequestMetadata
    | SiteScanParams.WalletRequestMetadata
    | SiteScanParams.MultipleWalletRequestMetadata;
}

export namespace SiteScanParams {
  export interface CatalogRequestMetadata {
    type: 'catalog';
  }

  export interface WalletRequestMetadata {
    account_address: string;

    type: 'wallet';

    walletconnect_description?: string;

    walletconnect_name?: string;
  }

  export interface MultipleWalletRequestMetadata {
    /**
     * List of all account addresses in different chains based on the CAIPs standard
     * (https://github.com/ChainAgnostic/CAIPs). Ethereum mainnet example:
     * eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb
     */
    account_addresses: Array<string>;

    type: 'wallet';

    walletconnect_description?: string;

    walletconnect_name?: string;
  }
}

export declare namespace Site {
  export {
    type SiteScanHitResponse as SiteScanHitResponse,
    type SiteScanMissResponse as SiteScanMissResponse,
    type SiteReportResponse as SiteReportResponse,
    type SiteScanResponse as SiteScanResponse,
    type SiteReportParams as SiteReportParams,
    type SiteScanParams as SiteScanParams,
  };
}
