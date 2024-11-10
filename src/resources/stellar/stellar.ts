// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StellarAPI from './stellar';
import * as TransactionAPI from './transaction';

export class Stellar extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface StellarAssetContractDetailsSchema {
  /**
   * Address of the asset's contract
   */
  address: string;

  /**
   * Asset code
   */
  name: string;

  /**
   * Asset symbol
   */
  symbol: string;

  /**
   * Type of the asset (`CONTRACT`)
   */
  type?: 'CONTRACT';
}

export interface StellarAssetTransferDetailsSchema {
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

export namespace Stellar {
  export import StellarAssetContractDetailsSchema = StellarAPI.StellarAssetContractDetailsSchema;
  export import StellarAssetTransferDetailsSchema = StellarAPI.StellarAssetTransferDetailsSchema;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
