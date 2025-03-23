// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Message extends APIResource {
  /**
   * Scan a message
   */
  scan(body: MessageScanParams, options?: Core.RequestOptions): Core.APIPromise<MessageScanResponse> {
    return this._client.post('/v0/solana/message/scan', { body, ...options });
  }
}

export interface MessageScanResponse {
  encoding: 'base58' | 'base64';

  /**
   * Unique identifier of the request
   */
  request_id: string;

  status: 'SUCCESS' | 'ERROR';

  /**
   * Error message if the simulation failed
   */
  error?: string | null;

  /**
   * Error details
   */
  error_details?:
    | MessageScanResponse.SolanaAPIErrorDetails
    | MessageScanResponse.SolanaTransactionErrorDetails
    | MessageScanResponse.SolanaInstructionErrorDetails
    | null;

  /**
   * Result of the request
   */
  result?: MessageScanResponse.Result | null;
}

export namespace MessageScanResponse {
  export interface SolanaAPIErrorDetails {
    /**
     * Advanced message of the error
     */
    message: string;

    type?: 'ApiError';
  }

  export interface SolanaTransactionErrorDetails {
    /**
     * Advanced message of the error
     */
    message: string;

    /**
     * Index of the transaction in the bulk
     */
    transaction_index: number;

    type?: 'TransactionError';
  }

  export interface SolanaInstructionErrorDetails {
    /**
     * Index of the instruction in the transaction
     */
    instruction_index: number;

    /**
     * Human readable error
     */
    message: string;

    /**
     * Index of the transaction in the bulk
     */
    transaction_index: number;

    /**
     * Machine readable error code
     */
    code?: string | null;

    /**
     * Error number
     */
    number?: number | null;

    /**
     * The program account that caused the error
     */
    program_account?: string | null;

    type?: 'InstructionError';
  }

  /**
   * Result of the request
   */
  export interface Result {
    /**
     * Simulation result; Only present if simulation option is included in the request
     */
    simulation?: Result.SolanaSimulationResultSchema | Result.SolanaSimulationErrorSchema | null;

    /**
     * Validation result; Only present if validation option is included in the request
     */
    validation?: Result.SolanaValidationResult | Result.SolanaValidationErrorSchema | null;
  }

  export namespace Result {
    export interface SolanaSimulationResultSchema {
      /**
       * Summary of the actions and asset transfers that were made by the requested
       * account address
       */
      account_summary: SolanaSimulationResultSchema.AccountSummary;

      /**
       * Ownership diffs of the account addresses
       */
      assets_ownership_diff: Record<
        string,
        Array<
          | SolanaSimulationResultSchema.SolanaNativeSolOwnershipDiff
          | SolanaSimulationResultSchema.SolanaStakedSolOwnershipDiff
          | SolanaSimulationResultSchema.SolanaFungibleSolOwnershipDiff
          | SolanaSimulationResultSchema.SolanaNonFungibleSolOwnershipDiff
        >
      >;

      /**
       * Details of addresses involved in the transaction
       */
      accounts_details?: Array<
        | SolanaSimulationResultSchema.SolanaPdaAccountSchema
        | SolanaSimulationResultSchema.SolanaSystemAccountDetailsSchema
        | SolanaSimulationResultSchema.SolanaProgramAccountDetailsSchema
        | SolanaSimulationResultSchema.SolanaTokenAccountDetailsSchema
        | SolanaSimulationResultSchema.SolanaFungibleMintAccountDetailsSchema
        | SolanaSimulationResultSchema.SolanaNonFungibleMintAccountDetailsSchema
        | SolanaSimulationResultSchema.SolanaCnftMintAccountDetailsSchema
      >;

      /**
       * Mapping between the address of an account to the assets diff during the
       * transaction
       */
      assets_diff?: Record<
        string,
        Array<
          | SolanaSimulationResultSchema.SolanaNativeAssetDiff
          | SolanaSimulationResultSchema.SolanaSplFungibleAssetDiff
          | SolanaSimulationResultSchema.SolanaSplNonFungibleAssetDiff
          | SolanaSimulationResultSchema.SolanaCnftAssetDiff
        >
      >;

      /**
       * Mapping between the address of an account to the exposure of the assets during
       * the transaction
       */
      delegations?: Record<
        string,
        Array<
          | SolanaSimulationResultSchema.SolanaCnftDelegation
          | SolanaSimulationResultSchema.SolanaFungibleSplTokenDelegation
          | SolanaSimulationResultSchema.SolanaNonFungibleSplTokenDelegation
        >
      >;
    }

