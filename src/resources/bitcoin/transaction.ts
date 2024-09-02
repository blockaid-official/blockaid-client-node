// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionAPI from './transaction';

export class Transaction extends APIResource {
  /**
   * Scan Transaction
   */
  scan(body: TransactionScanParams, options?: Core.RequestOptions): Core.APIPromise<TransactionScanResponse> {
    return this._client.post('/v0/bitcoin/transaction/scan', { body, ...options });
  }
}

export interface TransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | TransactionScanResponse.BitcoinSimulationSchema
    | TransactionScanResponse.BitcoinSimulationErrorSchema
    | null;
}

export namespace TransactionScanResponse {
  export interface BitcoinSimulationSchema {
    /**
     * A dictionary describing the assets differences as a result of this transaction
     * for every involved address
     */
    assets_diffs: Record<string, Array<BitcoinSimulationSchema.AssetsDiff>>;

    status?: 'Success';
  }

  export namespace BitcoinSimulationSchema {
    export interface AssetsDiff {
      /**
       * Description of the asset for the current diff
       */
      asset: AssetsDiff.Asset;

      /**
       * The assets received by the address
       */
      in?: Array<AssetsDiff.In>;

      /**
       * The assets sent by the address
       */
      out?: Array<AssetsDiff.Out>;
    }

    export namespace AssetsDiff {
      /**
       * Description of the asset for the current diff
       */
      export interface Asset {
        chain_name: string;

        decimals: number;

        logo_url: string;

        name: string;

        type: 'NATIVE' | 'RUNE' | 'ORDINAL';

        id?: string;

        spaced_name?: string;

        symbol?: string;
      }

      export interface In {
        name?: string;

        raw_value?: string;

        summary?: string;

        token_id?: string;

        usd_price?: string;

        value?: string;
      }

      export interface Out {
        name?: string;

        raw_value?: string;

        summary?: string;

        token_id?: string;

        usd_price?: string;

        value?: string;
      }
    }
  }

  export interface BitcoinSimulationErrorSchema {
    /**
     * Error message
     */
    error: string;

    status?: 'Error';
  }
}

export interface TransactionScanParams {
  /**
   * List of options to include in the response
   *
   * - `simulation`: Include simulation output in the response
   */
  options: Array<'simulation'>;

  /**
   * The transaction encoded as a hex string
   */
  transaction: string;

  chain?: 'bitcoin';

  /**
   * Metadata
   */
  metadata?:
    | TransactionScanParams.BitcoinInAppRequestMetadata
    | TransactionScanParams.BitcoinWalletRequestMetadata;
}

export namespace TransactionScanParams {
  export interface BitcoinInAppRequestMetadata {
    /**
     * Metadata for in-app requests
     */
    type: 'in_app';
  }

  export interface BitcoinWalletRequestMetadata {
    /**
     * Metadata for wallet requests
     */
    type: 'wallet';

    /**
     * URL of the dApp that originated the transaction
     */
    url: string;
  }
}

export namespace Transaction {
  export import TransactionScanResponse = TransactionAPI.TransactionScanResponse;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
