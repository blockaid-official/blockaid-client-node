// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressAPI from './address';
import { Address, AddressScanParams, AddressScanResponse } from './address';
import * as MessageAPI from './message';
import { Message, MessageScanParams, MessageScanResponse } from './message';

export class Solana extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

export interface SolanaAccountRentFee {
  account_address: string;

  account_type: string;

  lamports: string;
}

export interface SolanaGasEstimation {
  /**
   * Base transaction fee in lamports
   */
  network_fee: string;

  /**
   * Prioritization fee in lamports
   */
  priority_fee: string;

  /**
   * Total fee in lamports
   */
  total: string;

  /**
   * Total fee in lamports (equal to total; added for cross-chain consistency)
   */
  used: string;

  /**
   * Rent deposit fees for newly created accounts
   */
  account_rent_fees?: Array<SolanaAccountRentFee>;
}

Solana.Message = Message;
Solana.Address = Address;

export declare namespace Solana {
  export {
    type SolanaAccountRentFee as SolanaAccountRentFee,
    type SolanaGasEstimation as SolanaGasEstimation,
  };

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
