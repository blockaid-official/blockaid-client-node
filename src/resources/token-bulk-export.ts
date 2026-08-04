// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EvmAPI from './evm/evm';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TokenBulkExport extends APIResource {
  /**
   * Creates an asynchronous job to export token scan data for a chain in the
   * requested format.
   *
   * @example
   * ```ts
   * const tokenBulkExport = await client.tokenBulkExport.create(
   *   {
   *     chain: 'ethereum',
   *     format: 'jsonl_gzip',
   *     token_type: 'fungible',
   *   },
   * );
   * ```
   */
  create(
    body: TokenBulkExportCreateParams,
    options?: RequestOptions,
  ): APIPromise<TokenBulkExportCreateResponse> {
    return this._client.post('/v0/token/bulk-export/jobs', { body, ...options });
  }

  /**
   * Retrieves the current status of the job and download URLs when status is
   * `succeeded`.
   *
   * @example
   * ```ts
   * const response = await client.tokenBulkExport.status(
   *   'job_id',
   * );
   * ```
   */
  status(jobID: string, options?: RequestOptions): APIPromise<TokenBulkExportStatusResponse> {
    return this._client.get(path`/v0/token/bulk-export/jobs/${jobID}`, options);
  }
}

export interface TokenBulkExportCreateResponse {
  job_id: string;

  /**
   * Current state of the job: `queued` (accepted, waiting to start), `running` (in
   * progress), `succeeded` (completed successfully), `failed` (completed with an
   * error).
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed';
}

export interface TokenBulkExportStatusResponse {
  /**
   * Current state of the job: `queued` (accepted, waiting to start), `running` (in
   * progress), `succeeded` (completed successfully), `failed` (completed with an
   * error).
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed';

  /**
   * The chain name
   */
  chain?: EvmAPI.TokenScanSupportedChain | null;

  /**
   * Seconds until URLs expire
   */
  expires_in?: number | null;

  files?: Array<string> | null;

  /**
   * Number of tokens exported
   */
  tokens_count?: number | null;
}

export interface TokenBulkExportCreateParams {
  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  /**
   * Output file format for the export: `jsonl_gzip` (JSON Lines compressed with
   * gzip) or `parquet_snappy` (Apache Parquet compressed with Snappy).
   */
  format: 'jsonl_gzip' | 'parquet_snappy';

  /**
   * Export only records with timestamps at or after this Unix timestamp. If empty or
   * 0, all records will be exported.
   */
  sync_start_time?: number | null;

  /**
   * Type of token standard: `fungible` for interchangeable tokens (e.g., ERC-20), or
   * `non_fungible` for unique tokens (e.g., NFTs such as ERC-721/ERC-1155).
   */
  token_type?: 'fungible' | 'non_fungible' | null;
}

export declare namespace TokenBulkExport {
  export {
    type TokenBulkExportCreateResponse as TokenBulkExportCreateResponse,
    type TokenBulkExportStatusResponse as TokenBulkExportStatusResponse,
    type TokenBulkExportCreateParams as TokenBulkExportCreateParams,
  };
}
