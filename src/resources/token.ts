// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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
   * Blockchain network
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
    | TokenScanResponse.TokenSolanaMetadata
    | TokenScanResponse.TokenBitcoinMetadataToken
    | TokenScanResponse.TokenEvmMetadataToken;

  /**
   * General indication
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
    buy?: number | null;

    /**
     * Sell fee of the token
     */
    sell?: number | null;

    /**
     * Transfer fee of the token
     */
    transfer?: number | null;
  }

  /**
   * financial stats of the token
   */
  export interface FinancialStats {
    burned_liquidity_percentage?: number | null;

    holders_count?: number | null;

    locked_liquidity_percentage?: number | null;

    top_holders?: Array<FinancialStats.TopHolder>;

    /**
     * Total reserve in USD
     */
    total_reserve_in_usd?: number | null;

    usd_price_per_unit?: number | null;
  }

  export namespace FinancialStats {
    export interface TopHolder {
      address?: string | null;

      holding_percentage?: number | null;
    }
  }

  export interface TokenSolanaMetadata {
    /**
     * Contract balance
     */
    contract_balance?: TokenSolanaMetadata.ContractBalance | null;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string | null;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string | null;

    /**
     * Description of the token
     */
    description?: string | null;

    /**
     * social links of the token
     */
    external_links?: TokenSolanaMetadata.ExternalLinks;

    /**
     * Solana token freeze authority account
     */
    freeze_authority?: string | null;

    /**
     * URL of the token image
     */
    image_url?: string | null;

    /**
     * Solana token mint authority account
     */
    mint_authority?: string | null;

    /**
     * Name of the token
     */
    name?: string | null;

    /**
     * Contract owner address
     */
    owner?: string | null;

    /**
     * Contract owner balance
     */
    owner_balance?: TokenSolanaMetadata.OwnerBalance | null;

    /**
     * Symbol of the token
     */
    symbol?: string | null;

    /**
     * Type of the token
     */
    type?: string | null;

    /**
     * Solana token update authority account
     */
    update_authority?: string | null;
  }

  export namespace TokenSolanaMetadata {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * social links of the token
     */
    export interface ExternalLinks {
      homepage?: string | null;

      telegram_channel_id?: string | null;

      twitter_page?: string | null;
    }

    /**
     * Contract owner balance
     */
    export interface OwnerBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }
  }

  export interface TokenBitcoinMetadataToken {
    /**
     * The unique ID for the Rune
     */
    id?: string | null;

    /**
     * The formatted name of the rune, with spacers
     */
    formatted_name?: string | null;

    /**
     * Name of the token
     */
    name?: string | null;

    /**
     * The rune's unique sequential number.
     */
    number?: number | null;

    /**
     * Symbol of the token
     */
    symbol?: string | null;

    /**
     * Type of the token
     */
    type?: string | null;
  }

  export interface TokenEvmMetadataToken {
    /**
     * Contract balance
     */
    contract_balance?: TokenEvmMetadataToken.ContractBalance | null;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string | null;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string | null;

    /**
     * Description of the token
     */
    description?: string | null;

    /**
     * social links of the token
     */
    external_links?: TokenEvmMetadataToken.ExternalLinks;

    /**
     * URL of the token image
     */
    image_url?: string | null;

    /**
     * Name of the token
     */
    name?: string | null;

    /**
     * Contract owner address
     */
    owner?: string | null;

    /**
     * Contract owner balance
     */
    owner_balance?: TokenEvmMetadataToken.OwnerBalance | null;

    /**
     * Symbol of the token
     */
    symbol?: string | null;

    /**
     * Type of the token
     */
    type?: string | null;
  }

  export namespace TokenEvmMetadataToken {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * social links of the token
     */
    export interface ExternalLinks {
      homepage?: string | null;

      telegram_channel_id?: string | null;

      twitter_page?: string | null;
    }

    /**
     * Contract owner balance
     */
    export interface OwnerBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }
  }

  /**
   * Trading limits of the token
   */
  export interface TradingLimits {
    max_buy?: TradingLimits.MaxBuy | null;

    max_holding?: TradingLimits.MaxHolding | null;

    max_sell?: TradingLimits.MaxSell | null;

    sell_limit_per_block?: TradingLimits.SellLimitPerBlock | null;
  }

  export namespace TradingLimits {
    export interface MaxBuy {
      amount?: number | null;

      amount_wei?: string | null;
    }

    export interface MaxHolding {
      amount?: number | null;

      amount_wei?: string | null;
    }

    export interface MaxSell {
      amount?: number | null;

      amount_wei?: string | null;
    }

    export interface SellLimitPerBlock {
      amount?: number | null;

      amount_wei?: string | null;
    }
  }

  export interface Feature {
    /**
     * Description of the feature
     */
    description: string;

    /**
     * Feature identifier
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
      | 'PROXY_CONTRACT'
      | 'LIQUID_STAKE'
      | 'REBASE_TOKEN'
      | 'UNSELLABLE_TOKEN'
      | 'CONCENTRATED_SUPPLY_DISTRIBUTION'
      | 'INSUFFICIENT_LOCKED_LIQUIDITY'
      | 'HONEYPOT';

    /**
     * Type of the feature
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
   * The event type of the report. Could be FALSE_POSITIVE or FALSE_NEGATIVE.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * The report parameters.
   */
  report: TokenReportParams.TokenParamReportTokenReportParams | TokenReportParams.TokenRequestIDReport;
}

export namespace TokenReportParams {
  export interface TokenParamReportTokenReportParams {
    params: TokenParamReportTokenReportParams.Params;

    type: 'params';
  }

  export namespace TokenParamReportTokenReportParams {
    export interface Params {
      /**
       * The address of the token to report on.
       */
      address: string;

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
    }
  }

  export interface TokenRequestIDReport {
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
    domain?: string | null;
  }
}

export declare namespace Token {
  export {
    type TokenReportResponse as TokenReportResponse,
    type TokenScanResponse as TokenScanResponse,
    type TokenReportParams as TokenReportParams,
    type TokenScanParams as TokenScanParams,
  };
}
