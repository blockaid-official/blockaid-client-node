// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@blockaid/client/core';
import { APIResource } from '@blockaid/client/resource';
import * as SiteAPI from '@blockaid/client/resources/site';

export class Site extends APIResource {
  /**
   * Scan Site
   */
  scan(body: SiteScanParams, options?: Core.RequestOptions): Core.APIPromise<SiteScanResponse> {
    return this._client.post('/site/scan', { body, ...options });
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

export type SiteScanResponse = SiteScanHitResponse | SiteScanMissResponse;

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

    type: 'catalog';
  }
}

export namespace Site {
  export import SiteScanHitResponse = SiteAPI.SiteScanHitResponse;
  export import SiteScanMissResponse = SiteAPI.SiteScanMissResponse;
  export import SiteScanResponse = SiteAPI.SiteScanResponse;
  export import SiteScanParams = SiteAPI.SiteScanParams;
}
