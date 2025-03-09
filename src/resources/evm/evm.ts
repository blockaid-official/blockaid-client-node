// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EvmAPI from './evm';
import * as JsonRpcAPI from './json-rpc';
import { JsonRpc, JsonRpcScanParams } from './json-rpc';
import * as PostTransactionAPI from './post-transaction';
import {
  PostTransaction,
  PostTransactionReportParams,
  PostTransactionReportResponse,
  PostTransactionScanParams,
} from './post-transaction';
import * as PostTransactionBulkAPI from './post-transaction-bulk';
import {
  PostTransactionBulk,
  PostTransactionBulkScanParams,
  PostTransactionBulkScanResponse,
} from './post-transaction-bulk';
import * as TransactionAPI from './transaction';
import {
  Transaction,
  TransactionReportParams,
  TransactionReportResponse,
  TransactionScanParams,
} from './transaction';
import * as TransactionBulkAPI from './transaction-bulk';
import { TransactionBulk, TransactionBulkScanParams, TransactionBulkScanResponse } from './transaction-bulk';
import * as TransactionRawAPI from './transaction-raw';
import { TransactionRaw, TransactionRawScanParams } from './transaction-raw';
import * as UserOperationAPI from './user-operation';
import { UserOperation, UserOperationScanParams } from './user-operation';

export class Evm extends APIResource {
  jsonRpc: JsonRpcAPI.JsonRpc = new JsonRpcAPI.JsonRpc(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  transactionBulk: TransactionBulkAPI.TransactionBulk = new TransactionBulkAPI.TransactionBulk(this._client);
  transactionRaw: TransactionRawAPI.TransactionRaw = new TransactionRawAPI.TransactionRaw(this._client);
  userOperation: UserOperationAPI.UserOperation = new UserOperationAPI.UserOperation(this._client);
  postTransaction: PostTransactionAPI.PostTransaction = new PostTransactionAPI.PostTransaction(this._client);
  postTransactionBulk: PostTransactionBulkAPI.PostTransactionBulk =
    new PostTransactionBulkAPI.PostTransactionBulk(this._client);
}

export interface AccountSummary {
  /**
   * All assets diffs related to the account address
   */
  assets_diffs: Array<
    | AccountSummary.Erc20AddressAssetBalanceChangeDiff
    | AccountSummary.Erc721AddressAssetBalanceChangeDiff
    | AccountSummary.Erc1155AddressAssetBalanceChangeDiff
    | NativeAddressAssetBalanceChangeDiff
  >;

  /**
   * All assets exposures related to the account address
   */
  exposures: Array<
    | AccountSummary.Erc20AddressExposure
    | AccountSummary.Erc721AddressExposure
    | AccountSummary.Erc1155AddressExposure
  >;

  /**
   * Total usd diff related to the account address
   */
  total_usd_diff: UsdDiff;

  /**
   * Total usd exposure related to the account address
   */
  total_usd_exposure: Record<string, string>;

  /**
   * All assets traces related to the account address
   */
  traces: Array<
    | AccountSummary.Erc20AssetTrace
    | AccountSummary.Erc721AssetTrace
    | AccountSummary.Erc1155AssetTrace
    | NativeAssetTrace
    | AccountSummary.Erc20ExposureTrace
    | AccountSummary.Erc721ExposureTrace
    | AccountSummary.Erc1155ExposureTrace
  >;
}

export namespace AccountSummary {
  export interface Erc20AddressAssetBalanceChangeDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC20';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc20Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc20Diff>;

    /**
     * shows the balance before making the transaction and after
     */
    balance_changes?: Erc20AddressAssetBalanceChangeDiff.BalanceChanges;
  }

  export namespace Erc20AddressAssetBalanceChangeDiff {
    /**
     * shows the balance before making the transaction and after
     */
    export interface BalanceChanges {
      /**
       * balance of the account after making the transaction
       */
      after: EvmAPI.Erc20Diff;

      /**
       * balance of the account before making the transaction
       */
      before: EvmAPI.Erc20Diff;
    }
  }

  export interface Erc721AddressAssetBalanceChangeDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC721';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc721Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc721Diff>;

