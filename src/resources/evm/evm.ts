// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';
import * as JsonRpcAPI from '@blockaid/client/resources/evm/json-rpc';
import * as TransactionAPI from '@blockaid/client/resources/evm/transaction';
import * as TransactionBulkAPI from '@blockaid/client/resources/evm/transaction-bulk';
import * as TransactionRawAPI from '@blockaid/client/resources/evm/transaction-raw';
import * as UserOperationAPI from '@blockaid/client/resources/evm/user-operation';

export class Evm extends APIResource {
  jsonRpc: JsonRpcAPI.JsonRpc = new JsonRpcAPI.JsonRpc(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  transactionBulk: TransactionBulkAPI.TransactionBulk = new TransactionBulkAPI.TransactionBulk(this._client);
  transactionRaw: TransactionRawAPI.TransactionRaw = new TransactionRawAPI.TransactionRaw(this._client);
  userOperation: UserOperationAPI.UserOperation = new UserOperationAPI.UserOperation(this._client);
}

export interface AddressAssetExposure {
  /**
   * description of the asset for the current diff
   */
  asset: Erc20TokenDetails | Erc1155TokenDetails | Erc721TokenDetails | NonercTokenDetails;

  /**
   * dictionary of spender addresses where the exposure has changed during this
   * transaction for the current address and asset
   */
  spenders: Record<string, Erc20Exposure | Erc721Exposure | Erc1155Exposure>;
}

export interface AssetDiff {
  /**
   * description of the asset for the current diff
   */
  asset:
    | Erc20TokenDetails
    | Erc1155TokenDetails
    | Erc721TokenDetails
    | NonercTokenDetails
    | NativeAssetDetails;

  /**
   * amount of the asset that was transferred to the address in this transaction
   */
  in: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;

  /**
   * amount of the asset that was transferred from the address in this transaction
   */
  out: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;
}

export interface Erc1155Diff {
  /**
   * id of the token
   */
  token_id: number;

  /**
   * value before divided by decimal, that was transferred from this address
   */
  value: number;

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
  usd_price?: number;
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
  raw_value: number;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: number;

  /**
   * value after divided by decimals, that was transferred from this address
   */
  value?: number;
}

export interface Erc20Exposure {
  /**
   * the amount that was asked in the approval request for this spender from the
   * current address and asset
   */
  approval: number;

  exposure: Array<Erc1155Diff | Erc721Diff | Erc20Diff | NativeDiff>;

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
   * id of the token
   */
  token_id: number;

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
  usd_price?: number;
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
  raw_value: number;

  /**
   * user friendly description of the asset transfer
   */
  summary?: string;

  /**
   * usd equal of the asset that was transferred from this address
   */
  usd_price?: number;

  /**
   * value after divided by decimals, that was transferred from this address
   */
  value?: number;
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
  | 'unknown';

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
  | 'zora'
  | 'linea'
  | 'blast'
  | 'unknown';

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
    assets_diffs: Array<EvmAPI.AssetDiff>;

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
}

export interface UsdDiff {
  in: string;

  out: string;

  total: string;
}

export namespace Evm {
  export import AddressAssetExposure = EvmAPI.AddressAssetExposure;
  export import AssetDiff = EvmAPI.AssetDiff;
  export import Erc1155Diff = EvmAPI.Erc1155Diff;
  export import Erc1155Exposure = EvmAPI.Erc1155Exposure;
  export import Erc1155TokenDetails = EvmAPI.Erc1155TokenDetails;
  export import Erc20Diff = EvmAPI.Erc20Diff;
  export import Erc20Exposure = EvmAPI.Erc20Exposure;
  export import Erc20TokenDetails = EvmAPI.Erc20TokenDetails;
  export import Erc721Diff = EvmAPI.Erc721Diff;
  export import Erc721Exposure = EvmAPI.Erc721Exposure;
  export import Erc721TokenDetails = EvmAPI.Erc721TokenDetails;
  export import Metadata = EvmAPI.Metadata;
  export import NativeAssetDetails = EvmAPI.NativeAssetDetails;
  export import NativeDiff = EvmAPI.NativeDiff;
  export import NonercTokenDetails = EvmAPI.NonercTokenDetails;
  export import TokenScanSupportedChain = EvmAPI.TokenScanSupportedChain;
  export import TransactionScanFeature = EvmAPI.TransactionScanFeature;
  export import TransactionScanResponse = EvmAPI.TransactionScanResponse;
  export import TransactionScanSupportedChain = EvmAPI.TransactionScanSupportedChain;
  export import TransactionSimulation = EvmAPI.TransactionSimulation;
  export import TransactionSimulationError = EvmAPI.TransactionSimulationError;
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
}
