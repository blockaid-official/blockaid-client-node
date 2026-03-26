// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressAPI from './address';
import { Address, AddressReportResponse, AddressScanParams } from './address';
import * as AddressBulkAPI from './address-bulk';
import {
  AddressBulk,
  AddressBulkScanExtendedParams,
  AddressBulkScanParams,
  AddressBulkScanResponse,
} from './address-bulk';
import * as JsonRpcAPI from './json-rpc';
import { JsonRpc, JsonRpcScanParams, JsonRpcScanResponse } from './json-rpc';
import * as PostTransactionAPI from './post-transaction';
import {
  PostTransaction,
  PostTransactionReportParams,
  PostTransactionReportResponse,
  PostTransactionScanParams,
  PostTransactionScanResponse,
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
  TransactionScanResponse,
} from './transaction';
import * as TransactionBulkAPI from './transaction-bulk';
import { TransactionBulk, TransactionBulkScanParams, TransactionBulkScanResponse } from './transaction-bulk';
import * as TransactionRawAPI from './transaction-raw';
import { TransactionRaw, TransactionRawScanParams, TransactionRawScanResponse } from './transaction-raw';
import * as UserOperationAPI from './user-operation';
import { UserOperation, UserOperationScanParams, UserOperationScanResponse } from './user-operation';

