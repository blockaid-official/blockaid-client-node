// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionRawAPI from './transaction-raw';
import {
  TransactionRaw,
  TransactionRawReportParams,
  TransactionRawReportResponse,
  TransactionRawScanParams,
} from './transaction-raw';

export class Bitcoin extends APIResource {
  transactionRaw: TransactionRawAPI.TransactionRaw = new TransactionRawAPI.TransactionRaw(this._client);
}

export interface BitcoinTransactionScanRequest {
  account_address: string;

  chain: 'bitcoin';

  /**
   * Metadata
   */
  metadata:
    | BitcoinTransactionScanRequest.BitcoinWalletRequestMetadata
    | BitcoinTransactionScanRequest.BitcoinInAppRequestMetadata;

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

export namespace BitcoinTransactionScanRequest {
  export interface BitcoinWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface BitcoinInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export interface BitcoinTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | BitcoinTransactionScanResponse.BitcoinSimulationResult
    | BitcoinTransactionScanResponse.BitcoinSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | BitcoinTransactionScanResponse.BitcoinValidationResult
    | BitcoinTransactionScanResponse.BitcoinValidationErrorSchema
    | null;
}

export namespace BitcoinTransactionScanResponse {
  export interface BitcoinSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: BitcoinSimulationResult.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<BitcoinSimulationResult.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: {
      [key: string]: Array<
        | BitcoinSimulationResult.BitcoinNativeAssetDiff
        | BitcoinSimulationResult.BitcoinInscriptionAssetDiff
        | BitcoinSimulationResult.BitcoinRunesAssetDiff
      >;
    };
  }

  export namespace BitcoinSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      account_assets_diffs?: Array<
        | AccountSummary.BitcoinNativeAssetDiff
        | AccountSummary.BitcoinInscriptionAssetDiff
        | AccountSummary.BitcoinRunesAssetDiff
      >;
    }

    export namespace AccountSummary {
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

      export interface BitcoinNativeAssetDiff {
        asset: BitcoinNativeAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: BitcoinNativeAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: BitcoinNativeAssetDiff.Out | null;
      }

      export namespace BitcoinNativeAssetDiff {
        export interface Asset {
          /**
           * URL of the asset's logo
           */
          logo_url: string | null;

          /**
           * Decimals of the asset
           */
          decimals?: 8;

          /**
           * Name of the asset
           */
          name?: 'Bitcoin';

          /**
           * Symbol of the asset
           */
          symbol?: 'BTC';

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

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
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
      }

      export interface BitcoinInscriptionAssetDiff {
        asset: BitcoinInscriptionAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: BitcoinInscriptionAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: BitcoinInscriptionAssetDiff.Out | null;
      }

      export namespace BitcoinInscriptionAssetDiff {
        export interface Asset {
          /**
           * The Inscription ID
           */
          id: string;

          /**
           * Inscription's display name
           */
          name: string;

          /**
           * The Inscription sat
           */
          sat: number;

          /**
           * URL of the asset's logo
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`INSCRIPTION`)
           */
          type?: 'INSCRIPTION';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Inscription ID of the transfer
           */
          inscription_id: string;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
          /**
           * Inscription ID of the transfer
           */
          inscription_id: string;

          /**
           * Summarized description of the transfer
           */
          summary?: string | null;

          /**
           * USD price of the asset
           */
          usd_price?: number | null;
        }
      }

      export interface BitcoinRunesAssetDiff {
        asset: BitcoinRunesAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: BitcoinRunesAssetDiff.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: BitcoinRunesAssetDiff.Out | null;
      }

      export namespace BitcoinRunesAssetDiff {
        export interface Asset {
          /**
           * The Rune ID
           */
          id: string;

          /**
           * Decimals of the asset
           */
          decimals: number;

          /**
           * The Rune name
           */
          name: string;

          /**
           * The Rune spaced name
           */
          spaced_name: string;

          /**
           * The Rune's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`RUNE`)
           */
          type?: 'RUNE';
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

        /**
         * Details of the outgoing transfer
         */
        export interface Out {
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

    export interface BitcoinNativeAssetDiff {
      asset: BitcoinNativeAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinNativeAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinNativeAssetDiff.Out | null;
    }

    export namespace BitcoinNativeAssetDiff {
      export interface Asset {
        /**
         * URL of the asset's logo
         */
        logo_url: string | null;

        /**
         * Decimals of the asset
         */
        decimals?: 8;

        /**
         * Name of the asset
         */
        name?: 'Bitcoin';

        /**
         * Symbol of the asset
         */
        symbol?: 'BTC';

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

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
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
    }

    export interface BitcoinInscriptionAssetDiff {
      asset: BitcoinInscriptionAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinInscriptionAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinInscriptionAssetDiff.Out | null;
    }

    export namespace BitcoinInscriptionAssetDiff {
      export interface Asset {
        /**
         * The Inscription ID
         */
        id: string;

        /**
         * Inscription's display name
         */
        name: string;

        /**
         * The Inscription sat
         */
        sat: number;

        /**
         * URL of the asset's logo
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`INSCRIPTION`)
         */
        type?: 'INSCRIPTION';
      }

      /**
       * Details of the incoming transfer
       */
      export interface In {
        /**
         * Inscription ID of the transfer
         */
        inscription_id: string;

        /**
         * Summarized description of the transfer
         */
        summary?: string | null;

        /**
         * USD price of the asset
         */
        usd_price?: number | null;
      }

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
        /**
         * Inscription ID of the transfer
         */
        inscription_id: string;

        /**
         * Summarized description of the transfer
         */
        summary?: string | null;

        /**
         * USD price of the asset
         */
        usd_price?: number | null;
      }
    }

    export interface BitcoinRunesAssetDiff {
      asset: BitcoinRunesAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinRunesAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinRunesAssetDiff.Out | null;
    }

    export namespace BitcoinRunesAssetDiff {
      export interface Asset {
        /**
         * The Rune ID
         */
        id: string;

        /**
         * Decimals of the asset
         */
        decimals: number;

        /**
         * The Rune name
         */
        name: string;

        /**
         * The Rune spaced name
         */
        spaced_name: string;

        /**
         * The Rune's symbol
         */
        symbol: string;

        /**
         * URL of the asset's logo
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`RUNE`)
         */
        type?: 'RUNE';
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

      /**
       * Details of the outgoing transfer
       */
      export interface Out {
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
    }
  }

  export interface BitcoinSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface BitcoinValidationResult {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    features: Array<BitcoinValidationResult.Feature>;

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

  export namespace BitcoinValidationResult {
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

  export interface BitcoinValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

Bitcoin.TransactionRaw = TransactionRaw;

export declare namespace Bitcoin {
  export {
    type BitcoinTransactionScanRequest as BitcoinTransactionScanRequest,
    type BitcoinTransactionScanResponse as BitcoinTransactionScanResponse,
  };

  export {
    TransactionRaw as TransactionRaw,
    type TransactionRawReportResponse as TransactionRawReportResponse,
    type TransactionRawReportParams as TransactionRawReportParams,
    type TransactionRawScanParams as TransactionRawScanParams,
  };
}
