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
    return this._client.post('/v0/bitcoin/transaction/report', { body, ...options });
  }

  /**
   * Scan Transaction
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/bitcoin/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = number;

export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration
    | TransactionScanResponse.BitcoinSimulationErrorSchema
    | null;

  /**
   * Validation result; Only present if validation option is included in the request
   */
  validation?:
    | TransactionScanResponse.BitcoinValidationResultSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchema
    | TransactionScanResponse.BitcoinValidationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration {
    status: 'Success';

    account_summary?: null;

    /**
     * Details of addresses involved in the transaction
     */
    address_details?: Array<BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.AddressDetail>;

    /**
     * Mapping between the address of an account to the assets diff during the
     * transaction
     */
    assets_diffs?: Record<
      string,
      Array<
        | BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema
        | BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema
        | BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration.BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema
      >
    >;
  }

  export namespace BitcoinBitcoinSimulationSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaUnionAnnotatedAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleNativeAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleOrdinalAssetDiffAnnotatedAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchemaFieldInfoAnnotationNoneTypeRequiredTrueTitleRunesAssetDiffEmptyModelEmptyModelAddressDetailsBaseSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedEmptyModelSimulationSchemaConfiguration {
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

    export interface BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
      asset: BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema.Out | null;
    }

    export namespace BitcoinAccountSingleAssetDiffSchemaTypeNativeAssetDetailsSchemaNativeDiffSchema {
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

    export interface BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema {
      asset: BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema.Out | null;
    }

    export namespace BitcoinAccountSingleAssetDiffSchemaTypeOrdinalDetailsSchemaOrdinalDiffSchema {
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

    export interface BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema {
      asset: BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema.Asset;

      /**
       * The type of the assets in this diff
       */
      asset_type: string;

      /**
       * Details of the incoming transfer
       */
      in?: BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema.In | null;

      /**
       * Details of the outgoing transfer
       */
      out?: BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema.Out | null;
    }

    export namespace BitcoinAccountSingleAssetDiffSchemaTypeRuneDetailsSchemaRuneDiffSchema {
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

  export interface BitcoinValidationResultSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchema {
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
    features: Array<BitcoinValidationResultSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchema.Feature>;

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

  export namespace BitcoinValidationResultSchemaTypeAnnotatedStrSkipValidationPlainSerializerGetPydanticSchema {
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

export interface TransactionReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign';

  report:
    | TransactionReportParams.BitcoinAppealRequestID
    | TransactionReportParams.BitcoinAppealTransactionDataReportRequestSchemaTypeChainSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedSetOptionsFieldInfoAnnotationNoneTypeRequiredFalseValidationSimulationTitleOptionsSimulationMetadataMinLenMinLength1;
}

export namespace TransactionReportParams {
  export interface BitcoinAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface BitcoinAppealTransactionDataReportRequestSchemaTypeChainSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedSetOptionsFieldInfoAnnotationNoneTypeRequiredFalseValidationSimulationTitleOptionsSimulationMetadataMinLenMinLength1 {
    params: BitcoinAppealTransactionDataReportRequestSchemaTypeChainSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedSetOptionsFieldInfoAnnotationNoneTypeRequiredFalseValidationSimulationTitleOptionsSimulationMetadataMinLenMinLength1.Params;

    type?: 'params';
  }

  export namespace BitcoinAppealTransactionDataReportRequestSchemaTypeChainSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedStrSkipValidationPlainSerializerGetPydanticSchemaAnnotatedSetOptionsFieldInfoAnnotationNoneTypeRequiredFalseValidationSimulationTitleOptionsSimulationMetadataMinLenMinLength1 {
    export interface Params {
      account_address: string;

      chain: 'bitcoin';

      /**
       * Metadata
       */
      metadata:
        | Params.BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIWalletRequestMetadata
        | Params.BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIInAppRequestMetadata;

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
      export interface BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIWalletRequestMetadata {
        /**
         * Metadata for wallet requests
         */
        type: 'wallet';

        /**
         * URL of the dApp originating the transaction
         */
        url: string;
      }

      export interface BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIInAppRequestMetadata {
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

  chain: 'bitcoin';

  /**
   * Metadata
   */
  metadata:
    | TransactionScanParams.BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIWalletRequestMetadata
    | TransactionScanParams.BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIInAppRequestMetadata;

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
  export interface BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;
  }

  export interface BitcoinblockaidApplicationRunnerAppSchemasTransactionScanningAPIInAppRequestMetadata {
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
