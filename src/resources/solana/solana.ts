// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressAPI from './address';
import { Address, AddressScanParams } from './address';
import * as MessageAPI from './message';
import { Message, MessageScanParams, MessageScanResponse } from './message';

export class Solana extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
}

export interface AddressScanRequestSchema {
  /**
   * Encoded public key
   */
  address: string;

  metadata: AddressScanRequestSchema.Metadata;

  /**
   * Chain to scan the transaction on
   */
  chain?: string;
}

export namespace AddressScanRequestSchema {
  export interface Metadata {
    /**
     * URL of the dApp related to the address
     */
    url: string;
  }
}

export interface AddressScanResponseSchema {
  /**
   * Features about the result
   */
  features: Array<AddressScanResponseSchema.Feature>;

  /**
   * Verdict of Result
   */
  result_type: 'Benign' | 'Warning' | 'Malicious' | 'Spam';
}

export namespace AddressScanResponseSchema {
  export interface Feature {
    /**
     * Description of the feature
     */
    description: string;

    /**
     * ID of the feature
     */
    feature_id: string;

    /**
     * An enumeration.
     */
    type: 'Malicious' | 'Warning' | 'Benign' | 'Info';
  }
}

Solana.Message = Message;
Solana.Address = Address;

export declare namespace Solana {
  export {
    type AddressScanRequestSchema as AddressScanRequestSchema,
    type AddressScanResponseSchema as AddressScanResponseSchema,
  };

  export {
    Message as Message,
    type MessageScanResponse as MessageScanResponse,
    type MessageScanParams as MessageScanParams,
  };

  export { Address as Address, type AddressScanParams as AddressScanParams };
}
