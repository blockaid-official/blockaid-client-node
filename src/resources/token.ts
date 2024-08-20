// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TokenAPI from './token';

export class Token extends APIResource {
  /**
   * Report for misclassification of a token.
   */
  report(body: TokenReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/token/report', { body, ...options });
  }

  /**
   * Gets a token address and scan the token to identify any indication of malicious
   * behaviour
   */
  scan(body: TokenScanParams, options?: Core.RequestOptions): Core.APIPromise<TokenScanResponse> {
    return this._client.post('/v0/token/scan', { body, ...options });
  }
}

/**
 * The chain name
 */
export type TokenScanSupportedChain =
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
  | 'degen';

export type TokenReportResponse = unknown;

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

export interface TokenReportParams {
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
  report: TokenReportParams.ParamReportTokenReportParams | TokenReportParams.RequestIDReport;
}

export namespace TokenReportParams {
  export interface ParamReportTokenReportParams {
    params: ParamReportTokenReportParams.Params;

    type: 'params';
  }

  export namespace ParamReportTokenReportParams {
    export interface Params {
      /**
       * The address of the token to report on.
       */
      address: string;

      /**
       * The chain name
       */
      chain: TokenAPI.TokenScanSupportedChain;
    }
  }

  export interface RequestIDReport {
    request_id: string;

    type: 'request_id';
  }
}

export interface TokenScanParams {
  /**
   * Token address to validate (EVM / Solana / Stellar / Starknet)
   */
  address: string;

  /**
   * The chain name
   */
  chain: TokenScanSupportedChain;

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
  export import TokenScanSupportedChain = TokenAPI.TokenScanSupportedChain;
  export import TokenReportResponse = TokenAPI.TokenReportResponse;
  export import TokenScanResponse = TokenAPI.TokenScanResponse;
  export import TokenReportParams = TokenAPI.TokenReportParams;
  export import TokenScanParams = TokenAPI.TokenScanParams;
}