    /**
     * shows the balance before making the transaction and after
     */
    balance_changes?: Erc721AddressAssetBalanceChangeDiff.BalanceChanges;
  }

  export namespace Erc721AddressAssetBalanceChangeDiff {
    /**
     * shows the balance before making the transaction and after
     */
    export interface BalanceChanges {
      /**
       * balance of the account after making the transaction
       */
      after: EvmAPI.Erc721Diff;

      /**
       * balance of the account before making the transaction
       */
      before: EvmAPI.Erc721Diff;
    }
  }

  export interface Erc1155AddressAssetBalanceChangeDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC1155';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc1155Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc1155Diff>;

    /**
     * shows the balance before making the transaction and after
     */
    balance_changes?: Erc1155AddressAssetBalanceChangeDiff.BalanceChanges;
  }

  export namespace Erc1155AddressAssetBalanceChangeDiff {
    /**
     * shows the balance before making the transaction and after
     */
    export interface BalanceChanges {
      /**
       * balance of the account after making the transaction
       */
      after: EvmAPI.Erc1155Diff;

      /**
       * balance of the account before making the transaction
       */
      before: EvmAPI.Erc1155Diff;
    }
  }

  export interface Erc20AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC20';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc20Exposure>;
  }

  export interface Erc721AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC721';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc721Exposure>;
  }

  export interface Erc1155AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC1155';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc1155Exposure>;
  }

  export interface Erc20AssetTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * The difference in value for the asset in the trace
     */
    diff: EvmAPI.Erc20Diff;

    /**
     * The address where the assets are moved from
     */
    from_address: string;

    /**
     * The address where the assets are moved to
     */
    to_address: string;

    /**
     * type of the trace
     */
    trace_type: 'AssetTrace';

    /**
     * The type of the model
     */
    type: 'ERC20AssetTrace';

    /**
     * List of labels that describe the trace
     */
    labels?: Array<'GAS_FEE' | (string & {})>;
  }

  export interface Erc721AssetTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * The difference in value for the asset in the trace
     */
    diff: EvmAPI.Erc721Diff;

    /**
     * The address where the assets are moved from
     */
    from_address: string;

    /**
     * The address where the assets are moved to
     */
    to_address: string;

    /**
     * type of the trace
     */
    trace_type: 'AssetTrace';

    /**
     * The type of the model
     */
    type: 'ERC721AssetTrace';

    /**
     * List of labels that describe the trace
     */
    labels?: Array<'GAS_FEE' | (string & {})>;
  }

  export interface Erc1155AssetTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * The difference in value for the asset in the trace
     */
    diff: EvmAPI.Erc1155Diff;

    /**
     * The address where the assets are moved from
     */
    from_address: string;

    /**
     * The address where the assets are moved to
     */
    to_address: string;

    /**
     * type of the trace
     */
    trace_type: 'AssetTrace';

    /**
     * The type of the model
     */
    type: 'ERC1155AssetTrace';

    /**
     * List of labels that describe the trace
     */
    labels?: Array<'GAS_FEE' | (string & {})>;
  }

  export interface Erc20ExposureTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    exposed: Erc20ExposureTrace.Exposed;

    /**
     * The owner of the assets
     */
    owner: string;

    /**
     * The spender of the assets
     */
    spender: string;

    /**
     * type of the trace
     */
    trace_type: 'ExposureTrace';

    /**
     * The type of the model
     */
    type: 'ERC20ExposureTrace';
  }

  export namespace Erc20ExposureTrace {
    export interface Exposed {
      raw_value: string;

      usd_price?: number;

      value?: number;
    }
  }

  export interface Erc721ExposureTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    exposed: Erc721ExposureTrace.Exposed;

    /**
     * The owner of the assets
     */
    owner: string;

    /**
     * The spender of the assets
     */
    spender: string;

    /**
     * type of the trace
     */
    trace_type: 'ExposureTrace';

    /**
     * The type of the model
     */
    type: 'ERC721ExposureTrace';
  }

  export namespace Erc721ExposureTrace {
    export interface Exposed {
      amount: number;

      token_id: string;

      is_mint?: boolean;

      logo_url?: string;

      usd_price?: number;
    }
  }

  export interface Erc1155ExposureTrace {
    /**
     * Description of the asset in the trace
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * The owner of the assets
     */
    owner: string;

    /**
     * The spender of the assets
     */
    spender: string;

    /**
     * type of the trace
     */
    trace_type: 'ExposureTrace';

    /**
     * The type of the model
     */
    type: 'ERC1155ExposureTrace';
  }
}

