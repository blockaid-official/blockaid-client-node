// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams, TransactionScanResponse } from './transaction';

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

Stellar.Transaction = Transaction;

export declare namespace Stellar {
  export {
    type StellarAssetContractDetailsSchema as StellarAssetContractDetailsSchema,
    type StellarAssetTransferDetailsSchema as StellarAssetTransferDetailsSchema,
  };

  export {
    Transaction as Transaction,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
