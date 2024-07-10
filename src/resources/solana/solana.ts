// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as SolanaAPI from '@blockaid/client/resources/solana/solana';
import * as AddressAPI from '@blockaid/client/resources/solana/address';
import * as MessageAPI from '@blockaid/client/resources/solana/message';

export class Solana extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

export interface AccountSummarySchema {
  /**
   * Total USD diff for the requested account address
   */
  total_usd_diff: TotalUsdDiffSchema;

  /**
   * Assets diff of the requested account address
   */
  account_assets_diff?: Array<
    NativeSolDiffSchema | SplFungibleTokenDiffSchema | SplNonFungibleTokenDiffSchema | CnftDiffSchema
  >;

  /**
   * Delegated assets of the requested account address
   */
  account_delegations?: Array<DelegatedAssetDetailsSchema>;

  /**
   * Account ownerships diff of the requested account address
   */
  account_ownerships_diff?: Array<
    NativeSolOwnershipDiffSchema | SplTokenOwnershipDiffSchema | StakedSolWithdrawAuthorityDiffSchema
  >;
}

export interface AddressScanRequestSchema {
  /**
   * Encoded public key
   */
  address: string;

  metadata: AddressScanRequestSchema.Metadata;

  /**
   * Chain to scan the transaction on
   */
  chain?: string;
}

export namespace AddressScanRequestSchema {
  export interface Metadata {
    /**
     * URL of the dApp related to the address
     */
    url: string;
  }
}

export interface AddressScanResponseSchema {
  /**
   * Features about the result
   */
  features: Array<AddressScanResponseSchema.Feature>;

  /**
   * An enumeration.
   */
  result_type: 'Malicious' | 'Warning' | 'Benign';
}

export namespace AddressScanResponseSchema {
  export interface Feature {
    /**
     * Description of the feature
     */
    description: string;

    /**
     * ID of the feature
     */
    feature_id: string;

    /**
     * An enumeration.
     */
    type: 'Malicious' | 'Warning' | 'Benign' | 'Info';
  }
}

export interface AssetTransferDetailsSchema {
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

export interface CnftDetailsSchema {
  address: string;

  decimals: number;

  name: string;

  symbol: string;

  logo?: string;

  /**
   * Type of the asset (`"CNFT"`)
   */
  type?: string;
}

export interface CnftDiffSchema {
  asset: CnftDetailsSchema;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
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

export interface CombinedValidationResult {
  /**
   * Transaction validation result
   */
  validation: CombinedValidationResult.Validation;

  /**
   * Transaction simulation result
   */
  simulation?: SuccessfulSimulationResultSchema | null;
}

export namespace CombinedValidationResult {
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
}

export interface DelegatedAssetDetailsSchema {
  asset: SplFungibleTokenDetailsSchema | SplNonFungibleTokenDetailsSchema | CnftDetailsSchema;

  /**
   * The delegate's address
   */
  delegate: string;

  /**
   * Details of the delegation
   */
  delegation: AssetTransferDetailsSchema;
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

export interface NativeSolDetailsSchema {
  decimals?: number;

  /**
   * Type of the asset (`"SOL"`)
   */
  type?: string;
}

export interface NativeSolDiffSchema {
  asset: NativeSolDetailsSchema;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
}

export interface NativeSolOwnershipDiffSchema {
  asset: NativeSolDetailsSchema;

  /**
   * The owner post the transaction
   */
  post_owner: string;

  /**
   * Incoming transfers of the asset
   */
  in_?: AssetTransferDetailsSchema | null;

  /**
   * Details of the moved value
   */
  out?: AssetTransferDetailsSchema | null;

  /**
   * The owner prior to the transaction
   */
  pre_owner?: string | null;
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

export interface ResponseSchema {
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
  result?: CombinedValidationResult | null;
}

export interface SplFungibleTokenDetailsSchema {
  address: string;

  decimals: number;

  name: string;

  symbol: string;

  logo?: string;

  /**
   * Type of the asset (`"TOKEN"`)
   */
  type?: string;
}

export interface SplFungibleTokenDiffSchema {
  asset: SplFungibleTokenDetailsSchema;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
}

export interface SplNonFungibleTokenDetailsSchema {
  address: string;

  name: string;

  symbol: string;

  decimals?: number;

  logo?: string;

  /**
   * Type of the asset (`"NFT"`)
   */
  type?: string;
}

export interface SplNonFungibleTokenDiffSchema {
  asset: SplNonFungibleTokenDetailsSchema;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
}

export interface SplTokenOwnershipDiffSchema {
  asset: SplFungibleTokenDetailsSchema | SplNonFungibleTokenDetailsSchema;

  /**
   * The owner post the transaction
   */
  post_owner: string;

  /**
   * Incoming transfers of the asset
   */
  in_?: AssetTransferDetailsSchema | null;

  /**
   * Details of the moved value
   */
  out?: AssetTransferDetailsSchema | null;

  /**
   * The owner prior to the transaction
   */
  pre_owner?: string | null;
}

export interface StakedSolAssetDetailsSchema {
  decimals?: number;

  /**
   * Type of the asset (`"STAKED_SOL"`)
   */
  type?: string;
}

export interface StakedSolWithdrawAuthorityDiffSchema {
  /**
   * The owner post the transaction
   */
  post_owner: string;

