// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'blockaid/resource';
import * as AddressAPI from 'blockaid/resources/evm/address';
import * as AddressBulkAPI from 'blockaid/resources/evm/address-bulk';
import * as JsonRpcAPI from 'blockaid/resources/evm/json-rpc';
import * as TransactionAPI from 'blockaid/resources/evm/transaction';
import * as TransactionBulkAPI from 'blockaid/resources/evm/transaction-bulk';
import * as TransactionRawAPI from 'blockaid/resources/evm/transaction-raw';

export class Evm extends APIResource {
  jsonRpc: JsonRpcAPI.JsonRpc = new JsonRpcAPI.JsonRpc(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  transactionRaw: TransactionRawAPI.TransactionRaw = new TransactionRawAPI.TransactionRaw(this._client);
  transactionBulk: TransactionBulkAPI.TransactionBulk = new TransactionBulkAPI.TransactionBulk(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
  addressBulk: AddressBulkAPI.AddressBulk = new AddressBulkAPI.AddressBulk(this._client);
}

export namespace Evm {
  export import JsonRpc = JsonRpcAPI.JsonRpc;
  export import JsonRpcScanResponse = JsonRpcAPI.JsonRpcScanResponse;
  export import JsonRpcScanParams = JsonRpcAPI.JsonRpcScanParams;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
  export import TransactionRaw = TransactionRawAPI.TransactionRaw;
  export import TransactionRawScanResponse = TransactionRawAPI.TransactionRawScanResponse;
  export import TransactionRawScanParams = TransactionRawAPI.TransactionRawScanParams;
  export import TransactionBulk = TransactionBulkAPI.TransactionBulk;
  export import TransactionBulkScanResponse = TransactionBulkAPI.TransactionBulkScanResponse;
  export import TransactionBulkScanParams = TransactionBulkAPI.TransactionBulkScanParams;
  export import Address = AddressAPI.Address;
  export import AddressScanResponse = AddressAPI.AddressScanResponse;
  export import AddressScanParams = AddressAPI.AddressScanParams;
  export import AddressBulk = AddressBulkAPI.AddressBulk;
  export import AddressValidationResultType = AddressBulkAPI.AddressValidationResultType;
  export import AddressBulkScanResponse = AddressBulkAPI.AddressBulkScanResponse;
  export import AddressBulkScanParams = AddressBulkAPI.AddressBulkScanParams;
}
