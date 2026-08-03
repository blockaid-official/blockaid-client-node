// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

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
   *       transaction_action: 'withdrawal',
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
  scan(body: TransactionScanParams, options?: RequestOptions): APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanResponse {
  /**
   * Complete validation result containing all scan details and findings
   */
  validation: TransactionScanResponse.Validation;

  /**
   * Deep-link URL to the Blockaid platform address overview page for the scanned
   * `to` address. Null if no URL is available for the given chain.
   */
  platform_url?: string | null;
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
     * The type of validation result.
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
       * The type of feature detected in the scan.
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
       * The type of feature detected in the scan.
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
       * The type of feature detected in the scan.
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
      | 'gnosis'
      | 'worldchain'
      | 'soneium-minato'
      | 'ronin'
      | 'apechain'
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
      | 'megaeth'
      | 'katana'
      | 'plume'
      | 'solana'
      | 'bitcoin'
      | 'xlayer'
      | 'monad'
      | 'monad-testnet'
      | 'tron'
      | 'kaia'
      | 'plasma'
      | 'mantle'
      | 'robinhood'
      | 'arc'
      | 'flare';

    /**
     * Destination address or identifier for the transaction
     */
    to: string;

    /**
     * Source address or identifier for the transaction
     */
    from?: string;

    /**
     * Action the transaction is making
     */
    transaction_action?: 'deposit' | 'withdrawal';
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
     * End-user account context (id, age, country, creation time, and
     * account_addresses).
     */
    account?: Metadata.Account;

    /**
     * Connection metadata including user agent, IP information, and origin.
     */
    connection?: Metadata.Connection;

    /**
     * The full URL of the DApp or website that initiated the request, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain?: string;

    /**
     * Set to true when the request was not initiated by a dapp. Dapp requests should
     * provide the `domain` field.
     */
    non_dapp?: boolean;
  }

  export namespace Metadata {
    /**
     * End-user account context (id, age, country, creation time, and
     * account_addresses).
     */
    export interface Account {
      /**
       * Unique identifier for the account.
       */
      account_id: string;

      /**
       * List of all account addresses in different chains based on the CAIPs standard
       * (https://github.com/ChainAgnostic/CAIPs). Ethereum mainnet example:
       * eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb
       */
      account_addresses?: Array<string>;

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
     * Connection metadata including user agent, IP information, and origin.
     */
    export interface Connection {
      /**
       * IP address of the customer making the request. Both IPv4 and IPv6 addresses are
       * supported.
       */
      ip_address: string;

      /**
       * The full URL of the website that the request was directed to.
       */
      origin?: string;

      /**
       * User agent string from the client's browser or application.
       */
      user_agent?: string;

      /**
       * WalletConnect session description, when the request originates from a
       * WalletConnect session.
       */
      walletconnect_description?: string;

      /**
       * WalletConnect session name, when the request originates from a WalletConnect
       * session.
       */
      walletconnect_name?: string;
    }
  }
}

export declare namespace Transaction {
  export {
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
