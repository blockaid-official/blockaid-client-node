// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from '../evm/evm';
import * as StellarAPI from './stellar';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Transaction extends APIResource {
  /**
   * Report Transaction
   *
   * @example
   * ```ts
   * const response = await client.stellar.transaction.report({
   *   details: 'details',
   *   event: 'should_be_malicious',
   *   report: { id: 'id' },
   * });
   * ```
   */
  report(body: TransactionReportParams, options?: RequestOptions): APIPromise<TransactionReportResponse> {
    return this._client.post('/v0/stellar/transaction/report', { body, ...options });
  }

  /**
   * Gets a transaction and returns a full simulation indicating what will happen in
   * the transaction together with a recommended action and some textual reasons of
   * why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const stellarTransactionScanResponse =
   *   await client.stellar.transaction.scan({
   *     account_address:
   *       'GDPMFLKUGASUTWBN2XGYYKD27QGHCYH4BUFUTER4L23INYQ4JHDWFOIE',
   *     chain: 'pubnet',
   *     metadata: {
   *       type: 'wallet',
   *       url: 'https://example.com',
   *     },
   *     transaction:
   *       'AAAAAgAAAADewq1UMCVJ2C3VzYwoevwMcWD8DQtJkjxetobiHEnHYgAAAAEAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAA3sKtVDAlSdgt1c2MKHr8DHFg/A0LSZI8XraG4hxJx2IAAAABAAAAACI40RTBOFEE7uT5mZkoq30mbvxLPJpMUm9cIFHgK9SRAAAAAAAAAAAAmJaAAAAAAAAAAAA=',
   *     options: ['validation', 'simulation'],
   *   });
   * ```
   */
  scan(
    body: TransactionScanParams,
    options?: RequestOptions,
  ): APIPromise<StellarAPI.StellarTransactionScanResponse> {
    return this._client.post('/v0/stellar/transaction/scan', { body, ...options });
  }
}

export type TransactionReportResponse = number;

export interface TransactionReportParams {
  details: string;

  event: 'should_be_malicious' | 'should_be_benign' | 'wrong_simulation_result';

  report:
    | TransactionReportParams.StellarAppealRequestID
    | TransactionReportParams.StellarAppealTransactionDataReport;
}

export namespace TransactionReportParams {
  export interface StellarAppealRequestID {
    id: string;

    type?: 'request_id';
  }

  export interface StellarAppealTransactionDataReport {
    params: StellarAPI.StellarTransactionScanRequest;

    type?: 'params';
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

  /**
   * Optional customer-supplied hints about transaction intent that cannot be
   * inferred from on-chain simulation.
   */
  transaction_hints?: Array<
    TransactionScanParams.CrossChainBridgeHint | TransactionScanParams.GenericTransactionHint
  >;
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

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean | null;
  }

  export interface StellarInAppRequestMetadata {
    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean | null;

    /**
     * Metadata for in-app requests
     */
    type?: 'in_app';
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

      /**
       * Approximate USD value of the received amount at time of the request.
       */
      usd_price?: string;
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

      /**
       * Approximate USD value of the received amount at time of the request.
       */
      usd_price?: string;
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

      /**
       * Approximate USD value of the received amount at time of the request.
       */
      usd_price?: string;
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
  export {
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
