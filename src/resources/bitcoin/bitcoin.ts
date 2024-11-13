// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams } from './transaction';

export class Bitcoin extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
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
    status: 'Success';

    account_summary?: null;

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<BitcoinSimulationResult.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | BitcoinSimulationResult.BitcoinNativeAssetDiff
        | BitcoinSimulationResult.BitcoinOrdinalAssetDiff
        | BitcoinSimulationResult.BitcoinRunesAssetDiff
      >
    >;
  }

  export namespace BitcoinSimulationResult {
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
        raw_value: string;

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
        raw_value: string;

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

    export interface BitcoinOrdinalAssetDiff {
      asset: BitcoinOrdinalAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinOrdinalAssetDiff.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinOrdinalAssetDiff.Out | null;
    }

    export namespace BitcoinOrdinalAssetDiff {
      export interface Asset {
        /**
         * token's name
         */
        name: string;

        /**
         * URL of the asset's logo
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`ORDINAL`)
         */
        type?: 'ORDINAL';
      }

      /**
       * Details of the incoming transfer
       */
      export interface In {
        /**
         * Id of the ordinal
         */
        id: string;

        /**
         * Raw value of the transfer
         */
        raw_value: string;

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
         * Id of the ordinal
         */
        id: string;

        /**
         * Raw value of the transfer
         */
        raw_value: string;

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
         * token's symbol
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
        raw_value: string;

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
        raw_value: string;

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

Bitcoin.Transaction = Transaction;

export declare namespace Bitcoin {
  export {
    type BitcoinTransactionScanRequest as BitcoinTransactionScanRequest,
    type BitcoinTransactionScanResponse as BitcoinTransactionScanResponse,
  };

  export { Transaction as Transaction, type TransactionScanParams as TransactionScanParams };
}
