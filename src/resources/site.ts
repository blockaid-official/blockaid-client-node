// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Site extends APIResource {
  /**
   * Report a misclassification of a site.
   *
   * @deprecated
   */
  report(body: SiteReportParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/site/report', { body, ...options });
  }

  /**
   * Scan Site
   *
   * @example
   * ```ts
   * const response = await client.site.scan({
   *   url: 'https://app.uniswap.org',
   *   metadata: {},
   * });
   * ```
   */
  scan(body: SiteScanParams, options?: RequestOptions): APIPromise<SiteScanResponse> {
    return this._client.post('/v0/site/scan', { body, ...options });
  }
}

export interface SiteScanHitResponse {
  /**
   * Object whose keys are attack type identifiers and values are AttackEntry
   * objects. See the
   * [Attack Type Reference](/api-reference/end-user-protection/dapp-scanning/dapp-scanning-response-reference#attack-type-reference)
   * for possible keys.
   */
  attack_types: { [key: string]: SiteScanHitResponse.AttackTypes };

  /**
   * Same shape as `contract_write`.
   */
  contract_read: SiteScanHitResponse.ContractRead;

  contract_write: SiteScanHitResponse.ContractWrite;

  /**
   * Overall malicious verdict for the site.
   */
  is_malicious: boolean;

  /**
   * Whether the site was reachable during the scan.
   */
  is_reachable: boolean;

  /**
   * Whether the site is treated as Web3-related for the scan.
   */
  is_web3_site: boolean;

  /**
   * JSON-RPC method names observed during the scan.
   */
  json_rpc_operations: Array<string>;

  /**
   * Numeric score for the site; interpret together with `is_malicious` and other
   * fields.
   */
  malicious_score: number;

  /**
   * Hosts/domains observed during the scan.
   */
  network_operations: Array<string>;

  scan_end_time: string;

  scan_start_time: string;

  /**
   * Literal "hit", indicating a scan result was found for this URL.
   */
  status: 'hit';

  /**
   * Scanned URL.
   */
  url: string;
}

export namespace SiteScanHitResponse {
  export interface AttackTypes {
    score: number;

    threshold: number;
  }

  /**
   * Same shape as `contract_write`.
   */
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
  /**
   * Literal "miss", indicating no scan result was found for this URL.
   */
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

  /**
   * Request metadata: site catalog/wallet context, end-user account, and connection
   * details.
   */
  metadata?: SiteScanParams.Metadata;
}

export namespace SiteScanParams {
  /**
   * Request metadata: site catalog/wallet context, end-user account, and connection
   * details.
   */
  export interface Metadata {
    /**
     * End-user account context (id, age, country, creation time, and
     * account_addresses).
     */
    account?: Metadata.Account;

    /**
     * Connection metadata including user agent, IP information, and origin.
     */
    connection?: Metadata.Connection;

    /**
     * The full URL of the DApp or website that initiated the request, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain?: string;

    /**
     * Set to true when the request was not initiated by a dapp. Dapp requests should
     * provide the `domain` field.
     */
    non_dapp?: boolean;
  }

  export namespace Metadata {
    /**
     * End-user account context (id, age, country, creation time, and
     * account_addresses).
     */
    export interface Account {
      /**
       * Unique identifier for the account.
       */
      account_id: string;

      /**
       * List of all account addresses in different chains based on the CAIPs standard
       * (https://github.com/ChainAgnostic/CAIPs). Ethereum mainnet example:
       * eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb
       */
      account_addresses?: Array<string>;

      /**
       * Timestamp when the account was created.
       */
      account_creation_timestamp?: string;

      /**
       * Age of the user in years
       */
      user_age?: number;

      /**
       * ISO country code of the user's location.
       */
      user_country_code?: string;
    }

    /**
     * Connection metadata including user agent, IP information, and origin.
     */
    export interface Connection {
      /**
       * IP address of the customer making the request. Both IPv4 and IPv6 addresses are
       * supported.
       */
      ip_address: string;

      /**
       * The full URL of the website that the request was directed to.
       */
      origin?: string;

      /**
       * User agent string from the client's browser or application.
       */
      user_agent?: string;

      /**
       * WalletConnect session description, when the request originates from a
       * WalletConnect session.
       */
      walletconnect_description?: string;

      /**
       * WalletConnect session name, when the request originates from a WalletConnect
       * session.
       */
      walletconnect_name?: string;
    }
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
