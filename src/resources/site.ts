// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SiteAPI from './site';

export class Site extends APIResource {
  /**
   * Report for misclassification of a site.
   */
  report(body: SiteReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/site/report', { body, ...options });
  }

  /**
   * Scan Site
   */
  scan(body: SiteScanParams, options?: Core.RequestOptions): Core.APIPromise<SiteScanResponse> {
    return this._client.post('/v0/site/scan', { body, ...options });
  }
}

export interface SiteScanHitResponse {
  attack_types: Record<string, SiteScanHitResponse.AttackTypes>;

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

    functions: Record<string, Array<string>>;
  }

  export interface ContractWrite {
    contract_addresses: Array<string>;

    functions: Record<string, Array<string>>;
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
   * An enumeration.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * The report parameters.
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
    request_id: string;

    type: 'request_id';
  }
}

export interface SiteScanParams {
  url: string;

  metadata?: SiteScanParams.CatalogRequestMetadata | SiteScanParams.WalletRequestMetadata;
}

export namespace SiteScanParams {
  export interface CatalogRequestMetadata {
    type: 'catalog';
  }

  export interface WalletRequestMetadata {
    account_address: string;

    type: 'wallet';
  }
}

export namespace Site {
  export import SiteScanHitResponse = SiteAPI.SiteScanHitResponse;
  export import SiteScanMissResponse = SiteAPI.SiteScanMissResponse;
  export import SiteReportResponse = SiteAPI.SiteReportResponse;
  export import SiteScanResponse = SiteAPI.SiteScanResponse;
  export import SiteReportParams = SiteAPI.SiteReportParams;
  export import SiteScanParams = SiteAPI.SiteScanParams;
}
