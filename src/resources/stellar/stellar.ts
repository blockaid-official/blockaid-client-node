// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as StellarAPI from '@blockaid/client/resources/stellar/stellar';
import * as TransactionAPI from '@blockaid/client/resources/stellar/transaction';

export class Stellar extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StellarAssetContractDetailsSchema {
  /**
   * Address of the asset's contract
   */
  address: string;

  /**
   * Asset code
   */
  name: string;

  /**
   * Asset symbol
   */
  symbol: string;

  /**
   * Type of the asset (`CONTRACT`)
   */
  type?: 'CONTRACT';
}

export interface StellarAssetTransferDetailsSchema {
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
  usd_price?: number;
}

export interface StellarTransactionScanRequest {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet';

  /**
   * Metadata
   */
  metadata:
    | StellarTransactionScanRequest.StellarWalletRequestMetadata
    | StellarTransactionScanRequest.StellarInAppRequestMetadata;

  /**
   * List of XDR-encoded transactions to be scanned
   */
  transactions: Array<string>;

  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   * - `validation`: Include security validation of the transaction in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace StellarTransactionScanRequest {
  export interface StellarWalletRequestMetadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url: string;

    /**
     * Metadata for wallet requests
     */
    type?: 'wallet';
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export interface StellarTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | StellarTransactionScanResponse.StellarSimulationResultSchema
    | StellarTransactionScanResponse.StellarSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | StellarTransactionScanResponse.StellarValidationResultSchema
    | StellarTransactionScanResponse.StellarValidationErrorSchema
    | null;
}

export namespace StellarTransactionScanResponse {
  export interface StellarSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StellarSimulationResultSchema.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StellarSimulationResultSchema.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<string, Array<StellarSimulationResultSchema.AssetsDiff>>;

    /**
     * Mapping between the address of an account to the ownership diff of the account
     * during the transaction
     */
    assets_ownership_diff?: Record<string, StellarSimulationResultSchema.AssetsOwnershipDiff>;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<string, StellarSimulationResultSchema.Exposures>;
  }

  export namespace StellarSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      account_exposures: AccountSummary.AccountExposures;

      /**
       * Account ownerships diff of the requested account address
       */
      account_ownerships_diff: AccountSummary.AccountOwnershipsDiff;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      assets_diffs?: Array<AccountSummary.AssetsDiff>;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      export interface AccountExposures {
        asset: StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * Mapping between the address of a Spender to the exposure of the asset during the
         * transaction
         */
        spenders?: Record<string, AccountExposures.Spenders>;
      }

      export namespace AccountExposures {
        export interface Spenders {
          /**
           * Raw value of the exposure
           */
          raw_value: number;

          /**
           * Value of the exposure
           */
          value: number;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }
      }

      /**
       * Account ownerships diff of the requested account address
       */
      export interface AccountOwnershipsDiff {
        /**
         * List of public keys that can sign on behalf of the account post-transaction
         */
        post_signers: Array<string>;

        /**
         * List of public keys that can sign on behalf of the account pre-transaction
         */
        pre_signers: Array<string>;
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

      export interface AssetsDiff {
        /**
         * Asset involved in the transfer
         */
        asset:
          | AssetsDiff.StellarLegacyAssetDetailsSchema
          | AssetsDiff.StellarNativeAssetDetailsSchema
          | StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * Incoming transfers of the asset
         */
        in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

        /**
         * Outgoing transfers of the asset
         */
        out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
      }

      export namespace AssetsDiff {
        export interface StellarLegacyAssetDetailsSchema {
          /**
           * Asset code
           */
          code: string;

          /**
           * Asset issuer address
           */
          issuer: string;

          /**
           * Organization name
           */
          org_name: string;

          /**
           * Organization URL
           */
          org_url: string;

          /**
           * Type of the asset (`ASSET`)
           */
          type?: 'ASSET';
        }

        export interface StellarNativeAssetDetailsSchema {
          /**
           * Asset code
           */
          code?: 'XLM';

          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
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

