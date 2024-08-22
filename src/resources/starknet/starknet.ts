// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StarknetAPI from './starknet';
import * as TransactionAPI from './transaction';

export class Starknet extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StarknetErc1155Details {
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
   * Type of the asset (`ERC1155`)
   */
  type?: 'ERC1155';
}

export interface StarknetErc1155Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

  /**
   * USD price of the asset
   */
  usd_price: number;

  /**
   * Value of the transfer
   */
  value: number;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StarknetErc20Details {
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
   * Type of the asset (`ERC20`)
   */
  type?: 'ERC20';
}

export interface StarknetErc20Diff {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * USD price of the asset
   */
  usd_price: number;

  /**
   * Value of the transfer
   */
  value: number;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StarknetErc721Details {
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
   * Type of the asset (`ERC721`)
   */
  type?: 'ERC721';
}

export interface StarknetErc721Diff {
  /**
   * Token ID of the transfer
   */
  token_id: string;

  /**
   * USD price of the asset
   */
  usd_price: number;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export interface StarknetNativeDiff {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * USD price of the asset
   */
  usd_price: number;

  /**
   * Value of the transfer
   */
  value: number;

  /**
   * URL of the asset's logo
   */
  logo_url?: string | null;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;
}

export namespace Starknet {
  export import StarknetErc1155Details = StarknetAPI.StarknetErc1155Details;
  export import StarknetErc1155Diff = StarknetAPI.StarknetErc1155Diff;
  export import StarknetErc20Details = StarknetAPI.StarknetErc20Details;
  export import StarknetErc20Diff = StarknetAPI.StarknetErc20Diff;
  export import StarknetErc721Details = StarknetAPI.StarknetErc721Details;
  export import StarknetErc721Diff = StarknetAPI.StarknetErc721Diff;
  export import StarknetNativeDiff = StarknetAPI.StarknetNativeDiff;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
