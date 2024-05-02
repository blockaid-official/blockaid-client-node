// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'blockaid/core';
import { APIResource } from 'blockaid/resource';
import * as TransactionRawAPI from 'blockaid/resources/evm/transaction-raw';
import * as EvmAPI from 'blockaid/resources/evm/evm';

export class TransactionRaw extends APIResource {
  /**
   * Gets a raw transaction and returns a full simulation indicating what will happen
   * in the transaction together with a recommended action and some textual reasons
   * of why the transaction was flagged that way.
   */
  scan(
    body: TransactionRawScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/evm/transaction-raw/scan', { body, ...options });
  }
}

export interface TransactionRawScanParams {
  /**
   * The address to relate the transaction to. Account address determines in which
   * perspective the transaction is simulated and validated.
   */
  account_address: string;

  /**
   * The chain name
   */
  chain: string;

  /**
   * Hex string of the raw transaction data
   */
  data: string;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace TransactionRaw {
  export import TransactionRawScanParams = TransactionRawAPI.TransactionRawScanParams;
}
