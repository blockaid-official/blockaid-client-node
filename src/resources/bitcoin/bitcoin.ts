// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  /**
   * The Bitcoin address that owns the UTXOs being spent.
   */
  account_address: string;

  chain: 'bitcoin';

  /**
   * Context of where the transaction was initiated: use wallet metadata when the
   * user is signing in a wallet for an external site; use in-app metadata when the
   * transaction is created within your own app.
   *
   * Choosing the correct type improves risk analysis and reporting.
   */
  metadata:
    | BitcoinTransactionScanRequest.BitcoinWalletRequestMetadata
    | BitcoinTransactionScanRequest.BitcoinInAppRequestMetadata;

  /**
   * The raw unsigned transaction in hexadecimal, as produced by the wallet or your
   * app. This is the same payload the user would sign.
   */
  transaction: string;

  /**
   * Which parts of the response you need:
   *
   * - **validation** — Security verdict (Benign/Warning/Malicious) and risk
   *   explanation. Use when deciding whether to block or warn.
   * - **simulation** — Predicted summary of balance and asset changes (e.g. "You
   *   will send 0.01 BTC to bc1q..."). Use when showing the user what the
   *   transaction does.
   *
   * You can request one or both; default is both.
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace BitcoinTransactionScanRequest {
  export interface BitcoinWalletRequestMetadata {
    /**
     * Identifies the request as a wallet signing a transaction on behalf of an
     * external dApp. The type improves threat context and helps attribute risk to
     * specific origins.
     */
    type: 'wallet';

    /**
     * The full URL of the dApp or page where the user initiated the transaction (e.g.
     * https://app.example.com/swap).
     */
    url: string;

    /**
     * Account information associated with the request
     */
    account?: BitcoinWalletRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: BitcoinWalletRequestMetadata.Connection;
  }

  export namespace BitcoinWalletRequestMetadata {
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

  export interface BitcoinInAppRequestMetadata {
    /**
     * Account information associated with the request
     */
    account?: BitcoinInAppRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: BitcoinInAppRequestMetadata.Connection;

    /**
     * Identifies the request as coming from your own app (e.g. in-app send, swap, or
     * internal flow).
     */
    type?: 'in_app';
  }

  export namespace BitcoinInAppRequestMetadata {
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
     * account address.
     */
    account_summary: BitcoinSimulationResult.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction.
     */
    address_details?: Array<BitcoinSimulationResult.AddressDetail>;

    /**
     * Per-account list of asset balance changes (native, inscriptions, runes) for the
     * simulated transaction.
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
     * account address.
     */
    export interface AccountSummary {
      /**
       * Net change in USD value (incoming minus outgoing) for the requested account.
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Per-asset balance changes (native BTC, inscriptions, runes) for the requested
       * account.
       */
      account_assets_diffs?: Array<
        | AccountSummary.BitcoinNativeAssetDiff
        | AccountSummary.BitcoinInscriptionAssetDiff
        | AccountSummary.BitcoinRunesAssetDiff
      >;
    }

    export namespace AccountSummary {
      /**
       * Net change in USD value (incoming minus outgoing) for the requested account.
       */
      export interface TotalUsdDiff {
        /**
         * Total incoming USD transfers.
         */
        in: number;

        /**
         * Total outgoing USD transfers.
         */
        out: number;

        /**
         * Total USD transfers.
         */
        total?: number;
      }

      export interface BitcoinNativeAssetDiff {
        asset: BitcoinNativeAssetDiff.Asset;

        /**
         * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
         */
        asset_type: string;

        /**
         * Details of the incoming transfer.
         */
        in?: BitcoinNativeAssetDiff.In | null;

        /**
         * Details of the outgoing transfer.
         */
        out?: BitcoinNativeAssetDiff.Out | null;
      }

      export namespace BitcoinNativeAssetDiff {
        export interface Asset {
          /**
           * URL of the asset's logo.
           */
          logo_url: string | null;

          /**
           * Number of decimal places used to represent fractional units (e.g. 8 for BTC).
           */
          decimals?: 8;

          /**
           * Name of the asset.
           */
          name?: 'Bitcoin';

          /**
           * Symbol of the asset.
           */
          symbol?: 'BTC';

          /**
           * Type of the asset (`NATIVE`).
           */
          type?: 'NATIVE';
        }

        /**
         * Details of the incoming transfer.
         */
        export interface In {
          /**
           * Raw value of the transfer.
           */
          raw_value: number;

          /**
           * Value of the transfer.
           */
          value: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer.
         */
        export interface Out {
          /**
           * Raw value of the transfer.
           */
          raw_value: number;

          /**
           * Value of the transfer.
           */
          value: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
           */
          usd_price?: number | null;
        }
      }

      export interface BitcoinInscriptionAssetDiff {
        asset: BitcoinInscriptionAssetDiff.Asset;

        /**
         * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
         */
        asset_type: string;

        /**
         * Details of the incoming transfer.
         */
        in?: BitcoinInscriptionAssetDiff.In | null;

        /**
         * Details of the outgoing transfer.
         */
        out?: BitcoinInscriptionAssetDiff.Out | null;
      }

      export namespace BitcoinInscriptionAssetDiff {
        export interface Asset {
          /**
           * The Inscription ID.
           */
          id: string;

          /**
           * Inscription's display name.
           */
          name: string;

          /**
           * The Inscription sat.
           */
          sat: number;

          /**
           * URL of the asset's logo.
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`INSCRIPTION`).
           */
          type?: 'INSCRIPTION';
        }

        /**
         * Details of the incoming transfer.
         */
        export interface In {
          /**
           * Inscription ID of the transfer.
           */
          inscription_id: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer.
         */
        export interface Out {
          /**
           * Inscription ID of the transfer.
           */
          inscription_id: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
           */
          usd_price?: number | null;
        }
      }

      export interface BitcoinRunesAssetDiff {
        asset: BitcoinRunesAssetDiff.Asset;

        /**
         * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
         */
        asset_type: string;

        /**
         * Details of the incoming transfer.
         */
        in?: BitcoinRunesAssetDiff.In | null;

        /**
         * Details of the outgoing transfer.
         */
        out?: BitcoinRunesAssetDiff.Out | null;
      }

      export namespace BitcoinRunesAssetDiff {
        export interface Asset {
          /**
           * The Rune ID.
           */
          id: string;

          /**
           * Number of decimal places used to represent fractional units.
           */
          decimals: number;

          /**
           * The Rune name.
           */
          name: string;

          /**
           * The Rune spaced name.
           */
          spaced_name: string;

          /**
           * The Rune's symbol.
           */
          symbol: string;

          /**
           * URL of the asset's logo.
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`RUNE`).
           */
          type?: 'RUNE';
        }

        /**
         * Details of the incoming transfer.
         */
        export interface In {
          /**
           * Raw value of the transfer.
           */
          raw_value: number;

          /**
           * Value of the transfer.
           */
          value: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
           */
          usd_price?: number | null;
        }

        /**
         * Details of the outgoing transfer.
         */
        export interface Out {
          /**
           * Raw value of the transfer.
           */
          raw_value: number;

          /**
           * Value of the transfer.
           */
          value: string;

          /**
           * Summarized description of the transfer.
           */
          summary?: string | null;

          /**
           * USD price of the asset.
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
       * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
       */
      asset_type: string;

      /**
       * Details of the incoming transfer.
       */
      in?: BitcoinNativeAssetDiff.In | null;

      /**
       * Details of the outgoing transfer.
       */
      out?: BitcoinNativeAssetDiff.Out | null;
    }

    export namespace BitcoinNativeAssetDiff {
      export interface Asset {
        /**
         * URL of the asset's logo.
         */
        logo_url: string | null;

        /**
         * Number of decimal places used to represent fractional units (e.g. 8 for BTC).
         */
        decimals?: 8;

        /**
         * Name of the asset.
         */
        name?: 'Bitcoin';

        /**
         * Symbol of the asset.
         */
        symbol?: 'BTC';

        /**
         * Type of the asset (`NATIVE`).
         */
        type?: 'NATIVE';
      }

      /**
       * Details of the incoming transfer.
       */
      export interface In {
        /**
         * Raw value of the transfer.
         */
        raw_value: number;

        /**
         * Value of the transfer.
         */
        value: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
         */
        usd_price?: number | null;
      }

      /**
       * Details of the outgoing transfer.
       */
      export interface Out {
        /**
         * Raw value of the transfer.
         */
        raw_value: number;

        /**
         * Value of the transfer.
         */
        value: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
         */
        usd_price?: number | null;
      }
    }

    export interface BitcoinInscriptionAssetDiff {
      asset: BitcoinInscriptionAssetDiff.Asset;

      /**
       * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
       */
      asset_type: string;

      /**
       * Details of the incoming transfer.
       */
      in?: BitcoinInscriptionAssetDiff.In | null;

      /**
       * Details of the outgoing transfer.
       */
      out?: BitcoinInscriptionAssetDiff.Out | null;
    }

    export namespace BitcoinInscriptionAssetDiff {
      export interface Asset {
        /**
         * The Inscription ID.
         */
        id: string;

        /**
         * Inscription's display name.
         */
        name: string;

        /**
         * The Inscription sat.
         */
        sat: number;

        /**
         * URL of the asset's logo.
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`INSCRIPTION`).
         */
        type?: 'INSCRIPTION';
      }

      /**
       * Details of the incoming transfer.
       */
      export interface In {
        /**
         * Inscription ID of the transfer.
         */
        inscription_id: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
         */
        usd_price?: number | null;
      }

      /**
       * Details of the outgoing transfer.
       */
      export interface Out {
        /**
         * Inscription ID of the transfer.
         */
        inscription_id: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
         */
        usd_price?: number | null;
      }
    }

    export interface BitcoinRunesAssetDiff {
      asset: BitcoinRunesAssetDiff.Asset;

      /**
       * Asset category for this balance change (e.g. NATIVE, RUNE, INSCRIPTION).
       */
      asset_type: string;

      /**
       * Details of the incoming transfer.
       */
      in?: BitcoinRunesAssetDiff.In | null;

      /**
       * Details of the outgoing transfer.
       */
      out?: BitcoinRunesAssetDiff.Out | null;
    }

    export namespace BitcoinRunesAssetDiff {
      export interface Asset {
        /**
         * The Rune ID.
         */
        id: string;

        /**
         * Number of decimal places used to represent fractional units.
         */
        decimals: number;

        /**
         * The Rune name.
         */
        name: string;

        /**
         * The Rune spaced name.
         */
        spaced_name: string;

        /**
         * The Rune's symbol.
         */
        symbol: string;

        /**
         * URL of the asset's logo.
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`RUNE`).
         */
        type?: 'RUNE';
      }

      /**
       * Details of the incoming transfer.
       */
      export interface In {
        /**
         * Raw value of the transfer.
         */
        raw_value: number;

        /**
         * Value of the transfer.
         */
        value: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
         */
        usd_price?: number | null;
      }

      /**
       * Details of the outgoing transfer.
       */
      export interface Out {
        /**
         * Raw value of the transfer.
         */
        raw_value: number;

        /**
         * Value of the transfer.
         */
        value: string;

        /**
         * Summarized description of the transfer.
         */
        summary?: string | null;

        /**
         * USD price of the asset.
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
     * A textual description about the validation result.
     */
    description: string;

    /**
     * List of validation findings (addresses and classifications) that contributed to
     * the verdict.
     */
    features: Array<BitcoinValidationResult.Feature>;

    /**
     * Human-readable explanation of why the transaction received the given
     * `result_type` verdict.
     */
    reason: string;

    /**
     * Verdict of the validation.
     */
    result_type: 'Benign' | 'Warning' | 'Malicious';

    status: 'Success';
  }

  export namespace BitcoinValidationResult {
    export interface Feature {
      /**
       * Bitcoin address that this finding is associated with.
       */
      address: string;

      /**
       * Human-readable explanation of this finding.
       */
      description: string;

      /**
       * Unique identifier for this type of finding.
       */
      feature_id: string;

      /**
       * Severity or category of this finding (e.g. Benign, Warning, Malicious, Info).
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
