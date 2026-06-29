// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from '../evm/evm';
import * as SuiAPI from './sui';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Transaction extends APIResource {
  /**
   * Get a risk recommendation with plain-language reasons for a Sui transaction.
   *
   * @example
   * ```ts
   * const suiTransactionScanResponse =
   *   await client.sui.transaction.scan({
   *     account_address:
   *       '0x45e90b3ea2e1920c43d92d224630d6a865c1b58a7b4e770c2ac156eab30eb491',
   *     chain: 'mainnet',
   *     metadata: {
   *       type: 'wallet',
   *       url: 'https://example.com',
   *     },
   *     transaction:
   *       'AAACAAgA4fUFAAAAAAAgHvls2mKzo/48s/fPdWP8xKtE4BhIjR2O8gMaZ6bI1+sCAgABAQAAAQECAAABAQBF6Qs+ouGSDEPZLSJGMNaoZcG1intOdwwqwVbqsw60kQFySkLceU6uis9QxxK4CDYqttqK3ilc9/yEcCgxdaeA0cl/xhwAAAAAIEuXU9TpAtIJmbPVFpxdc70+RWUqlSrfyIUKT9q1Au0ERekLPqLhkgxD2S0iRjDWqGXBtYp7TncMKsFW6rMOtJHuAgAAAAAAACAKNQAAAAAAAA==',
   *     options: ['simulation'],
   *   });
   * ```
   */
  scan(body: TransactionScanParams, options?: RequestOptions): APIPromise<SuiAPI.SuiTransactionScanResponse> {
    return this._client.post('/v0/sui/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanParams {
  account_address: string;

  chain: 'mainnet';

  /**
   * Metadata
   */
  metadata: TransactionScanParams.SuiWalletRequestMetadata | TransactionScanParams.SuiInAppRequestMetadata;

  transaction: string;

  /**
   * List of options to include in the response
   *
   * - `Options.validation`: Include Options.validation output in the response
   *
   * - `Options.simulation`: Include Options.simulation output in the response
   */
  options?: Array<'validation' | 'simulation'>;

  /**
   * Optional customer-supplied hints about transaction intent that cannot be
   * inferred from on-chain simulation.
   */
  transaction_hints?: Array<
    TransactionScanParams.CrossChainBridgeHint | TransactionScanParams.GenericTransactionHint
  >;
}

export namespace TransactionScanParams {
  export interface SuiWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp originating the transaction
     */
    url: string;

    /**
     * Account information associated with the request
     */
    account?: SuiWalletRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: SuiWalletRequestMetadata.Connection;
  }

  export namespace SuiWalletRequestMetadata {
    /**
     * Account information associated with the request
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
     * Connection metadata including user agent and IP information
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

  export interface SuiInAppRequestMetadata {
    /**
     * Account information associated with the request
     */
    account?: SuiInAppRequestMetadata.Account;

    /**
     * Connection metadata including user agent and IP information
     */
    connection?: SuiInAppRequestMetadata.Connection;

    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
  }

  export namespace SuiInAppRequestMetadata {
    /**
     * Account information associated with the request
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
     * Connection metadata including user agent and IP information
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

  /**
   * Customer-supplied context for a cross-chain bridge deposit where the protocol
   * does not emit the destination on-chain.
   */
  export interface CrossChainBridgeHint {
    /**
     * Hint type discriminator (`cross_chain_bridge`).
     */
    type: 'cross_chain_bridge';

    /**
     * The intended recipient address on the destination chain. Required when the
     * bridge protocol does not emit this on-chain (e.g. Relay, some Across deposit
     * routes).
     */
    destination_address?: string;

    /**
     * Details of the asset the recipient will receive on the destination chain. May
     * differ from the source asset (e.g. wrapped vs. native, canonical vs. bridged
     * token).
     */
    destination_asset?:
      | CrossChainBridgeHint.CrossChainBridgeNativeAsset
      | CrossChainBridgeHint.CrossChainBridgeFungibleAsset
      | CrossChainBridgeHint.CrossChainBridgeNonFungibleAsset;

    /**
     * The destination chain for the bridged assets.
     */
    destination_chain?: EvmAPI.TransactionScanSupportedChain | (string & {});
  }

  export namespace CrossChainBridgeHint {
    export interface CrossChainBridgeNativeAsset {
      /**
       * Type of the asset (`NATIVE`)
       */
      type: 'NATIVE';

      /**
       * Amount to be received in the asset's smallest unit (before decimal division),
       * e.g. wei for ETH.
       */
      raw_value?: string;
    }

    export interface CrossChainBridgeFungibleAsset {
      /**
       * Token contract address on the destination chain.
       */
      address: string;

      /**
       * Type of the asset (`FUNGIBLE`)
       */
      type: 'FUNGIBLE';

      /**
       * Amount to be received in the asset's smallest unit (before decimal division),
       * e.g. base units for ERC-20 tokens.
       */
      raw_value?: string;
    }

    export interface CrossChainBridgeNonFungibleAsset {
      /**
       * NFT collection contract address on the destination chain.
       */
      address: string;

      /**
       * Token ID of the specific NFT being bridged.
       */
      token_id: string;

      /**
       * Type of the asset (`NON_FUNGIBLE`)
       */
      type: 'NON_FUNGIBLE';
    }
  }

  /**
   * Fallback for unrecognized or future hint types. Accepts any hint with a `type`
   * field.
   */
  export interface GenericTransactionHint {
    /**
     * Hint type identifier for unrecognized or future hint types.
     */
    type: string;
  }
}

export declare namespace Transaction {
  export { type TransactionScanParams as TransactionScanParams };
}
