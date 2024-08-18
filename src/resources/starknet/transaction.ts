// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionAPI from './transaction';
import * as StarknetAPI from './starknet';

export class Transaction extends APIResource {
  /**
   * Scan Transactions
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/starknet/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.StarknetSimulationResultSchema
    | TransactionScanResponse.StarknetSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.StarknetValidationResultSchema
    | TransactionScanResponse.StarknetValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface StarknetSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StarknetSimulationResultSchema.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StarknetSimulationResultSchema.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | StarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema
        | StarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaErc20DiffSchema
        | StarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaErc721DiffSchema
        | StarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaErc1155DiffSchema
      >
    >;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<
      string,
      Array<
        | StarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema
        | StarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema
        | StarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema
      >
    >;
  }

  export namespace StarknetSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      exposures: Array<
        | AccountSummary.StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema
        | AccountSummary.StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema
        | AccountSummary.StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema
      >;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      assets_diffs?: Array<
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaErc20DiffSchema
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaErc721DiffSchema
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaErc1155DiffSchema
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      export interface StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema {
        asset: StarknetAPI.StarknetErc20Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema {
        export interface Spenders {
          /**
           * Approval value of the ERC20 token
           */
          approval: number;

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

      export interface StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema {
        asset: StarknetAPI.StarknetErc721Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema {
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

      export interface StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema {
        asset: StarknetAPI.StarknetErc1155Details;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema {
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

      export interface StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
        asset: StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema.Asset;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetNativeDiff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetNativeDiff | null;
      }

      export namespace StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
        export interface Asset {
          /**
           * Decimals of the asset
           */
          decimals?: 18;

          /**
           * Name of the asset
           */
          name?: 'STRK';

          /**
           * Symbol of the asset
           */
          symbol?: 'STRK';

          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
        }
      }

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaErc20DiffSchema {
        asset: StarknetAPI.StarknetErc20Details;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc20Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc20Diff | null;
      }

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaErc721DiffSchema {
        asset: StarknetAPI.StarknetErc721Details;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc721Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc721Diff | null;
      }

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaErc1155DiffSchema {
        asset: StarknetAPI.StarknetErc1155Details;

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
      account_address: string;

      /**
       * Description of the account
       */
      description?: string | null;
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
      asset: StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema.Asset;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetNativeDiff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetNativeDiff | null;
    }

    export namespace StarknetAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
      export interface Asset {
        /**
         * Decimals of the asset
         */
        decimals?: 18;

        /**
         * Name of the asset
         */
        name?: 'STRK';

        /**
         * Symbol of the asset
         */
        symbol?: 'STRK';

        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaErc20DiffSchema {
      asset: StarknetAPI.StarknetErc20Details;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc20Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc20Diff | null;
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaErc721DiffSchema {
      asset: StarknetAPI.StarknetErc721Details;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc721Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc721Diff | null;
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaErc1155DiffSchema {
      asset: StarknetAPI.StarknetErc1155Details;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc1155Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc1155Diff | null;
    }

    export interface StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema {
      asset: StarknetAPI.StarknetErc20Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaErc20DetailsSchemaErc20ExposureSchema {
      export interface Spenders {
        /**
         * Approval value of the ERC20 token
         */
        approval: number;

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

    export interface StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema {
      asset: StarknetAPI.StarknetErc721Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaErc721DetailsSchemaErc721ExposureSchema {
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

    export interface StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema {
      asset: StarknetAPI.StarknetErc1155Details;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaErc1155DetailsSchemaErc1155ExposureSchema {
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

  export interface StarknetValidationResultSchema {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    /**
     * A list of features about this transaction explaining the validation
     */
    features: Array<StarknetValidationResultSchema.Feature>;

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

  export namespace StarknetValidationResultSchema {
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

export interface TransactionScanParams {
  account_address: string;

  /**
   * The chain name or chain ID
   */
  chain: 'mainnet' | 'sepolia' | 'sepolia_integration' | (string & {});

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.StarknetWalletRequestMetadata
    | TransactionScanParams.StarknetInAppRequestMetadata;

  transaction:
    | TransactionScanParams.StarknetInvokeV1TransactionSchema
    | TransactionScanParams.StarknetInvokeV3TransactionSchema
    | TransactionScanParams.StarknetDeployAccountV1TransactionSchema
    | TransactionScanParams.StarknetDeployAccountV3TransactionSchema;

  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   * - `validation`: Include security validation of the transaction in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionScanParams {
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
    type: 'in_app';
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
    nonce_data_availability_mode?: 0;

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

export namespace Transaction {
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
