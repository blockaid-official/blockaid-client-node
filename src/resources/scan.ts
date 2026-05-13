// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Scan extends APIResource {
  /**
   * Report a misclassification of any entity (transaction, address, site, token,
   * etc.) using a request ID from a previous scan.
   *
   * @example
   * ```ts
   * const response = await client.scan.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_POSITIVE',
   *   metadata: {
   *     domain: 'https://app.uniswap.org',
   *     account: {
   *       account_id: 'user-abc-123',
   *       account_creation_timestamp: '2023-01-15T00:00:00Z',
   *       user_age: 30,
   *       user_country_code: 'US',
   *     },
   *     connection: {
   *       ip_address: '192.168.1.1',
   *       user_agent:
   *         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
   *     },
   *   },
   *   request_id: '11111111-1111-1111-1111-111111111111',
   * });
   * ```
   */
  report(body: ScanReportParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/scan/report/', { body, ...options });
  }

  /**
   * Report whether the end-user accepted the Blockaid classification on the entity
   * being scanned.
   *
   * @example
   * ```ts
   * const response = await client.scan.status({
   *   request_id: '7f959417-76c1-4c4d-89e8-5fdedab76a8d',
   *   status: 'accepted',
   * });
   * ```
   */
  status(body: ScanStatusParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/scan/status/', { body, ...options });
  }
}

export type ScanReportResponse = unknown;

export type ScanStatusResponse = unknown;

export interface ScanReportParams {
  /**
   * Details about the report.
   */
  details: string;

  /**
   * The event type of the report. Could be `FALSE_POSITIVE` or `FALSE_NEGATIVE`.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * Client-side context attached to a report, identifying the originating dApp and
   * end-user.
   */
  metadata: ScanReportParams.Metadata;

  /**
   * The request ID of a previous scan. This can be found in the value of the
   * `x-request-id` field in the headers of the response of the previous request. For
   * instance: `6c3cf6c1-a80d-4927-91b9-03d841ea61fe`.
   */
  request_id: string;
}

export namespace ScanReportParams {
  /**
   * Client-side context attached to a report, identifying the originating dApp and
   * end-user.
   */
  export interface Metadata {
    /**
     * End-user account information (ID, age, country, creation time).
     */
    account?: Metadata.Account;

    /**
     * Network connection details (IP address, user agent).
     */
    connection?: Metadata.Connection;

    /**
     * The dApp or origin URL that triggered the interaction being reported.
     */
    domain?: string;
  }

  export namespace Metadata {
    /**
     * End-user account information (ID, age, country, creation time).
     */
    export interface Account {
      /**
       * Unique identifier for the account.
       */
      account_id: string;

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
     * Network connection details (IP address, user agent).
     */
    export interface Connection {
      /**
       * IP address of the customer making the request.
       */
      ip_address: string;

      /**
       * User agent string from the client's browser or application.
       */
      user_agent?: string;
    }
  }
}

export interface ScanStatusParams {
  /**
   * The x-request-id header returned from the previous Blockaid api request
   */
  request_id: string;

  /**
   * Status of a scan-status lookup request.
   */
  status: 'accepted' | 'rejected';
}

export declare namespace Scan {
  export {
    type ScanReportResponse as ScanReportResponse,
    type ScanStatusResponse as ScanStatusResponse,
    type ScanReportParams as ScanReportParams,
    type ScanStatusParams as ScanStatusParams,
  };
}
