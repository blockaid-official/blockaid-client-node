// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams, TransactionScanResponse } from './transaction';

export class ChainAgnostic extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

ChainAgnostic.Transaction = Transaction;

export declare namespace ChainAgnostic {
  export {
    Transaction as Transaction,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };
}
