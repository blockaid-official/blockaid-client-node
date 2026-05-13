// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { stringifyQuery } from './internal/utils/query';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import {
  Enrichment,
  EnrichmentReportAccount,
  EnrichmentReportAddress,
  EnrichmentReportAddresses,
  EnrichmentReportMetadata,
  EnrichmentReportSource,
  EnrichmentRequest,
} from './resources/enrichment';
import {
  Scan,
  ScanReportParams,
  ScanReportResponse,
  ScanStatusParams,
  ScanStatusResponse,
} from './resources/scan';
import {
  Site,
  SiteReportParams,
  SiteReportResponse,
  SiteScanHitResponse,
  SiteScanMissResponse,
  SiteScanParams,
  SiteScanResponse,
} from './resources/site';
import {
  FinancialStats,
  MarketType,
  Token,
  TokenMarket,
  TokenReportParams,
  TokenReportResponse,
  TokenScanParams,
  TokenScanResponse,
  TopHolder,
  TopHolderLabel,
} from './resources/token';
import { TokenBulk, TokenBulkScanParams, TokenBulkScanResponse } from './resources/token-bulk';
import {
  TokenSnapshot,
  TokenSnapshotDiffParams,
  TokenSnapshotDiffResponse,
  TokenSnapshotFullParams,
  TokenSnapshotFullResponse,
} from './resources/token-snapshot';
import {
  TokenWebhookCreateParams,
  TokenWebhookCreateResponse,
  TokenWebhookGetAllResponse,
  TokenWebhookGetResponse,
  TokenWebhooks,
} from './resources/token-webhooks';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import {
  Bitcoin,
  BitcoinTransactionScanRequest,
  BitcoinTransactionScanResponse,
} from './resources/bitcoin/bitcoin';
import { ChainAgnostic } from './resources/chain-agnostic/chain-agnostic';
import {
  AddressReportParams,
  AddressValidation,
  Authorization,
  Evm,
  MetadataParam,
  TokenScanSupportedChain,
  TransactionScanSupportedChain,
  UserOperationData,
  UserOperationRequest,
  UserOperationV6,
  UserOperationV6GasEstimation,
  UserOperationV7,
  UserOperationV7GasEstimation,
  ValidateAddress,
  ValidateBulkAddresses,
  ValidateBulkExtendedAddressesRequest,
  ValidateBulkExtendedAddressesResponse,
} from './resources/evm/evm';
import { ExchangeProtection } from './resources/exchange-protection/exchange-protection';
import { Hedera } from './resources/hedera/hedera';
import { Solana } from './resources/solana/solana';
import {
  Starknet,
  StarknetErc1155Details,
  StarknetErc1155Diff,
  StarknetErc20Details,
  StarknetErc20Diff,
  StarknetErc721Details,
  StarknetErc721Diff,
  StarknetTransactionScanRequest,
  StarknetTransactionScanResponse,
} from './resources/starknet/starknet';
import {
  Stellar,
  StellarAssetContractDetails,
  StellarAssetTransferDetails,
  StellarLegacyAssetDetails,
  StellarNativeAssetDetails,
  StellarSingleAssetExposure,
  StellarTransactionScanRequest,
  StellarTransactionScanResponse,
} from './resources/stellar/stellar';
import {
  Sui,
  SuiAssetTransferDetailsSchema,
  SuiNFTDetailsSchema,
  SuiNFTDiffSchema,
  SuiNativeAssetDetailsSchema,
  SuiTransactionScanResponse,
} from './resources/sui/sui';

