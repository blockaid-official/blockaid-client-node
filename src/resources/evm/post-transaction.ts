// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@blockaid/client/core';
import { APIResource } from '@blockaid/client/resource';
import * as PostTransactionAPI from '@blockaid/client/resources/evm/post-transaction';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class PostTransaction extends APIResource {
  /**
   * Scan a transaction that was already executed on chain, returns validation with
   * features indicating address poisoning entites and malicious operators.
   */
  scan(
    body: PostTransactionScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/v0/evm/post-transaction/scan', { body, ...options });
  }
}

export interface PostTransactionScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  data: PostTransactionScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * list of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;
}

export namespace PostTransactionScanParams {
  export interface Data {
    /**
     * The transaction hash to scan
     */
    tx_hash: string;
  }
}

export namespace PostTransaction {
  export import PostTransactionScanParams = PostTransactionAPI.PostTransactionScanParams;
}
