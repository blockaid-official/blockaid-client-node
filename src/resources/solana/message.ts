// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as MessageAPI from '@blockaid/client/resources/solana/message';
import * as SolanaAPI from '@blockaid/client/resources/solana/solana';

export class Message extends APIResource {
  /**
   * Scan Messages
   */
  scan(body: MessageScanParams, options?: Core.RequestOptions): Core.APIPromise<MessageScanResponse> {
    return this._client.post('/v0/solana/message/scan', { body, ...options });
  }
}

export interface MessageScanResponse {
  /**
   * Encoding of the public keys
   */
  encoding?: string;

  /**
   * Error message if the simulation failed
   */
  error?: string | null;

  /**
   * Summary of the result
   */
  result?: MessageScanResponse.Result | null;
}

export namespace MessageScanResponse {
  /**
   * Summary of the result
   */
  export interface Result {
    /**
     * Transaction validation result
     */
    validation: Result.Validation;

    /**
     * Transaction simulation result
     */
    simulation?: Result.Simulation | null;
  }

  export namespace Result {
    /**
     * Transaction validation result
     */
    export interface Validation {
      /**
       * A list of features about this transaction explaining the validation
       */
      features: Array<string>;

      /**
       * An enumeration.
       */
      reason:
        | ''
        | 'shared_state_in_bulk'
        | 'unknown_profiter'
        | 'unfair_trade'
        | 'transfer_farming'
        | 'writable_accounts_farming'
        | 'native_ownership_change'
        | 'spl_token_ownership_change'
        | 'exposure_farming'
        | 'known_attacker'
        | 'invalid_signature'
        | 'other';

      /**
       * An enumeration.
       */
      verdict: 'Benign' | 'Warning' | 'Malicious';
    }

    /**
     * Transaction simulation result
     */
    export interface Simulation {
      /**
       * Summary of the requested account address
       */
      account_summary: Simulation.AccountSummary;

      /**
       * Summary of the accounts involved in the transaction simulation
       */
      accounts_details: Array<
        | Simulation.SystemAccountDetailsSchema
        | Simulation.TokenAccountDetailsSchema
        | Simulation.FungibleMintAccountDetailsSchema
        | Simulation.NonFungibleMintAccountDetailsSchema
        | Simulation.ProgramAccountDetailsSchema
        | Simulation.PdaAccountSchema
        | Simulation.CnftMintAccountDetailsSchema
      >;

      /**
       * Summary of the assets involved in the transaction simulation
       */
      assets_diff: Record<
        string,
        Array<
          | Simulation.NativeSolDiffSchema
          | Simulation.SplFungibleTokenDiffSchema
          | Simulation.SplNonFungibleTokenDiffSchema
          | SolanaAPI.CnftDiffSchema
        >
      >;

      /**
       * Summary of ownership changes; By account address
       */
      assets_ownership_diff: Record<
        string,
        Array<
          | Simulation.NativeSolOwnershipDiffSchema
          | Simulation.SplTokenOwnershipDiffSchema
          | Simulation.StakedSolWithdrawAuthorityDiffSchema
        >
      >;

      /**
       * Summary of the delegations, by account address
       */
      delegations: Record<string, Array<Simulation.Delegation>>;
    }

    export namespace Simulation {
      /**
       * Summary of the requested account address
       */
      export interface AccountSummary {
        /**
         * Total USD diff for the requested account address
         */
        total_usd_diff: AccountSummary.TotalUsdDiff;

        /**
         * Assets diff of the requested account address
         */
        account_assets_diff?: Array<
          | AccountSummary.NativeSolDiffSchema
          | AccountSummary.SplFungibleTokenDiffSchema
          | AccountSummary.SplNonFungibleTokenDiffSchema
          | SolanaAPI.CnftDiffSchema
        >;

        /**
         * Delegated assets of the requested account address
         */
        account_delegations?: Array<AccountSummary.AccountDelegation>;

