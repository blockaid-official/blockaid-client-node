// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as PostTransactionBulkAPI from '@blockaid/client/resources/evm/post-transaction-bulk';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class PostTransactionBulk extends APIResource {
  /**
   * Scan transactions that were already executed on chain, returns validation with
   * features indicating address poisoning entites and malicious operators.
   */
  scan(
    body: PostTransactionBulkScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTransactionBulkScanResponse> {
    return this._client.post('/v0/evm/post-transaction-bulk/scan', { body, ...options });
  }
}

export type PostTransactionBulkScanResponse = Array<EvmAPI.TransactionScanResponse>;

export interface PostTransactionBulkScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Transaction hashes to scan
   */
  data: Array<string>;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;
}

export namespace PostTransactionBulk {
  export import PostTransactionBulkScanResponse = PostTransactionBulkAPI.PostTransactionBulkScanResponse;
  export import PostTransactionBulkScanParams = PostTransactionBulkAPI.PostTransactionBulkScanParams;
}
