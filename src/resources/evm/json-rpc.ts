// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@blockaid/client/core';
import { APIResource } from '@blockaid/client/resource';
import * as JsonRpcAPI from '@blockaid/client/resources/evm/json-rpc';
import * as EvmAPI from '@blockaid/client/resources/evm/evm';

export class JsonRpc extends APIResource {
  /**
   * Gets a json-rpc request and returns a full simulation indicating what will
   * happen in the transaction together with a recommended action and some textual
   * reasons of why the transaction was flagged that way.
   */
  scan(
    body: JsonRpcScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvmAPI.TransactionScanResponse> {
    return this._client.post('/evm/json-rpc/scan', { body, ...options });
  }
}

export interface JsonRpcScanParams {
  /**
   * An enumeration.
   */
  chain: EvmAPI.SupportedChain;

  /**
   * JSON-RPC request that was received by the wallet.
   */
  data: JsonRpcScanParams.Data;

  /**
   * Object of additional information to validate against.
   */
  metadata: EvmAPI.Metadata;

  /**
   * The address of the account (wallet) received the request in hex string format
   */
  account_address?: string;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation'>;
}

export namespace JsonRpcScanParams {
  /**
   * JSON-RPC request that was received by the wallet.
   */
  export interface Data {
    /**
     * The method of the JSON-RPC request
     */
    method: string;

    /**
     * The parameters of the JSON-RPC request in JSON format
     */
    params: Array<unknown>;
  }
}

export namespace JsonRpc {
  export import JsonRpcScanParams = JsonRpcAPI.JsonRpcScanParams;
}