    export namespace SolanaSimulationResultSchema {
      /**
       * Summary of the actions and asset transfers that were made by the requested
       * account address
       */
      export interface AccountSummary {
        /**
         * Exposures made by the requested account address
         */
        account_delegations: Array<
          | AccountSummary.SolanaCnftDelegation
          | AccountSummary.SolanaFungibleSplTokenDelegation
          | AccountSummary.SolanaNonFungibleSplTokenDelegation
        >;

        /**
         * Ownership diffs of the requested account address
         */
        account_ownerships_diff: Array<
          | AccountSummary.SolanaNativeSolOwnershipDiff
          | AccountSummary.SolanaStakedSolOwnershipDiff
          | AccountSummary.SolanaFungibleSolOwnershipDiff
          | AccountSummary.SolanaNonFungibleSolOwnershipDiff
        >;

        /**
         * Total USD diff for the requested account address
         */
        total_usd_diff: AccountSummary.TotalUsdDiff;

        /**
         * Assets diffs of the requested account address
         */
        account_assets_diff?: Array<
          | AccountSummary.SolanaNativeAssetDiff
          | AccountSummary.SolanaSplFungibleAssetDiff
          | AccountSummary.SolanaSplNonFungibleAssetDiff
          | AccountSummary.SolanaCnftAssetDiff
        >;

        /**
         * Total USD exposure for each of the spender addresses during the transaction
         */
        total_usd_exposure?: Record<string, number>;
      }

      export namespace AccountSummary {
        export interface SolanaCnftDelegation {
          asset: SolanaCnftDelegation.Asset;

          asset_type: string;

          delegate: string;

          delegation: SolanaCnftDelegation.Delegation;
        }

        export namespace SolanaCnftDelegation {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            decimals?: number;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'CNFT';
          }

          export interface Delegation {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaFungibleSplTokenDelegation {
          asset: SolanaFungibleSplTokenDelegation.Asset;

          asset_type: string;

          delegate: string;

          delegation: SolanaFungibleSplTokenDelegation.Delegation;
        }

        export namespace SolanaFungibleSplTokenDelegation {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's decimals
             */
            decimals: number;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'TOKEN';
          }

          export interface Delegation {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaNonFungibleSplTokenDelegation {
          asset: SolanaNonFungibleSplTokenDelegation.Asset;

          asset_type: string;

          delegate: string;

          delegation: SolanaNonFungibleSplTokenDelegation.Delegation;
        }

        export namespace SolanaNonFungibleSplTokenDelegation {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            decimals?: number;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'NFT';
          }

          export interface Delegation {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaNativeSolOwnershipDiff {
          asset: SolanaNativeSolOwnershipDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * The owner post the transaction
           */
          post_owner: string | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner: string | null;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaNativeSolOwnershipDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaNativeSolOwnershipDiff.Out | null;
        }

        export namespace SolanaNativeSolOwnershipDiff {
          export interface Asset {
            decimals: number;

            /**
             * Type of the asset (`"NativeToken"`)
             */
            type: 'SOL' | 'ETH';

            /**
             * Logo of SOL
             */
            logo?: string | null;
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaStakedSolOwnershipDiff {
          asset: SolanaStakedSolOwnershipDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * The owner post the transaction
           */
          post_owner: string | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner: string | null;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaStakedSolOwnershipDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaStakedSolOwnershipDiff.Out | null;
        }

        export namespace SolanaStakedSolOwnershipDiff {
          export interface Asset {
            decimals: number;

            /**
             * Type of the asset (`"StakedNative"`)
             */
            type: 'STAKED_SOL' | 'STAKED_ETH';

            /**
             * Logo of SOL
             */
            logo?: string | null;
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaFungibleSolOwnershipDiff {
          asset: SolanaFungibleSolOwnershipDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * The owner post the transaction
           */
          post_owner: string | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner: string | null;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaFungibleSolOwnershipDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaFungibleSolOwnershipDiff.Out | null;
        }

        export namespace SolanaFungibleSolOwnershipDiff {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's decimals
             */
            decimals: number;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'TOKEN';
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaNonFungibleSolOwnershipDiff {
          asset: SolanaNonFungibleSolOwnershipDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * The owner post the transaction
           */
          post_owner: string | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner: string | null;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaNonFungibleSolOwnershipDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaNonFungibleSolOwnershipDiff.Out | null;
        }

        export namespace SolanaNonFungibleSolOwnershipDiff {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            decimals?: number;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'NFT';
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        /**
         * Total USD diff for the requested account address
         */
        export interface TotalUsdDiff {
          /**
           * Total incoming USD transfers
           */
          in: number;

          /**
           * Total outgoing USD transfers
           */
          out: number;

          /**
           * Total USD transfers
           */
          total?: number;
        }

        export interface SolanaNativeAssetDiff {
          asset: SolanaNativeAssetDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaNativeAssetDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaNativeAssetDiff.Out | null;
        }

        export namespace SolanaNativeAssetDiff {
          export interface Asset {
            decimals: number;

