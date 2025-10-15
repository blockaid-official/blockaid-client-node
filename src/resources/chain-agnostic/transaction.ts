// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from '../evm/evm';

export class Transaction extends APIResource {
  /**
   * Gets a transaction and returns a full security assessment indicating whether or
   * not the transaction is malicious, along with textual reasons explaining why it
   * was flagged as such.
   *
   * @example
   * ```ts
   * const response =
   *   await client.chainAgnostic.transaction.scan({
   *     data: {
   *       chain: 'bitcoin',
   *       asset: { symbol: 'BTC' },
   *       to: 'bc1qanrfutwqh854g74lqrygr55jkgf99em4lpfm80',
   *       amount: 1,
   *     },
   *     metadata: {
   *       account: { account_id: '1' },
   *       connection: {
   *         user_agent: '1',
   *         ip_address: '1.1.1.1',
   *       },
   *     },
   *     options: ['validation'],
   *   });
   * ```
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
  metadata: EvmAPI.MetadataParam;

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
    chain:
      | 'arbitrum'
      | 'avalanche'
      | 'base'
      | 'base-sepolia'
      | 'bsc'
      | 'ethereum'
      | 'ethereum-sepolia'
      | 'optimism'
      | 'polygon'
      | 'zksync'
      | 'zksync-sepolia'
      | 'zora'
      | 'linea'
      | 'blast'
      | 'scroll'
      | 'avalanche-fuji'
      | 'degen'
      | 'immutable-zkevm'
      | 'immutable-zkevm-testnet'
      | 'gnosis'
      | 'worldchain'
      | 'soneium-minato'
      | 'ronin'
      | 'apechain'
      | 'zero-network'
      | 'berachain'
      | 'ink-sepolia'
      | 'ink'
      | 'abstract'
      | 'abstract-testnet'
      | 'metacade'
      | 'metacade-testnet'
      | 'soneium'
      | 'unichain'
      | 'lordchain-testnet'
      | 'lordchain'
      | 'sei'
      | 'flow-evm'
      | 'hyperevm'
      | 'katana'
      | 'plume'
      | 'solana'
      | 'stellar'
      | 'bitcoin';

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
}

export declare namespace Transaction {
  export {
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
