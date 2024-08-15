// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionAPI from './transaction';
import * as StellarAPI from './stellar';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/stellar/transaction/scan', { body, ...options });
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
    assets_ownership_diff?: Record<string, Array<StellarSimulationResultSchema.AssetsOwnershipDiff>>;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<string, Array<StellarSimulationResultSchema.Exposure>>;
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
      account_exposures: Array<AccountSummary.AccountExposure>;

      /**
       * Account ownerships diff of the requested account address
       */
      account_ownerships_diff: Array<AccountSummary.AccountOwnershipsDiff>;

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
      export interface AccountExposure {
        asset: StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * Mapping between the address of a Spender to the exposure of the asset during the
         * transaction
         */
        spenders?: Record<string, AccountExposure.Spenders>;
      }

      export namespace AccountExposure {
        export interface Spenders {
          /**
           * Raw value of the exposure
           */
          raw_value: number;

          /**
           * USD value of the exposure
           */
          usd_price: number;

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

      export interface AccountOwnershipsDiff {
        /**
         * List of public keys that can sign on behalf of the account post-transaction
         */
        post_signers: Array<string>;

        /**
         * List of public keys that can sign on behalf of the account pre-transaction
         */
        pre_signers: Array<string>;

        type: 'SET_OPTIONS';
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

      type: 'SET_OPTIONS';
    }

    export interface Exposure {
      asset: StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * Mapping between the address of a Spender to the exposure of the asset during the
       * transaction
       */
      spenders?: Record<string, Exposure.Spenders>;
    }

    export namespace Exposure {
      export interface Spenders {
        /**
         * Raw value of the exposure
         */
        raw_value: number;

        /**
         * USD value of the exposure
         */
        usd_price: number;

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
    reason: string;

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

export interface TransactionScanParams {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet' | 'testnet';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.StellarWalletRequestMetadata
    | TransactionScanParams.StellarInAppRequestMetadata;

  transaction: string;

  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   * - `validation`: Include security validation of the transaction in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionScanParams {
  export interface StellarWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type: 'in_app';
  }
}

export namespace Transaction {
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