        /**
         * Account ownerships diff of the requested account address
         */
        account_ownerships_diff?: Array<
          | AccountSummary.NativeSolOwnershipDiffSchema
          | AccountSummary.SplTokenOwnershipDiffSchema
          | AccountSummary.StakedSolWithdrawAuthorityDiffSchema
        >;
      }

      export namespace AccountSummary {
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
          total: number;
        }

        export interface NativeSolDiffSchema {
          asset: SolanaAPI.NativeSolDetailsSchema;

          /**
           * Incoming transfers of the asset
           */
          in?: SolanaAPI.AssetTransferDetailsSchema | null;

          out?: SolanaAPI.AssetTransferDetailsSchema | null;
        }

        export interface SplFungibleTokenDiffSchema {
          asset: SolanaAPI.SplFungibleTokenDetailsSchema;

          /**
           * Incoming transfers of the asset
           */
          in?: SolanaAPI.AssetTransferDetailsSchema | null;

          out?: SolanaAPI.AssetTransferDetailsSchema | null;
        }

        export interface SplNonFungibleTokenDiffSchema {
          asset: SolanaAPI.SplNonFungibleTokenDetailsSchema;

          /**
           * Incoming transfers of the asset
           */
          in?: SolanaAPI.AssetTransferDetailsSchema | null;

          out?: SolanaAPI.AssetTransferDetailsSchema | null;
        }

        export interface AccountDelegation {
          asset:
            | SolanaAPI.SplFungibleTokenDetailsSchema
            | SolanaAPI.SplNonFungibleTokenDetailsSchema
            | SolanaAPI.CnftDetailsSchema;

          /**
           * The delegate's address
           */
          delegate: string;

          /**
           * Details of the delegation
           */
          delegation: SolanaAPI.AssetTransferDetailsSchema;
        }

        export interface NativeSolOwnershipDiffSchema {
          asset: SolanaAPI.NativeSolDetailsSchema;

          /**
           * The owner post the transaction
           */
          post_owner: string;

          /**
           * Incoming transfers of the asset
           */
          in_?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * Details of the moved value
           */
          out?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner?: string | null;
        }

        export interface SplTokenOwnershipDiffSchema {
          asset: SolanaAPI.SplFungibleTokenDetailsSchema | SolanaAPI.SplNonFungibleTokenDetailsSchema;

          /**
           * The owner post the transaction
           */
          post_owner: string;

          /**
           * Incoming transfers of the asset
           */
          in_?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * Details of the moved value
           */
          out?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner?: string | null;
        }

        export interface StakedSolWithdrawAuthorityDiffSchema {
          /**
           * The owner post the transaction
           */
          post_owner: string;

          asset?: StakedSolWithdrawAuthorityDiffSchema.Asset;

          /**
           * Incoming transfers of the asset
           */
          in_?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * Details of the moved value
           */
          out?: SolanaAPI.AssetTransferDetailsSchema | null;

          /**
           * The owner prior to the transaction
           */
          pre_owner?: string | null;
        }

        export namespace StakedSolWithdrawAuthorityDiffSchema {
          export interface Asset {
            decimals?: number;

            /**
             * Type of the asset (`"STAKED_SOL"`)
             */
            type?: string;
          }
        }
      }

      export interface SystemAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'SYSTEM_ACCOUNT';
      }

      export interface TokenAccountDetailsSchema {
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

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'TOKEN_ACCOUNT';
      }

      export interface FungibleMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * Name of the mint
         */
        name: string;

        /**
         * Symbol of the mint
         */
        symbol: string;

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        /**
         * Logo of the mint
         */
        logo?: string;

