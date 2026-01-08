// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transaction extends APIResource {
  /**
   * Gets a transaction and returns a full simulation indicating what will happen in
   * the transaction together with a recommended action and some textual reasons of
   * why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const response = await client.hedera.transaction.scan({
   *   account_address: '0.0.9352077',
   *   chain: 'mainnet',
   *   metadata: { type: 'wallet', url: 'https://example.com' },
   *   transaction:
   *     'KmEKXQoVCgwIjvztygYQn6yo3QISBRiawrcDEgIYBhiAwtcvIgIIeDIVSEJBUiB0cmFuc2ZlciBleGFtcGxlciAKHgoNCgUYjee6BBD/p9a5BwoNCgUYha/rARCAqNa5BxIA',
   *   options: ['simulation'],
   * });
   * ```
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/hedera/transaction/scan', { body, ...options });
  }
}

/**
 * Transaction scan response schema.
 */
export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.HederaSimulationResponse
    | TransactionScanResponse.HederaSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.HederaValidationResult
    | TransactionScanResponse.HederaValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface HederaSimulationResponse {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: HederaSimulationResponse.AccountSummary;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<HederaSimulationResponse.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: {
      [key: string]: Array<
        | HederaSimulationResponse.HederaAccountNativeAssetTransferDiffDetailsSchema
        | HederaSimulationResponse.HederaAccountTokenTransferDiffDetailsSchema
        | HederaSimulationResponse.NFTDetailsSchemaErc721DiffSchema
      >;
    };

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: { [key: string]: Array<HederaSimulationResponse.Exposure> };

    transaction_actions?: Array<
      | 'native_wrap'
      | 'native_transfer'
      | 'token_transfer'
      | 'swap'
      | 'mint'
      | 'stake'
      | 'approval'
      | 'proxy_upgrade'
      | 'ownership_change'
      | 'set_code_account'
      | (string & {})
    > | null;
  }

  export namespace HederaSimulationResponse {
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
       * Total USD diff for the requested account address
       */
      total_usd_diff: AccountSummary.TotalUsdDiff;

      /**
       * Assets diffs of the requested account address
       */
      account_assets_diffs?: Array<
        | AccountSummary.HederaAccountNativeAssetTransferDiffDetailsSchema
        | AccountSummary.HederaAccountTokenTransferDiffDetailsSchema
        | AccountSummary.NFTDetailsSchemaErc721DiffSchema
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: { [key: string]: number };
    }

    export namespace AccountSummary {
      export interface AccountExposure {
        asset:
          | AccountExposure.HederaNativeAssetDetailsSchema
          | AccountExposure.HederaTokenDetailsSchema
          | AccountExposure.HederaNFTDetailsSchema;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: { [key: string]: AccountExposure.Spenders };
      }

      export namespace AccountExposure {
        export interface HederaNativeAssetDetailsSchema {
          /**
           * Type of the asset (`NATIVE`)
           */
          type?: 'NATIVE';
        }

        export interface HederaTokenDetailsSchema {
          /**
           * The token ID
           */
          id: string;

          /**
           * Decimals of the asset
           */
          decimals: number;

          /**
           * The token description
           */
          description: string;

          /**
           * The token name
           */
          name: string;

          /**
           * The token's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`TOKEN`)
           */
          type?: 'TOKEN';
        }

        export interface HederaNFTDetailsSchema {
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
           * The NFT's collection ID (token ID)
           */
          nft_type: string;

          /**
           * URL of the NFT's image
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`NFT`)
           */
          type?: 'NFT';
        }

        export interface Spenders {
          exposure: Array<Spenders.Exposure>;

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

      export interface HederaAccountNativeAssetTransferDiffDetailsSchema {
        asset: HederaAccountNativeAssetTransferDiffDetailsSchema.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: HederaAccountNativeAssetTransferDiffDetailsSchema.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: HederaAccountNativeAssetTransferDiffDetailsSchema.Out | null;
      }

      export namespace HederaAccountNativeAssetTransferDiffDetailsSchema {
        export interface Asset {
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

      export interface HederaAccountTokenTransferDiffDetailsSchema {
        asset: HederaAccountTokenTransferDiffDetailsSchema.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: HederaAccountTokenTransferDiffDetailsSchema.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: HederaAccountTokenTransferDiffDetailsSchema.Out | null;
      }

      export namespace HederaAccountTokenTransferDiffDetailsSchema {
        export interface Asset {
          /**
           * The token ID
           */
          id: string;

          /**
           * Decimals of the asset
           */
          decimals: number;

          /**
           * The token description
           */
          description: string;

          /**
           * The token name
           */
          name: string;

          /**
           * The token's symbol
           */
          symbol: string;

          /**
           * URL of the asset's logo
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`TOKEN`)
           */
          type?: 'TOKEN';
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

      export interface NFTDetailsSchemaErc721DiffSchema {
        asset: NFTDetailsSchemaErc721DiffSchema.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: NFTDetailsSchemaErc721DiffSchema.In | null;

        /**
         * Details of the outgoing transfer
         */
        out?: NFTDetailsSchemaErc721DiffSchema.Out | null;
      }

      export namespace NFTDetailsSchemaErc721DiffSchema {
        export interface Asset {
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
           * The NFT's collection ID (token ID)
           */
          nft_type: string;

          /**
           * URL of the NFT's image
           */
          logo_url?: string | null;

          /**
           * Type of the asset (`NFT`)
           */
          type?: 'NFT';
        }

        /**
         * Details of the incoming transfer
         */
        export interface In {
          /**
           * Token ID of the transfer
           */
          token_id: string;

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
           * Token ID of the transfer
           */
          token_id: string;

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

    export interface HederaAccountNativeAssetTransferDiffDetailsSchema {
      asset: HederaAccountNativeAssetTransferDiffDetailsSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: HederaAccountNativeAssetTransferDiffDetailsSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: HederaAccountNativeAssetTransferDiffDetailsSchema.Out | null;
    }

    export namespace HederaAccountNativeAssetTransferDiffDetailsSchema {
      export interface Asset {
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

    export interface HederaAccountTokenTransferDiffDetailsSchema {
      asset: HederaAccountTokenTransferDiffDetailsSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: HederaAccountTokenTransferDiffDetailsSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: HederaAccountTokenTransferDiffDetailsSchema.Out | null;
    }

    export namespace HederaAccountTokenTransferDiffDetailsSchema {
      export interface Asset {
        /**
         * The token ID
         */
        id: string;

        /**
         * Decimals of the asset
         */
        decimals: number;

        /**
         * The token description
         */
        description: string;

        /**
         * The token name
         */
        name: string;

        /**
         * The token's symbol
         */
        symbol: string;

        /**
         * URL of the asset's logo
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`TOKEN`)
         */
        type?: 'TOKEN';
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

    export interface NFTDetailsSchemaErc721DiffSchema {
      asset: NFTDetailsSchemaErc721DiffSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: NFTDetailsSchemaErc721DiffSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: NFTDetailsSchemaErc721DiffSchema.Out | null;
    }

    export namespace NFTDetailsSchemaErc721DiffSchema {
      export interface Asset {
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
         * The NFT's collection ID (token ID)
         */
        nft_type: string;

        /**
         * URL of the NFT's image
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`NFT`)
         */
        type?: 'NFT';
      }

      /**
       * Details of the incoming transfer
       */
      export interface In {
        /**
         * Token ID of the transfer
         */
        token_id: string;

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
         * Token ID of the transfer
         */
        token_id: string;

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

    export interface Exposure {
      asset:
        | Exposure.HederaNativeAssetDetailsSchema
        | Exposure.HederaTokenDetailsSchema
        | Exposure.HederaNFTDetailsSchema;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: { [key: string]: Exposure.Spenders };
    }

    export namespace Exposure {
      export interface HederaNativeAssetDetailsSchema {
        /**
         * Type of the asset (`NATIVE`)
         */
        type?: 'NATIVE';
      }

      export interface HederaTokenDetailsSchema {
        /**
         * The token ID
         */
        id: string;

        /**
         * Decimals of the asset
         */
        decimals: number;

        /**
         * The token description
         */
        description: string;

        /**
         * The token name
         */
        name: string;

        /**
         * The token's symbol
         */
        symbol: string;

        /**
         * URL of the asset's logo
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`TOKEN`)
         */
        type?: 'TOKEN';
      }

      export interface HederaNFTDetailsSchema {
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
         * The NFT's collection ID (token ID)
         */
        nft_type: string;

        /**
         * URL of the NFT's image
         */
        logo_url?: string | null;

        /**
         * Type of the asset (`NFT`)
         */
        type?: 'NFT';
      }

      export interface Spenders {
        exposure: Array<Spenders.Exposure>;

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
  }

  export interface HederaSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }

  export interface HederaValidationResult {
    /**
     * A textual classification that can be presented to the user explaining the
     * reason.
     */
    classification: string;

    /**
     * A textual description about the validation result
     */
    description: string;

    features: Array<HederaValidationResult.Feature>;

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

  export namespace HederaValidationResult {
    export interface Feature {
      /**
       * Address the feature relates to.
       */
      address: string | null;

      /**
       * Textual description of the feature.
       */
      description: string;

      /**
       * The ID of the feature associated with this transaction.
       */
      feature_id: string;

      /**
       * The security classification of the feature (Benign, Warning, Malicious or Info).
       */
      type: 'Benign' | 'Warning' | 'Malicious' | 'Info';
    }
  }

  export interface HederaValidationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status: 'Error';
  }
}

export interface TransactionScanParams {
  /**
   * The address to relate the transaction to. Account address determines in which
   * perspective the transaction is simulated and validated.
   */
  account_address: unknown;

  /**
   * The chain the transaction runs on.
   */
  chain: 'mainnet';

  /**
   * Additional information regarding the wallet involved in the transaction.
   */
  metadata:
    | TransactionScanParams.HederaWalletRequestMetadata
    | TransactionScanParams.HederaInAppRequestMetadata;

  transaction: string;

  /**
   * Select which component will be included in the response.
   *
   * - `simulation` - Include the results of the transaction simulation in your
   *   response.
   * - `validation` - Include a security validation of the transaction in your
   *   response.
   */
  options?: Array<'validation' | 'simulation'>;

  [k: string]: unknown;
}

export namespace TransactionScanParams {
  export interface HederaWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp the transaction originated from.
     */
    url: string;
  }

  export interface HederaInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }
}

export declare namespace Transaction {
  export {
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
