// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Enrichment extends APIResource {}

export interface EnrichmentReportAccount {
  account_id: string;

  user_country_code: string;

  account_creation_timestamp?: string;

  user_age?: number;
}

export interface EnrichmentReportAddress {
  address: string;

  /**
   * Supported chain identifiers.
   */
  chain:
    | 'arbitrum'
    | 'avalanche'
    | 'base'
    | 'base-sepolia'
    | 'bsc'
    | 'ethereum'
    | 'ethereum-sepolia'
    | 'optimism'
    | 'polygon'
    | 'zksync'
    | 'zksync-sepolia'
    | 'zora'
    | 'linea'
    | 'blast'
    | 'scroll'
    | 'avalanche-fuji'
    | 'degen'
    | 'immutable-zkevm'
    | 'immutable-zkevm-testnet'
    | 'gnosis'
    | 'worldchain'
    | 'soneium-minato'
    | 'ronin'
    | 'apechain'
    | 'zero-network'
    | 'berachain'
    | 'unknown'
    | 'ink-sepolia'
    | 'ink'
    | 'abstract'
    | 'abstract-testnet'
    | 'metacade'
    | 'metacade-testnet'
    | 'soneium'
    | 'unichain'
    | 'lordchain-testnet'
    | 'lordchain'
    | 'sei'
    | 'flow-evm'
    | 'hyperevm'
    | 'katana'
    | 'plume'
    | 'solana'
    | 'stellar'
    | 'bitcoin'
    | 'xlayer'
    | 'monad'
    | 'monad-testnet'
    | 'tempo'
    | 'tempo-testnet'
    | 'kite-ai';
}

export interface EnrichmentReportAddresses {
  addresses: Array<EnrichmentReportAddress>;

  /**
   * URLs that are associated with the fraud report
   */
  fraud_urls?: Array<string>;

  /**
   * Source of an enrichment report.
   */
  source?: EnrichmentReportSource;
}

export interface EnrichmentReportMetadata {
  account: EnrichmentReportAccount;
}

/**
 * Source of an enrichment report.
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
