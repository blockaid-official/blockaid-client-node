// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
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
    | TransactionScanResponse.StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration
    | TransactionScanResponse.StellarSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.StellarValidationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchema
    | TransactionScanResponse.StellarValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    account_summary: StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.AccountSummary;

    /**
     * Ownership diffs of the account addresses
     */
    assets_ownership_diff: Record<
      string,
      Array<StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.AssetsOwnershipDiff>
    >;

    status: 'Success';

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema
        | StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema
        | StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.StellarAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchema
      >
    >;

    /**
     * Mapping between the address of an account to the exposure of the assets during
     * the transaction
     */
    exposures?: Record<
      string,
      Array<
        | StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema
        | StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema
      >
    >;
  }

  export namespace StellarSimulationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleContractBackedAssetDiffUnionAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleLegacyAssetExposureAnnotatedAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetExposureAccountSetOptionsOwnershipDiffSchemaAddressDetailsBaseSchemaAnnotatedEmptyModelSimulationSchemaConfiguration {
    /**
     * Summary of the actions and asset transfers that were made by the requested
     * account address
     */
    export interface AccountSummary {
      /**
       * Exposures made by the requested account address
       */
      account_exposures: Array<
        | AccountSummary.StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema
        | AccountSummary.StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema
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
        | AccountSummary.StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema
        | AccountSummary.StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema
        | AccountSummary.StellarAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchema
      >;

      /**
       * Total USD exposure for each of the spender addresses during the transaction
       */
      total_usd_exposure?: Record<string, number>;
    }

    export namespace AccountSummary {
      export interface StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema {
        asset: StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema.Spenders
        >;
      }

      export namespace StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema {
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

      export interface StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema {
        asset: StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema.Asset;

        /**
         * Mapping between the spender address and the exposure of the asset
         */
        spenders?: Record<
          string,
          StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema.Spenders
        >;
      }

      export namespace StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema {
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

      export interface StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema {
        asset: StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
      }

      export namespace StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema {
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
      }

      export interface StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema {
        asset: StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema.Asset;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
      }

      export namespace StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema {
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
      }

      export interface StellarAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchema {
        asset: StellarAPI.StellarAssetContractDetailsSchema;

        /**
         * The type of the assets in this diff
         */
        asset_type: string;

        /**
         * Details of the incoming transfer
         */
        in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

        /**
         * Details of the outgoing transfer
         */
        out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
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

    export interface StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema {
      asset: StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
    }

    export namespace StellarAccountSingleAssetDiffSchemaTypeLegacyAssetDetailsSchemaAssetTransferDetailsSchema {
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
    }

    export interface StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema {
      asset: StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
    }

    export namespace StellarAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaAssetTransferDetailsSchema {
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
    }

    export interface StellarAccountSingleAssetDiffSchemaTypeAssetContractDetailsSchemaAssetTransferDetailsSchema {
      asset: StellarAPI.StellarAssetContractDetailsSchema;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: StellarAPI.StellarAssetTransferDetailsSchema | null;

      /**
       * Details of the outgoing transfer
       */
      out?: StellarAPI.StellarAssetTransferDetailsSchema | null;
    }

    export interface StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema {
      asset: StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema.Spenders
      >;
    }

    export namespace StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaLegacyAssetDetailsSchemaSingleAssetExposureSchema {
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

    export interface StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema {
      asset: StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema.Asset;

      /**
       * Mapping between the spender address and the exposure of the asset
       */
      spenders?: Record<
        string,
        StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema.Spenders
      >;
    }

    export namespace StellarAddressAssetExposureSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchemaNativeAssetDetailsSchemaSingleAssetExposureSchema {
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

  export interface StellarValidationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchema {
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
    features: Array<StellarValidationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchema.Feature>;

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

  export namespace StellarValidationResultSchemaTypeAnnotatedUnionMuxedAccountContractAddressSkipValidationPlainSerializerGetPydanticSchema {
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
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
