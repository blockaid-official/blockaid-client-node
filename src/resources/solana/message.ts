// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MessageAPI from './message';
import * as SolanaAPI from './solana';

export class Message extends APIResource {
  /**
   * Scan Messages
   */
  scan(
    body: MessageScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SolanaAPI.SolanaMessageScanResponse> {
    return this._client.post('/v0/solana/message/scan', { body, ...options });
  }
}

export interface MessageScanParams {
  /**
   * Encoded public key of the account to simulate the transaction on
   */
  account_address: string;

  metadata: MessageScanParams.Metadata;

  /**
   * Transactions to scan
   */
  transactions: Array<string>;

  /**
   * Chain to scan the transaction on
   */
  chain?: string;

  /**
   * Encoding of the transaction and public keys
   */
  encoding?: string;

  /**
   * The RPC method used by dApp to propose the transaction
   */
  method?: string;

  options?: Array<string>;
}

export namespace MessageScanParams {
  export interface Metadata {
    /**
     * URL of the dApp that originated the transaction
     */
    url?: string | null;
  }
}

export namespace Message {
  export import MessageScanParams = MessageAPI.MessageScanParams;
}
