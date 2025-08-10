// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Enrichment extends APIResource {}

export interface EnrichmentReportAccount {
  account_id: string;

  user_country_code: string;

  account_creation_timestamp?: string;

  user_age?: number;
}

export interface EnrichmentReportAddress {
  address: string;

  chain: string;
}

export interface EnrichmentReportAddresses {
  addresses: Array<EnrichmentReportAddress>;

  /**
   * URLs that are associated with the fraud report
   */
  fraud_urls?: Array<string>;

  /**
   * An enumeration.
   */
  source?: EnrichmentReportSource;
}

export interface EnrichmentReportMetadata {
  account: EnrichmentReportAccount;
}

/**
 * An enumeration.
 */
export type EnrichmentReportSource = 'user_report' | 'internal_system_report' | 'manual_report';

export interface EnrichmentRequest {
  metadata: EnrichmentReportMetadata;

  report: EnrichmentReportAddresses;
}

export declare namespace Enrichment {
  export {
    type EnrichmentReportAccount as EnrichmentReportAccount,
    type EnrichmentReportAddress as EnrichmentReportAddress,
    type EnrichmentReportAddresses as EnrichmentReportAddresses,
    type EnrichmentReportMetadata as EnrichmentReportMetadata,
    type EnrichmentReportSource as EnrichmentReportSource,
    type EnrichmentRequest as EnrichmentRequest,
  };
}
