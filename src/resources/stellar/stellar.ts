// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StellarAPI from './stellar';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams } from './transaction';

export class Stellar extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StellarAssetContractDetails {
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

export interface StellarAssetTransferDetails {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * USD price of the asset
   */
  usd_price: string;

  /**
   * Value of the transfer
   */
  value: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StellarLegacyAssetDetails {
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

export interface StellarNativeAssetDetails {
  /**
   * Asset code
   */
  code?: 'XLM';

  /**
   * Type of the asset (`NATIVE`)
   */
  type?: 'NATIVE';
}

export interface StellarSingleAssetExposure {
  /**
   * Approval value of the ERC20 token
   */
  approval: string;

  exposure: Array<StellarSingleAssetExposure.Exposure>;

  /**
   * Expiration date of the approval
   */
  expiration?: string | null;

  /**
   * Summarized description of the exposure
   */
  summary?: string | null;
}

export namespace StellarSingleAssetExposure {
  export interface Exposure {
    /**
     * Raw value of the transfer
     */
    raw_value: number;

    /**
     * USD price of the asset
     */
    usd_price: string;

    /**
     * Value of the transfer
     */
    value: string;

    /**
     * Summarized description of the transfer
     */
    summary?: string | null;
  }
}

export interface StellarTransactionScanRequest {
  account_address: string;

  /**
   * A CAIP-2 chain ID or a Stellar network name
   */
  chain: 'pubnet' | 'futurenet' | 'testnet';

  /**
   * Metadata
   */
  metadata:
    | StellarTransactionScanRequest.StellarWalletRequestMetadata
    | StellarTransactionScanRequest.StellarInAppRequestMetadata;

  transaction: string;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace StellarTransactionScanRequest {
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
    type?: 'in_app';
  }
}

export interface StellarTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | StellarTransactionScanResponse.StellarSimulationResult
    | StellarTransactionScanResponse.StellarSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | StellarTransactionScanResponse.StellarValidationResult
    | StellarTransactionScanResponse.StellarValidationErrorSchema
    | null;
}

export namespace StellarTransactionScanResponse {
  export interface StellarSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StellarSimulationResult.AccountSummary;

    /**
     * Ownership diffs of the account addresses
     */
    assets_ownership_diff: Record<string, Array<StellarSimulationResult.AssetsOwnershipDiff>>;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StellarSimulationResult.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | StellarSimulationResult.StellarLegacyAssetDiff
        | StellarSimulationResult.StellarNativeAssetDiff
        | StellarSimulationResult.StellarContractAssetDiff
      >
    >;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<
      string,
      Array<
        | StellarSimulationResult.StellarLegacyAssetExposure
        | StellarSimulationResult.StellarNativeAssetExposure
      >
    >;
  }

  export namespace StellarSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      account_exposures: Array<
        AccountSummary.StellarLegacyAssetExposure | AccountSummary.StellarNativeAssetExposure
      >;

      /**
       * Ownership diffs of the requested account address
       */
      account_ownerships_diff: Array<AccountSummary.AccountOwnershipsDiff>;

      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      account_assets_diffs?: Array<
        | AccountSummary.StellarLegacyAssetDiff
        | AccountSummary.StellarNativeAssetDiff
        | AccountSummary.StellarContractAssetDiff
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      export interface StellarLegacyAssetExposure {
        asset: StellarAPI.StellarLegacyAssetDetails;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<string, StellarAPI.StellarSingleAssetExposure>;
      }

      export interface StellarNativeAssetExposure {
        asset: StellarAPI.StellarNativeAssetDetails;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<string, StellarAPI.StellarSingleAssetExposure>;
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

        type?: 'SET_OPTIONS';
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

      export interface StellarLegacyAssetDiff {
        asset: StellarAPI.StellarLegacyAssetDetails;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetails | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetails | null;
      }

      export interface StellarNativeAssetDiff {
        asset: StellarAPI.StellarNativeAssetDetails;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetails | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetails | null;
      }

      export interface StellarContractAssetDiff {
        asset: StellarAPI.StellarAssetContractDetails;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetails | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetails | null;
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

      type?: 'SET_OPTIONS';
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

    export interface StellarLegacyAssetDiff {
      asset: StellarAPI.StellarLegacyAssetDetails;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetails | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetails | null;
    }

    export interface StellarNativeAssetDiff {
      asset: StellarAPI.StellarNativeAssetDetails;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetails | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetails | null;
    }

    export interface StellarContractAssetDiff {
      asset: StellarAPI.StellarAssetContractDetails;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetails | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetails | null;
    }

    export interface StellarLegacyAssetExposure {
      asset: StellarAPI.StellarLegacyAssetDetails;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<string, StellarAPI.StellarSingleAssetExposure>;
    }

    export interface StellarNativeAssetExposure {
      asset: StellarAPI.StellarNativeAssetDetails;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<string, StellarAPI.StellarSingleAssetExposure>;
    }
  }

  export interface StellarSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface StellarValidationResult {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    features: Array<StellarValidationResult.Feature>;

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

  export namespace StellarValidationResult {
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

Stellar.Transaction = Transaction;

export declare namespace Stellar {
  export {
    type StellarAssetContractDetails as StellarAssetContractDetails,
    type StellarAssetTransferDetails as StellarAssetTransferDetails,
    type StellarLegacyAssetDetails as StellarLegacyAssetDetails,
    type StellarNativeAssetDetails as StellarNativeAssetDetails,
    type StellarSingleAssetExposure as StellarSingleAssetExposure,
    type StellarTransactionScanRequest as StellarTransactionScanRequest,
    type StellarTransactionScanResponse as StellarTransactionScanResponse,
  };

  export { Transaction as Transaction, type TransactionScanParams as TransactionScanParams };
}