export interface Erc1155Diff {
  /**
   * Indicates whether the token ID represents an arbitrary token from a collection,
   * unpredictable while running the simulation
   */
  arbitrary_collection_token: boolean;

  /**
   * id of the token
   */
  token_id: string;

  /**
   * value before divided by decimal, that was transferred from this address
   */
  value: string;

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: string;
}

export interface Erc1155Exposure {
  exposure: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;

  /**
   * boolean indicates whether an is_approved_for_all function was used (missing in
   * case of ERC20 / ERC1155)
   */
  is_approved_for_all: boolean;

  /**
   * user friendly description of the approval
   */
  summary?: string;
}

export interface Erc1155TokenDetails {
  /**
   * address of the token
   */
  address: string;

  /**
   * asset type.
   */
  type: 'ERC1155';

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * string represents the name of the asset
   */
  name?: string;

  /**
   * asset's symbol name
   */
  symbol?: string;
}

export interface Erc20Diff {
  /**
   * value before divided by decimal, that was transferred from this address
   */
  raw_value: string;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: string;

  /**
   * value after divided by decimals, that was transferred from this address
   */
  value?: string;
}

export interface Erc20Exposure {
  /**
   * the amount that was asked in the approval request for this spender from the
   * current address and asset
   */
  approval: string;

  exposure: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;

  /**
   * the usd price of the approval amount
   */
  approval_usd_price?: string;

  /**
   * the expiration time of the permit2 protocol
   */
  expiration?: string;

  /**
   * user friendly description of the approval
   */
  summary?: string;
}

export interface Erc20TokenDetails {
  /**
   * address of the token
   */
  address: string;

  /**
   * asset's decimals
   */
  decimals: number;

  /**
   * asset type.
   */
  type: 'ERC20';

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * string represents the name of the asset
   */
  name?: string;

  /**
   * asset's symbol name
   */
  symbol?: string;
}

export interface Erc721Diff {
  /**
   * Indicates whether the token ID represents an arbitrary token from a collection,
   * unpredictable while running the simulation
   */
  arbitrary_collection_token: boolean;

  /**
   * id of the token
   */
  token_id: string;

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: string;
}

export interface Erc721Exposure {
  exposure: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;

  /**
   * boolean indicates whether an is_approved_for_all function was used (missing in
   * case of ERC20 / ERC1155)
   */
  is_approved_for_all: boolean;

  /**
   * user friendly description of the approval
   */
  summary?: string;
}

export interface Erc721TokenDetails {
  /**
   * address of the token
   */
  address: string;

  /**
   * asset type.
   */
  type: 'ERC721';

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * string represents the name of the asset
   */
  name?: string;

  /**
   * asset's symbol name
   */
  symbol?: string;
}

export interface Metadata {
  /**
   * cross reference transaction against the domain.
   */
  domain: string;
}

export interface NativeAddressAssetBalanceChangeDiff {
  /**
   * description of the asset for the current diff
   */
  asset: NativeAssetDetails;

  /**
   * type of the asset for the current diff
   */
  asset_type: 'NATIVE';

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<NativeDiff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<NativeDiff>;

  /**
   * shows the balance before making the transaction and after
   */
  balance_changes?: NativeAddressAssetBalanceChangeDiff.BalanceChanges;
}

export namespace NativeAddressAssetBalanceChangeDiff {
  /**
   * shows the balance before making the transaction and after
   */
  export interface BalanceChanges {
    /**
     * balance of the account after making the transaction
     */
    after: EvmAPI.NativeDiff;

    /**
     * balance of the account before making the transaction
     */
    before: EvmAPI.NativeDiff;
  }
}

export interface NativeAssetDetails {
  chain_id: number;

  chain_name: string;

  decimals: number;

  logo_url: string;

  /**
   * asset type.
   */
  type: 'NATIVE';

  /**
   * string represents the name of the asset
   */
  name?: string;

