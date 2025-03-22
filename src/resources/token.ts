// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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
   * behavior
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

    /**
     * The maximum value that a transfer fee will cost
     */
    transfer_fee_max_amount?: number | null;
  }

  /**
   * financial stats of the token
   */
  export interface FinancialStats {
    /**
     * Token liquidity burned percentage
     */
    burned_liquidity_percentage?: number | null;

    /**
     * Amount of token holders
     */
    holders_count?: number | null;

    /**
     * Token liquidity locked percentage
     */
    locked_liquidity_percentage?: number | null;

    /**
     * token supply
     */
    supply?: number | null;

    /**
     * Top token holders
     */
    top_holders?: Array<FinancialStats.TopHolder>;

    /**
     * Total reserve in USD
     */
    total_reserve_in_usd?: number | null;

    /**
     * token price in USD
     */
    usd_price_per_unit?: number | null;
  }

  export namespace FinancialStats {
    export interface TopHolder {
      /**
       * Address
       */
      address?: string | null;

      /**
       * Holding position out of total token liquidity
       */
      holding_percentage?: number | null;
    }
  }

  export interface SolanaMetadata {
    /**
     * Contract balance
     */
    contract_balance?: SolanaMetadata.ContractBalance | null;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string | null;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string | null;

    /**
     * Contract creator balance
     */
    deployer_balance?: SolanaMetadata.DeployerBalance | null;

    /**
     * Description of the token
     */
    description?: string | null;

    /**
     * social links of the token
     */
    external_links?: SolanaMetadata.ExternalLinks;

    /**
     * Solana token freeze authority account
     */
    freeze_authority?: string | null;

    /**
     * URL of the token image
     */
    image_url?: string | null;

    /**
     * Malicious urls associated with the token
     */
    malicious_urls?: Array<string> | null;

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
    owner_balance?: SolanaMetadata.OwnerBalance | null;

    /**
     * Symbol of the token
     */
    symbol?: string | null;

    /**
     * Address of the token creation initiator, only set if the tokens was created by a
     * well known token launch platform
     */
    token_creation_initiator?: string | null;

    /**
     * Type of the token
     */
    type?: string | null;

    /**
     * Solana token update authority account
     */
    update_authority?: string | null;

    /**
     * Urls associated with the token
     */
    urls?: Array<string> | null;
  }

  export namespace SolanaMetadata {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * Contract creator balance
     */
    export interface DeployerBalance {
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

  export interface BitcoinMetadataToken {
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

  export interface EvmMetadataToken {
    /**
     * Contract balance
     */
    contract_balance?: EvmMetadataToken.ContractBalance | null;

    /**
     * Contract deploy date
     */
    creation_timestamp?: string | null;

    /**
     * Address of the deployer of the fungible token
     */
    deployer?: string | null;

    /**
     * Contract creator balance
     */
    deployer_balance?: EvmMetadataToken.DeployerBalance | null;

    /**
     * Description of the token
     */
    description?: string | null;

    /**
     * social links of the token
     */
    external_links?: EvmMetadataToken.ExternalLinks;

    /**
     * URL of the token image
     */
    image_url?: string | null;

    /**
     * Malicious urls associated with the token
     */
    malicious_urls?: Array<string> | null;

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
    owner_balance?: EvmMetadataToken.OwnerBalance | null;

    /**
     * Symbol of the token
     */
    symbol?: string | null;

    /**
     * Address of the token creation initiator, only set if the tokens was created by a
     * well known token launch platform
     */
    token_creation_initiator?: string | null;

    /**
     * Type of the token
     */
    type?: string | null;

    /**
     * Urls associated with the token
     */
    urls?: Array<string> | null;
  }

  export namespace EvmMetadataToken {
    /**
     * Contract balance
     */
    export interface ContractBalance {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * Contract creator balance
     */
    export interface DeployerBalance {
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
    /**
     * Max amount that can be bought at once
     */
    max_buy?: TradingLimits.MaxBuy | null;

    /**
     * Max amount that can be held by a single address
     */
    max_holding?: TradingLimits.MaxHolding | null;

    /**
     * Max amount that can be sold at once
     */
    max_sell?: TradingLimits.MaxSell | null;

    /**
     * Maximum amount of the token that can be sold in a block
     */
    sell_limit_per_block?: TradingLimits.SellLimitPerBlock | null;
  }

  export namespace TradingLimits {
    /**
     * Max amount that can be bought at once
     */
    export interface MaxBuy {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * Max amount that can be held by a single address
     */
    export interface MaxHolding {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * Max amount that can be sold at once
     */
    export interface MaxSell {
      amount?: number | null;

      amount_wei?: string | null;
    }

    /**
     * Maximum amount of the token that can be sold in a block
     */
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
      | 'UNVERIFIED_CONTRACT'
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
      | 'CONCENTRATED_SUPPLY_DISTRIBUTION'
      | 'HONEYPOT'
      | 'INSUFFICIENT_LOCKED_LIQUIDITY'
      | 'UNSTABLE_TOKEN_PRICE'
      | 'RUGPULL'
      | 'WASH_TRADING'
      | 'CONSUMER_OVERRIDE'
      | 'INAPPROPRIATE_CONTENT'
      | 'HIGH_TRANSFER_FEE'
      | 'HIGH_BUY_FEE'
      | 'HIGH_SELL_FEE'
      | 'UNSELLABLE_TOKEN'
      | 'IS_MINTABLE'
      | 'REBASE_TOKEN'
      | 'LIQUID_STAKING_TOKEN'
      | 'MODIFIABLE_TAXES'
      | 'CAN_BLACKLIST'
      | 'CAN_WHITELIST'
      | 'HAS_TRADING_COOLDOWN'
      | 'EXTERNAL_FUNCTIONS'
      | 'HIDDEN_OWNER'
      | 'TRANSFER_PAUSEABLE'
      | 'OWNERSHIP_RENOUNCED'
      | 'OWNER_CAN_CHANGE_BALANCE'
      | 'PROXY_CONTRACT'
      | 'SIMILAR_MALICIOUS_CONTRACT'
      | 'FAKE_VOLUME'
      | 'HIDDEN_SUPPLY_BY_KEY_HOLDER'
      | 'FAKE_TRADE_MAKER_COUNT';

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
