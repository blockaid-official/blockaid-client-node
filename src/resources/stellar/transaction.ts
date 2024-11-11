// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transaction extends APIResource {
  /**
   * Report Transaction
   */
  report(
    body: TransactionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionReportResponse> {
    return this._client.post('/v0/stellar/transaction/report', { body, ...options });
  }

  /**
   * Scan Transaction
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/stellar/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = number;

export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.StellarSimulationResponse
    | TransactionScanResponse.StellarSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.StellarValidationResult
    | TransactionScanResponse.StellarValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface StellarSimulationResponse {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StellarSimulationResponse.AccountSummary;

    /**
     * Ownership diffs of the account addresses
     */
    assets_ownership_diff: Record<string, Array<StellarSimulationResponse.AssetsOwnershipDiff>>;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StellarSimulationResponse.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | StellarSimulationResponse.StellarLegacyAssetDiff
        | StellarSimulationResponse.StellarNativeAssetDiff
        | StellarSimulationResponse.StellarContractAssetDiff
      >
    >;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<
      string,
      Array<
        | StellarSimulationResponse.StellarLegacyAssetExposure
        | StellarSimulationResponse.StellarNativeAssetExposure
      >
    >;
  }

  export namespace StellarSimulationResponse {
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
        asset: StellarLegacyAssetExposure.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<string, StellarLegacyAssetExposure.Spenders>;
      }

      export namespace StellarLegacyAssetExposure {
        export interface Asset {
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

        export interface Spenders {
          /**
           * Approval value of the ERC20 token
           */
          approval: string;

          exposure: Array<Spenders.Exposure>;

          /**
           * Expiration date of the approval
           */
          expiration?: string | null;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }

        export namespace Spenders {
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
      }

      export interface StellarNativeAssetExposure {
        asset: StellarNativeAssetExposure.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<string, StellarNativeAssetExposure.Spenders>;
      }

      export namespace StellarNativeAssetExposure {
        export interface Asset {
          /**
           * Asset code
           */
          code?: 'XLM';

          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
        }

        export interface Spenders {
          /**
           * Approval value of the ERC20 token
           */
          approval: string;

          exposure: Array<Spenders.Exposure>;

          /**
           * Expiration date of the approval
           */
          expiration?: string | null;

          /**
           * Summarized description of the exposure
           */
          summary?: string | null;
        }

        export namespace Spenders {
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
        asset: StellarLegacyAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarLegacyAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarLegacyAssetDiff.Out | null;
      }

      export namespace StellarLegacyAssetDiff {
        export interface Asset {
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

        /**
         * Details of the incoming transfer
         */
        export interface In {
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

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
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

      export interface StellarNativeAssetDiff {
        asset: StellarNativeAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarNativeAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarNativeAssetDiff.Out | null;
      }

      export namespace StellarNativeAssetDiff {
        export interface Asset {
          /**
           * Asset code
           */
          code?: 'XLM';

          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
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

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
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

      export interface StellarContractAssetDiff {
        asset: StellarContractAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarContractAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarContractAssetDiff.Out | null;
      }

      export namespace StellarContractAssetDiff {
        export interface Asset {
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

        /**
         * Details of the incoming transfer
         */
        export interface In {
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

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
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
      asset: StellarLegacyAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarLegacyAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarLegacyAssetDiff.Out | null;
    }

    export namespace StellarLegacyAssetDiff {
      export interface Asset {
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

      /**
       * Details of the incoming transfer
       */
      export interface In {
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

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
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

    export interface StellarNativeAssetDiff {
      asset: StellarNativeAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarNativeAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarNativeAssetDiff.Out | null;
    }

    export namespace StellarNativeAssetDiff {
      export interface Asset {
        /**
         * Asset code
         */
        code?: 'XLM';

        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }

      /**
       * Details of the incoming transfer
       */
      export interface In {
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

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
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

    export interface StellarContractAssetDiff {
      asset: StellarContractAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarContractAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarContractAssetDiff.Out | null;
    }

    export namespace StellarContractAssetDiff {
      export interface Asset {
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

      /**
       * Details of the incoming transfer
       */
      export interface In {
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

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
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

    export interface StellarLegacyAssetExposure {
      asset: StellarLegacyAssetExposure.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<string, StellarLegacyAssetExposure.Spenders>;
    }

    export namespace StellarLegacyAssetExposure {
      export interface Asset {
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

      export interface Spenders {
        /**
         * Approval value of the ERC20 token
         */
        approval: string;

        exposure: Array<Spenders.Exposure>;

        /**
         * Expiration date of the approval
         */
        expiration?: string | null;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }

      export namespace Spenders {
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
    }

    export interface StellarNativeAssetExposure {
      asset: StellarNativeAssetExposure.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<string, StellarNativeAssetExposure.Spenders>;
    }

    export namespace StellarNativeAssetExposure {
      export interface Asset {
        /**
         * Asset code
         */
        code?: 'XLM';

        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }

      export interface Spenders {
        /**
         * Approval value of the ERC20 token
         */
        approval: string;

        exposure: Array<Spenders.Exposure>;

        /**
         * Expiration date of the approval
         */
        expiration?: string | null;

        /**
         * Summarized description of the exposure
         */
        summary?: string | null;
      }

      export namespace Spenders {
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

export interface TransactionReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign';

  report:
    | TransactionReportParams.StellarAppealRequestID
    | TransactionReportParams.StellarAppealTransactionDataReport;
}

export namespace TransactionReportParams {
  export interface StellarAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface StellarAppealTransactionDataReport {
    params: StellarAppealTransactionDataReport.Params;

    type?: 'params';
  }

  export namespace StellarAppealTransactionDataReport {
    export interface Params {
      account_address: string;

      /**
       * A CAIP-2 chain ID or a Stellar network name
       */
      chain: 'pubnet' | 'futurenet' | 'testnet';

      /**
       * Metadata
       */
      metadata: Params.StellarWalletRequestMetadata | Params.StellarInAppRequestMetadata;

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

    export namespace Params {
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
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
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
    type?: 'in_app';
  }
}

export declare namespace Transaction {
  export {
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
