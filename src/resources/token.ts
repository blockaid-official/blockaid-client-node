// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TokenAPI from './token';
import * as EvmAPI from './evm/evm';

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

export type TokenReportResponse = unknown;

export interface TokenScanResponse {
  /**
   * Token address to validate (EVM / Solana)
   */
  address: string;

  /**
   * Dictionary of detected attacks found during the scan
   */
  attack_types: Record<string, TokenScanResponse.AttackTypes>;

  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  /**
   * Fees associated with the token
   */
  fees: TokenScanResponse.Fees;

  /**
   * financial stats of the token
   */
  financial_stats: TokenScanResponse.FinancialStats;

  /**
   * Score between 0 to 1 (double)
   */
  malicious_score: string;

  /**
   * Metadata of the token
   */
  metadata:
    | TokenScanResponse.SolanaMetadata
    | TokenScanResponse.BitcoinMetadataToken
    | TokenScanResponse.EvmMetadataToken;

  /**
   * An enumeration.
   */
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';

  /**
   * Trading limits of the token
   */
  trading_limits: TokenScanResponse.TradingLimits;

  /**
   * List of features associated with the token
   */
  features?: Array<TokenScanResponse.Feature>;
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
     * Contract balance
     */
    contract_balance?: SolanaMetadata.ContractBalance;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string;

    /**
     * Description of the token
     */
    description?: string;

    /**
     * social links of the token
     */
    external_links?: SolanaMetadata.ExternalLinks;

    /**
     * Solana token freeze authority account
     */
    freeze_authority?: string;

    /**
     * URL of the token image
     */
    image_url?: string;

    /**
     * Solana token mint authority account
     */
    mint_authority?: string;

    /**
     * Name of the token
     */
    name?: string;

    /**
     * Contract owner address
     */
    owner?: string;

    /**
     * Contract owner balance
     */
    owner_balance?: SolanaMetadata.OwnerBalance;

    /**
     * Symbol of the token
     */
    symbol?: string;

    /**
     * Type of the token
     */
    type?: string;

    /**
     * Solana token update authority account
     */
    update_authority?: string;
  }

  export namespace SolanaMetadata {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number;

      amount_wei?: string;
    }

    /**
     * social links of the token
     */
    export interface ExternalLinks {
      homepage?: string;

      telegram_channel_id?: string;

      twitter_page?: string;
    }

    /**
     * Contract owner balance
     */
    export interface OwnerBalance {
      amount?: number;

      amount_wei?: string;
    }
  }

  export interface BitcoinMetadataToken {
    /**
     * The unique ID for the Rune
     */
    id?: string;

    /**
     * The formatted name of the rune, with spacers
     */
    formatted_name?: string;

    /**
     * Name of the token
     */
    name?: string;

    /**
     * The rune's unique sequential number.
     */
    number?: number;

    /**
     * Symbol of the token
     */
    symbol?: string;

    /**
     * Type of the token
     */
    type?: string;
  }

  export interface EvmMetadataToken {
    /**
     * Contract balance
     */
    contract_balance?: EvmMetadataToken.ContractBalance;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string;

    /**
     * Description of the token
     */
    description?: string;

    /**
     * social links of the token
     */
    external_links?: EvmMetadataToken.ExternalLinks;

    /**
     * URL of the token image
     */
    image_url?: string;

    /**
     * Name of the token
     */
    name?: string;

    /**
     * Contract owner address
     */
    owner?: string;

    /**
     * Contract owner balance
     */
    owner_balance?: EvmMetadataToken.OwnerBalance;

    /**
     * Symbol of the token
     */
    symbol?: string;

    /**
     * Type of the token
     */
    type?: string;
  }

  export namespace EvmMetadataToken {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number;

      amount_wei?: string;
    }

    /**
     * social links of the token
     */
    export interface ExternalLinks {
      homepage?: string;

      telegram_channel_id?: string;

      twitter_page?: string;
    }

    /**
     * Contract owner balance
     */
    export interface OwnerBalance {
      amount?: number;

      amount_wei?: string;
    }
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
      | 'ONCHAIN_ACTIVITY_VALIDATOR'
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
      chain: EvmAPI.TokenScanSupportedChain;
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
  export import TokenReportResponse = TokenAPI.TokenReportResponse;
  export import TokenScanResponse = TokenAPI.TokenScanResponse;
  export import TokenReportParams = TokenAPI.TokenReportParams;
  export import TokenScanParams = TokenAPI.TokenScanParams;
}
