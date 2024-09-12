// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

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
  clientId?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.blockaid.io`
   * - `client` corresponds to `https://client.blockaid.io`
   */
  environment?: Environment;

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

/**
 * API Client for interfacing with the Blockaid API.
 */
export class Blockaid extends Core.APIClient {
  apiKey: string | null;
  clientId: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Blockaid API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['BLOCKAID_CLIENT_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.clientId=process.env['BLOCKAID_CLIENT_ID_KEY'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['BLOCKAID_BASE_URL'] ?? https://api.blockaid.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BLOCKAID_BASE_URL'),
    apiKey = Core.readEnv('BLOCKAID_CLIENT_API_KEY') ?? null,
    clientId = Core.readEnv('BLOCKAID_CLIENT_ID_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      clientId,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.BlockaidError(
        'Ambiguous URL; The `baseURL` option (or BLOCKAID_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.clientId = clientId;
  }

  evm: API.Evm = new API.Evm(this);
  solana: API.Solana = new API.Solana(this);
  stellar: API.Stellar = new API.Stellar(this);
  bitcoin: API.Bitcoin = new API.Bitcoin(this);
  starknet: API.Starknet = new API.Starknet(this);
  site: API.Site = new API.Site(this);
  token: API.Token = new API.Token(this);
  tokenBulk: API.TokenBulk = new API.TokenBulk(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiKey && headers['x-api-key']) {
      return;
    }
    if (customHeaders['x-api-key'] === null) {
      return;
    }

    if (this.clientId && headers['x-client-id']) {
      return;
    }
    if (customHeaders['x-client-id'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either apiKey or clientId to be set. Or for one of the "X-API-Key" or "X-CLIENT-ID" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const apiKeyAuth = this.apiKeyAuth(opts);
    const clientIdAuth = this.clientIdAuth(opts);

    if (apiKeyAuth != null && !Core.isEmptyObj(apiKeyAuth)) {
      return apiKeyAuth;
    }

    if (clientIdAuth != null && !Core.isEmptyObj(clientIdAuth)) {
      return clientIdAuth;
    }
    return {};
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { 'X-API-Key': this.apiKey };
  }

  protected clientIdAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.clientId == null) {
      return {};
    }
    return { 'X-CLIENT-ID': this.clientId };
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
  export import AssetDiff = API.AssetDiff;
  export import Erc1155AddressAssetExposure = API.Erc1155AddressAssetExposure;
  export import Erc1155Diff = API.Erc1155Diff;
  export import Erc1155Exposure = API.Erc1155Exposure;
  export import Erc1155TokenDetails = API.Erc1155TokenDetails;
  export import Erc20AddressAssetExposure = API.Erc20AddressAssetExposure;
  export import Erc20Diff = API.Erc20Diff;
  export import Erc20Exposure = API.Erc20Exposure;
  export import Erc20TokenDetails = API.Erc20TokenDetails;
  export import Erc721AddressAssetExposure = API.Erc721AddressAssetExposure;
  export import Erc721Diff = API.Erc721Diff;
  export import Erc721Exposure = API.Erc721Exposure;
  export import Erc721TokenDetails = API.Erc721TokenDetails;
  export import Metadata = API.Metadata;
  export import NativeAssetDetails = API.NativeAssetDetails;
  export import NativeDiff = API.NativeDiff;
  export import NonercAddressAssetExposure = API.NonercAddressAssetExposure;
  export import NonercDiff = API.NonercDiff;
  export import NonercExposure = API.NonercExposure;
  export import NonercTokenDetails = API.NonercTokenDetails;
  export import TokenScanSupportedChain = API.TokenScanSupportedChain;
  export import TransactionScanFeature = API.TransactionScanFeature;
  export import TransactionScanResponse = API.TransactionScanResponse;
  export import TransactionScanSupportedChain = API.TransactionScanSupportedChain;
  export import TransactionSimulationResponse = API.TransactionSimulationResponse;
  export import TransactionSimulation = API.TransactionSimulation;
  export import TransactionSimulationError = API.TransactionSimulationError;
  export import TransactionValidationResponse = API.TransactionValidationResponse;
  export import TransactionValidation = API.TransactionValidation;
  export import TransactionValidationError = API.TransactionValidationError;
  export import UsdDiff = API.UsdDiff;

