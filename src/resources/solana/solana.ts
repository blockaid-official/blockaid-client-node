// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@blockaid/client/resource';
import * as SolanaAPI from '@blockaid/client/resources/solana/solana';
import * as AddressAPI from '@blockaid/client/resources/solana/address';
import * as MessageAPI from '@blockaid/client/resources/solana/message';

export class Solana extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

export interface AssetTransferDetailsSchema {
  /**
   * Raw value of the transfer
   */
  raw_value: number;

  /**
   * Value of the transfer
   */
  value: number;

  /**
   * Summarized description of the transfer
   */
  summary?: string | null;

  /**
   * USD price of the asset
   */
  usd_price?: number | null;
}

export interface CnftDetailsSchema {
  address: string;

  decimals: number;

  name: string;

  symbol: string;

  logo?: string;

  /**
   * Type of the asset (`"CNFT"`)
   */
  type?: string;
}

export interface NativeSolDetailsSchema {
  decimals?: number;

  /**
   * Type of the asset (`"SOL"`)
   */
  type?: string;
}

export interface SplFungibleTokenDetailsSchema {
  address: string;

  decimals: number;

  name: string;

  symbol: string;

  logo?: string;

  /**
   * Type of the asset (`"TOKEN"`)
   */
  type?: string;
}

export interface SplNonFungibleTokenDetailsSchema {
  address: string;

  name: string;

  symbol: string;

  decimals?: number;

  logo?: string;

  /**
   * Type of the asset (`"NFT"`)
   */
  type?: string;
}

export namespace Solana {
  export import AssetTransferDetailsSchema = SolanaAPI.AssetTransferDetailsSchema;
  export import CnftDetailsSchema = SolanaAPI.CnftDetailsSchema;
  export import NativeSolDetailsSchema = SolanaAPI.NativeSolDetailsSchema;
  export import SplFungibleTokenDetailsSchema = SolanaAPI.SplFungibleTokenDetailsSchema;
  export import SplNonFungibleTokenDetailsSchema = SolanaAPI.SplNonFungibleTokenDetailsSchema;
  export import Message = MessageAPI.Message;
  export import MessageScanResponse = MessageAPI.MessageScanResponse;
  export import MessageScanParams = MessageAPI.MessageScanParams;
  export import Address = AddressAPI.Address;
  export import AddressScanResponse = AddressAPI.AddressScanResponse;
  export import AddressScanParams = AddressAPI.AddressScanParams;
}
