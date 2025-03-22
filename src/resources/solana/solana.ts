// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SolanaAPI from './solana';
import * as AddressAPI from './address';
import { Address, AddressScanParams } from './address';
import * as MessageAPI from './message';
import { Message, MessageScanParams } from './message';

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
    NativeDiffSchema | SplFungibleTokenDiffSchema | SplNonFungibleTokenDiffSchema | CnftDiffSchema
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
   * Verdict of Result
   */
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';
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

export interface APIErrorDetails {
  /**
   * Advanced message of the error
   */
  message: string;

  type?: string;
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
   * Type of the asset involved in the transfer
   */
  asset_type: string;

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
   * Transaction simulation result
   */
  simulation?: SuccessfulSimulationResultSchema | null;

  /**
   * Transaction validation result
   */
  validation?: CombinedValidationResult.Validation | null;
}

export namespace CombinedValidationResult {
  /**
   * Transaction validation result
   */
  export interface Validation {
    /**
     * A list of features explaining what is happening in the transaction in different
     * levels of severity
     */
    extended_features: Array<SolanaAPI.ValidationFeature>;

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
    result_type: 'Benign' | 'Warning' | 'Malicious';
  }
}

export interface DelegatedAssetDetailsSchema {
  asset: SplFungibleTokenDetailsSchema | SplNonFungibleTokenDetailsSchema | CnftDetailsSchema;

  /**
   * Type of the asset involved in the delegation
   */
  asset_type: string;

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

export interface InstructionErrorDetails {
  /**
   * Index of the instruction in the transaction
   */
  instruction_index: number;

  /**
   * Advanced message of the error
   */
  message: string;

  /**
   * Index of the transaction in the bulk
   */
  transaction_index: number;

  /**
   * Machine readable error code returned by the program
   */
  code?: string | null;

  /**
   * Error number returned by the program
   */
  number?: number | null;

  /**
   * The program account that caused the error
   */
  program_account?: string | null;

  type?: string;
}

export interface NativeDetailsSchema {
  decimals?: number;

  /**
   * Logo of the native currency
   */
  logo?: string | null;

  /**
   * Type of the asset (`"NativeToken"`)
   */
  type?: string;
}

export interface NativeDiffSchema {
  asset: NativeDetailsSchema;

  /**
   * Type of the asset involved in the transfer
   */
  asset_type: string;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
}

export interface NativeSolOwnershipDiffSchema {
  asset: NativeDetailsSchema;

  /**
   * Type of the asset involved in the transfer
   */
  asset_type: string;

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
   * Unique identifier of the request
   */
  request_id: string;

  /**
   * An enumeration.
   */
  status: 'SUCCESS' | 'ERROR';

  /**
   * Encoding of the public keys
   */
  encoding?: string;

  /**
   * Error message if the simulation failed
   */
  error?: string | null;

  /**
   * Advanced error details
   */
  error_details?: APIErrorDetails | TransactionErrorDetails | InstructionErrorDetails | null;

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
   * Type of the asset involved in the transfer
   */
  asset_type: string;

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
   * Type of the asset involved in the transfer
   */
  asset_type: string;

  /**
   * Incoming transfers of the asset
   */
  in?: AssetTransferDetailsSchema | null;

  out?: AssetTransferDetailsSchema | null;
}

export interface SplTokenOwnershipDiffSchema {
  asset: SplFungibleTokenDetailsSchema | SplNonFungibleTokenDetailsSchema;

  /**
   * Type of the asset involved in the transfer
   */
  asset_type: string;

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

export interface StakedAssetDetailsSchema {
  decimals?: number;

  /**
   * Logo of the native currency
   */
  logo?: string | null;

  /**
   * Type of the asset (`"STAKED_NATIVE"`)
   */
  type?: string;
}

export interface StakedSolWithdrawAuthorityDiffSchema {
  /**
   * Type of the asset involved in the transfer
   */
  asset_type: string;

  /**
   * The owner post the transaction
   */
  post_owner: string;

  asset?: StakedAssetDetailsSchema;

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
    Array<NativeDiffSchema | SplFungibleTokenDiffSchema | SplNonFungibleTokenDiffSchema | CnftDiffSchema>
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

export interface TransactionErrorDetails {
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

  type?: string;
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

  options?: Array<string>;
}

export namespace TxScanRequestSchema {
  export interface Metadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url?: string | null;
  }
}

export interface ValidationFeature {
  /**
   * Textual description
   */
  description: string;

  /**
   * Feature name
   */
  feature_id: string;

  /**
   * An enumeration.
   */
  type: 'Info' | 'Benign' | 'Warning' | 'Malicious';

  /**
   * Address the feature refers to
   */
  address?: string | null;
}

Solana.Message = Message;
Solana.Address = Address;

export declare namespace Solana {
  export {
    type AccountSummarySchema as AccountSummarySchema,
    type AddressScanRequestSchema as AddressScanRequestSchema,
    type AddressScanResponseSchema as AddressScanResponseSchema,
    type APIErrorDetails as APIErrorDetails,
    type AssetTransferDetailsSchema as AssetTransferDetailsSchema,
    type CnftDetailsSchema as CnftDetailsSchema,
    type CnftDiffSchema as CnftDiffSchema,
    type CnftMintAccountDetailsSchema as CnftMintAccountDetailsSchema,
    type CombinedValidationResult as CombinedValidationResult,
    type DelegatedAssetDetailsSchema as DelegatedAssetDetailsSchema,
    type FungibleMintAccountDetailsSchema as FungibleMintAccountDetailsSchema,
    type InstructionErrorDetails as InstructionErrorDetails,
    type NativeDetailsSchema as NativeDetailsSchema,
    type NativeDiffSchema as NativeDiffSchema,
    type NativeSolOwnershipDiffSchema as NativeSolOwnershipDiffSchema,
    type NonFungibleMintAccountDetailsSchema as NonFungibleMintAccountDetailsSchema,
    type PdaAccountSchema as PdaAccountSchema,
    type ProgramAccountDetailsSchema as ProgramAccountDetailsSchema,
    type ResponseSchema as ResponseSchema,
    type SplFungibleTokenDetailsSchema as SplFungibleTokenDetailsSchema,
    type SplFungibleTokenDiffSchema as SplFungibleTokenDiffSchema,
    type SplNonFungibleTokenDetailsSchema as SplNonFungibleTokenDetailsSchema,
    type SplNonFungibleTokenDiffSchema as SplNonFungibleTokenDiffSchema,
    type SplTokenOwnershipDiffSchema as SplTokenOwnershipDiffSchema,
    type StakedAssetDetailsSchema as StakedAssetDetailsSchema,
    type StakedSolWithdrawAuthorityDiffSchema as StakedSolWithdrawAuthorityDiffSchema,
    type SuccessfulSimulationResultSchema as SuccessfulSimulationResultSchema,
    type SystemAccountDetailsSchema as SystemAccountDetailsSchema,
    type TokenAccountDetailsSchema as TokenAccountDetailsSchema,
    type TotalUsdDiffSchema as TotalUsdDiffSchema,
    type TransactionErrorDetails as TransactionErrorDetails,
    type TxScanRequestSchema as TxScanRequestSchema,
    type ValidationFeature as ValidationFeature,
  };

  export { Message as Message, type MessageScanParams as MessageScanParams };

  export { Address as Address, type AddressScanParams as AddressScanParams };
}
