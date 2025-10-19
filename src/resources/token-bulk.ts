// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EvmAPI from './evm/evm';

export class TokenBulk extends APIResource {
  /**
   * Gets a list of token addresses and scan the tokens to identify any indication of
   * malicious behaviour
   *
   * @example
   * ```ts
   * const response = await client.tokenBulk.scan({
   *   chain: 'ethereum',
   *   tokens: [
   *     '0x66587563e933bbf3974b89156b47bb82b921eb35',
   *     '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
   *   ],
   * });
   * ```
   */
  scan(body: TokenBulkScanParams, options?: Core.RequestOptions): Core.APIPromise<TokenBulkScanResponse> {
    return this._client.post('/v0/token-bulk/scan', { body, ...options });
  }
}

export interface TokenBulkScanResponse {
  results: { [key: string]: TokenBulkScanResponse.Results };
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
    attack_types: { [key: string]: Results.AttackTypes };

    /**
     * Blockchain network
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
    metadata: Results.SolanaMetadata | Results.BitcoinMetadataToken | Results.EvmMetadataToken;

    /**
     * General indication
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
       * Percentage of token currently held by bundlers - wallets that bought in the
       * exact same Solana slot, at any point in the token's life-cycle. Currently
       * available for Solana only.
       */
      bundlers_holding_percentage?: number | null;

      /**
       * Token liquidity burned percentage
       */
      burned_liquidity_percentage?: number | null;

      /**
       * Percentage of token's supply held in known developer wallets (0.0 to 100.0)
       */
      dev_holding_percentage?: number | null;

      /**
       * Amount of token holders
       */
      holders_count?: number | null;

      /**
       * Percentage of token's supply _currently_ held by sniper bots (0.0 to 100.0).
       * Currently available for Solana only.
       */
      initial_snipers_holding_percentage?: number | null;

      /**
       * Percentage of supply that is currently held by insiders - defined as wallets
       * exhibiting early acquisition behaviors typically associated with insider
       * activity.
       */
      insiders_holding_percentage?: number | null;

      /**
       * Token liquidity locked percentage
       */
      locked_liquidity_percentage?: number | null;

      /**
       * Percentage of token's supply _initially_ held by sniper bots (0.0 to 100.0).
       * Currently available for Solana only.
       */
      snipers_holding_percentage?: number | null;

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
       * Decimals of the token
       */
      decimals?: number | null;

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
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      governance?: SolanaMetadata.Governance | null;

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
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      export interface Governance {
        /**
         * Solana token permanent delegate account
         */
        permanent_delegate?: string | null;
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
       * Decimals of the token
       */
      decimals?: number | null;

      /**
       * The formatted name of the rune, with spacers
       */
      formatted_name?: string | null;

      /**
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      governance?: BitcoinMetadataToken.Governance | null;

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

    export namespace BitcoinMetadataToken {
      /**
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      export interface Governance {
        /**
         * Solana token permanent delegate account
         */
        permanent_delegate?: string | null;
      }
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
       * Decimals of the token
       */
      decimals?: number | null;

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
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      governance?: EvmMetadataToken.Governance | null;

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
       * Contains metadata about the governance model and structure associated with the
       * token
       */
      export interface Governance {
        /**
         * Solana token permanent delegate account
         */
        permanent_delegate?: string | null;
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
    domain?: string | null;
  }
}

export declare namespace TokenBulk {
  export {
    type TokenBulkScanResponse as TokenBulkScanResponse,
    type TokenBulkScanParams as TokenBulkScanParams,
  };
}
