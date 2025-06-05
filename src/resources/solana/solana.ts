// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressAPI from './address';
import { Address, AddressScanParams, AddressScanResponse } from './address';
import * as MessageAPI from './message';
import { Message, MessageScanParams, MessageScanResponse } from './message';

export class Solana extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

Solana.Message = Message;
Solana.Address = Address;

export declare namespace Solana {
  export {
    Message as Message,
    type MessageScanResponse as MessageScanResponse,
    type MessageScanParams as MessageScanParams,
  };

  export {
    Address as Address,
    type AddressScanResponse as AddressScanResponse,
    type AddressScanParams as AddressScanParams,
  };
}