  /**
   * asset's symbol name
   */
  symbol?: string;
}

export interface NativeAssetTrace {
  /**
   * Description of the asset in the trace
   */
  asset: NativeAssetDetails;

  /**
   * The difference in value for the asset in the trace
   */
  diff: NativeDiff;

  /**
   * The address where the assets are moved from
   */
  from_address: string;

  /**
   * The address where the assets are moved to
   */
  to_address: string;

  /**
   * type of the trace
   */
  trace_type: 'AssetTrace';

  /**
   * The type of the model
   */
  type: 'NativeAssetTrace';

  /**
   * List of labels that describe the trace
   */
  labels?: Array<'GAS_FEE' | (string & {})>;
}

export interface NativeDiff {
  /**
   * value before divided by decimal, that was transferred from this address
   */
  raw_value: string;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: string;

  /**
   * value after divided by decimals, that was transferred from this address
   */
  value?: string;
}

export interface NonercTokenDetails {
  /**
   * address of the token
   */
  address: string;

  /**
   * asset type.
   */
  type: 'NONERC';

  /**
   * url of the token logo
   */
  logo_url?: string;

  /**
   * string represents the name of the asset
   */
  name?: string;

  /**
   * asset's symbol name
   */
  symbol?: string;
}

/**
 * The chain name
 */
export type TokenScanSupportedChain =
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

export interface TransactionScanFeature {
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
  type: 'Malicious' | 'Warning' | 'Benign' | 'Info';

  /**
   * Address the feature refers to
   */
  address?: string;
}

export interface TransactionScanResponse {
  block: string;

  chain: string;

  account_address?: string;

  events?: Array<TransactionScanResponse.Event>;

  features?: unknown;

  gas_estimation?:
    | TransactionScanResponse.TransactionScanGasEstimation
    | TransactionScanResponse.TransactionScanGasEstimationError;

  simulation?: TransactionSimulation | TransactionSimulationError;

  validation?: TransactionValidation | TransactionValidationError;
}

export namespace TransactionScanResponse {
  export interface Event {
    data: string;

    emitter_address: string;

    topics: Array<string>;

    emitter_name?: string;

    name?: string;

    params?: Array<Event.Param>;
  }

  export namespace Event {
    export interface Param {
      type: string;

      value: string | unknown | Array<unknown>;

      internalType?: string;

      name?: string;
    }
  }

  export interface TransactionScanGasEstimation {
    estimate: string;

    status: 'Success';

    used: string;
  }

  export interface TransactionScanGasEstimationError {
    error: string;

    status: 'Error';
  }
}

/**
 * The chain name
 */
export type TransactionScanSupportedChain =
  | 'arbitrum'
  | 'avalanche'
  | 'base'
  | 'base-sepolia'
  | 'bsc'
  | 'ethereum'
  | 'optimism'
  | 'polygon'
  | 'zksync'
  | 'zksync-sepolia'
  | 'zora'
  | 'linea'
  | 'blast'
  | 'scroll'
  | 'ethereum-sepolia'
  | 'degen'
  | 'avalanche-fuji'
  | 'immutable-zkevm'
  | 'immutable-zkevm-testnet'
  | 'gnosis'
  | 'worldchain'
  | 'soneium-minato'
  | 'ronin'
  | 'apechain'
  | 'zero-network'
  | 'berachain'
  | 'berachain-bartio'
  | 'ink'
  | 'ink-sepolia'
  | 'abstract'
  | 'abstract-testnet'
  | 'soneium'
  | 'unichain';

export interface TransactionSimulation {
  /**
   * Account summary for the account address. account address is determined implicit
   * by the `from` field in the transaction request, or explicit by the
   * account_address field in the request.
   */
  account_summary: AccountSummary;

  /**
   * a dictionary including additional information about each relevant address in the
   * transaction.
   */
  address_details: Record<string, TransactionSimulation.AddressDetails>;

  /**
   * dictionary describes the assets differences as a result of this transaction for
   * every involved address
   */
  assets_diffs: Record<
    string,
    Array<
      | TransactionSimulation.Erc20AddressAssetDiff
      | TransactionSimulation.Erc721AddressAssetDiff
      | TransactionSimulation.Erc1155AddressAssetDiff
      | TransactionSimulation.NativeAddressAssetDiff
    >
  >;

