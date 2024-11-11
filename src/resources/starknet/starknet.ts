// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';
import {
  Transaction,
  TransactionReportParams,
  TransactionReportResponse,
  TransactionScanParams,
  TransactionScanResponse,
} from './transaction';

export class Starknet extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StarknetAccountErc1155Exposure {
  /**
   * Address of the token's contract
   */
  address: string;

  /**
   * token's name
   */
  name: string;

  /**
   * token's symbol
   */
  symbol: string;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC1155`)
   */
  type?: 'ERC1155';
}

export interface StarknetAccountErc20Exposure {
  /**
   * Address of the token's contract
   */
  address: string;

  /**
   * token's decimals
   */
  decimals: number;

  /**
   * token's name
   */
  name: string;

  /**
   * token's symbol
   */
  symbol: string;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC20`)
   */
  type?: 'ERC20';
}

export interface StarknetAccountErc721Exposure {
  /**
   * Address of the token's contract
   */
  address: string;

  /**
   * token's name
   */
  name: string;

  /**
   * token's symbol
   */
  symbol: string;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Type of the asset (`ERC721`)
   */
  type?: 'ERC721';
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
    type StarknetAccountErc1155Exposure as StarknetAccountErc1155Exposure,
    type StarknetAccountErc20Exposure as StarknetAccountErc20Exposure,
    type StarknetAccountErc721Exposure as StarknetAccountErc721Exposure,
    type StarknetErc1155Diff as StarknetErc1155Diff,
    type StarknetErc20Diff as StarknetErc20Diff,
    type StarknetErc721Diff as StarknetErc721Diff,
  };

  export {
    Transaction as Transaction,
    type TransactionReportResponse as TransactionReportResponse,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionReportParams as TransactionReportParams,
    type TransactionScanParams as TransactionScanParams,
  };
}
