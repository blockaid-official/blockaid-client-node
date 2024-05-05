// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from '@blockaid/client/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['BLOCKAID_CLIENT_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['BLOCKAID_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Blockaid API. */
export class Blockaid extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Blockaid API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['BLOCKAID_CLIENT_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['BLOCKAID_BASE_URL'] ?? https://api.blockaid.io/v0] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BLOCKAID_BASE_URL'),
    apiKey = Core.readEnv('BLOCKAID_CLIENT_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.BlockaidError(
        "The BLOCKAID_CLIENT_API_KEY environment variable is missing or empty; either provide it, or instantiate the Blockaid client with an apiKey option, like new Blockaid({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.blockaid.io/v0`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiKey = apiKey;
  }

  evm: API.Evm = new API.Evm(this);
  site: API.Site = new API.Site(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-Key': this.apiKey };
  }

  static Blockaid = this;

  static BlockaidError = Errors.BlockaidError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  BlockaidError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Blockaid {
  export import RequestOptions = Core.RequestOptions;

  export import Evm = API.Evm;
  export import AddressAssetExposure = API.AddressAssetExposure;
  export import Chain = API.Chain;
  export import Erc1155Diff = API.Erc1155Diff;
  export import Erc1155Exposure = API.Erc1155Exposure;
  export import Erc1155TokenDetails = API.Erc1155TokenDetails;
  export import Erc20Diff = API.Erc20Diff;
  export import Erc20Exposure = API.Erc20Exposure;
  export import Erc20TokenDetails = API.Erc20TokenDetails;
  export import Erc721Diff = API.Erc721Diff;
  export import Erc721Exposure = API.Erc721Exposure;
  export import Erc721TokenDetails = API.Erc721TokenDetails;
  export import Metadata = API.Metadata;
  export import NativeAssetDetails = API.NativeAssetDetails;
  export import NativeDiff = API.NativeDiff;
  export import NonercTokenDetails = API.NonercTokenDetails;
  export import TransactionBulkResponse = API.TransactionBulkResponse;
  export import TransactionScanFeature = API.TransactionScanFeature;
  export import TransactionScanResponse = API.TransactionScanResponse;
  export import TransactionSimulation = API.TransactionSimulation;
  export import TransactionValidation = API.TransactionValidation;
  export import UsdDiff = API.UsdDiff;

  export import Site = API.Site;
  export import SiteScanHitResponse = API.SiteScanHitResponse;
  export import SiteScanMissResponse = API.SiteScanMissResponse;
  export import SiteScanResponse = API.SiteScanResponse;
  export import SiteScanParams = API.SiteScanParams;
}

export default Blockaid;
