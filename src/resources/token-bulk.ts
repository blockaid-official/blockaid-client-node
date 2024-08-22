// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TokenBulkAPI from './token-bulk';
import * as EvmAPI from './evm/evm';

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
     * Token address to validate (EVM / Solana)
     */
    address: string;

    /**
     * Dictionary of detected attacks found during the scan
     */
    attack_types: Record<string, Results.AttackTypes>;

    /**
     * The chain name
     */
    chain: EvmAPI.TokenScanSupportedChain;

    /**
     * Fees associated with the token
     */
    fees: Results.Fees;

    /**
     * financial stats of the token
     */
    financial_stats: Results.FinancialStats;

    /**
     * Score between 0 to 1 (double)
     */
    malicious_score: string;

    /**
     * Metadata of the token
     */
    metadata: Results.SolanaMetadata | Results.BasicMetadataToken;

    /**
     * An enumeration.
     */
    result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';

    /**
     * Trading limits of the token
     */
    trading_limits: Results.TradingLimits;

    /**
     * List of features associated with the token
     */
    features?: Array<Results.Feature>;
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

    /**
     * Fees associated with the token
     */
    export interface Fees {
      /**
       * Buy fee of the token
       */
      buy?: number;

      /**
       * Sell fee of the token
       */
      sell?: number;

      /**
       * Transfer fee of the token
       */
      transfer?: number;
    }

    /**
     * financial stats of the token
     */
    export interface FinancialStats {
      burned_liquidity_percentage?: number;

      holders_count?: number;

      locked_liquidity_percentage?: number;

      top_holders?: Array<FinancialStats.TopHolder>;

      usd_price_per_unit?: number;
    }

    export namespace FinancialStats {
      export interface TopHolder {
        address?: string;

        holding_percentage?: number;
      }
    }

    export interface SolanaMetadata {
      /**
       * Address of the deployer of the fungible token
       */
      deployer?: string;

      /**
       * Description of the token
       */
      description?: string;

      freeze_authority?: string;

      /**
       * URL of the token image
       */
      image_url?: string;

      mint_authority?: string;

      /**
       * Name of the token
       */
      name?: string;

      /**
       * Symbol of the token
       */
      symbol?: string;

      /**
       * Type of the token
       */
      type?: string;

      update_authority?: string;
    }

    export interface BasicMetadataToken {
      /**
       * Address of the deployer of the fungible token
       */
      deployer?: string;

      /**
       * Description of the token
       */
      description?: string;

      /**
       * URL of the token image
       */
      image_url?: string;

      /**
       * Name of the token
       */
      name?: string;

      /**
       * Symbol of the token
       */
      symbol?: string;

      /**
       * Type of the token
       */
      type?: string;
    }

    /**
     * Trading limits of the token
     */
    export interface TradingLimits {
      max_buy?: TradingLimits.MaxBuy;

      max_holding?: TradingLimits.MaxHolding;

      max_sell?: TradingLimits.MaxSell;

      sell_limit_per_block?: TradingLimits.SellLimitPerBlock;
    }

    export namespace TradingLimits {
      export interface MaxBuy {
        amount?: number;

        amount_wei?: string;
      }

      export interface MaxHolding {
        amount?: number;

        amount_wei?: string;
      }

      export interface MaxSell {
        amount?: number;

        amount_wei?: string;
      }

      export interface SellLimitPerBlock {
        amount?: number;

        amount_wei?: string;
      }
    }

    export interface Feature {
      /**
       * Description of the feature
       */
      description: string;

      /**
       * An enumeration.
       */
      feature_id:
        | 'VERIFIED_CONTRACT'
        | 'HIGH_TRADE_VOLUME'
        | 'MARKET_PLACE_SALES_HISTORY'
        | 'HIGH_REPUTATION_TOKEN'
        | 'STATIC_CODE_SIGNATURE'
        | 'KNOWN_MALICIOUS'
        | 'METADATA'
        | 'AIRDROP_PATTERN'
        | 'IMPERSONATOR'
        | 'INORGANIC_VOLUME'
        | 'DYNAMIC_ANALYSIS'
        | 'UNSTABLE_TOKEN_PRICE'
        | 'RUGPULL'
        | 'CONSUMER_OVERRIDE'
        | 'INAPPROPRIATE_CONTENT'
        | 'HIGH_TRANSFER_FEE'
        | 'HIGH_BUY_FEE'
        | 'HIGH_SELL_FEE'
        | 'IS_MINTABLE'
        | 'MODIFIABLE_TAXES'
        | 'CAN_BLACKLIST'
        | 'CAN_WHITELIST'
        | 'HAS_TRADING_COOLDOWN'
        | 'EXTERNAL_FUNCTIONS'
        | 'HIDDEN_OWNER'
        | 'TRANSFER_PAUSEABLE'
        | 'OWNERSHIP_RENOUNCED'
        | 'PROXY_CONTRACT';

      /**
       * An enumeration.
       */
      type: 'Benign' | 'Info' | 'Warning' | 'Malicious';
    }
  }
}

export interface TokenBulkScanParams {
  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

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