    export interface AssetsDiff {
      /**
       * Asset involved in the transfer
       */
      asset:
        | AssetsDiff.StellarLegacyAssetDetailsSchema
        | AssetsDiff.StellarNativeAssetDetailsSchema
        | StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * Incoming transfers of the asset
       */
      in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

      /**
       * Outgoing transfers of the asset
       */
      out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
    }

    export namespace AssetsDiff {
      export interface StellarLegacyAssetDetailsSchema {
        /**
         * Asset code
         */
        code: string;

        /**
         * Asset issuer address
         */
        issuer: string;

        /**
         * Organization name
         */
        org_name: string;

        /**
         * Organization URL
         */
        org_url: string;

        /**
         * Type of the asset (`ASSET`)
         */
        type?: 'ASSET';
      }

      export interface StellarNativeAssetDetailsSchema {
        /**
         * Asset code
         */
        code?: 'XLM';

        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }
    }

    export interface AssetsOwnershipDiff {
      /**
       * List of public keys that can sign on behalf of the account post-transaction
       */
      post_signers: Array<string>;

      /**
       * List of public keys that can sign on behalf of the account pre-transaction
       */
      pre_signers: Array<string>;
    }

    export interface Exposures {
      asset: StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * Mapping between the address of a Spender to the exposure of the asset during the
       * transaction
       */
      spenders?: Record<string, Exposures.Spenders>;
    }

    export namespace Exposures {
      export interface Spenders {
        /**
         * Raw value of the exposure
         */
        raw_value: number;

        /**
         * Value of the exposure
         */
        value: number;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }
    }
  }

  export interface StellarSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface StellarValidationResultSchema {
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
    features: Array<StellarValidationResultSchema.Feature>;

    /**
     * A textual description about the reasons the transaction was flagged with
     * result_type
     */
    reason:
      | ''
      | 'known_attacker'
      | 'known_fraudulent_asset'
      | 'malicious_memo'
      | 'unfair_trade'
      | 'transfer_farming'
      | 'native_ownership_change'
      | 'other';

    /**
     * Verdict of the validation
     */
    result_type: 'Benign' | 'Warning' | 'Malicious';

    status: 'Success';
  }

  export namespace StellarValidationResultSchema {
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

  export interface StellarValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

export interface TransactionScanRequest {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanRequest.StellarWalletRequestMetadata
    | TransactionScanRequest.StellarInAppRequestMetadata;

  /**
   * List of XDR-encoded transactions to be scanned
   */
  transactions: Array<string>;

  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   * - `validation`: Include security validation of the transaction in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionScanRequest {
  export interface StellarWalletRequestMetadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url: string;

    /**
     * Metadata for wallet requests
     */
    type?: 'wallet';
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.StellarSimulationResultSchema
    | TransactionScanResponse.StellarSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.StellarValidationResultSchema
    | TransactionScanResponse.StellarValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface StellarSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StellarSimulationResultSchema.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StellarSimulationResultSchema.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<string, Array<StellarSimulationResultSchema.AssetsDiff>>;

    /**
     * Mapping between the address of an account to the ownership diff of the account
     * during the transaction
     */
    assets_ownership_diff?: Record<string, StellarSimulationResultSchema.AssetsOwnershipDiff>;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<string, StellarSimulationResultSchema.Exposures>;
  }

  export namespace StellarSimulationResultSchema {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      account_exposures: AccountSummary.AccountExposures;

      /**
       * Account ownerships diff of the requested account address
       */
      account_ownerships_diff: AccountSummary.AccountOwnershipsDiff;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      assets_diffs?: Array<AccountSummary.AssetsDiff>;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      export interface AccountExposures {
        asset: StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * Mapping between the address of a Spender to the exposure of the asset during the
         * transaction
         */
        spenders?: Record<string, AccountExposures.Spenders>;
      }

      export namespace AccountExposures {
        export interface Spenders {
          /**
           * Raw value of the exposure
           */
          raw_value: number;

          /**
           * Value of the exposure
           */
          value: number;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }
      }