            /**
             * Type of the asset (`"NativeToken"`)
             */
            type: 'SOL' | 'ETH';

            /**
             * Logo of SOL
             */
            logo?: string | null;
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaSplFungibleAssetDiff {
          asset: SolanaSplFungibleAssetDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaSplFungibleAssetDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaSplFungibleAssetDiff.Out | null;
        }

        export namespace SolanaSplFungibleAssetDiff {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's decimals
             */
            decimals: number;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'TOKEN';
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaSplNonFungibleAssetDiff {
          asset: SolanaSplNonFungibleAssetDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaSplNonFungibleAssetDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaSplNonFungibleAssetDiff.Out | null;
        }

        export namespace SolanaSplNonFungibleAssetDiff {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            decimals?: number;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'NFT';
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }

        export interface SolanaCnftAssetDiff {
          asset: SolanaCnftAssetDiff.Asset;

          /**
           * The type of the assets in this diff
           */
          asset_type: string;

          /**
           * Details of the incoming transfer
           */
          in?: SolanaCnftAssetDiff.In | null;

          /**
           * Details of the outgoing transfer
           */
          out?: SolanaCnftAssetDiff.Out | null;
        }

        export namespace SolanaCnftAssetDiff {
          export interface Asset {
            /**
             * Address of the token's contract
             */
            address: string;

            /**
             * token's name
             */
            name: string;

            /**
             * token's symbol
             */
            symbol: string;

            decimals?: number;

            /**
             * URL of the asset's logo
             */
            logo?: string | null;

            type?: 'CNFT';
          }

          /**
           * Details of the incoming transfer
           */
          export interface In {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }

          /**
           * Details of the outgoing transfer
           */
          export interface Out {
            /**
             * Raw value of the transfer
             */
            raw_value: number;

            /**
             * Value of the transfer
             */
            value: number;

            /**
             * Summarized description of the transfer
             */
            summary?: string | null;

            /**
             * USD price of the asset
             */
            usd_price?: number | null;
          }
        }
      }

      export interface SolanaNativeSolOwnershipDiff {
        asset: SolanaNativeSolOwnershipDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * The owner post the transaction
         */
        post_owner: string | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner: string | null;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaNativeSolOwnershipDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaNativeSolOwnershipDiff.Out | null;
      }

      export namespace SolanaNativeSolOwnershipDiff {
        export interface Asset {
          decimals: number;

          /**
           * Type of the asset (`"NativeToken"`)
           */
          type: 'SOL' | 'ETH';

          /**
           * Logo of SOL
           */
          logo?: string | null;
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaStakedSolOwnershipDiff {
        asset: SolanaStakedSolOwnershipDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * The owner post the transaction
         */
        post_owner: string | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner: string | null;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaStakedSolOwnershipDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaStakedSolOwnershipDiff.Out | null;
      }

      export namespace SolanaStakedSolOwnershipDiff {
        export interface Asset {
          decimals: number;

          /**
           * Type of the asset (`"StakedNative"`)
           */
          type: 'STAKED_SOL' | 'STAKED_ETH';

          /**
           * Logo of SOL
           */
          logo?: string | null;
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaFungibleSolOwnershipDiff {
        asset: SolanaFungibleSolOwnershipDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * The owner post the transaction
         */
        post_owner: string | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner: string | null;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaFungibleSolOwnershipDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaFungibleSolOwnershipDiff.Out | null;
      }

      export namespace SolanaFungibleSolOwnershipDiff {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's decimals
           */
          decimals: number;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'TOKEN';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaNonFungibleSolOwnershipDiff {
        asset: SolanaNonFungibleSolOwnershipDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * The owner post the transaction
         */
        post_owner: string | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner: string | null;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaNonFungibleSolOwnershipDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaNonFungibleSolOwnershipDiff.Out | null;
      }

      export namespace SolanaNonFungibleSolOwnershipDiff {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          decimals?: number;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'NFT';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaPdaAccountSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * The address of the owning program
         */
        owner: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'PDA';
      }

      export interface SolanaSystemAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'SYSTEM_ACCOUNT';
      }

      export interface SolanaProgramAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'PROGRAM' | 'NATIVE_PROGRAM';
      }

      export interface SolanaTokenAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Encoded public key of the mint
         */
        mint_address: string;

        /**
         * Encoded public key of the owner
         */
        owner_address: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'TOKEN_ACCOUNT' | 'TOKEN_2022_ACCOUNT';
      }

      export interface SolanaFungibleMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Logo of the mint
         */
        logo: string | null;

        /**
         * Name of the mint
         */
        name: string;

        /**
         * Symbol of the mint
         */
        symbol: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'FUNGIBLE_MINT_ACCOUNT' | 'FUNGIBLE_MINT_ACCOUNT_2022';
      }

