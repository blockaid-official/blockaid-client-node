// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams, TransactionScanResponse } from './transaction';

export class Starknet extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StarknetErc1155Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

  /**
   * USD price of the asset
   */
  usd_price: string;

  /**
   * Value of the transfer
   */
  value: number;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StarknetErc20Diff {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * USD price of the asset
   */
  usd_price: string;

  /**
   * Value of the transfer
   */
  value: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StarknetErc721Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

  /**
   * USD price of the asset
   */
  usd_price: string;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

Starknet.Transaction = Transaction;

export declare namespace Starknet {
  export {
    type StarknetErc1155Diff as StarknetErc1155Diff,
    type StarknetErc20Diff as StarknetErc20Diff,
    type StarknetErc721Diff as StarknetErc721Diff,
  };

  export {
    Transaction as Transaction,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
