// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SuiAPI from './sui';
import * as AddressAPI from './address';
import { Address, AddressScanParams, AddressScanResponse } from './address';
import * as PostTransactionAPI from './post-transaction';
import { PostTransaction, PostTransactionScanParams, PostTransactionScanResponse } from './post-transaction';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams } from './transaction';

export class Sui extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  postTransaction: PostTransactionAPI.PostTransaction = new PostTransactionAPI.PostTransaction(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

export interface SuiAssetTransferDetailsSchema {
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

export interface SuiNativeAssetDetailsSchema {
  /**
   * Decimals of the asset
   */
  decimals?: 9;

  /**
   * URL of the asset's logo
   */
  logo_url?: 'https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/sui.svg/public';

  /**
   * Name of the asset
   */
  name?: 'Sui';

  /**
   * Symbol of the asset
   */
  symbol?: 'SUI';

  /**
   * Type of the asset (`NATIVE`)
   */
  type?: 'NATIVE';
}

export interface SuiNFTDetailsSchema {
  /**
   * The NFT ID
   */
  id: string;

  /**
   * The NFT's description
   */
  description: string;

  /**
   * NFT's display name
   */
  name: string;

  /**
   * The NFT's collection ID
   */
  nft_type: string;

  /**
   * Type of the asset (`NFT`)
   */
  type?: 'NFT';

  /**
   * URL of the nft's image
   */
  url?: string | null;
}

export interface SuiNFTDiffSchema {
  /**
   * NFT ID of the transfer
   */
  id: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;

  /**
   * USD price of the asset
   */
  usd_price?: number | null;
}

export interface SuiTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | SuiTransactionScanResponse.SuiSimulationResult
    | SuiTransactionScanResponse.SuiSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | SuiTransactionScanResponse.SuiValidationResult
    | SuiTransactionScanResponse.SuiValidationErrorSchema
    | null;
}

export namespace SuiTransactionScanResponse {
  export interface SuiSimulationResult {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: SuiSimulationResult.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<SuiSimulationResult.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | SuiSimulationResult.SuiNativeAssetDiff
        | SuiSimulationResult.SuiNFTAssetDiff
        | SuiSimulationResult.SuiCoinsAssetDiff
      >
    >;
  }

  export namespace SuiSimulationResult {
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
           * URL of the token's logo
           */
          logo_url?: string | null;

          scam?: boolean | null;

          /**
           * Type of the asset (`Coin`)
           */
          type?: 'fungible';

          verified?: boolean | null;
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
         * URL of the token's logo
         */
        logo_url?: string | null;

        scam?: boolean | null;

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
    result_type: 'Benign' | 'Warning' | 'Malicious';

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

Sui.Transaction = Transaction;
Sui.PostTransaction = PostTransaction;
Sui.Address = Address;

export declare namespace Sui {
  export {
    type SuiAssetTransferDetailsSchema as SuiAssetTransferDetailsSchema,
    type SuiNativeAssetDetailsSchema as SuiNativeAssetDetailsSchema,
    type SuiNFTDetailsSchema as SuiNFTDetailsSchema,
    type SuiNFTDiffSchema as SuiNFTDiffSchema,
    type SuiTransactionScanResponse as SuiTransactionScanResponse,
  };

  export { Transaction as Transaction, type TransactionScanParams as TransactionScanParams };

  export {
    PostTransaction as PostTransaction,
    type PostTransactionScanResponse as PostTransactionScanResponse,
    type PostTransactionScanParams as PostTransactionScanParams,
  };

  export {
    Address as Address,
    type AddressScanResponse as AddressScanResponse,
    type AddressScanParams as AddressScanParams,
  };
}