      export interface SolanaNonFungibleMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Logo of the mint
         */
        logo: string | null;

        /**
         * Name of the mint
         */
        name: string;

        /**
         * Symbol of the mint
         */
        symbol: string;

        /**
         * URI of the mint
         */
        uri: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'NON_FUNGIBLE_MINT_ACCOUNT' | 'NON_FUNGIBLE_MINT_ACCOUNT_2022';
      }

      export interface SolanaCnftMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Logo of the mint
         */
        logo: string | null;

        /**
         * Name of the mint
         */
        name: string;

        /**
         * Symbol of the mint
         */
        symbol: string;

        /**
         * URI of the mint
         */
        uri: string;

        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'CNFT_MINT_ACCOUNT';
      }

      export interface SolanaNativeAssetDiff {
        asset: SolanaNativeAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaNativeAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaNativeAssetDiff.Out | null;
      }

      export namespace SolanaNativeAssetDiff {
        export interface Asset {
          decimals: number;

          /**
           * Type of the asset (`"NativeToken"`)
           */
          type: 'SOL' | 'ETH';

          /**
           * Logo of SOL
           */
          logo?: string | null;
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaSplFungibleAssetDiff {
        asset: SolanaSplFungibleAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaSplFungibleAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaSplFungibleAssetDiff.Out | null;
      }

      export namespace SolanaSplFungibleAssetDiff {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's decimals
           */
          decimals: number;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'TOKEN';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaSplNonFungibleAssetDiff {
        asset: SolanaSplNonFungibleAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaSplNonFungibleAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaSplNonFungibleAssetDiff.Out | null;
      }

      export namespace SolanaSplNonFungibleAssetDiff {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          decimals?: number;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'NFT';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaCnftAssetDiff {
        asset: SolanaCnftAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SolanaCnftAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SolanaCnftAssetDiff.Out | null;
      }

      export namespace SolanaCnftAssetDiff {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          decimals?: number;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'CNFT';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaCnftDelegation {
        asset: SolanaCnftDelegation.Asset;

        asset_type: string;

        delegate: string;

        delegation: SolanaCnftDelegation.Delegation;
      }

      export namespace SolanaCnftDelegation {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          decimals?: number;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'CNFT';
        }

        export interface Delegation {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaFungibleSplTokenDelegation {
        asset: SolanaFungibleSplTokenDelegation.Asset;

        asset_type: string;

        delegate: string;

        delegation: SolanaFungibleSplTokenDelegation.Delegation;
      }

      export namespace SolanaFungibleSplTokenDelegation {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's decimals
           */
          decimals: number;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'TOKEN';
        }

        export interface Delegation {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface SolanaNonFungibleSplTokenDelegation {
        asset: SolanaNonFungibleSplTokenDelegation.Asset;

        asset_type: string;

        delegate: string;

        delegation: SolanaNonFungibleSplTokenDelegation.Delegation;
      }

      export namespace SolanaNonFungibleSplTokenDelegation {
        export interface Asset {
          /**
           * Address of the token's contract
           */
          address: string;

          /**
           * token's name
           */
          name: string;

          /**
           * token's symbol
           */
          symbol: string;

          decimals?: number;

          /**
           * URL of the asset's logo
           */
          logo?: string | null;

          type?: 'NFT';
        }

        export interface Delegation {
          /**
           * Raw value of the transfer
           */
          raw_value: number;

          /**
           * Value of the transfer
           */
          value: number;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }
    }

    export interface SolanaSimulationErrorSchema {
      /**
       * Error message
       */
      error: string;

      status: 'Error';
    }

    export interface SolanaValidationResult {
      /**
       * A textual classification that can be presented to the user explaining the
       * reason.
       */
      classification: string;

      /**
       * A textual description about the validation result
       */
      description: string;

      features: Array<SolanaValidationResult.Feature>;

      /**
       * A textual description about the reasons the transaction was flagged with
       * result_type
       */
      reason: string;

      /**
       * Verdict of the validation
       */
      result_type: 'Benign' | 'Warning' | 'Malicious';

      status: 'Success';
    }

    export namespace SolanaValidationResult {
      export interface Feature {
        /**
         * Address the feature refers to
         */
        address: string;

        /**
         * Textual description
         */
        description: string;

        feature_id: string;

        /**
         * Feature Classification
         */
        type: 'Benign' | 'Warning' | 'Malicious' | 'Info';
      }
    }

    export interface SolanaValidationErrorSchema {
      /**
       * Error message
       */
      error: string;

      status: 'Error';
    }
  }
}

export type MessageScanParams = unknown;

export declare namespace Message {
  export { type MessageScanResponse as MessageScanResponse, type MessageScanParams as MessageScanParams };
}
