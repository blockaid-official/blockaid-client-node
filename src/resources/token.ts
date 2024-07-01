// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as TokenAPI from '@blockaid/client/resources/token';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class Token extends APIResource {
  /**
   * Gets a token address and scan the token to identify any indication of malicious
   * behaviour
   */
  scan(body: TokenScanParams, options?: Core.RequestOptions): Core.APIPromise<TokenScanResponse> {
    return this._client.post('/v0/token/scan', { body, ...options });
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
  address: string;

  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  /**
   * Object of additional information to validate against.
   */
  metadata?: TokenScanParams.Metadata;
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
