// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

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
   *     request_id: '11111111-1111-1111-1111-111111111111',
   *   },
   * });
   * ```
   */
  report(body: AddressReportParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/evm/address/report', { body, ...options });
  }

  /**
   * Gets an address and returns a full security assessment indicating weather or not
   * this address is malicious as well as textual reasons of why the address was
   * flagged that way.
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
  scan(body: AddressScanParams, options?: Core.RequestOptions): Core.APIPromise<EvmAPI.AddressValidation> {
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
   * The event type of the report. Could be FALSE_POSITIVE or FALSE_NEGATIVE.
   */
  event: 'FALSE_POSITIVE' | 'FALSE_NEGATIVE';

  /**
   * The report parameters.
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
        | 'tempo-testnet';

      /**
       * The domain related to this address.
       */
      domain: string;
    }
  }

  export interface RequestIDReport {
    request_id: string;

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
   * Object of additional information to validate against.
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
  }
}

export declare namespace Address {
  export {
    type AddressReportResponse as AddressReportResponse,
    type AddressReportParams as AddressReportParams,
    type AddressScanParams as AddressScanParams,
  };
}
