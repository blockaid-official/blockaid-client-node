// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BitcoinAPI from './bitcoin';
import * as TransactionAPI from './transaction';

export class Bitcoin extends APIResource {
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
}

export interface BitcoinTransactionScanRequest {
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
    | BitcoinTransactionScanRequest.BitcoinInAppRequestMetadata
    | BitcoinTransactionScanRequest.BitcoinWalletRequestMetadata;

  /**
   * Allows simulating mined transactions where the UTXOs have already been spent
   */
  skip_utxo_check?: boolean;
}

export namespace BitcoinTransactionScanRequest {
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

export interface BitcoinTransactionScanResponse {
  /**
   * Simulation result; Only present if simulation option is included in the request
   */
  simulation?:
    | BitcoinTransactionScanResponse.BitcoinSimulationSchema
    | BitcoinTransactionScanResponse.BitcoinSimulationErrorSchema
    | null;
}

export namespace BitcoinTransactionScanResponse {
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

        symbol: string;

        type: 'NATIVE' | 'RUNE';

        id?: string;

        spaced_name?: string;
      }

      export interface In {
        raw_value?: string;

        summary?: string;

        usd_price?: string;

        value?: string;
      }

      export interface Out {
        raw_value?: string;

        summary?: string;

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

export namespace Bitcoin {
  export import BitcoinTransactionScanRequest = BitcoinAPI.BitcoinTransactionScanRequest;
  export import BitcoinTransactionScanResponse = BitcoinAPI.BitcoinTransactionScanResponse;
  export import Transaction = TransactionAPI.Transaction;
  export import TransactionScanParams = TransactionAPI.TransactionScanParams;
}