export class Evm extends APIResource {
  jsonRpc: JsonRpcAPI.JsonRpc = new JsonRpcAPI.JsonRpc(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  transactionBulk: TransactionBulkAPI.TransactionBulk = new TransactionBulkAPI.TransactionBulk(this._client);
  transactionRaw: TransactionRawAPI.TransactionRaw = new TransactionRawAPI.TransactionRaw(this._client);
  userOperation: UserOperationAPI.UserOperation = new UserOperationAPI.UserOperation(this._client);
  postTransaction: PostTransactionAPI.PostTransaction = new PostTransactionAPI.PostTransaction(this._client);
  postTransactionBulk: PostTransactionBulkAPI.PostTransactionBulk =
    new PostTransactionBulkAPI.PostTransactionBulk(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
  addressBulk: AddressBulkAPI.AddressBulk = new AddressBulkAPI.AddressBulk(this._client);
}

export interface AddressReportParams {
  /**
   * The address to report on.
   */
  address: string;

  /**
   * The chain name
   */
  chain:
    | 'arbitrum'
    | 'avalanche'
    | 'base'
    | 'base-sepolia'
    | 'lordchain'
    | 'lordchain-testnet'
    | 'metacade'
    | 'metacade-testnet'
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
    | 'unichain'
    | 'sei'
    | 'flow-evm'
    | 'hyperevm'
    | 'katana'
    | 'plume'
    | 'xlayer'
    | 'monad'
    | 'monad-testnet'
    | 'hedera'
    | 'tempo'
    | 'tempo-testnet'
    | 'kite-ai'
    | 'solana'
    | 'eclipse'
    | 'sonic'
    | 'starknet'
    | 'sui'
    | 'bitcoin'
    | 'stellar';

  /**
   * The domain related to this address.
   */
  domain: string;
}

export interface AddressValidation {
  /**
   * Overall validation outcome for the scan.
   */
  result_type: 'Malicious' | 'Warning' | 'Benign' | 'Error';

  /**
   * An error message returned when `result_type` is `Error`.
   */
  error?: string;

  /**
   * A list of features explaining the scan result (each feature includes a type,
   * feature_id, and description).
   */
  features?: Array<AddressValidation.UnionMember0> | Array<string>;
}

export namespace AddressValidation {
  export interface UnionMember0 {
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
      | 'IS_EOA'
      | 'IS_CONTRACT'
      | 'ERC20_CONTRACT'
      | 'TRUSTED_CONTRACT'
      | 'BENIGN_CREATOR'
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
      | 'IMPERSONATOR_SENSITIVE_ASSET'
      | 'IMPERSONATOR_HIGH_CONFIDENCE'
      | 'IMPERSONATOR_MEDIUM_CONFIDENCE'
      | 'IMPERSONATOR_LOW_CONFIDENCE'
      | 'IMPERSONATION_PROTECTED'
      | 'FAKE_VOLUME'
      | 'HIDDEN_SUPPLY_BY_KEY_HOLDER'
      | 'FAKE_TRADE_MAKER_COUNT';

    /**
     * Type of the feature
     */
    type: 'Benign' | 'Info' | 'Warning' | 'Malicious';
  }
}

export interface Authorization {
  /**
   * The delegation designation address
   */
  address: string;

  /**
   * The chain ID as hex string
   */
  chainId?: string;

  /**
   * The authority address of the delegation, should be provided when the signature
   * (r,s,yParity) is not provided in order to simulate the transaction with the
   * correct delegation
   */
  eoa?: string;

  /**
   * The nonce value as hex string
   */
  nonce?: string;

  /**
   * The r value as hex string
   */
  r?: string;

  /**
   * The s value as hex string
   */
  s?: string;

  /**
   * The yParity value as hex string
   */
  yParity?: string;
}

export interface MetadataParam {
  /**
   * Account information associated with the request
   */
  account?: MetadataParam.Account;

  /**
   * Connection metadata including user agent and IP information
   */
  connection?: MetadataParam.Connection;
}

export namespace MetadataParam {
  /**
   * Account information associated with the request
   */
  export interface Account {
    /**
     * Unique identifier for the account.
     */
    account_id: string;

    /**
     * Timestamp when the account was created.
     */
    account_creation_timestamp?: string;

    /**
     * Age of the user in years
     */
    user_age?: number;

    /**
     * ISO country code of the user's location.
     */
    user_country_code?: string;
  }

  /**
   * Connection metadata including user agent and IP information
   */
  export interface Connection {
    /**
     * IP address of the customer making the request.
     */
    ip_address: string;

    /**
     * User agent string from the client's browser or application.
     */
    user_agent?: string;
  }
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
  | 'starknet-sepolia'
  | 'stellar'
  | 'linea'
  | 'degen'
  | 'zksync'
  | 'scroll'
  | 'blast'
  | 'soneium-minato'
  | 'base-sepolia'
  | 'bitcoin'
  | 'abstract'
  | 'soneium'
  | 'ink'
  | 'zero-network'
  | 'berachain'
  | 'unichain'
  | 'ronin'
  | 'sui'
  | 'hedera'
  | 'hyperevm'
  | 'xlayer'
  | 'monad'
  | 'tron';

/**
 * The chain name
 */
export type TransactionScanSupportedChain =
  | 'arbitrum'
  | 'avalanche'
  | 'base'
  | 'base-sepolia'
  | 'lordchain'
  | 'lordchain-testnet'
  | 'metacade'
  | 'metacade-testnet'
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
  | 'unichain'
  | 'sei'
  | 'flow-evm'
  | 'hyperevm'
  | 'megaeth'
  | 'katana'
  | 'plume'
  | 'xlayer'
  | 'monad'
  | 'monad-testnet'
  | 'tempo'
  | 'tempo-testnet'
  | 'kite-ai';

export interface UserOperationData {
  /**
   * The operation parameters of the user operation request
   */
  operation: UserOperationV6 | UserOperationV7;

  /**
   * The address of the entrypoint receiving the request in hex string format
   */
  entrypoint?: string;
}

export interface UserOperationRequest {
  /**
   * The chain name or chain ID
   */
  chain: TransactionScanSupportedChain | (string & {});

  /**
   * The user operation request that was received by the wallet
   */
  data: UserOperationData;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata:
    | UserOperationRequest.RoutersEvmModelsMetadataNonDapp
    | UserOperationRequest.RoutersEvmModelsMetadataDapp;

  /**
   * The address of the account (wallet) sending the request in hex string format
   */
  account_address?: string;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * List of one or more of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. "gas_estimation" - include gas estimation
   * result in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * For simulations, determine whether to calculate missing balances in user
   * operations.
   */
  should_calculate_missing_balance?: boolean;

  /**
   * Simulate transactions using gas estimation result. This requires
   * "gas_estimation" option to be enabled.
   */
  simulate_with_estimated_gas?: boolean;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: { [key: string]: UserOperationRequest.StateOverride };
}

export namespace UserOperationRequest {
  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
  }

  export interface StateOverride {
    /**
     * Fake balance to set for the account before executing the call.
     */
    balance?: string;

    /**
     * Fake EVM bytecode to inject into the account before executing the call.
     */
    code?: string;

    /**
     * Moves precompile to given address
     */
    movePrecompileToAddress?: string;

    /**
     * Fake nonce to set for the account before executing the call.
     */
    nonce?: string;

    /**
     * Fake key-value mapping to override all slots in the account storage before
     * executing the call.
     */
    state?: { [key: string]: string };

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: { [key: string]: string };
  }
}

export interface UserOperationV6 {
  /**
   * The call data value in hex string format.
   */
  call_data?: string;

  /**
   * The call gas limit value in hex string format.
   */
  call_gas_limit?: string;

  /**
   * The EIP-7702 authorization tuple for the user operation (optional)
   */
  eip7702_auth?: Authorization;

  /**
   * The init code value in hex string format.
   */
  init_code?: string;

  /**
   * The max fee per gas value in hex string format.
   */
  max_fee_per_gas?: string;

  /**
   * The max priority fee per gas value in hex string format.
   */
  max_priority_fee_per_gas?: string;

  /**
   * The nonce value in hex string format.
   */
  nonce?: string;

  /**
   * The paymaster and data value in hex string format.
   */
  paymaster_and_data?: string;

  /**
   * The pre verification gas value in hex string format.
   */
  pre_verification_gas?: string;

  /**
   * The sender address of the operation in hex string format
   */
  sender?: string;

  /**
   * The signature value in hex string format.
   */
  signature?: string;

  /**
   * The verification gas limit value in hex string format.
   */
  verification_gas_limit?: string;
}

export interface UserOperationV6GasEstimation {
  call_gas_estimate: string;

  pre_verification_gas_estimate: string;

  status: 'Success';

  verification_gas_estimate: string;
}

export interface UserOperationV7 {
  /**
   * The account gas limits value in hex string format.
   */
  account_gas_limits?: string;

  /**
   * The call data value in hex string format.
   */
  call_data?: string;

  /**
   * The EIP-7702 authorization tuple for the user operation (optional)
   */
  eip7702_auth?: Authorization;

  /**
   * The gas fees value in hex string format.
   */
  gas_fees?: string;

  /**
   * The init code value in hex string format.
   */
  init_code?: string;

  /**
   * The nonce value in hex string format.
   */
  nonce?: string;

  /**
   * The paymaster and data value in hex string format.
   */
  paymaster_and_data?: string;

  /**
   * The pre verification gas value in hex string format.
   */
  pre_verification_gas?: string;

  /**
   * The sender address of the operation in hex string format
   */
  sender?: string;

  /**
   * The signature value in hex string format.
   */
  signature?: string;
}

export interface UserOperationV7GasEstimation {
  call_gas_estimate: string;

  paymaster_verification_gas_estimate: string;

  pre_verification_gas_estimate: string;

  status: 'Success';

  verification_gas_estimate: string;
}

export interface ValidateAddress {
  /**
   * The address to validate.
   */
  address: string;

  /**
   * The chain name
   */
  chain: TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata: ValidateAddress.RoutersEvmModelsMetadataNonDapp | ValidateAddress.RoutersEvmModelsMetadataDapp;
}

export namespace ValidateAddress {
  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
  }
}

export interface ValidateBulkAddresses {
  /**
   * List of addresses to validate.
   */
  addresses: Array<string>;

