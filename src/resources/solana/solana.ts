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
  total_usd_diff: AccountSummarySchema.TotalUsdDiff;

  /**
   * Assets diff of the requested account address
   */
  account_assets_diff?: Array<
    | AccountSummarySchema.NativeSolDiffSchema
    | AccountSummarySchema.SplFungibleTokenDiffSchema
    | AccountSummarySchema.SplNonFungibleTokenDiffSchema
    | AccountSummarySchema.CnftDiffSchema
  >;

  /**
   * Delegated assets of the requested account address
   */
  account_delegations?: Array<DelegatedAssetDetailsSchema>;

  /**
   * Account ownerships diff of the requested account address
   */
  account_ownerships_diff?: Array<
    | AccountSummarySchema.NativeSolOwnershipDiffSchema
    | AccountSummarySchema.SplTokenOwnershipDiffSchema
    | AccountSummarySchema.StakedSolWithdrawAuthorityDiffSchema
  >;
}

export namespace AccountSummarySchema {
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
    asset: NativeSolDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: NativeSolDiffSchema.In | null;

    out?: NativeSolDiffSchema.Out | null;
  }

  export namespace NativeSolDiffSchema {
    export interface Asset {
      decimals?: number;

      /**
       * Type of the asset (`"SOL"`)
       */
      type?: string;
    }

    /**
     * Incoming transfers of the asset
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

  export interface SplFungibleTokenDiffSchema {
    asset: SplFungibleTokenDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: SplFungibleTokenDiffSchema.In | null;

    out?: SplFungibleTokenDiffSchema.Out | null;
  }

  export namespace SplFungibleTokenDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface SplNonFungibleTokenDiffSchema {
    asset: SplNonFungibleTokenDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: SplNonFungibleTokenDiffSchema.In | null;

    out?: SplNonFungibleTokenDiffSchema.Out | null;
  }

  export namespace SplNonFungibleTokenDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface CnftDiffSchema {
    asset: CnftDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: CnftDiffSchema.In | null;

    out?: CnftDiffSchema.Out | null;
  }

  export namespace CnftDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface NativeSolOwnershipDiffSchema {
    asset: NativeSolOwnershipDiffSchema.Asset;

    /**
     * The owner post the transaction
     */
    post_owner: string;

    /**
     * Incoming transfers of the asset
     */
    in_?: NativeSolOwnershipDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: NativeSolOwnershipDiffSchema.Out | null;

    /**
     * The owner prior to the transaction
     */
    pre_owner?: string | null;
  }

  export namespace NativeSolOwnershipDiffSchema {
    export interface Asset {
      decimals?: number;

      /**
       * Type of the asset (`"SOL"`)
       */
      type?: string;
    }

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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

  export interface SplTokenOwnershipDiffSchema {
    asset:
      | SplTokenOwnershipDiffSchema.SplFungibleTokenDetailsSchema
      | SplTokenOwnershipDiffSchema.SplNonFungibleTokenDetailsSchema;

    /**
     * The owner post the transaction
     */
    post_owner: string;

    /**
     * Incoming transfers of the asset
     */
    in_?: SplTokenOwnershipDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: SplTokenOwnershipDiffSchema.Out | null;

    /**
     * The owner prior to the transaction
     */
    pre_owner?: string | null;
  }

  export namespace SplTokenOwnershipDiffSchema {
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

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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

  export interface StakedSolWithdrawAuthorityDiffSchema {
    /**
     * The owner post the transaction
     */
    post_owner: string;

    asset?: StakedSolWithdrawAuthorityDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in_?: StakedSolWithdrawAuthorityDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: StakedSolWithdrawAuthorityDiffSchema.Out | null;

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

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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
  asset:
    | DelegatedAssetDetailsSchema.SplFungibleTokenDetailsSchema
    | DelegatedAssetDetailsSchema.SplNonFungibleTokenDetailsSchema
    | DelegatedAssetDetailsSchema.CnftDetailsSchema;

  /**
   * The delegate's address
   */
  delegate: string;

  /**
   * Details of the delegation
   */
  delegation: DelegatedAssetDetailsSchema.Delegation;
}

export namespace DelegatedAssetDetailsSchema {
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

  /**
   * Details of the delegation
   */
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

export interface SuccessfulSimulationResultSchema {
  /**
   * Summary of the requested account address
   */
  account_summary: AccountSummarySchema;

  /**
   * Summary of the accounts involved in the transaction simulation
   */
  accounts_details: Array<
    | SuccessfulSimulationResultSchema.SystemAccountDetailsSchema
    | SuccessfulSimulationResultSchema.TokenAccountDetailsSchema
    | SuccessfulSimulationResultSchema.FungibleMintAccountDetailsSchema
    | SuccessfulSimulationResultSchema.NonFungibleMintAccountDetailsSchema
    | SuccessfulSimulationResultSchema.ProgramAccountDetailsSchema
    | SuccessfulSimulationResultSchema.PdaAccountSchema
    | SuccessfulSimulationResultSchema.CnftMintAccountDetailsSchema
  >;

  /**
   * Summary of the assets involved in the transaction simulation
   */
  assets_diff: Record<
    string,
    Array<
      | SuccessfulSimulationResultSchema.NativeSolDiffSchema
      | SuccessfulSimulationResultSchema.SplFungibleTokenDiffSchema
      | SuccessfulSimulationResultSchema.SplNonFungibleTokenDiffSchema
      | SuccessfulSimulationResultSchema.CnftDiffSchema
    >
  >;

  /**
   * Summary of ownership changes; By account address
   */
  assets_ownership_diff: Record<
    string,
    Array<
      | SuccessfulSimulationResultSchema.NativeSolOwnershipDiffSchema
      | SuccessfulSimulationResultSchema.SplTokenOwnershipDiffSchema
      | SuccessfulSimulationResultSchema.StakedSolWithdrawAuthorityDiffSchema
    >
  >;

  /**
   * Summary of the delegations, by account address
   */
  delegations: Record<string, Array<DelegatedAssetDetailsSchema>>;
}

export namespace SuccessfulSimulationResultSchema {
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
    asset: NativeSolDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: NativeSolDiffSchema.In | null;

    out?: NativeSolDiffSchema.Out | null;
  }

  export namespace NativeSolDiffSchema {
    export interface Asset {
      decimals?: number;

      /**
       * Type of the asset (`"SOL"`)
       */
      type?: string;
    }

    /**
     * Incoming transfers of the asset
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

  export interface SplFungibleTokenDiffSchema {
    asset: SplFungibleTokenDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: SplFungibleTokenDiffSchema.In | null;

    out?: SplFungibleTokenDiffSchema.Out | null;
  }

  export namespace SplFungibleTokenDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface SplNonFungibleTokenDiffSchema {
    asset: SplNonFungibleTokenDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: SplNonFungibleTokenDiffSchema.In | null;

    out?: SplNonFungibleTokenDiffSchema.Out | null;
  }

  export namespace SplNonFungibleTokenDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface CnftDiffSchema {
    asset: CnftDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in?: CnftDiffSchema.In | null;

    out?: CnftDiffSchema.Out | null;
  }

  export namespace CnftDiffSchema {
    export interface Asset {
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

    /**
     * Incoming transfers of the asset
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

  export interface NativeSolOwnershipDiffSchema {
    asset: NativeSolOwnershipDiffSchema.Asset;

    /**
     * The owner post the transaction
     */
    post_owner: string;

    /**
     * Incoming transfers of the asset
     */
    in_?: NativeSolOwnershipDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: NativeSolOwnershipDiffSchema.Out | null;

    /**
     * The owner prior to the transaction
     */
    pre_owner?: string | null;
  }

  export namespace NativeSolOwnershipDiffSchema {
    export interface Asset {
      decimals?: number;

      /**
       * Type of the asset (`"SOL"`)
       */
      type?: string;
    }

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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

  export interface SplTokenOwnershipDiffSchema {
    asset:
      | SplTokenOwnershipDiffSchema.SplFungibleTokenDetailsSchema
      | SplTokenOwnershipDiffSchema.SplNonFungibleTokenDetailsSchema;

    /**
     * The owner post the transaction
     */
    post_owner: string;

    /**
     * Incoming transfers of the asset
     */
    in_?: SplTokenOwnershipDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: SplTokenOwnershipDiffSchema.Out | null;

    /**
     * The owner prior to the transaction
     */
    pre_owner?: string | null;
  }

  export namespace SplTokenOwnershipDiffSchema {
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

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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

  export interface StakedSolWithdrawAuthorityDiffSchema {
    /**
     * The owner post the transaction
     */
    post_owner: string;

    asset?: StakedSolWithdrawAuthorityDiffSchema.Asset;

    /**
     * Incoming transfers of the asset
     */
    in_?: StakedSolWithdrawAuthorityDiffSchema.In | null;

    /**
     * Details of the moved value
     */
    out?: StakedSolWithdrawAuthorityDiffSchema.Out | null;

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

    /**
     * Incoming transfers of the asset
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
     * Details of the moved value
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
  export import CombinedValidationResult = SolanaAPI.CombinedValidationResult;
  export import DelegatedAssetDetailsSchema = SolanaAPI.DelegatedAssetDetailsSchema;
  export import ResponseSchema = SolanaAPI.ResponseSchema;
  export import SuccessfulSimulationResultSchema = SolanaAPI.SuccessfulSimulationResultSchema;
  export import TxScanRequestSchema = SolanaAPI.TxScanRequestSchema;
  export import Message = MessageAPI.Message;
  export import MessageScanParams = MessageAPI.MessageScanParams;
  export import Address = AddressAPI.Address;
  export import AddressScanParams = AddressAPI.AddressScanParams;
}
