// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@blockaid/client/core';
import { APIResource } from '@blockaid/client/resource';
import * as UserOperationAPI from '@blockaid/client/resources/evm/user-operation';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class UserOperation extends APIResource {
  /**
   * Gets a user operation request and returns a full simulation indicating what will
   * happen in the transaction together with a recommended action and some textual
   * reasons of why the transaction was flagged that way.
   */
  scan(
    body: UserOperationScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/evm/user-operation/scan', { body, ...options });
  }
}

export interface UserOperationScanParams {
  /**
   * The chain name
   */
  chain: EvmAPI.Chain;

  /**
   * The user operation request that was received by the wallet
   */
  data: UserOperationScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * The address of the account (wallet) sending the request in hex string format
   */
  account_address?: string;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace UserOperationScanParams {
  /**
   * The user operation request that was received by the wallet
   */
  export interface Data {
    /**
     * The operation parameters of the user operation request
     */
    operation: Data.Operation;

    /**
     * The address of the entrypoint receiving the request in hex string format
     */
    entrypoint?: string;
  }

  export namespace Data {
    /**
     * The operation parameters of the user operation request
     */
    export interface Operation {
      /**
       * The call data value in hex string format.
       */
      call_data?: string;

      /**
       * The call gas limit value in hex string format.
       */
      call_gas_limit?: string;

      /**
       * The init code value in hex string format.
       */
      init_code?: string;

      /**
       * The max fee per gas value in hex string format.
       */
      max_fee_per_gas?: string;

      /**
       * The max priority fee per gas value in hex string format.
       */
      max_priority_fee_per_gas?: string;

      /**
       * The nonce value in hex string format.
       */
      nonce?: string;

      /**
       * The paymaster and data value in hex string format.
       */
      paymaster_and_data?: string;

      /**
       * The pre verification gas value in hex string format.
       */
      pre_verification_gas?: string;

      /**
       * The sender address of the operation in hex string format
       */
      sender?: string;

      /**
       * The signature value in hex string format.
       */
      signature?: string;

      /**
       * The verification gas limit value in hex string format.
       */
      verification_gas_limit?: string;
    }
  }
}

export namespace UserOperation {
  export import UserOperationScanParams = UserOperationAPI.UserOperationScanParams;
}
