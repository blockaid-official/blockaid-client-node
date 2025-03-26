// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EvmAPI from './evm/evm';

export class TokenWebhooks extends APIResource {
  /**
   * Create a new webhook for a given chain. The webhook will receive real-time token
   * scan updates.
   *
   * ## Webhook Endpoint Requirements
   *
   * To ensure proper functionality, your webhook endpoint must meet the following
   * requirements:
   *
   * ### ✅ Response Criteria
   *
   * - Must return an **HTTP 200 OK** status code upon successful receipt.
   * - Must respond within **1 second**.
   * - If the endpoint is unreachable for more than **1 hour**, the webhook will be
   *   **automatically disabled**.
   *
   * ### 🔄 Synchronization Process
   *
   * 1. **Subscribe to the webhook** to start receiving updates.
   * 2. **Receive real-time updates** for new token scans
   *
   * ### Webhook Request Format
   *
   * The webhook will send `POST` requests containing an array of token scan results:
   *
   * ```json
   * List[TokenValidationResponse]
   * ```
   *
   * For detailed response structure, see the
   * [Token Scan Response Reference](https://docs.blockaid.io/reference/token-scan-response-reference).
   *
   * ### Note
   *
   * - The same token will have multiple scan results over time
   * - Ensure that your system properly handles state overrides to reflect the most
   *   up-to-date token status.
   */
  create(
    chain: EvmAPI.TokenScanSupportedChain,
    body: TokenWebhookCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenWebhookCreateResponse> {
    return this._client.post(`/v0/token/hooks/${chain}`, { body, ...options });
  }

  /**
   * Delete an existing webhook subscription for a given chain.
   *
   * This will immediately stop sending token scan updates to the webhook URL.
   * Returns a 204 status code on successful deletion.
   */
  delete(chain: EvmAPI.TokenScanSupportedChain, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v0/token/hooks/${chain}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get information about an existing webhook for a given chain
   */
  get(
    chain: EvmAPI.TokenScanSupportedChain,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenWebhookGetResponse> {
    return this._client.get(`/v0/token/hooks/${chain}`, options);
  }

  /**
   * List all active webhook subscriptions across all chains
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
  }
}

export interface TokenWebhookCreateParams {
  url: string;
}

export declare namespace TokenWebhooks {
  export {
    type TokenWebhookCreateResponse as TokenWebhookCreateResponse,
    type TokenWebhookGetResponse as TokenWebhookGetResponse,
    type TokenWebhookGetAllResponse as TokenWebhookGetAllResponse,
    type TokenWebhookCreateParams as TokenWebhookCreateParams,
  };
}
