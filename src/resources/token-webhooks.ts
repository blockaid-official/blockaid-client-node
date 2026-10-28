// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EvmAPI from './evm/evm';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
    options?: RequestOptions,
  ): APIPromise<TokenWebhookCreateResponse> {
    return this._client.post(path`/v0/token/hooks/${chain}`, { body, ...options });
  }

  /**
   * Updates an existing webhook subscription in place. Only the provided fields are
   * changed; omitted fields keep their current value. The filter's token_addresses
   * can be replaced in full via `filter`, or adjusted incrementally via
   * `add_token_addresses`/`remove_token_addresses` (mutually exclusive with
   * `filter`).
   *
   * @example
   * ```ts
   * const tokenWebhook = await client.tokenWebhooks.update(
   *   'arbitrum',
   *   {
   *     filter: {
   *       filter_type: 'token_address',
   *       token_addresses: [
   *         '0x1234567890abcdef1234567890abcdef12345678',
   *       ],
   *     },
   *   },
   * );
   * ```
   */
  update(
    chain: EvmAPI.TokenScanSupportedChain,
    body: TokenWebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TokenWebhookUpdateResponse> {
    return this._client.patch(path`/v0/token/hooks/${chain}`, { body, ...options });
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
  delete(chain: EvmAPI.TokenScanSupportedChain, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v0/token/hooks/${chain}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  get(chain: EvmAPI.TokenScanSupportedChain, options?: RequestOptions): APIPromise<TokenWebhookGetResponse> {
    return this._client.get(path`/v0/token/hooks/${chain}`, options);
  }

  /**
   * List all active webhook subscriptions across all chains
   *
   * @example
   * ```ts
   * const response = await client.tokenWebhooks.getAll();
   * ```
   */
  getAll(options?: RequestOptions): APIPromise<TokenWebhookGetAllResponse> {
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
   * Filter for webhook updates
   */
  filter?: TokenWebhookCreateResponse.TokenAddressFilter | TokenWebhookCreateResponse.TokenTypeFilter | null;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export namespace TokenWebhookCreateResponse {
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

export interface TokenWebhookUpdateResponse {
  active: boolean;

  /**
   * The chain name
   */
  chain: EvmAPI.TokenScanSupportedChain;

  created_at: string;

  updated_at: string;

  url: string;

  /**
   * Filter for webhook updates
   */
  filter?: TokenWebhookUpdateResponse.TokenAddressFilter | TokenWebhookUpdateResponse.TokenTypeFilter | null;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export namespace TokenWebhookUpdateResponse {
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
   * Filter for webhook updates
   */
  filter?: TokenWebhookGetResponse.TokenAddressFilter | TokenWebhookGetResponse.TokenTypeFilter | null;

  /**
   * Optional shared secret key (32 characters), used to calculate the HMAC signature
   */
  shared_secret_key?: string | null;
}

export namespace TokenWebhookGetResponse {
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
     * Filter for webhook updates
     */
    filter?:
      | TokenWebhookGetAllResponseItem.TokenAddressFilter
      | TokenWebhookGetAllResponseItem.TokenTypeFilter
      | null;

    /**
     * Optional shared secret key (32 characters), used to calculate the HMAC signature
     */
    shared_secret_key?: string | null;
  }

  export namespace TokenWebhookGetAllResponseItem {
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

export interface TokenWebhookUpdateParams {
  /**
   * Token addresses to add to the hook's existing token_address filter, without
   * having to resend the full list. Mutually exclusive with filter.
   */
  add_token_addresses?: Array<string> | null;

  /**
   * If provided, replaces the hook's filter in full. Mutually exclusive with
   * add_token_addresses/remove_token_addresses.
   */
  filter?: TokenWebhookUpdateParams.TokenAddressFilter | TokenWebhookUpdateParams.TokenTypeFilter | null;

  /**
   * Token addresses to remove from the hook's existing token_address filter.
   * Mutually exclusive with filter.
   */
  remove_token_addresses?: Array<string> | null;

  /**
   * If provided, replaces the hook's shared secret key
   */
  shared_secret_key?: string | null;

  /**
   * If provided, replaces the hook's url
   */
  url?: string | null;
}

export namespace TokenWebhookUpdateParams {
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
    type TokenWebhookUpdateResponse as TokenWebhookUpdateResponse,
    type TokenWebhookGetResponse as TokenWebhookGetResponse,
    type TokenWebhookGetAllResponse as TokenWebhookGetAllResponse,
    type TokenWebhookCreateParams as TokenWebhookCreateParams,
    type TokenWebhookUpdateParams as TokenWebhookUpdateParams,
  };
}
