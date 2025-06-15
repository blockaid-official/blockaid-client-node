// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transaction extends APIResource {
  /**
   * Gets a transaction and returns a full security assessment indicating whether or
   * not the transaction is malicious, along with textual reasons explaining why it
   * was flagged as such.
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanResponse {
  /**
   * Complete validation result containing all scan details and findings
   */
  validation: TransactionScanResponse.Validation;
}

export namespace TransactionScanResponse {
  /**
   * Complete validation result containing all scan details and findings
   */
  export interface Validation {
    /**
     * Classification of the scan result based on the detected features
     */
    classification: string;

    /**
     * Detailed description of the validation result
     */
    description: string;

    /**
     * The type of validation result
     */
    result_type: 'Malicious' | 'Warning' | 'Benign' | 'High-Risk';

    /**
     * The status of the transaction scan
     */
    status: 'Success' | 'Error';

    /**
     * List of features detected during the scan
     */
    features?: Array<Validation.AddressFeature | Validation.URLFeature | Validation.TransactionFeature>;
  }

  export namespace Validation {
    export interface AddressFeature {
      /**
       * The blockchain address where the feature was detected
       */
      address: string;

      /**
       * List of URLs associated with this address
       */
      associated_urls: Array<string>;

      /**
       * Detailed description of the detected feature
       */
      description: string;

      /**
       * Unique identifier for the detected feature
       */
      feature_id: string;

      /**
       * The type of feature detected in the scan
       */
      type: 'Malicious' | 'Warning' | 'Benign' | 'High-Risk' | 'Info';

      /**
       * Type of entity associated with the feature
       */
      entity?: 'address';
    }

    export interface URLFeature {
      /**
       * Detailed description of the detected feature
       */
      description: string;

      /**
       * Unique identifier for the detected feature
       */
      feature_id: string;

      /**
       * The type of feature detected in the scan
       */
      type: 'Malicious' | 'Warning' | 'Benign' | 'High-Risk' | 'Info';

      /**
       * The URL where the feature was detected
       */
      url: string;

      /**
       * Type of entity associated with the feature
       */
      entity?: 'url';
    }

    export interface TransactionFeature {
      /**
       * Detailed description of the detected feature
       */
      description: string;

      /**
       * Unique identifier for the detected feature
       */
      feature_id: string;

      /**
       * The type of feature detected in the scan
       */
      type: 'Malicious' | 'Warning' | 'Benign' | 'High-Risk' | 'Info';

      /**
       * Type of entity associated with the feature
       */
      entity?: 'transaction';
    }
  }
}

export interface TransactionScanParams {
  /**
   * Transaction data
   */
  data: TransactionScanParams.Data;

  /**
   * Additional metadata about the request including account and connection
   * information
   */
  metadata: TransactionScanParams.Metadata;

  /**
   * List of options to apply during the transaction scan
   */
  options: Array<'validation'>;
}

export namespace TransactionScanParams {
  /**
   * Transaction data
   */
  export interface Data {
    /**
     * Amount of the transaction in the specified asset
     */
    amount: number;

    /**
     * Asset information
     */
    asset: Data.AssetAddress | Data.AssetSymbol;

    /**
     * The chain name
     */
    chain: 'ethereum' | 'base' | 'arbitrum' | 'optimism' | 'polygon' | 'solana' | 'stellar' | 'bitcoin';

    /**
     * Destination address or identifier for the transaction
     */
    to: string;

    /**
     * Source address or identifier for the transaction
     */
    from?: string;
  }

  export namespace Data {
    export interface AssetAddress {
      /**
       * The address of the asset
       */
      address: string;
    }

    export interface AssetSymbol {
      /**
       * The symbol of the asset
       */
      symbol: string;
    }
  }

  /**
   * Additional metadata about the request including account and connection
   * information
   */
  export interface Metadata {
    /**
     * Account information associated with the request
     */
    account?: Metadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: Metadata.Connection;
  }

  export namespace Metadata {
    /**
     * Account information associated with the request
     */
    export interface Account {
      /**
       * Unique identifier for the account
       */
      account_id: string;

      /**
       * Timestamp when the account was created
       */
      account_creation_timestamp?: string;

      /**
       * Age of the user in years
       */
      user_age?: number;

      /**
       * ISO country code of the user's location
       */
      user_country_code?: string;
    }

    /**
     * Connection metadata including user agent and IP information
     */
    export interface Connection {
      /**
       * IP address of the customer making the request
       */
      ip_address: string;

      /**
       * User agent string from the client's browser or application
       */
      user_agent: string;
    }
  }
}

export declare namespace Transaction {
  export {
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
