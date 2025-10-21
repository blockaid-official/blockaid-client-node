// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StarknetAPI from './starknet';
import * as TransactionAPI from './transaction';
import {
  Transaction,
  TransactionReportParams,
  TransactionReportResponse,
  TransactionScanParams,
} from './transaction';

export class Starknet extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StarknetErc1155Details {
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

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC1155`)
   */
  type?: 'ERC1155';
}

export interface StarknetErc1155Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

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

export interface StarknetErc20Details {
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
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC20`)
   */
  type?: 'ERC20';
}

export interface StarknetErc20Diff {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * Value of the transfer
   */
  value: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;

  /**
   * USD price of the asset
   */
  usd_price?: number | null;
}

export interface StarknetErc721Details {
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

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC721`)
   */
  type?: 'ERC721';
}

export interface StarknetErc721Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;

  /**
   * USD price of the asset
   */
  usd_price?: number | null;
}

export interface StarknetTransactionScanRequest {
  account_address: string;

  /**
   * The chain name or chain ID
   */
  chain: 'mainnet' | (string & {});

  /**
   * Metadata
   */
  metadata:
    | StarknetTransactionScanRequest.StarknetWalletRequestMetadata
    | StarknetTransactionScanRequest.StarknetInAppRequestMetadata;

  transaction:
    | StarknetTransactionScanRequest.StarknetInvokeV1TransactionSchema
    | StarknetTransactionScanRequest.StarknetInvokeV3TransactionSchema
    | StarknetTransactionScanRequest.StarknetDeployAccountV1TransactionSchema
    | StarknetTransactionScanRequest.StarknetDeployAccountV3TransactionSchema;

  /**
   * Optional block number or tag context for the simulation
   */
  block_number?: string | null;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace StarknetTransactionScanRequest {
  export interface StarknetWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface StarknetInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }

  export interface StarknetInvokeV1TransactionSchema {
    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The address of the sender.
     */
    sender_address: string;

    /**
     * The version of the transaction.
     */
    version: 1;

    /**
     * The arguments that are passed to the validate and execute functions.
     */
    calldata?: Array<string>;
  }

  export interface StarknetInvokeV3TransactionSchema {
    /**
     * The arguments that are passed to the validate and execute functions.
     */
    calldata: Array<string>;

    /**
     * The id of the chain to which the transaction is sent.
     */
    chain_id: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The address of the sender.
     */
    sender_address: string;

    /**
     * The version of the transaction.
     */
    version: 3;

    /**
     * For future use. Currently this value is always empty.
     */
    account_deployment_data?: Array<string>;

    /**
     * The nonce data availability mode.
     */
    nonce_data_availability_mode?: number;

    /**
     * For future use. Currently this value is always empty.
     */
    paymaster_data?: Array<string>;
  }

  export interface StarknetDeployAccountV1TransactionSchema {
    /**
     * The hash of the contract class.
     */
    class_hash: string;

    /**
     * The arguments that are passed to the constructor function.
     */
    constructor_calldata: Array<string>;

    /**
     * The salt of the contract address.
     */
    contract_address_salt: string;

    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The version of the transaction.
     */
    version: 1;
  }

  export interface StarknetDeployAccountV3TransactionSchema {
    /**
     * The hash of the contract class.
     */
    class_hash: string;

    /**
     * The arguments that are passed to the constructor function.
     */
    constructor_calldata: Array<string>;

    /**
     * The salt of the contract address.
     */
    contract_address_salt: string;

    /**
     * The maximum fee that the sender is willing to pay.
     */
    max_fee: string;

    /**
     * The nonce of the transaction.
     */
    nonce: string;

    /**
     * The version of the transaction.
     */
    version: 3;
  }
}

export interface StarknetTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | StarknetTransactionScanResponse.StarknetStarknetSimulationResultSchema
    | StarknetTransactionScanResponse.StarknetSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | StarknetTransactionScanResponse.StarknetValidationResult
    | StarknetTransactionScanResponse.StarknetValidationErrorSchema
    | null;
}

export namespace StarknetTransactionScanResponse {
  export interface StarknetStarknetSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StarknetStarknetSimulationResultSchema.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StarknetStarknetSimulationResultSchema.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: {
      [key: string]: Array<
        | StarknetStarknetSimulationResultSchema.StarknetErc20AssetDiff
        | StarknetStarknetSimulationResultSchema.StarknetErc721AssetDiff
        | StarknetStarknetSimulationResultSchema.StarknetErc1155AssetDiff
      >;
    };

    /**
     * Optional block number or tag context for the simulation
     */
    block_number?: string | null;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: {
      [key: string]: Array<
        | StarknetStarknetSimulationResultSchema.StarknetErc20Exposure
        | StarknetStarknetSimulationResultSchema.StarknetErc721Exposure
        | StarknetStarknetSimulationResultSchema.StarknetErc1155Exposure
      >;
    };
  }

  export namespace StarknetStarknetSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      account_exposures: Array<
        | AccountSummary.StarknetErc20Exposure
        | AccountSummary.StarknetErc721Exposure
        | AccountSummary.StarknetErc1155Exposure
      >;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      account_assets_diffs?: Array<
        | AccountSummary.StarknetErc20AssetDiff
        | AccountSummary.StarknetErc721AssetDiff
        | AccountSummary.StarknetErc1155AssetDiff
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: { [key: string]: number };
    }

    export namespace AccountSummary {
      export interface StarknetErc20Exposure {
        asset: StarknetAPI.StarknetErc20Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: { [key: string]: StarknetErc20Exposure.Spenders };
      }

      export namespace StarknetErc20Exposure {
        export interface Spenders {
          /**
           * Approval value of the ERC20 token
           */
          approval: string;

          exposure: Array<StarknetAPI.StarknetErc20Diff>;

          /**
           * Expiration date of the approval
           */
          expiration?: string | null;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }
      }

      export interface StarknetErc721Exposure {
        asset: StarknetAPI.StarknetErc721Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: { [key: string]: StarknetErc721Exposure.Spenders };
      }

      export namespace StarknetErc721Exposure {
        export interface Spenders {
          exposure: Array<StarknetAPI.StarknetErc721Diff>;

          /**
           * Whether `setApprovalForAll` was invoked
           */
          is_approved_for_all: boolean;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }
      }

      export interface StarknetErc1155Exposure {
        asset: StarknetAPI.StarknetErc1155Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: { [key: string]: StarknetErc1155Exposure.Spenders };
      }

      export namespace StarknetErc1155Exposure {
        export interface Spenders {
          exposure: Array<StarknetAPI.StarknetErc1155Diff>;

          /**
           * Whether `setApprovalForAll` was invoked
           */
          is_approved_for_all: boolean;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
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

      export interface StarknetErc20AssetDiff {
        asset: StarknetAPI.StarknetErc20Details;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc20Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc20Diff | null;
      }

      export interface StarknetErc721AssetDiff {
        asset: StarknetAPI.StarknetErc721Details;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc721Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc721Diff | null;
      }

      export interface StarknetErc1155AssetDiff {
        asset: StarknetAPI.StarknetErc1155Details;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc1155Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc1155Diff | null;
      }
    }

    export interface AddressDetail {
      /**
       * Encoded public key of the account
       */
      account_address: unknown;

      /**
       * Description of the account
       */
      description?: string | null;
    }

    export interface StarknetErc20AssetDiff {
      asset: StarknetAPI.StarknetErc20Details;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc20Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc20Diff | null;
    }

    export interface StarknetErc721AssetDiff {
      asset: StarknetAPI.StarknetErc721Details;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc721Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc721Diff | null;
    }

    export interface StarknetErc1155AssetDiff {
      asset: StarknetAPI.StarknetErc1155Details;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc1155Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc1155Diff | null;
    }

    export interface StarknetErc20Exposure {
      asset: StarknetAPI.StarknetErc20Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: { [key: string]: StarknetErc20Exposure.Spenders };
    }

    export namespace StarknetErc20Exposure {
      export interface Spenders {
        /**
         * Approval value of the ERC20 token
         */
        approval: string;

        exposure: Array<StarknetAPI.StarknetErc20Diff>;

        /**
         * Expiration date of the approval
         */
        expiration?: string | null;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }
    }

    export interface StarknetErc721Exposure {
      asset: StarknetAPI.StarknetErc721Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: { [key: string]: StarknetErc721Exposure.Spenders };
    }

    export namespace StarknetErc721Exposure {
      export interface Spenders {
        exposure: Array<StarknetAPI.StarknetErc721Diff>;

        /**
         * Whether `setApprovalForAll` was invoked
         */
        is_approved_for_all: boolean;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }
    }

    export interface StarknetErc1155Exposure {
      asset: StarknetAPI.StarknetErc1155Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: { [key: string]: StarknetErc1155Exposure.Spenders };
    }

    export namespace StarknetErc1155Exposure {
      export interface Spenders {
        exposure: Array<StarknetAPI.StarknetErc1155Diff>;

        /**
         * Whether `setApprovalForAll` was invoked
         */
        is_approved_for_all: boolean;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }
    }
  }

  export interface StarknetSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface StarknetValidationResult {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    features: Array<StarknetValidationResult.Feature>;

    /**
     * A textual description about the reasons the transaction was flagged with
     * result_type
     */
    reason: string;

    /**
     * Verdict of the validation
     */
    result_type: 'Benign' | 'Warning' | 'Malicious' | 'Error';

    status: 'Success';
  }

  export namespace StarknetValidationResult {
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

  export interface StarknetValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

Starknet.Transaction = Transaction;

export declare namespace Starknet {
  export {
    type StarknetErc1155Details as StarknetErc1155Details,
    type StarknetErc1155Diff as StarknetErc1155Diff,
    type StarknetErc20Details as StarknetErc20Details,
    type StarknetErc20Diff as StarknetErc20Diff,
    type StarknetErc721Details as StarknetErc721Details,
    type StarknetErc721Diff as StarknetErc721Diff,
    type StarknetTransactionScanRequest as StarknetTransactionScanRequest,
    type StarknetTransactionScanResponse as StarknetTransactionScanResponse,
  };

  export {
    Transaction as Transaction,
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
