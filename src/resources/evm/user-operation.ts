// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvmAPI from './evm';

export class UserOperation extends APIResource {
  /**
   * Gets a user operation request and returns a full simulation indicating what will
   * happen in the transaction together with a recommended action and some textual
   * reasons of why the transaction was flagged that way.
   *
   * @example
   * ```ts
   * const transactionScanResponse =
   *   await client.evm.userOperation.scan({
   *     chain: 'base-sepolia',
   *     data: {
   *       operation: {
   *         sender:
   *           '0x77bA5AC3ca4864be26CA3112baDf07286CcC3324',
   *         nonce: '0x22',
   *         init_code: '0x',
   *         call_data:
   *           '0x51945447000000000000000000000000aeed57a826a998f9388ce2fd6cdb0b6aa75e3d190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000050a9266605ba303b659ff105919205570f2af971000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000',
   *         call_gas_limit: '0x3c38',
   *         verification_gas_limit: '0x1659f',
   *         pre_verification_gas: '0x2496ebc',
   *         max_fee_per_gas: '0x218fe7',
   *         max_priority_fee_per_gas: '0xf4240',
   *         paymaster_and_data:
   *           '0x9d6ac51b972544251fcc0f2902e633e3f9bd3f290000000000000000000000000000000000000000000000000000000065cc4c990000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001eb8343d03ec9fc28a877c2fcad21d9923c56e6ad156ea6647282a35ce215c931f9fbdf3bec37168f9c9b49e33a0818731c5892ff626852f9465e619538540221c',
   *         signature: '0x',
   *       },
   *       entrypoint:
   *         '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
   *     },
   *     metadata: { domain: 'example.com' },
   *     account_address:
   *       '0x77bA5AC3ca4864be26CA3112baDf07286CcC3324',
   *     block: '0x5c6fd5',
   *     options: ['simulation', 'validation'],
   *   });
   * ```
   */
  scan(
    body: UserOperationScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/v0/evm/user-operation/scan', { body, ...options });
  }
}

export interface UserOperationScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * The user operation request that was received by the wallet
   */
  data: UserOperationScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.MetadataParam;

  /**
   * The address of the account (wallet) sending the request in hex string format
   */
  account_address?: string;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * list of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: Record<string, UserOperationScanParams.StateOverride>;
}

export namespace UserOperationScanParams {
  /**
   * The user operation request that was received by the wallet
   */
  export interface Data {
    /**
     * The operation parameters of the user operation request
     */
    operation: Data.UserOperationV6 | Data.UserOperationV7;

    /**
     * The address of the entrypoint receiving the request in hex string format
     */
    entrypoint?: string;
  }

  export namespace Data {
    export interface UserOperationV6 {
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

    export interface UserOperationV7 {
      /**
       * The account gas limits value in hex string format.
       */
      account_gas_limits?: string;

      /**
       * The call data value in hex string format.
       */
      call_data?: string;

      /**
       * The gas fees value in hex string format.
       */
      gas_fees?: string;

      /**
       * The init code value in hex string format.
       */
      init_code?: string;

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
    }
  }

  export interface StateOverride {
    /**
     * Fake balance to set for the account before executing the call.
     */
    balance?: string;

    /**
     * Fake EVM bytecode to inject into the account before executing the call.
     */
    code?: string;

    /**
     * Moves precompile to given address
     */
    movePrecompileToAddress?: string;

    /**
     * Fake nonce to set for the account before executing the call.
     */
    nonce?: string;

    /**
     * Fake key-value mapping to override all slots in the account storage before
     * executing the call.
     */
    state?: Record<string, string>;

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: Record<string, string>;
  }
}

export declare namespace UserOperation {
  export { type UserOperationScanParams as UserOperationScanParams };
}
