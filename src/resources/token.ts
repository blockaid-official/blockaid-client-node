// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'blockaid/core';
import { APIResource } from 'blockaid/resource';
import * as TokenAPI from 'blockaid/resources/token';

export class Token extends APIResource {
  /**
   * Gets a token address and scan the token to identify any indication of malicious
   * behaviour
   */
  scan(body: TokenScanParams, options?: Core.RequestOptions): Core.APIPromise<TokenScanResponse> {
    return this._client.post('/token/scan', { body, ...options });
  }
}

export interface TokenScanResponse {
  /**
   * Dictionary of detected attacks found during the scan
   */
  attack_types: Record<string, TokenScanResponse.AttackTypes>;

  /**
   * Score between 0 to 1 (double)
   */
  malicious_score: string;

  /**
   * An enumeration.
   */
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';
}

export namespace TokenScanResponse {
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

export interface TokenScanParams {
  /**
   * Token address to validate (EVM / Solana)
   */
  address: string | string;

  /**
   * Object of additional information to validate against.
   */
  metadata?: TokenScanParams.Metadata;

  /**
   * (optional) Token ID for ERC721 or ERC1155
   */
  token_id?: number;
}

export namespace TokenScanParams {
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

export namespace Token {
  export import TokenScanResponse = TokenAPI.TokenScanResponse;
  export import TokenScanParams = TokenAPI.TokenScanParams;
}
