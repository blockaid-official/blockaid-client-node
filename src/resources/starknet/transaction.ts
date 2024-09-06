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
    | TransactionScanResponse.StarknetStarknetSimulationResultSchema
    | TransactionScanResponse.StarknetSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.StarknetValidationResultSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchema
    | TransactionScanResponse.StarknetValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
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
    assets_diffs?: Record<
      string,
      Array<
        | StarknetStarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema
        | StarknetStarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema
        | StarknetStarknetSimulationResultSchema.StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema
      >
    >;

    /**
     * Optional block number or tag context for the simulation
     */
    block_number?: string | null;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<
      string,
      Array<
        | StarknetStarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema
        | StarknetStarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema
        | StarknetStarknetSimulationResultSchema.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema
      >
    >;
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
        | AccountSummary.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema
        | AccountSummary.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema
        | AccountSummary.StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema
      >;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      assets_diffs?: Array<
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema
        | AccountSummary.StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema {
        asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema {
        export interface Asset {
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

      export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema {
        asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema {
        export interface Asset {
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

      export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema {
        asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema.Spenders
        >;
      }

      export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema {
        export interface Asset {
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

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema {
        asset: StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema.Asset;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc20Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc20Diff | null;
      }

      export namespace StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema {
        export interface Asset {
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
      }

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema {
        asset: StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema.Asset;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc721Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc721Diff | null;
      }

      export namespace StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema {
        export interface Asset {
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
      }

      export interface StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema {
        asset: StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema.Asset;

        /**
         * Details of the incoming transfer
         */
        in?: StarknetAPI.StarknetErc1155Diff | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StarknetAPI.StarknetErc1155Diff | null;
      }

      export namespace StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema {
        export interface Asset {
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

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema {
      asset: StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema.Asset;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc20Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc20Diff | null;
    }

    export namespace StarknetAccountSingleAssetDiffSchemaTypeErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DiffSchema {
      export interface Asset {
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
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema {
      asset: StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema.Asset;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc721Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc721Diff | null;
    }

    export namespace StarknetAccountSingleAssetDiffSchemaTypeErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DiffSchema {
      export interface Asset {
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
    }

    export interface StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema {
      asset: StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema.Asset;

      /**
       * Details of the incoming transfer
       */
      in?: StarknetAPI.StarknetErc1155Diff | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StarknetAPI.StarknetErc1155Diff | null;
    }

    export namespace StarknetAccountSingleAssetDiffSchemaTypeErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DiffSchema {
      export interface Asset {
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
    }

    export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema {
      asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc20ExposureSchema {
      export interface Asset {
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

    export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema {
      asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc721ExposureSchema {
      export interface Asset {
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

    export interface StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema {
      asset: StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema.Spenders
      >;
    }

    export namespace StarknetAddressAssetExposureSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155DetailsSchemaAnnotatedIntSkipValidationPlainSerializerGetPydanticSchemaErc1155ExposureSchema {
      export interface Asset {
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

  export interface StarknetValidationResultSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchema {
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
    features: Array<StarknetValidationResultSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchema.Feature>;

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

  export namespace StarknetValidationResultSchemaTypeAnnotatedIntSkipValidationPlainSerializerGetPydanticSchema {
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
