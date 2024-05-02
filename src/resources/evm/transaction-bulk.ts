// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@blockaid/client/core';
import { APIResource } from '@blockaid/client/resource';
import * as TransactionBulkAPI from '@blockaid/client/resources/evm/transaction-bulk';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class TransactionBulk extends APIResource {
  /**
   * Gets a bulk of transactions and returns a simulation showcasing the outcome
   * after executing the transactions synchronously, along with a suggested course of
   * action and textual explanations highlighting the reasons for flagging the bulk
   * in that manner.
   */
  scan(
    body: TransactionBulkScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionBulkScanResponse> {
    return this._client.post('/evm/transaction-bulk/scan', { body, ...options });
  }
}

export type TransactionBulkScanResponse = Array<EvmAPI.TransactionBulkResponse>;

export interface TransactionBulkScanParams {
  /**
   * The chain name
   */
  chain: string;

  /**
   * Transaction bulk parameters
   */
  data: Array<TransactionBulkScanParams.Data>;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;
}

export namespace TransactionBulkScanParams {
  export interface Data {
    /**
     * The source address of the transaction in hex string format
     */
    from: string;

    /**
     * The encoded call data of the transaction in hex string format
     */
    data?: string;

    /**
     * The gas required for the transaction in hex string format.
     */
    gas?: string;

    /**
     * The gas price for the transaction in hex string format.
     */
    gas_price?: string;

    /**
     * The destination address of the transaction in hex string format
     */
    to?: string;

    /**
     * The value of the transaction in Wei in hex string format
     */
    value?: string;
  }
}

export namespace TransactionBulk {
  export import TransactionBulkScanResponse = TransactionBulkAPI.TransactionBulkScanResponse;
  export import TransactionBulkScanParams = TransactionBulkAPI.TransactionBulkScanParams;
}
