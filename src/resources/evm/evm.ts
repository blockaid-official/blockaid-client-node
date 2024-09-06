// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EvmAPI from './evm';
import * as JsonRpcAPI from './json-rpc';
import * as PostTransactionAPI from './post-transaction';
import * as PostTransactionBulkAPI from './post-transaction-bulk';
import * as TransactionAPI from './transaction';
import * as TransactionBulkAPI from './transaction-bulk';
import * as TransactionRawAPI from './transaction-raw';
import * as UserOperationAPI from './user-operation';

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

export type AddressAssetExposure =
  | Erc20AddressAssetExposure
  | Erc721AddressAssetExposure
  | Erc1155AddressAssetExposure
  | NonercAddressAssetExposure;

export interface Erc20AddressAssetExposure {
  /**
   * description of the asset for the current diff
   */
  asset: Erc20TokenDetails;

  /**
   * dictionary of spender addresses where the exposure has changed during this
   * transaction for the current address and asset
   */
  spenders: Record<string, Erc20Exposure>;
}

export interface Erc721AddressAssetExposure {
  /**
   * description of the asset for the current diff
   */
  asset: Erc721TokenDetails;

  /**
   * dictionary of spender addresses where the exposure has changed during this
   * transaction for the current address and asset
   */
  spenders: Record<string, Erc721Exposure>;
}

export interface Erc1155AddressAssetExposure {
  /**
   * description of the asset for the current diff
   */
  asset: Erc1155TokenDetails;

  /**
   * dictionary of spender addresses where the exposure has changed during this
   * transaction for the current address and asset
   */
  spenders: Record<string, Erc1155Exposure>;
}

export interface NonercAddressAssetExposure {
  /**
   * description of the asset for the current diff
   */
  asset: NonercTokenDetails;

  /**
   * dictionary of spender addresses where the exposure has changed during this
   * transaction for the current address and asset
   */
  spenders: Record<string, NonercExposure>;
}

export type AssetDiff =
  | Erc20AssetDiff
  | Erc1155AssetDiff
  | Erc721AssetDiff
  | NativeAssetDiff
  | NonercAssetDiff;

export interface Erc20AssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset: Erc20TokenDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<Erc20Diff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<Erc20Diff>;
}

export interface Erc1155AssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset: Erc1155TokenDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<Erc1155Diff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<Erc1155Diff>;
}

export interface Erc721AssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset: Erc721TokenDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<Erc721Diff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<Erc721Diff>;
}

export interface NativeAssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset: NativeAssetDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<NativeDiff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<NativeDiff>;
}

export interface NonercAssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset: NonercTokenDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<NonercDiff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<NonercDiff>;
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
  exposure: Array<Erc1155Diff>;

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

  exposure: Array<Erc20Diff>;

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
  exposure: Array<Erc721Diff>;

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

export interface NonercExposure {
  /**
   * the amount that was asked in the approval request for this spender from the
   * current address and asset
   */
  approval: number;

  exposure: Array<NonercDiff>;

  /**
   * user friendly description of the approval
   */
  summary?: string;
}

export interface Metadata {
  /**
   * cross reference transaction against the domain.
   */
  domain: string;
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

export interface NonercDiff {
  /**
   * value before divided by decimal, that was transferred from this address
   */
  raw_value: string;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * value after divided by decimals, that was transferred from this address
   */
  value?: string;
}

export type TransactionSimulationResponse = TransactionSimulation | TransactionSimulationError;

export type TransactionValidationResponse = TransactionValidation | TransactionValidationError;

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
  | 'degen';

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

  simulation?: TransactionSimulationResponse;

  validation?: TransactionValidationResponse;
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
    estimate: number;

    status: 'Success';

    used: number;
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
  | 'gnosis'
  | 'worldchain';

export interface TransactionSimulation {
  /**
   * Account summary for the account address. account address is determined implicit
   * by the `from` field in the transaction request, or explicit by the
   * account_address field in the request.
   */
  account_summary: TransactionSimulation.AccountSummary;

  /**
   * a dictionary including additional information about each relevant address in the
   * transaction.
   */
  address_details: Record<string, TransactionSimulation.AddressDetails>;

  /**
   * dictionary describes the assets differences as a result of this transaction for
   * every involved address
   */
  assets_diffs: Record<string, Array<AssetDiff>>;

  /**
   * dictionary describes the exposure differences as a result of this transaction
   * for every involved address (as a result of any approval / setApproval / permit
   * function)
   */
  exposures: Record<string, Array<AddressAssetExposure>>;

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
  contract_management?: Record<string, Array<TransactionSimulation.ContractManagement>>;

  /**
   * The parameters of the transaction that was simulated.
   */
  params?: TransactionSimulation.Params;
}

export namespace TransactionSimulation {
  /**
   * Account summary for the account address. account address is determined implicit
   * by the `from` field in the transaction request, or explicit by the
   * account_address field in the request.
   */
  export interface AccountSummary {
    /**
     * All assets diffs related to the account address
     */
    assets_diffs: Array<AccountSummaryAssetsDiff>;

    /**
     * All assets exposures related to the account address
     */
    exposures: Array<EvmAPI.AddressAssetExposure>;

    /**
     * Total usd diff related to the account address
     */
    total_usd_diff: EvmAPI.UsdDiff;

    /**
     * Total usd exposure related to the account address
     */
    total_usd_exposure: Record<string, string>;
  }

  export type AccountSummaryAssetsDiff = AssetDiff & {
    /**
     * shows the balance before making the transaction and after
     */
    balance_changes?: AccountSummaryAssetsDiff.BalanceChanges;
  };

  export namespace AccountSummaryAssetsDiff {
    /**
     * shows the balance before making the transaction and after
     */
    export interface BalanceChanges {
      /**
       * balance of the account after making the transaction
       */
      after: BalanceChanges.After;

