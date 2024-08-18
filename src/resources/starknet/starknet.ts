// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionAPI from './transaction';

export class Starknet extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export namespace Starknet {
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