  /**
   * dictionary describes the exposure differences as a result of this transaction
   * for every involved address (as a result of any approval / setApproval / permit
   * function)
   */
  exposures: Record<
    string,
    Array<
      | TransactionSimulation.Erc20AddressExposure
      | TransactionSimulation.Erc721AddressExposure
      | TransactionSimulation.Erc1155AddressExposure
    >
  >;

  /**
   * A string indicating if the simulation was successful or not.
   */
  status: 'Success';

  /**
   * dictionary represents the usd value each address gained / lost during this
   * transaction
   */
  total_usd_diff: Record<string, UsdDiff>;

  /**
   * a dictionary representing the usd value each address is exposed to, split by
   * spenders
   */
  total_usd_exposure: Record<string, Record<string, string>>;

  /**
   * Describes the state differences as a result of this transaction for every
   * involved address
   */
  contract_management?: Record<
    string,
    Array<
      | TransactionSimulation.ProxyUpgradeManagement
      | TransactionSimulation.OwnershipChangeManagement
      | TransactionSimulation.ModulesChangeManagement
    >
  >;

  /**
   * The parameters of the transaction that was simulated.
   */
  params?: TransactionSimulation.Params;
}

export namespace TransactionSimulation {
  export interface AddressDetails {
    /**
     * contains the contract's name if the address is a verified contract
     */
    contract_name?: string;

    /**
     * Whether the address is an eoa or a contract
     */
    is_eoa?: boolean;

    /**
     * known name tag for the address
     */
    name_tag?: string;
  }

  export interface Erc20AddressAssetDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC20';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc20Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc20Diff>;
  }

  export interface Erc721AddressAssetDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC721';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc721Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc721Diff>;
  }

  export interface Erc1155AddressAssetDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC1155';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.Erc1155Diff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.Erc1155Diff>;
  }

  export interface NativeAddressAssetDiff {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.NativeAssetDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'NATIVE';

    /**
     * amount of the asset that was transferred to the address in this transaction
     */
    in: Array<EvmAPI.NativeDiff>;

    /**
     * amount of the asset that was transferred from the address in this transaction
     */
    out: Array<EvmAPI.NativeDiff>;
  }

  export interface Erc20AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc20TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC20';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc20Exposure>;
  }

  export interface Erc721AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc721TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC721';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc721Exposure>;
  }

  export interface Erc1155AddressExposure {
    /**
     * description of the asset for the current diff
     */
    asset: EvmAPI.Erc1155TokenDetails | EvmAPI.NonercTokenDetails;

    /**
     * type of the asset for the current diff
     */
    asset_type: 'ERC1155';

    /**
     * dictionary of spender addresses where the exposure has changed during this
     * transaction for the current address and asset
     */
    spenders: Record<string, EvmAPI.Erc1155Exposure>;
  }

  export interface ProxyUpgradeManagement {
    /**
     * The state after the transaction
     */
    after: ProxyUpgradeManagement.After;

    /**
     * The state before the transaction
     */
    before: ProxyUpgradeManagement.Before;

    /**
     * The type of the state change
     */
    type: 'PROXY_UPGRADE';
  }

  export namespace ProxyUpgradeManagement {
    /**
     * The state after the transaction
     */
    export interface After {
      address: string;
    }

    /**
     * The state before the transaction
     */
    export interface Before {
      address: string;
    }
  }

  export interface OwnershipChangeManagement {
    /**
     * The state after the transaction
     */
    after: OwnershipChangeManagement.After;

    /**
     * The state before the transaction
     */
    before: OwnershipChangeManagement.Before;

    /**
     * The type of the state change
     */
    type: 'OWNERSHIP_CHANGE';
  }

  export namespace OwnershipChangeManagement {
    /**
     * The state after the transaction
     */
    export interface After {
      owners: Array<string>;
    }

    /**
     * The state before the transaction
     */
    export interface Before {
      owners: Array<string>;
    }
  }

  export interface ModulesChangeManagement {
    /**
     * The state after the transaction
     */
    after: ModulesChangeManagement.After;

    /**
     * The state before the transaction
     */
    before: ModulesChangeManagement.Before;

    /**
     * The type of the state change
     */
    type: 'MODULE_CHANGE';
  }

  export namespace ModulesChangeManagement {
    /**
     * The state after the transaction
     */
    export interface After {
      modules: Array<string>;
    }

    /**
     * The state before the transaction
     */
    export interface Before {
      modules: Array<string>;
    }
  }

  /**
   * The parameters of the transaction that was simulated.
   */
  export interface Params {
    /**
     * The block tag to be sent.
     */
    block_tag?: string;

    /**
     * The calldata to be sent.
     */
    calldata?: Params.Calldata;

    /**
     * The chain to be sent.
     */
    chain?: string;

    /**
     * The data to be sent.
     */
    data?: string;

    /**
     * The address the transaction is sent from.
     */
    from?: string;

    /**
     * The gas to be sent.
     */
    gas?: string;

    /**
     * The gas price to be sent.
     */
    gas_price?: string;

    /**
     * The address the transaction is directed to.
     */
    to?: string;

    /**
     * The user operation call data to be sent.
     */
    user_operation_calldata?: Params.UserOperationCalldata;

    /**
     * The value to be sent.
     */
    value?: string;
  }

  export namespace Params {
    /**
     * The calldata to be sent.
     */
    export interface Calldata {
      /**
       * The function selector of the function called in the transaction
       */
      function_selector: string;

      /**
       * The function declaration of the function called in the transaction
       */
      function_declaration?: string;

      /**
       * The function signature of the function called in the transaction
       */
      function_signature?: string;
    }

    /**
     * The user operation call data to be sent.
     */
    export interface UserOperationCalldata {
      /**
       * The function selector of the function called in the transaction
       */
      function_selector: string;

      /**
       * The function declaration of the function called in the transaction
       */
      function_declaration?: string;

      /**
       * The function signature of the function called in the transaction
       */
      function_signature?: string;
    }
  }
}

