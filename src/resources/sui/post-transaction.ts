// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SuiAPI from './sui';

export class PostTransaction extends APIResource {
  /**
   * Scan a transaction that was already executed on chain, returns validation with
   * features indicating address poisoning entities and malicious operators.
   *
   * @example
   * ```ts
   * const response = await client.sui.postTransaction.scan({
   *   chain: 'mainnet',
   *   data: {
   *     tx_hash: '7h7BZFAq5PfxqJEVqrm5g6oUZNkHGEip57vXsQRVgjmp',
   *   },
   *   metadata: { non_dapp: true, domain: 'valid.com' },
   *   options: ['simulation'],
   * });
   * ```
   */
  scan(
    body: PostTransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTransactionScanResponse> {
    return this._client.post('/v0/sui/post-transaction/scan', { body, ...options });
  }
}

export interface PostTransactionScanResponse {
  account_address: string;

  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | PostTransactionScanResponse.SuiPostTransactionSimulationResult
    | PostTransactionScanResponse.SuiSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | PostTransactionScanResponse.SuiValidationResult
    | PostTransactionScanResponse.SuiValidationErrorSchema
    | null;
}

export namespace PostTransactionScanResponse {
  export interface SuiPostTransactionSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: SuiPostTransactionSimulationResult.AccountSummary;

    params: SuiPostTransactionSimulationResult.Params;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<SuiPostTransactionSimulationResult.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: {
      [key: string]: Array<
        | SuiPostTransactionSimulationResult.SuiNativeAssetDiff
        | SuiPostTransactionSimulationResult.SuiNFTAssetDiff
        | SuiPostTransactionSimulationResult.SuiCoinsAssetDiff
      >;
    };
  }

  export namespace SuiPostTransactionSimulationResult {
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
        AccountSummary.SuiNativeAssetDiff | AccountSummary.SuiNFTAssetDiff | AccountSummary.SuiCoinsAssetDiff
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

      export interface SuiNativeAssetDiff {
        asset: SuiAPI.SuiNativeAssetDetailsSchema;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SuiAPI.SuiAssetTransferDetailsSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SuiAPI.SuiAssetTransferDetailsSchema | null;
      }

      export interface SuiNFTAssetDiff {
        asset: SuiAPI.SuiNFTDetailsSchema;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SuiAPI.SuiNFTDiffSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SuiAPI.SuiNFTDiffSchema | null;
      }

      export interface SuiCoinsAssetDiff {
        asset: SuiCoinsAssetDiff.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: SuiAPI.SuiAssetTransferDetailsSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: SuiAPI.SuiAssetTransferDetailsSchema | null;
      }

      export namespace SuiCoinsAssetDiff {
        export interface Asset {
          /**
           * Token's package address
           */
          address: string;

          /**
           * Token's decimal precision
           */
          decimals: number;

          /**
           * Token's name
           */
          name: string;

          /**
           * Token's symbol (abbreviation)
           */
          symbol: string;

          creation_timestamp?: string | null;

          /**
           * Address of the token's deployer
           */
          deployer?: string | null;

          /**
           * URL of the token's logo
           */
          logo_url?: string | null;

          scam?: boolean | null;

          total_supply?: number | null;

          /**
           * Type of the asset (`Coin`)
           */
          type?: 'fungible';

          verified?: boolean | null;
        }
      }
    }

    export interface Params {
      block_tag: string;

      chain: string;

      from: string;

      value: string;

      [k: string]: unknown;
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

    export interface SuiNativeAssetDiff {
      asset: SuiAPI.SuiNativeAssetDetailsSchema;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: SuiAPI.SuiAssetTransferDetailsSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: SuiAPI.SuiAssetTransferDetailsSchema | null;
    }

    export interface SuiNFTAssetDiff {
      asset: SuiAPI.SuiNFTDetailsSchema;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: SuiAPI.SuiNFTDiffSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: SuiAPI.SuiNFTDiffSchema | null;
    }

    export interface SuiCoinsAssetDiff {
      asset: SuiCoinsAssetDiff.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: SuiAPI.SuiAssetTransferDetailsSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: SuiAPI.SuiAssetTransferDetailsSchema | null;
    }

    export namespace SuiCoinsAssetDiff {
      export interface Asset {
        /**
         * Token's package address
         */
        address: string;

        /**
         * Token's decimal precision
         */
        decimals: number;

        /**
         * Token's name
         */
        name: string;

        /**
         * Token's symbol (abbreviation)
         */
        symbol: string;

        creation_timestamp?: string | null;

        /**
         * Address of the token's deployer
         */
        deployer?: string | null;

        /**
         * URL of the token's logo
         */
        logo_url?: string | null;

        scam?: boolean | null;

        total_supply?: number | null;

        /**
         * Type of the asset (`Coin`)
         */
        type?: 'fungible';

        verified?: boolean | null;
      }
    }
  }

  export interface SuiSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface SuiValidationResult {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    features: Array<SuiValidationResult.Feature>;

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

  export namespace SuiValidationResult {
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

  export interface SuiValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

export interface PostTransactionScanParams {
  chain: 'mainnet' | 'testnet' | 'devnet';

  data: PostTransactionScanParams.Data;

  metadata: PostTransactionScanParams.Metadata;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace PostTransactionScanParams {
  export interface Data {
    tx_hash: string;
  }

  export interface Metadata {
    /**
     * cross reference transaction against the domain.
     */
    domain?: string | null;

    /**
     * whether the transaction is initiated by a dapp. Default is false.
     */
    non_dapp?: boolean | null;
  }
}

export declare namespace PostTransaction {
  export {
    type PostTransactionScanResponse as PostTransactionScanResponse,
    type PostTransactionScanParams as PostTransactionScanParams,
  };
}