  asset?: StakedSolAssetDetailsSchema;

  /**
   * Incoming transfers of the asset
   */
  in_?: AssetTransferDetailsSchema | null;

  /**
   * Details of the moved value
   */
  out?: AssetTransferDetailsSchema | null;

  /**
   * The owner prior to the transaction
   */
  pre_owner?: string | null;
}

export interface SuccessfulSimulationResultSchema {
  /**
   * Summary of the requested account address
   */
  account_summary: AccountSummarySchema;

  /**
   * Summary of the accounts involved in the transaction simulation
   */
  accounts_details: Array<
    | SystemAccountDetailsSchema
    | TokenAccountDetailsSchema
    | FungibleMintAccountDetailsSchema
    | NonFungibleMintAccountDetailsSchema
    | ProgramAccountDetailsSchema
    | PdaAccountSchema
    | CnftMintAccountDetailsSchema
  >;

  /**
   * Summary of the assets involved in the transaction simulation
   */
  assets_diff: Record<
    string,
    Array<NativeSolDiffSchema | SplFungibleTokenDiffSchema | SplNonFungibleTokenDiffSchema | CnftDiffSchema>
  >;

  /**
   * Summary of ownership changes, By account address
   */
  assets_ownership_diff: Record<
    string,
    Array<NativeSolOwnershipDiffSchema | SplTokenOwnershipDiffSchema | StakedSolWithdrawAuthorityDiffSchema>
  >;

  /**
   * Summary of the delegations, by account address
   */
  delegations: Record<string, Array<DelegatedAssetDetailsSchema>>;
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

export interface TotalUsdDiffSchema {
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

export interface TxScanRequestSchema {
  /**
   * Encoded public key of the account to simulate the transaction on
   */
  account_address: string;

  metadata: TxScanRequestSchema.Metadata;

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

export namespace TxScanRequestSchema {
  export interface Metadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url?: string | null;
  }
}

export namespace Solana {
  export import AccountSummarySchema = SolanaAPI.AccountSummarySchema;
  export import AddressScanRequestSchema = SolanaAPI.AddressScanRequestSchema;
  export import AddressScanResponseSchema = SolanaAPI.AddressScanResponseSchema;
  export import AssetTransferDetailsSchema = SolanaAPI.AssetTransferDetailsSchema;
  export import CnftDetailsSchema = SolanaAPI.CnftDetailsSchema;
  export import CnftDiffSchema = SolanaAPI.CnftDiffSchema;
  export import CnftMintAccountDetailsSchema = SolanaAPI.CnftMintAccountDetailsSchema;
  export import CombinedValidationResult = SolanaAPI.CombinedValidationResult;
  export import DelegatedAssetDetailsSchema = SolanaAPI.DelegatedAssetDetailsSchema;
  export import FungibleMintAccountDetailsSchema = SolanaAPI.FungibleMintAccountDetailsSchema;
  export import NativeSolDetailsSchema = SolanaAPI.NativeSolDetailsSchema;
  export import NativeSolDiffSchema = SolanaAPI.NativeSolDiffSchema;
  export import NativeSolOwnershipDiffSchema = SolanaAPI.NativeSolOwnershipDiffSchema;
  export import NonFungibleMintAccountDetailsSchema = SolanaAPI.NonFungibleMintAccountDetailsSchema;
  export import PdaAccountSchema = SolanaAPI.PdaAccountSchema;
  export import ProgramAccountDetailsSchema = SolanaAPI.ProgramAccountDetailsSchema;
  export import ResponseSchema = SolanaAPI.ResponseSchema;
  export import SplFungibleTokenDetailsSchema = SolanaAPI.SplFungibleTokenDetailsSchema;
  export import SplFungibleTokenDiffSchema = SolanaAPI.SplFungibleTokenDiffSchema;
  export import SplNonFungibleTokenDetailsSchema = SolanaAPI.SplNonFungibleTokenDetailsSchema;
  export import SplNonFungibleTokenDiffSchema = SolanaAPI.SplNonFungibleTokenDiffSchema;
  export import SplTokenOwnershipDiffSchema = SolanaAPI.SplTokenOwnershipDiffSchema;
  export import StakedSolAssetDetailsSchema = SolanaAPI.StakedSolAssetDetailsSchema;
  export import StakedSolWithdrawAuthorityDiffSchema = SolanaAPI.StakedSolWithdrawAuthorityDiffSchema;
  export import SuccessfulSimulationResultSchema = SolanaAPI.SuccessfulSimulationResultSchema;
  export import SystemAccountDetailsSchema = SolanaAPI.SystemAccountDetailsSchema;
  export import TokenAccountDetailsSchema = SolanaAPI.TokenAccountDetailsSchema;
  export import TotalUsdDiffSchema = SolanaAPI.TotalUsdDiffSchema;
  export import TxScanRequestSchema = SolanaAPI.TxScanRequestSchema;
  export import Message = MessageAPI.Message;
  export import MessageScanParams = MessageAPI.MessageScanParams;
  export import Address = AddressAPI.Address;
  export import AddressScanParams = AddressAPI.AddressScanParams;
}
