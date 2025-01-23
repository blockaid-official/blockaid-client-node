// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Scan, ScanStatusParams, ScanStatusResponse } from './resources/scan';
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
  Token,
  TokenReportParams,
  TokenReportResponse,
  TokenScanParams,
  TokenScanResponse,
} from './resources/token';
import { TokenBulk, TokenBulkScanParams, TokenBulkScanResponse } from './resources/token-bulk';
import {
  Bitcoin,
  BitcoinTransactionScanRequest,
  BitcoinTransactionScanResponse,
} from './resources/bitcoin/bitcoin';
import {
  Erc1155Diff,
  Erc1155Exposure,
  Erc1155TokenDetails,
  Erc20Diff,
  Erc20Exposure,
  Erc20TokenDetails,
  Erc721Diff,
  Erc721Exposure,
  Erc721TokenDetails,
  Evm,
  Metadata,
  NativeAssetDetails,
  NativeDiff,
  NonercTokenDetails,
  TokenScanSupportedChain,
  TransactionScanFeature,
  TransactionScanResponse,
  TransactionScanSupportedChain,
  TransactionSimulation,
  TransactionSimulationError,
  TransactionValidation,
  TransactionValidationError,
  UsdDiff,
} from './resources/evm/evm';
import {
  APIErrorDetails,
  AccountSummarySchema,
  AddressScanRequestSchema,
  AddressScanResponseSchema,
  AssetTransferDetailsSchema,
  CnftDetailsSchema,
  CnftDiffSchema,
  CnftMintAccountDetailsSchema,
  CombinedValidationResult,
  DelegatedAssetDetailsSchema,
  FungibleMintAccountDetailsSchema,
  InstructionErrorDetails,
  NativeDetailsSchema,
  NativeDiffSchema,
  NativeSolOwnershipDiffSchema,
  NonFungibleMintAccountDetailsSchema,
  PdaAccountSchema,
  ProgramAccountDetailsSchema,
  ResponseSchema,
  Solana,
  SplFungibleTokenDetailsSchema,
  SplFungibleTokenDiffSchema,
  SplNonFungibleTokenDetailsSchema,
  SplNonFungibleTokenDiffSchema,
  SplTokenOwnershipDiffSchema,
  StakedAssetDetailsSchema,
  StakedSolWithdrawAuthorityDiffSchema,
  SuccessfulSimulationResultSchema,
  SystemAccountDetailsSchema,
  TokenAccountDetailsSchema,
  TotalUsdDiffSchema,
  TransactionErrorDetails,
  TxScanRequestSchema,
  ValidationFeature,
} from './resources/solana/solana';
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
  SuiTransactionScanRequest,
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
  clientId?: string | null | undefined;

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
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
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
  sui: API.Sui = new API.Sui(this);
  site: API.Site = new API.Site(this);
  scan: API.Scan = new API.Scan(this);
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

Blockaid.Evm = Evm;
Blockaid.Solana = Solana;
Blockaid.Stellar = Stellar;
Blockaid.Bitcoin = Bitcoin;
Blockaid.Starknet = Starknet;
Blockaid.Sui = Sui;
Blockaid.Site = Site;
Blockaid.Scan = Scan;
Blockaid.Token = Token;
Blockaid.TokenBulk = TokenBulk;
export declare namespace Blockaid {
  export type RequestOptions = Core.RequestOptions;

  export {
    Evm as Evm,
    type Erc1155Diff as Erc1155Diff,
    type Erc1155Exposure as Erc1155Exposure,
    type Erc1155TokenDetails as Erc1155TokenDetails,
    type Erc20Diff as Erc20Diff,
    type Erc20Exposure as Erc20Exposure,
    type Erc20TokenDetails as Erc20TokenDetails,
    type Erc721Diff as Erc721Diff,
    type Erc721Exposure as Erc721Exposure,
    type Erc721TokenDetails as Erc721TokenDetails,
    type Metadata as Metadata,
    type NativeAssetDetails as NativeAssetDetails,
    type NativeDiff as NativeDiff,
    type NonercTokenDetails as NonercTokenDetails,
    type TokenScanSupportedChain as TokenScanSupportedChain,
    type TransactionScanFeature as TransactionScanFeature,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanSupportedChain as TransactionScanSupportedChain,
    type TransactionSimulation as TransactionSimulation,
    type TransactionSimulationError as TransactionSimulationError,
    type TransactionValidation as TransactionValidation,
    type TransactionValidationError as TransactionValidationError,
    type UsdDiff as UsdDiff,
  };

  export {
    Solana as Solana,
    type AccountSummarySchema as AccountSummarySchema,
    type AddressScanRequestSchema as AddressScanRequestSchema,
    type AddressScanResponseSchema as AddressScanResponseSchema,
    type APIErrorDetails as APIErrorDetails,
    type AssetTransferDetailsSchema as AssetTransferDetailsSchema,
    type CnftDetailsSchema as CnftDetailsSchema,
    type CnftDiffSchema as CnftDiffSchema,
    type CnftMintAccountDetailsSchema as CnftMintAccountDetailsSchema,
    type CombinedValidationResult as CombinedValidationResult,
    type DelegatedAssetDetailsSchema as DelegatedAssetDetailsSchema,
    type FungibleMintAccountDetailsSchema as FungibleMintAccountDetailsSchema,
    type InstructionErrorDetails as InstructionErrorDetails,
    type NativeDetailsSchema as NativeDetailsSchema,
    type NativeDiffSchema as NativeDiffSchema,
    type NativeSolOwnershipDiffSchema as NativeSolOwnershipDiffSchema,
    type NonFungibleMintAccountDetailsSchema as NonFungibleMintAccountDetailsSchema,
    type PdaAccountSchema as PdaAccountSchema,
    type ProgramAccountDetailsSchema as ProgramAccountDetailsSchema,
    type ResponseSchema as ResponseSchema,
    type SplFungibleTokenDetailsSchema as SplFungibleTokenDetailsSchema,
    type SplFungibleTokenDiffSchema as SplFungibleTokenDiffSchema,
    type SplNonFungibleTokenDetailsSchema as SplNonFungibleTokenDetailsSchema,
    type SplNonFungibleTokenDiffSchema as SplNonFungibleTokenDiffSchema,
    type SplTokenOwnershipDiffSchema as SplTokenOwnershipDiffSchema,
    type StakedAssetDetailsSchema as StakedAssetDetailsSchema,
    type StakedSolWithdrawAuthorityDiffSchema as StakedSolWithdrawAuthorityDiffSchema,
    type SuccessfulSimulationResultSchema as SuccessfulSimulationResultSchema,
    type SystemAccountDetailsSchema as SystemAccountDetailsSchema,
    type TokenAccountDetailsSchema as TokenAccountDetailsSchema,
    type TotalUsdDiffSchema as TotalUsdDiffSchema,
    type TransactionErrorDetails as TransactionErrorDetails,
    type TxScanRequestSchema as TxScanRequestSchema,
    type ValidationFeature as ValidationFeature,
  };

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
    type SuiTransactionScanRequest as SuiTransactionScanRequest,
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
    type ScanStatusResponse as ScanStatusResponse,
    type ScanStatusParams as ScanStatusParams,
  };

  export {
    Token as Token,
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
}

export { toFile, fileFromPath } from './uploads';
export {
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
} from './error';

export default Blockaid;
