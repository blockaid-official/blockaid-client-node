// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from './evm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Address extends APIResource {
  /**
   * Report a misclassification of an EVM address.
   *
   * @example
   * ```ts
   * const response = await client.evm.address.report({
   *   details: 'Details about the report',
   *   event: 'FALSE_NEGATIVE',
   *   report: {
   *     type: 'request_id',
   *     request_id: '6c3cf6c1-a80d-4927-91b9-03d841ea61fe',
   *   },
   * });
   * ```
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
   *   metadata: {},
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
        | 'immutable-zkevm'
        | 'immutable-zkevm-testnet'
        | 'gnosis'
        | 'worldchain'
        | 'soneium-minato'
        | 'ronin'
        | 'apechain'
        | 'zero-network'
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
        | 'kite-ai';

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
  metadata:
    | AddressScanParams.RoutersEvmModelsMetadataNonDapp
    | AddressScanParams.RoutersEvmModelsMetadataDapp;
}

export namespace AddressScanParams {
  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
  }
}

export declare namespace Address {
  export {
    type AddressReportResponse as AddressReportResponse,
    type AddressReportParams as AddressReportParams,
    type AddressScanParams as AddressScanParams,
  };
}