      /**
       * Account ownerships diff of the requested account address
       */
      export interface AccountOwnershipsDiff {
        /**
         * List of public keys that can sign on behalf of the account post-transaction
         */
        post_signers: Array<string>;

        /**
         * List of public keys that can sign on behalf of the account pre-transaction
         */
        pre_signers: Array<string>;
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

      export interface AssetsDiff {
        /**
         * Asset involved in the transfer
         */
        asset:
          | AssetsDiff.StellarLegacyAssetDetailsSchema
          | AssetsDiff.StellarNativeAssetDetailsSchema
          | StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * Incoming transfers of the asset
         */
        in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

        /**
         * Outgoing transfers of the asset
         */
        out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
      }

      export namespace AssetsDiff {
        export interface StellarLegacyAssetDetailsSchema {
          /**
           * Asset code
           */
          code: string;

          /**
           * Asset issuer address
           */
          issuer: string;

          /**
           * Organization name
           */
          org_name: string;

          /**
           * Organization URL
           */
          org_url: string;

          /**
           * Type of the asset (`ASSET`)
           */
          type?: 'ASSET';
        }

        export interface StellarNativeAssetDetailsSchema {
          /**
           * Asset code
           */
          code?: 'XLM';

          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
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

    export interface AssetsDiff {
      /**
       * Asset involved in the transfer
       */
      asset:
        | AssetsDiff.StellarLegacyAssetDetailsSchema
        | AssetsDiff.StellarNativeAssetDetailsSchema
        | StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * Incoming transfers of the asset
       */
      in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

      /**
       * Outgoing transfers of the asset
       */
      out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
    }

    export namespace AssetsDiff {
      export interface StellarLegacyAssetDetailsSchema {
        /**
         * Asset code
         */
        code: string;

        /**
         * Asset issuer address
         */
        issuer: string;

        /**
         * Organization name
         */
        org_name: string;

        /**
         * Organization URL
         */
        org_url: string;

        /**
         * Type of the asset (`ASSET`)
         */
        type?: 'ASSET';
      }

      export interface StellarNativeAssetDetailsSchema {
        /**
         * Asset code
         */
        code?: 'XLM';

        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }
    }

    export interface AssetsOwnershipDiff {
      /**
       * List of public keys that can sign on behalf of the account post-transaction
       */
      post_signers: Array<string>;

      /**
       * List of public keys that can sign on behalf of the account pre-transaction
       */
      pre_signers: Array<string>;
    }

    export interface Exposures {
      asset: StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * Mapping between the address of a Spender to the exposure of the asset during the
       * transaction
       */
      spenders?: Record<string, Exposures.Spenders>;
    }

    export namespace Exposures {
      export interface Spenders {
        /**
         * Raw value of the exposure
         */
        raw_value: number;

        /**
         * Value of the exposure
         */
        value: number;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }
    }
  }

  export interface StellarSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface StellarValidationResultSchema {
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
    features: Array<StellarValidationResultSchema.Feature>;

    /**
     * A textual description about the reasons the transaction was flagged with
     * result_type
     */
    reason:
      | ''
      | 'known_attacker'
      | 'known_fraudulent_asset'
      | 'malicious_memo'
      | 'unfair_trade'
      | 'transfer_farming'
      | 'native_ownership_change'
      | 'other';

    /**
     * Verdict of the validation
     */
    result_type: 'Benign' | 'Warning' | 'Malicious';

    status: 'Success';
  }

  export namespace StellarValidationResultSchema {
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

  export interface StellarValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

export namespace Stellar {
  export import StellarAssetContractDetailsSchema = StellarAPI.StellarAssetContractDetailsSchema;
  export import StellarAssetTransferDetailsSchema = StellarAPI.StellarAssetTransferDetailsSchema;
  export import StellarTransactionScanRequest = StellarAPI.StellarTransactionScanRequest;
  export import StellarTransactionScanResponse = StellarAPI.StellarTransactionScanResponse;
  export import TransactionScanRequest = StellarAPI.TransactionScanRequest;
  export import TransactionScanResponse = StellarAPI.TransactionScanResponse;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
