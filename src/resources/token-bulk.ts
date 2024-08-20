// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TokenBulkAPI from './token-bulk';
import * as TokenAPI from './token';

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
  results: Record<string, TokenBulkScanResponse.Results>;
}

export namespace TokenBulkScanResponse {
  export interface Results {
    /**
     * Dictionary of detected attacks found during the scan
     */
    attack_types: Record<string, Results.AttackTypes>;

    /**
     * Score between 0 to 1 (double)
     */
    malicious_score: string;

    /**
     * An enumeration.
     */
    result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';
  }

  export namespace Results {
    export interface AttackTypes {
      /**
       * Score between 0 to 1 (double) that indicates the assurance this attack happened
       */
      score: string;

      /**
       * Object contains an extra information related to the attack
       */
      features?: unknown;

      /**
       * If score is higher or equal to this field, the token is using this attack type
       */
      threshold?: string;
    }
  }
}

export interface TokenBulkScanParams {
  /**
   * The chain name
   */
  chain: TokenAPI.TokenScanSupportedChain;

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
    domain?: string;
  }
}

export namespace TokenBulk {
  export import TokenBulkScanResponse = TokenBulkAPI.TokenBulkScanResponse;
  export import TokenBulkScanParams = TokenBulkAPI.TokenBulkScanParams;
}