export interface TransactionSimulationError {
  /**
   * An error message if the simulation failed.
   */
  error: string;

  /**
   * A string indicating if the simulation was successful or not.
   */
  status: 'Error';

  /**
   * Error details if the simulation failed.
   */
  error_details?:
    | TransactionSimulationError.GeneralInsufficientFundsErrorDetails
    | TransactionSimulationError.GenericErrorDetails;
}

export namespace TransactionSimulationError {
  export interface GeneralInsufficientFundsErrorDetails {
    /**
     * The address of the account
     */
    account_address: string;

    /**
     * The asset that the account does not have enough balance for
     */
    asset:
      | GeneralInsufficientFundsErrorDetails.NativeAsset
      | GeneralInsufficientFundsErrorDetails.Erc20Asset
      | GeneralInsufficientFundsErrorDetails.Erc721Asset
      | GeneralInsufficientFundsErrorDetails.Erc1155Asset;

    /**
     * The type of the model
     */
    code: 'GENERAL_INSUFFICIENT_FUNDS';

    /**
     * The current balance of the account
     */
    current_balance?: number;

    /**
     * The required balance of the account
     */
    required_balance?: number;
  }

  export namespace GeneralInsufficientFundsErrorDetails {
    export interface NativeAsset {
      /**
       * Details
       */
      details: EvmAPI.NativeAssetDetails;

      /**
       * The type of the model
       */
      type: 'NATIVE';
    }

    export interface Erc20Asset {
      /**
       * Details
       */
      details: EvmAPI.Erc20TokenDetails;

      /**
       * The type of the model
       */
      type: 'ERC20';
    }

    export interface Erc721Asset {
      /**
       * Details
       */
      details: EvmAPI.Erc1155TokenDetails;

      /**
       * Token Id
       */
      token_id: number;

      /**
       * The type of the model
       */
      type: 'ERC721';
    }

    export interface Erc1155Asset {
      /**
       * Details
       */
      details: EvmAPI.Erc1155TokenDetails;

      /**
       * Token Id
       */
      token_id: number;

      /**
       * The type of the model
       */
      type: 'ERC1155';
    }
  }

  export interface GenericErrorDetails {
    /**
     * The error code
     */
    code: string;
  }
}