  /**
   * The chain name
   */
  chain: TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata:
    | ValidateBulkAddresses.RoutersEvmModelsMetadataNonDapp
    | ValidateBulkAddresses.RoutersEvmModelsMetadataDapp;
}

export namespace ValidateBulkAddresses {
  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
  }
}

export interface ValidateBulkExtendedAddressesRequest {
  /**
   * List of addresses to validate.
   */
  addresses: Array<string>;

  /**
   * The chain name
   */
  chain: TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., integration source, user/account
   * details). Used to enrich results and reduce false positives/negatives.
   */
  metadata: ValidateBulkExtendedAddressesRequest.Metadata;
}

export namespace ValidateBulkExtendedAddressesRequest {
  /**
   * Additional context for the scan (e.g., integration source, user/account
   * details). Used to enrich results and reduce false positives/negatives.
   */
  export interface Metadata {
    account: Metadata.Account;

    connection: Metadata.Connection;
  }

  export namespace Metadata {
    export interface Account {
      account_id: string;

      user_country_code: string;

      age_in_years?: number;

      created?: string;
    }

    export interface Connection {
      ip_address: string;

      user_agent: string;
    }
  }
}

export interface ValidateBulkExtendedAddressesResponse {
  results: Array<ValidateBulkExtendedAddressesResponse.Result>;
}

