// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressAPI from './address';
import { Address, AddressScanParams, AddressScanResponse } from './address';

export class Hedera extends APIResource {
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

Hedera.Address = Address;

export declare namespace Hedera {
  export {
    Address as Address,
    type AddressScanResponse as AddressScanResponse,
    type AddressScanParams as AddressScanParams,
  };
}