const environments = {
  production: 'https://api.blockaid.io',
  client: 'https://client.blockaid.io',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Authentication method to api.blockaid.io
   */
  apiKey?: string | null | undefined;

  /**
   * Authentication method to client.blockaid.io
   */
  clientID?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.blockaid.io`
   * - `client` corresponds to `https://client.blockaid.io`
   */
  environment?: Environment | undefined;

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
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['BLOCKAID_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Blockaid API.
 */
export class Blockaid {
  apiKey: string | null;
  clientID: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Blockaid API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['BLOCKAID_CLIENT_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.clientID=process.env['BLOCKAID_CLIENT_ID_KEY'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['BLOCKAID_BASE_URL'] ?? https://api.blockaid.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('BLOCKAID_BASE_URL'),
    apiKey = readEnv('BLOCKAID_CLIENT_API_KEY') ?? null,
    clientID = readEnv('BLOCKAID_CLIENT_ID_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      clientID,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.BlockaidError(
        'Ambiguous URL; The `baseURL` option (or BLOCKAID_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? Blockaid.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('BLOCKAID_LOG'), "process.env['BLOCKAID_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('BLOCKAID_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = options;

    this.apiKey = apiKey;
    this.clientID = clientID;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      clientID: this.clientID,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.apiKey && values.get('x-api-key')) {
      return;
    }
    if (nulls.has('x-api-key')) {
      return;
    }

    if (this.clientID && values.get('x-client-id')) {
      return;
    }
    if (nulls.has('x-client-id')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either apiKey or clientID to be set. Or for one of the "X-API-Key" or "X-CLIENT-ID" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([await this.apiKeyAuth(opts), await this.clientIDAuth(opts)]);
  }

  protected async apiKeyAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ 'X-API-Key': this.apiKey }]);
  }

  protected async clientIDAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.clientID == null) {
      return undefined;
    }
    return buildHeaders([{ 'X-CLIENT-ID': this.clientID }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it
    // says, but otherwise calculate a default
    if (timeoutMillis === undefined) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Blockaid = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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

  evm: API.Evm = new API.Evm(this);
  solana: API.Solana = new API.Solana(this);
  hedera: API.Hedera = new API.Hedera(this);
  stellar: API.Stellar = new API.Stellar(this);
  bitcoin: API.Bitcoin = new API.Bitcoin(this);
  starknet: API.Starknet = new API.Starknet(this);
  sui: API.Sui = new API.Sui(this);
  site: API.Site = new API.Site(this);
  scan: API.Scan = new API.Scan(this);
  token: API.Token = new API.Token(this);
  tokenBulk: API.TokenBulk = new API.TokenBulk(this);
  tokenWebhooks: API.TokenWebhooks = new API.TokenWebhooks(this);
  tokenSnapshot: API.TokenSnapshot = new API.TokenSnapshot(this);
  exchangeProtection: API.ExchangeProtection = new API.ExchangeProtection(this);
  chainAgnostic: API.ChainAgnostic = new API.ChainAgnostic(this);
  enrichment: API.Enrichment = new API.Enrichment(this);
}

Blockaid.Evm = Evm;
Blockaid.Solana = Solana;
Blockaid.Hedera = Hedera;
Blockaid.Stellar = Stellar;
Blockaid.Bitcoin = Bitcoin;
Blockaid.Starknet = Starknet;
Blockaid.Sui = Sui;
Blockaid.Site = Site;
Blockaid.Scan = Scan;
Blockaid.Token = Token;
Blockaid.TokenBulk = TokenBulk;
Blockaid.TokenWebhooks = TokenWebhooks;
Blockaid.TokenSnapshot = TokenSnapshot;
Blockaid.ExchangeProtection = ExchangeProtection;
Blockaid.ChainAgnostic = ChainAgnostic;
Blockaid.Enrichment = Enrichment;

export declare namespace Blockaid {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Evm as Evm,
    type AddressReportParams as AddressReportParams,
    type AddressValidation as AddressValidation,
    type Authorization as Authorization,
    type MetadataParam as MetadataParam,
    type TokenScanSupportedChain as TokenScanSupportedChain,
    type TransactionScanSupportedChain as TransactionScanSupportedChain,
    type UserOperationData as UserOperationData,
    type UserOperationRequest as UserOperationRequest,
    type UserOperationV6 as UserOperationV6,
    type UserOperationV6GasEstimation as UserOperationV6GasEstimation,
    type UserOperationV7 as UserOperationV7,
    type UserOperationV7GasEstimation as UserOperationV7GasEstimation,
    type ValidateAddress as ValidateAddress,
    type ValidateBulkAddresses as ValidateBulkAddresses,
    type ValidateBulkExtendedAddressesRequest as ValidateBulkExtendedAddressesRequest,
    type ValidateBulkExtendedAddressesResponse as ValidateBulkExtendedAddressesResponse,
  };

  export { Solana as Solana };

  export { Hedera as Hedera };

  export {
    Stellar as Stellar,
    type StellarAssetContractDetails as StellarAssetContractDetails,
    type StellarAssetTransferDetails as StellarAssetTransferDetails,
    type StellarLegacyAssetDetails as StellarLegacyAssetDetails,
    type StellarNativeAssetDetails as StellarNativeAssetDetails,
    type StellarSingleAssetExposure as StellarSingleAssetExposure,
    type StellarTransactionScanRequest as StellarTransactionScanRequest,
    type StellarTransactionScanResponse as StellarTransactionScanResponse,
  };

  export {
    Bitcoin as Bitcoin,
    type BitcoinTransactionScanRequest as BitcoinTransactionScanRequest,
    type BitcoinTransactionScanResponse as BitcoinTransactionScanResponse,
  };

  export {
    Starknet as Starknet,
    type StarknetErc1155Details as StarknetErc1155Details,
    type StarknetErc1155Diff as StarknetErc1155Diff,
    type StarknetErc20Details as StarknetErc20Details,
    type StarknetErc20Diff as StarknetErc20Diff,
    type StarknetErc721Details as StarknetErc721Details,
    type StarknetErc721Diff as StarknetErc721Diff,
    type StarknetTransactionScanRequest as StarknetTransactionScanRequest,
    type StarknetTransactionScanResponse as StarknetTransactionScanResponse,
  };

  export {
    Sui as Sui,
    type SuiAssetTransferDetailsSchema as SuiAssetTransferDetailsSchema,
    type SuiNativeAssetDetailsSchema as SuiNativeAssetDetailsSchema,
    type SuiNFTDetailsSchema as SuiNFTDetailsSchema,
    type SuiNFTDiffSchema as SuiNFTDiffSchema,
    type SuiTransactionScanResponse as SuiTransactionScanResponse,
  };

  export {
    Site as Site,
    type SiteScanHitResponse as SiteScanHitResponse,
    type SiteScanMissResponse as SiteScanMissResponse,
    type SiteReportResponse as SiteReportResponse,
    type SiteScanResponse as SiteScanResponse,
    type SiteReportParams as SiteReportParams,
    type SiteScanParams as SiteScanParams,
  };

  export {
    Scan as Scan,
    type ScanReportResponse as ScanReportResponse,
    type ScanStatusResponse as ScanStatusResponse,
    type ScanReportParams as ScanReportParams,
    type ScanStatusParams as ScanStatusParams,
  };

  export {
    Token as Token,
    type FinancialStats as FinancialStats,
    type MarketType as MarketType,
    type TokenMarket as TokenMarket,
    type TopHolder as TopHolder,
    type TopHolderLabel as TopHolderLabel,
    type TokenReportResponse as TokenReportResponse,
    type TokenScanResponse as TokenScanResponse,
    type TokenReportParams as TokenReportParams,
    type TokenScanParams as TokenScanParams,
  };

  export {
    TokenBulk as TokenBulk,
    type TokenBulkScanResponse as TokenBulkScanResponse,
    type TokenBulkScanParams as TokenBulkScanParams,
  };

  export {
    TokenWebhooks as TokenWebhooks,
    type TokenWebhookCreateResponse as TokenWebhookCreateResponse,
    type TokenWebhookGetResponse as TokenWebhookGetResponse,
    type TokenWebhookGetAllResponse as TokenWebhookGetAllResponse,
    type TokenWebhookCreateParams as TokenWebhookCreateParams,
  };

  export {
    TokenSnapshot as TokenSnapshot,
    type TokenSnapshotDiffResponse as TokenSnapshotDiffResponse,
    type TokenSnapshotFullResponse as TokenSnapshotFullResponse,
    type TokenSnapshotDiffParams as TokenSnapshotDiffParams,
    type TokenSnapshotFullParams as TokenSnapshotFullParams,
  };

  export { ExchangeProtection as ExchangeProtection };

  export { ChainAgnostic as ChainAgnostic };

  export {
    Enrichment as Enrichment,
    type EnrichmentReportAccount as EnrichmentReportAccount,
    type EnrichmentReportAddress as EnrichmentReportAddress,
    type EnrichmentReportAddresses as EnrichmentReportAddresses,
    type EnrichmentReportMetadata as EnrichmentReportMetadata,
    type EnrichmentReportSource as EnrichmentReportSource,
    type EnrichmentRequest as EnrichmentRequest,
  };
}
