// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from './evm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Address extends APIResource {
  /**
   * Report a misclassification of an EVM address.
   *
   * @deprecated
   */
  report(body: AddressReportParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/evm/address/report', { body, ...options });
  }

  /**
   * Get a risk recommendation with plain-language reasons for an address.
   *
   * @example
   * ```ts
   * const addressValidation = await client.evm.address.scan({
   *   address: '0x946D45c866AFD5b8F436d40E551D8E50A5B84230',
   *   chain: 'ethereum',
   *   metadata: { domain: 'https://example.com' },
   * });
   * ```
   */
  scan(body: AddressScanParams, options?: RequestOptions): APIPromise<EvmAPI.AddressValidation> {
    return this._client.post('/v0/evm/address/scan', { body, ...options });
  }
}

export type AddressReportResponse = unknown;

export interface AddressReportParams {
  /**
   * Details about the report.
   */
  details: string;

  /**
   * The event type of the report. Could be `FALSE_POSITIVE` or `FALSE_NEGATIVE`.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * Parameters identifying the address to report, provided either as address details
   * (address, domain, and chain) or as a request ID from a previous scan.
   */
  report: AddressReportParams.ParamReportEvmAddressReportParams | AddressReportParams.RequestIDReport;
}

export namespace AddressReportParams {
  export interface ParamReportEvmAddressReportParams {
    params: ParamReportEvmAddressReportParams.Params;

    type: 'params';
  }

  export namespace ParamReportEvmAddressReportParams {
    export interface Params {
      /**
       * The address to report on.
       */
      address: string;

      /**
       * The chain name
       */
      chain:
        | 'arbitrum'
        | 'avalanche'
        | 'base'
        | 'base-sepolia'
        | 'lordchain'
        | 'lordchain-testnet'
        | 'metacade'
        | 'metacade-testnet'
        | 'bsc'
        | 'ethereum'
        | 'optimism'
        | 'polygon'
        | 'zksync'
        | 'zksync-sepolia'
        | 'zora'
        | 'linea'
        | 'blast'
        | 'scroll'
        | 'ethereum-sepolia'
        | 'degen'
        | 'avalanche-fuji'
        | 'gnosis'
        | 'worldchain'
        | 'soneium-minato'
        | 'ronin'
        | 'apechain'
        | 'berachain'
        | 'berachain-bartio'
        | 'ink'
        | 'ink-sepolia'
        | 'abstract'
        | 'abstract-testnet'
        | 'soneium'
        | 'unichain'
        | 'sei'
        | 'flow-evm'
        | 'hyperevm'
        | 'katana'
        | 'plume'
        | 'xlayer'
        | 'monad'
        | 'monad-testnet'
        | 'hedera'
        | 'tempo'
        | 'tempo-testnet'
        | 'kite-ai'
        | 'kaia'
        | 'plasma'
        | 'mantle'
        | 'robinhood'
        | 'arc';

      /**
       * The domain related to this address.
       */
      domain: string;
    }
  }

  export interface RequestIDReport {
    /**
     * The request ID of a previous request. This can be found in the value of the
     * `x-request-id` field in the headers of the response of the previous request. For
     * instance: `6c3cf6c1-a80d-4927-91b9-03d841ea61fe`.
     */
    request_id: string;

    /**
     * The type identifier indicating that a request ID from a previous scan is being
     * used.
     */
    type: 'request_id';
  }
}

export interface AddressScanParams {
  /**
   * The address to validate.
   */
  address: string;

  /**
   * The chain name
   */
  chain: EvmAPI.TransactionScanSupportedChain;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata: AddressScanParams.Metadata;
}

export namespace AddressScanParams {
  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
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

export declare namespace Address {
  export {
    type AddressReportResponse as AddressReportResponse,
    type AddressReportParams as AddressReportParams,
    type AddressScanParams as AddressScanParams,
  };
}
