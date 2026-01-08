// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressAPI from './address';
import { Address, AddressScanParams, AddressScanResponse } from './address';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionScanParams, TransactionScanResponse } from './transaction';

export class Hedera extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

Hedera.Transaction = Transaction;
Hedera.Address = Address;

export declare namespace Hedera {
  export {
    Transaction as Transaction,
    type TransactionScanResponse as TransactionScanResponse,
    type TransactionScanParams as TransactionScanParams,
  };

  export {
    Address as Address,
    type AddressScanResponse as AddressScanResponse,
    type AddressScanParams as AddressScanParams,
  };
}