  export import Solana = API.Solana;
  export import AccountSummarySchema = API.AccountSummarySchema;
  export import AddressScanRequestSchema = API.AddressScanRequestSchema;
  export import AddressScanResponseSchema = API.AddressScanResponseSchema;
  export import APIErrorDetails = API.APIErrorDetails;
  export import AssetTransferDetailsSchema = API.AssetTransferDetailsSchema;
  export import CnftDetailsSchema = API.CnftDetailsSchema;
  export import CnftDiffSchema = API.CnftDiffSchema;
  export import CnftMintAccountDetailsSchema = API.CnftMintAccountDetailsSchema;
  export import CombinedValidationResult = API.CombinedValidationResult;
  export import DelegatedAssetDetailsSchema = API.DelegatedAssetDetailsSchema;
  export import FungibleMintAccountDetailsSchema = API.FungibleMintAccountDetailsSchema;
  export import InstructionErrorDetails = API.InstructionErrorDetails;
  export import NativeSolDetailsSchema = API.NativeSolDetailsSchema;
  export import NativeSolDiffSchema = API.NativeSolDiffSchema;
  export import NativeSolOwnershipDiffSchema = API.NativeSolOwnershipDiffSchema;
  export import NonFungibleMintAccountDetailsSchema = API.NonFungibleMintAccountDetailsSchema;
  export import PdaAccountSchema = API.PdaAccountSchema;
  export import ProgramAccountDetailsSchema = API.ProgramAccountDetailsSchema;
  export import ResponseSchema = API.ResponseSchema;
  export import SplFungibleTokenDetailsSchema = API.SplFungibleTokenDetailsSchema;
  export import SplFungibleTokenDiffSchema = API.SplFungibleTokenDiffSchema;
  export import SplNonFungibleTokenDetailsSchema = API.SplNonFungibleTokenDetailsSchema;
  export import SplNonFungibleTokenDiffSchema = API.SplNonFungibleTokenDiffSchema;
  export import SplTokenOwnershipDiffSchema = API.SplTokenOwnershipDiffSchema;
  export import StakedSolAssetDetailsSchema = API.StakedSolAssetDetailsSchema;
  export import StakedSolWithdrawAuthorityDiffSchema = API.StakedSolWithdrawAuthorityDiffSchema;
  export import SuccessfulSimulationResultSchema = API.SuccessfulSimulationResultSchema;
  export import SystemAccountDetailsSchema = API.SystemAccountDetailsSchema;
  export import TokenAccountDetailsSchema = API.TokenAccountDetailsSchema;
  export import TotalUsdDiffSchema = API.TotalUsdDiffSchema;
  export import TransactionErrorDetails = API.TransactionErrorDetails;
  export import TxScanRequestSchema = API.TxScanRequestSchema;
  export import ValidationFeature = API.ValidationFeature;

  export import Stellar = API.Stellar;
  export import StellarAssetContractDetailsSchema = API.StellarAssetContractDetailsSchema;
  export import StellarAssetTransferDetailsSchema = API.StellarAssetTransferDetailsSchema;
  export import StellarTransactionScanRequest = API.StellarTransactionScanRequest;
  export import StellarTransactionScanResponse = API.StellarTransactionScanResponse;

  export import Bitcoin = API.Bitcoin;

  export import Starknet = API.Starknet;
  export import StarknetErc1155Diff = API.StarknetErc1155Diff;
  export import StarknetErc20Diff = API.StarknetErc20Diff;
  export import StarknetErc721Diff = API.StarknetErc721Diff;

  export import Site = API.Site;
  export import SiteScanHitResponse = API.SiteScanHitResponse;
  export import SiteScanMissResponse = API.SiteScanMissResponse;
  export import SiteReportResponse = API.SiteReportResponse;
  export import SiteScanResponse = API.SiteScanResponse;
  export import SiteReportParams = API.SiteReportParams;
  export import SiteScanParams = API.SiteScanParams;

  export import Token = API.Token;
  export import TokenReportResponse = API.TokenReportResponse;
  export import TokenScanResponse = API.TokenScanResponse;
  export import TokenReportParams = API.TokenReportParams;
  export import TokenScanParams = API.TokenScanParams;

  export import TokenBulk = API.TokenBulk;
  export import TokenBulkScanResponse = API.TokenBulkScanResponse;
  export import TokenBulkScanParams = API.TokenBulkScanParams;
}

export default Blockaid;