export namespace ValidateBulkExtendedAddressesResponse {
  export interface Result {
    /**
     * Address to validate.
     */
    address: string;

    /**
     * Label of the address.
     */
    label: string;

    /**
     * Validation result.
     */
    validation: Result.Validation;
  }

  export namespace Result {
    /**
     * Validation result.
     */
    export interface Validation {
      /**
       * Overall validation outcome for the scan.
       */
      result_type: 'Malicious' | 'Warning' | 'Benign' | 'Error';

      /**
       * A list of textual features about this address that can be presented to the user.
       */
      features?: Array<Validation.Feature>;
    }

    export namespace Validation {
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
          | 'IS_EOA'
          | 'IS_CONTRACT'
          | 'ERC20_CONTRACT'
          | 'TRUSTED_CONTRACT'
          | 'BENIGN_CREATOR'
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
          | 'IMPERSONATOR_SENSITIVE_ASSET'
          | 'IMPERSONATOR_HIGH_CONFIDENCE'
          | 'IMPERSONATOR_MEDIUM_CONFIDENCE'
          | 'IMPERSONATOR_LOW_CONFIDENCE'
          | 'IMPERSONATION_PROTECTED'
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
}

Evm.JsonRpc = JsonRpc;
Evm.Transaction = Transaction;
Evm.TransactionBulk = TransactionBulk;
Evm.TransactionRaw = TransactionRaw;
Evm.UserOperation = UserOperation;
Evm.PostTransaction = PostTransaction;
Evm.PostTransactionBulk = PostTransactionBulk;
Evm.Address = Address;
Evm.AddressBulk = AddressBulk;

export declare namespace Evm {
  export {
    type AddressReportParams as AddressReportParams,
    type AddressValidation as AddressValidation,
    type Authorization as Authorization,
    type MetadataParam as MetadataParam,
    type TokenScanSupportedChain as TokenScanSupportedChain,
    type TransactionScanSupportedChain as TransactionScanSupportedChain,
    type UserOperationData as UserOperationData,
    type UserOperationRequest as UserOperationRequest,
    type UserOperationV6 as UserOperationV6,
    type UserOperationV6GasEstimation as UserOperationV6GasEstimation,
    type UserOperationV7 as UserOperationV7,
    type UserOperationV7GasEstimation as UserOperationV7GasEstimation,
    type ValidateAddress as ValidateAddress,
    type ValidateBulkAddresses as ValidateBulkAddresses,
    type ValidateBulkExtendedAddressesRequest as ValidateBulkExtendedAddressesRequest,
    type ValidateBulkExtendedAddressesResponse as ValidateBulkExtendedAddressesResponse,
  };

  export {
    JsonRpc as JsonRpc,
    type JsonRpcScanResponse as JsonRpcScanResponse,
    type JsonRpcScanParams as JsonRpcScanParams,
  };

  export {
    Transaction as Transaction,
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };

  export {
    TransactionBulk as TransactionBulk,
    type TransactionBulkScanResponse as TransactionBulkScanResponse,
    type TransactionBulkScanParams as TransactionBulkScanParams,
  };

  export {
    TransactionRaw as TransactionRaw,
    type TransactionRawScanResponse as TransactionRawScanResponse,
    type TransactionRawScanParams as TransactionRawScanParams,
  };

  export {
    UserOperation as UserOperation,
    type UserOperationScanResponse as UserOperationScanResponse,
    type UserOperationScanParams as UserOperationScanParams,
  };

  export {
    PostTransaction as PostTransaction,
    type PostTransactionReportResponse as PostTransactionReportResponse,
    type PostTransactionScanResponse as PostTransactionScanResponse,
    type PostTransactionReportParams as PostTransactionReportParams,
    type PostTransactionScanParams as PostTransactionScanParams,
  };

  export {
    PostTransactionBulk as PostTransactionBulk,
    type PostTransactionBulkScanResponse as PostTransactionBulkScanResponse,
    type PostTransactionBulkScanParams as PostTransactionBulkScanParams,
  };

  export {
    Address as Address,
    type AddressReportResponse as AddressReportResponse,
    type AddressScanParams as AddressScanParams,
  };

  export {
    AddressBulk as AddressBulk,
    type AddressBulkScanResponse as AddressBulkScanResponse,
    type AddressBulkScanParams as AddressBulkScanParams,
    type AddressBulkScanExtendedParams as AddressBulkScanExtendedParams,
  };
}