      /**
       * balance of the account before making the transaction
       */
      before: BalanceChanges.Before;
    }

    export namespace BalanceChanges {
      /**
       * balance of the account after making the transaction
       */
      export interface After {
        /**
         * value before divided by decimal, that was transferred from this address
         */
        raw_value: string;

        /**
         * usd equal of the asset that was transferred from this address
         */
        usd_price?: string;

        /**
         * value after divided by decimals, that was transferred from this address
         */
        value?: string;
      }

      /**
       * balance of the account before making the transaction
       */
      export interface Before {
        /**
         * value before divided by decimal, that was transferred from this address
         */
        raw_value: string;

        /**
         * usd equal of the asset that was transferred from this address
         */
        usd_price?: string;

        /**
         * value after divided by decimals, that was transferred from this address
         */
        value?: string;
      }
    }
  }

  export interface AddressDetails {
    /**
     * contains the contract's name if the address is a verified contract
     */
    contract_name?: string;

    /**
     * known name tag for the address
     */
    name_tag?: string;
  }

  export interface ContractManagement {
    /**
     * The state after the transaction
     */
    after:
      | ContractManagement.AddressChange
      | ContractManagement.OwnershipChange
      | ContractManagement.ModulesChange;

    /**
     * The state before the transaction
     */
    before:
      | ContractManagement.AddressChange
      | ContractManagement.OwnershipChange
      | ContractManagement.ModulesChange;

    /**
     * An enumeration.
     */
    type: 'PROXY_UPGRADE' | 'OWNERSHIP_CHANGE' | 'MODULE_CHANGE';
  }

  export namespace ContractManagement {
    export interface AddressChange {
      address: string;
    }

    export interface OwnershipChange {
      owners: Array<string>;
    }

    export interface ModulesChange {
      modules: Array<string>;
    }

    export interface AddressChange {
      address: string;
    }

    export interface OwnershipChange {
      owners: Array<string>;
    }

    export interface ModulesChange {
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

export namespace Evm {
  export import AddressAssetExposure = EvmAPI.AddressAssetExposure;
  export import AssetDiff = EvmAPI.AssetDiff;
  export import Erc1155AddressAssetExposure = EvmAPI.Erc1155AddressAssetExposure;
  export import Erc1155Diff = EvmAPI.Erc1155Diff;
  export import Erc1155Exposure = EvmAPI.Erc1155Exposure;
  export import Erc1155TokenDetails = EvmAPI.Erc1155TokenDetails;
  export import Erc20AddressAssetExposure = EvmAPI.Erc20AddressAssetExposure;
  export import Erc20Diff = EvmAPI.Erc20Diff;
  export import Erc20Exposure = EvmAPI.Erc20Exposure;
  export import Erc20TokenDetails = EvmAPI.Erc20TokenDetails;
  export import Erc721AddressAssetExposure = EvmAPI.Erc721AddressAssetExposure;
  export import Erc721Diff = EvmAPI.Erc721Diff;
  export import Erc721Exposure = EvmAPI.Erc721Exposure;
  export import Erc721TokenDetails = EvmAPI.Erc721TokenDetails;
  export import Metadata = EvmAPI.Metadata;
  export import NativeAssetDetails = EvmAPI.NativeAssetDetails;
  export import NativeDiff = EvmAPI.NativeDiff;
  export import NonercAddressAssetExposure = EvmAPI.NonercAddressAssetExposure;
  export import NonercDiff = EvmAPI.NonercDiff;
  export import NonercExposure = EvmAPI.NonercExposure;
  export import NonercTokenDetails = EvmAPI.NonercTokenDetails;
  export import TokenScanSupportedChain = EvmAPI.TokenScanSupportedChain;
  export import TransactionScanFeature = EvmAPI.TransactionScanFeature;
  export import TransactionScanResponse = EvmAPI.TransactionScanResponse;
  export import TransactionScanSupportedChain = EvmAPI.TransactionScanSupportedChain;
  export import TransactionSimulationResponse = EvmAPI.TransactionSimulationResponse;
  export import TransactionSimulation = EvmAPI.TransactionSimulation;
  export import TransactionSimulationError = EvmAPI.TransactionSimulationError;
  export import TransactionValidationResponse = EvmAPI.TransactionValidationResponse;
  export import TransactionValidation = EvmAPI.TransactionValidation;
  export import TransactionValidationError = EvmAPI.TransactionValidationError;
  export import UsdDiff = EvmAPI.UsdDiff;
  export import JsonRpc = JsonRpcAPI.JsonRpc;
  export import JsonRpcScanParams = JsonRpcAPI.JsonRpcScanParams;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
  export import TransactionBulk = TransactionBulkAPI.TransactionBulk;
  export import TransactionBulkScanResponse = TransactionBulkAPI.TransactionBulkScanResponse;
  export import TransactionBulkScanParams = TransactionBulkAPI.TransactionBulkScanParams;
  export import TransactionRaw = TransactionRawAPI.TransactionRaw;
  export import TransactionRawScanParams = TransactionRawAPI.TransactionRawScanParams;
  export import UserOperation = UserOperationAPI.UserOperation;
  export import UserOperationScanParams = UserOperationAPI.UserOperationScanParams;
  export import PostTransaction = PostTransactionAPI.PostTransaction;
  export import PostTransactionScanParams = PostTransactionAPI.PostTransactionScanParams;
  export import PostTransactionBulk = PostTransactionBulkAPI.PostTransactionBulk;
  export import PostTransactionBulkScanResponse = PostTransactionBulkAPI.PostTransactionBulkScanResponse;
  export import PostTransactionBulkScanParams = PostTransactionBulkAPI.PostTransactionBulkScanParams;
}