export interface TransactionValidation {
  /**
   * A list of features about this transaction explaining the validation.
   */
  features: Array<TransactionScanFeature>;

  /**
   * An enumeration.
   */
  result_type: 'Benign' | 'Warning' | 'Malicious';

  /**
   * A string indicating if the simulation was successful or not.
   */
  status: 'Success';

  /**
   * A textual classification that can be presented to the user explaining the
   * reason.
   */
  classification?: string;

  /**
   * A textual description that can be presented to the user about what this
   * transaction is doing.
   */
  description?: string;

  /**
   * A textual description about the reasons the transaction was flagged with
   * result_type.
   */
  reason?: string;
}

export interface TransactionValidationError {
  /**
   * A textual classification that can be presented to the user explaining the
   * reason.
   */
  classification: '';

  /**
   * A textual description that can be presented to the user about what this
   * transaction is doing.
   */
  description: '';

  /**
   * An error message if the validation failed.
   */
  error: string;

  /**
   * A list of features about this transaction explaining the validation.
   */
  features: Array<TransactionScanFeature>;

  /**
   * A textual description about the reasons the transaction was flagged with
   * result_type.
   */
  reason: '';

  /**
   * A string indicating if the transaction is safe to sign or not.
   */
  result_type: 'Error';

  /**
   * A string indicating if the simulation was successful or not.
   */
  status: 'Success';
}

export interface UsdDiff {
  in: string;

  out: string;

  total: string;
}

Evm.JsonRpc = JsonRpc;
Evm.Transaction = Transaction;
Evm.TransactionBulk = TransactionBulk;
Evm.TransactionRaw = TransactionRaw;
Evm.UserOperation = UserOperation;
Evm.PostTransaction = PostTransaction;
Evm.PostTransactionBulk = PostTransactionBulk;

export declare namespace Evm {
  export {
    type AccountSummary as AccountSummary,
    type Erc1155Diff as Erc1155Diff,
    type Erc1155Exposure as Erc1155Exposure,
    type Erc1155TokenDetails as Erc1155TokenDetails,
    type Erc20Diff as Erc20Diff,
    type Erc20Exposure as Erc20Exposure,
    type Erc20TokenDetails as Erc20TokenDetails,
    type Erc721Diff as Erc721Diff,
    type Erc721Exposure as Erc721Exposure,
    type Erc721TokenDetails as Erc721TokenDetails,
    type Metadata as Metadata,
    type NativeAddressAssetBalanceChangeDiff as NativeAddressAssetBalanceChangeDiff,
    type NativeAssetDetails as NativeAssetDetails,
    type NativeAssetTrace as NativeAssetTrace,
    type NativeDiff as NativeDiff,
    type NonercTokenDetails as NonercTokenDetails,
    type TokenScanSupportedChain as TokenScanSupportedChain,
    type TransactionScanFeature as TransactionScanFeature,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanSupportedChain as TransactionScanSupportedChain,
    type TransactionSimulation as TransactionSimulation,
    type TransactionSimulationError as TransactionSimulationError,
    type TransactionValidation as TransactionValidation,
    type TransactionValidationError as TransactionValidationError,
    type UsdDiff as UsdDiff,
  };

  export { JsonRpc as JsonRpc, type JsonRpcScanParams as JsonRpcScanParams };

  export {
    Transaction as Transaction,
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };

  export {
    TransactionBulk as TransactionBulk,
    type TransactionBulkScanResponse as TransactionBulkScanResponse,
    type TransactionBulkScanParams as TransactionBulkScanParams,
  };

  export { TransactionRaw as TransactionRaw, type TransactionRawScanParams as TransactionRawScanParams };

  export { UserOperation as UserOperation, type UserOperationScanParams as UserOperationScanParams };

  export {
    PostTransaction as PostTransaction,
    type PostTransactionReportResponse as PostTransactionReportResponse,
    type PostTransactionReportParams as PostTransactionReportParams,
    type PostTransactionScanParams as PostTransactionScanParams,
  };

  export {
    PostTransactionBulk as PostTransactionBulk,
    type PostTransactionBulkScanResponse as PostTransactionBulkScanResponse,
    type PostTransactionBulkScanParams as PostTransactionBulkScanParams,
  };
}
