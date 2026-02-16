// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EvmAPI from './evm/evm';

export class TokenWebhooks extends APIResource {
  /**
   * Creates a webhook subscription for a chain to receive real-time token scan
   * updates.
   *
   * @example
   * ```ts
   * const tokenWebhook = await client.tokenWebhooks.create(
   *   'arbitrum',
   *   {
   *     url: 'https://example.com/',
   *     filter: {
   *       filter_type: 'token_address',
   *       token_addresses: [
   *         '0x1234567890abcdef1234567890abcdef12345678',
   *       ],
   *     },
   *     shared_secret_key: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
   *   },
   * );
   * ```
   */
  create(
    chain: EvmAPI.TokenScanSupportedChain,
    body: TokenWebhookCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenWebhookCreateResponse> {
    return this._client.post(`/v0/token/hooks/${chain}`, { body, ...options });
  }

  /**
   * Deletes the webhook subscription for a chain and stops further token scan
   * updates.
   *
   * @example
   * ```ts
   * await client.tokenWebhooks.delete('arbitrum');
   * ```
   */
  delete(chain: EvmAPI.TokenScanSupportedChain, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v0/token/hooks/${chain}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get information about an existing webhook for a given chain
   *
   * @example
   * ```ts
   * const tokenWebhook = await client.tokenWebhooks.get(
   *   'arbitrum',
   * );
   * ```
   */
  get(
    chain: EvmAPI.TokenScanSupportedChain,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenWebhookGetResponse> {
    return this._client.get(`/v0/token/hooks/${chain}`, options);
  }

  /**
   * List all active webhook subscriptions across all chains
   *
   * @example
   * ```ts
   * const response = await client.tokenWebhooks.getAll();
   * ```
   */
  getAll(options?: Core.RequestOptions): Core.APIPromise<TokenWebhookGetAllResponse> {
    return this._client.get('/v0/token/hooks/', options);
  }
}

export interface TokenWebhookCreateResponse {
  active: boolean;

  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  created_at: string;

  updated_at: string;

  url: string;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export interface TokenWebhookGetResponse {
  active: boolean;

  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  created_at: string;

  updated_at: string;

  url: string;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export type TokenWebhookGetAllResponse = Array<TokenWebhookGetAllResponse.TokenWebhookGetAllResponseItem>;

export namespace TokenWebhookGetAllResponse {
  export interface TokenWebhookGetAllResponseItem {
    active: boolean;

    /**
     * The chain name
     */
    chain: EvmAPI.TokenScanSupportedChain;

    created_at: string;

    updated_at: string;

    url: string;

    /**
     * Optional shared secret key (32 characters), used to calculate the HMAC signature
     */
    shared_secret_key?: string | null;
  }
}

export interface TokenWebhookCreateParams {
  url: string;

  /**
   * Filter for webhook updates
   */
  filter?: TokenWebhookCreateParams.TokenAddressFilter | TokenWebhookCreateParams.TokenTypeFilter | null;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export namespace TokenWebhookCreateParams {
  export interface TokenAddressFilter {
    /**
     * List of up to 100000 token addresses to filter webhook updates
     */
    token_addresses: Array<string>;

    /**
     * Type of filter applied to the webhook updates
     */
    filter_type?: 'token_address';
  }

  export interface TokenTypeFilter {
    /**
     * Type of token to filter
     */
    token_type: 'Fungible' | 'NonFungible';

    /**
     * Type of filter applied to the webhook updates
     */
    filter_type?: 'token_type';
  }
}

export declare namespace TokenWebhooks {
  export {
    type TokenWebhookCreateResponse as TokenWebhookCreateResponse,
    type TokenWebhookGetResponse as TokenWebhookGetResponse,
    type TokenWebhookGetAllResponse as TokenWebhookGetAllResponse,
    type TokenWebhookCreateParams as TokenWebhookCreateParams,
  };
}