        type?: 'FUNGIBLE_MINT_ACCOUNT';
      }

      export interface NonFungibleMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

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

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        /**
         * Logo of the mint
         */
        logo?: string;

        type?: 'NON_FUNGIBLE_MINT_ACCOUNT';
      }

      export interface ProgramAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        type: 'PROGRAM' | 'NATIVE_PROGRAM';

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;
      }

      export interface PdaAccountSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

        /**
         * The address of the owning program
         */
        owner: string;

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        type?: 'PDA';
      }

      export interface CnftMintAccountDetailsSchema {
        /**
         * Encoded public key of the account
         */
        account_address: string;

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

        /**
         * Whether the account had been written to during the simulation
         */
        was_written_to: boolean;

        /**
         * Description of the account
         */
        description?: string | null;

        /**
         * Logo of the mint
         */
        logo?: string;

        type?: 'CNFT_MINT_ACCOUNT';
      }

      export interface NativeSolDiffSchema {
        asset: SolanaAPI.NativeSolDetailsSchema;

        /**
         * Incoming transfers of the asset
         */
        in?: SolanaAPI.AssetTransferDetailsSchema | null;

        out?: SolanaAPI.AssetTransferDetailsSchema | null;
      }

      export interface SplFungibleTokenDiffSchema {
        asset: SolanaAPI.SplFungibleTokenDetailsSchema;

        /**
         * Incoming transfers of the asset
         */
        in?: SolanaAPI.AssetTransferDetailsSchema | null;

        out?: SolanaAPI.AssetTransferDetailsSchema | null;
      }

      export interface SplNonFungibleTokenDiffSchema {
        asset: SolanaAPI.SplNonFungibleTokenDetailsSchema;

        /**
         * Incoming transfers of the asset
         */
        in?: SolanaAPI.AssetTransferDetailsSchema | null;

        out?: SolanaAPI.AssetTransferDetailsSchema | null;
      }

      export interface NativeSolOwnershipDiffSchema {
        asset: SolanaAPI.NativeSolDetailsSchema;

        /**
         * The owner post the transaction
         */
        post_owner: string;

        /**
         * Incoming transfers of the asset
         */
        in_?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * Details of the moved value
         */
        out?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner?: string | null;
      }

      export interface SplTokenOwnershipDiffSchema {
        asset: SolanaAPI.SplFungibleTokenDetailsSchema | SolanaAPI.SplNonFungibleTokenDetailsSchema;

        /**
         * The owner post the transaction
         */
        post_owner: string;

        /**
         * Incoming transfers of the asset
         */
        in_?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * Details of the moved value
         */
        out?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner?: string | null;
      }

      export interface StakedSolWithdrawAuthorityDiffSchema {
        /**
         * The owner post the transaction
         */
        post_owner: string;

        asset?: StakedSolWithdrawAuthorityDiffSchema.Asset;

        /**
         * Incoming transfers of the asset
         */
        in_?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * Details of the moved value
         */
        out?: SolanaAPI.AssetTransferDetailsSchema | null;

        /**
         * The owner prior to the transaction
         */
        pre_owner?: string | null;
      }

      export namespace StakedSolWithdrawAuthorityDiffSchema {
        export interface Asset {
          decimals?: number;

          /**
           * Type of the asset (`"STAKED_SOL"`)
           */
          type?: string;
        }
      }

      export interface Delegation {
        asset:
          | SolanaAPI.SplFungibleTokenDetailsSchema
          | SolanaAPI.SplNonFungibleTokenDetailsSchema
          | SolanaAPI.CnftDetailsSchema;

        /**
         * The delegate's address
         */
        delegate: string;

        /**
         * Details of the delegation
         */
        delegation: SolanaAPI.AssetTransferDetailsSchema;
      }
    }
  }
}

export interface MessageScanParams {
  /**
   * Encoded public key of the account to simulate the transaction on
   */
  account_address: string;

  metadata: MessageScanParams.Metadata;

  /**
   * Transactions to scan
   */
  transactions: Array<string>;

  /**
   * Chain to scan the transaction on
   */
  chain?: string;

  /**
   * Encoding of the transaction and public keys
   */
  encoding?: string;

  /**
   * The RPC method used by dApp to propose the transaction
   */
  method?: string;
}

export namespace MessageScanParams {
  export interface Metadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url?: string | null;
  }
}

export namespace Message {
  export import MessageScanResponse = MessageAPI.MessageScanResponse;
  export import MessageScanParams = MessageAPI.MessageScanParams;
}
