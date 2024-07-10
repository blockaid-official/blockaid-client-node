// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as Core from '@blockaid/client/core';
import * as MessageAPI from '@blockaid/client/resources/solana/message';
import * as SolanaAPI from '@blockaid/client/resources/solana/solana';

export class Message extends APIResource {
  /**
   * Scan Messages
   */
  scan(body: MessageScanParams, options?: Core.RequestOptions): Core.APIPromise<SolanaAPI.ResponseSchema> {
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
