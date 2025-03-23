// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class TokenBulk extends APIResource {
  /**
   * Gets a list of token addresses and scan the tokens to identify any indication of
   * malicious behaviour
   */
  scan(body: TokenBulkScanParams, options?: Core.RequestOptions): Core.APIPromise<TokenBulkScanResponse> {
    return this._client.post('/v0/token-bulk/scan', { body, ...options });
  }
}

export interface TokenBulkScanResponse {
  results: unknown;
}

export interface TokenBulkScanParams {
  /**
   * The chain name
   */
  chain:
    | 'arbitrum'
    | 'avalanche'
    | 'base'
    | 'bsc'
    | 'ethereum'
    | 'optimism'
    | 'polygon'
    | 'zora'
    | 'solana'
    | 'starknet'
    | 'stellar'
    | 'linea'
    | 'blast'
    | 'zksync'
    | 'scroll'
    | 'degen'
    | 'abstract'
    | 'soneium'
    | 'ink'
    | 'zero-network'
    | 'berachain'
    | 'unichain';

  /**
   * A list of token addresses to scan
   */
  tokens: Array<string>;

  /**
   * Object of additional information to validate against.
   */
  metadata?: TokenBulkScanParams.Metadata;
}

export namespace TokenBulkScanParams {
  /**
   * Object of additional information to validate against.
   */
  export interface Metadata {
    /**
     * cross reference transaction against the domain.
     */
    domain?: string | null;
  }
}

export declare namespace TokenBulk {
  export {
    type TokenBulkScanResponse as TokenBulkScanResponse,
    type TokenBulkScanParams as TokenBulkScanParams,
  };
}
