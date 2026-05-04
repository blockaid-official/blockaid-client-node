// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvmAPI from './evm';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class TransactionBulk extends APIResource {
  /**
   * Get a risk recommendation with plain-language reasons for a bulk of
   * transactions.
   *
   * @example
   * ```ts
   * const response = await client.evm.transactionBulk.scan({
   *   chain: 'ethereum',
   *   data: [
   *     {
   *       data: '0x',
   *       value: '0x100000000000',
   *       to: '0xA4e5961B58DBE487639929643dCB1Dc3848dAF5E',
   *       from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
   *     },
   *     {
   *       data: '0x',
   *       value: '0xdeadbeef',
   *       to: '0x0D524a5B52737C0a02880d5E84F7D20b8d66bfba',
   *       from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
   *     },
   *   ],
   *   metadata: {},
   *   block: '20224477',
   *   options: ['validation'],
   * });
   * ```
   */
  scan(body: TransactionBulkScanParams, options?: RequestOptions): APIPromise<TransactionBulkScanResponse> {
    return this._client.post('/v0/evm/transaction-bulk/scan', { body, ...options });
  }
}

export type TransactionBulkScanResponse = Array<TransactionBulkScanResponse.TransactionBulkScanResponseItem>;

export namespace TransactionBulkScanResponse {
  export interface TransactionBulkScanResponseItem {
    block: string;

    chain: string;

    account_address?: string;

    events?: Array<TransactionBulkScanResponseItem.Event>;

    features?: unknown;

    gas_estimation?:
      | TransactionBulkScanResponseItem.RoutersEvmModelsTransactionScanGasEstimation
      | TransactionBulkScanResponseItem.RoutersEvmModelsTransactionScanGasEstimationError;

    simulation?:
      | TransactionBulkScanResponseItem.RoutersEvmResponseTransactionSimulation
      | TransactionBulkScanResponseItem.RoutersEvmResponseTransactionSimulationError;

    user_operation_gas_estimation?:
      | EvmAPI.UserOperationV6GasEstimation
      | EvmAPI.UserOperationV7GasEstimation
      | TransactionBulkScanResponseItem.RoutersEvmModelsTransactionScanGasEstimationError;

    validation?:
      | TransactionBulkScanResponseItem.RoutersEvmResponseTransactionValidation
      | TransactionBulkScanResponseItem.RoutersEvmResponseTransactionValidationError;
  }

  export namespace TransactionBulkScanResponseItem {
    export interface Event {
      data: string;

      emitter_address: string;

      topics: Array<string>;

      emitter_name?: string;

      name?: string;

      params?: Array<Event.Param>;
    }

    export namespace Event {
      export interface Param {
        type: string;

        value: string | unknown | Array<unknown>;

        internalType?: string;

        name?: string;
      }
    }

    export interface RoutersEvmModelsTransactionScanGasEstimation {
      estimate: string;

      status: 'Success';

      used: string;
    }

    export interface RoutersEvmModelsTransactionScanGasEstimationError {
      error: string;

      status: 'Error';
    }

    export interface RoutersEvmResponseTransactionSimulation {
      /**
       * Account summary for the account address. account address is determined implicit
       * by the `from` field in the transaction request, or explicit by the
       * account_address field in the request.
       */
      account_summary: RoutersEvmResponseTransactionSimulation.AccountSummary;

      /**
       * a dictionary including additional information about each relevant address in the
       * transaction.
       */
      address_details: { [key: string]: RoutersEvmResponseTransactionSimulation.AddressDetails };

      /**
       * dictionary describes the assets differences as a result of this transaction for
       * every involved address
       */
      assets_diffs: {
        [key: string]: Array<
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc20AddressAssetDiff
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc721AddressAssetDiff
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc1155AddressAssetDiff
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseNativeAddressAssetDiff
        >;
      };

      /**
       * dictionary describes the exposure differences as a result of this transaction
       * for every involved address (as a result of any approval / setApproval / permit
       * function)
       */
      exposures: {
        [key: string]: Array<
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc20AddressExposure
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc721AddressExposure
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseErc1155AddressExposure
        >;
      };

      /**
       * Session keys created in this transaction per address
       */
      session_key: { [key: string]: Array<RoutersEvmResponseTransactionSimulation.SessionKey> };

      /**
       * A string indicating if the simulation was successful or not.
       */
      status: 'Success';

      /**
       * dictionary represents the usd value each address gained / lost during this
       * transaction
       */
      total_usd_diff: { [key: string]: RoutersEvmResponseTransactionSimulation.TotalUsdDiff };

      /**
       * a dictionary representing the usd value each address is exposed to, split by
       * spenders
       */
      total_usd_exposure: { [key: string]: { [key: string]: string } };

      /**
       * Describes the nature of the transaction and what happened as part of it
       */
      transaction_actions: Array<
        | 'mint'
        | 'stake'
        | 'swap'
        | 'native_transfer'
        | 'token_transfer'
        | 'approval'
        | 'set_code_account'
        | 'proxy_upgrade'
        | 'ownership_change'
        | (string & {})
      >;

      /**
       * Describes the state differences as a result of this transaction for every
       * involved address
       */
      contract_management?: {
        [key: string]: Array<
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseProxyUpgradeManagement
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseOwnershipChangeManagement
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseModulesChangeManagement
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseSetCodeAccountManagement
          | RoutersEvmResponseTransactionSimulation.RoutersEvmResponseContractCreation
        >;
      };

      /**
       * Missing balances in the transaction
       */
      missing_balances?: Array<RoutersEvmResponseTransactionSimulation.MissingBalance>;

      /**
       * The parameters of the transaction that was simulated.
       */
      params?: RoutersEvmResponseTransactionSimulation.Params;

      /**
       * The number of times the simulation ran until success
       */
      simulation_run_count?: number;
    }

    export namespace RoutersEvmResponseTransactionSimulation {
      /**
       * Account summary for the account address. account address is determined implicit
       * by the `from` field in the transaction request, or explicit by the
       * account_address field in the request.
       */
      export interface AccountSummary {
        /**
         * All assets diffs related to the account address
         */
        assets_diffs: Array<
          | AccountSummary.RoutersEvmResponseErc20AddressAssetBalanceChangeDiff
          | AccountSummary.RoutersEvmResponseErc721AddressAssetBalanceChangeDiff
          | AccountSummary.RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff
          | AccountSummary.RoutersEvmResponseNativeAddressAssetBalanceChangeDiff
        >;

        /**
         * All assets exposures related to the account address
         */
        exposures: Array<
          | AccountSummary.RoutersEvmResponseErc20AddressExposure
          | AccountSummary.RoutersEvmResponseErc721AddressExposure
          | AccountSummary.RoutersEvmResponseErc1155AddressExposure
        >;

        /**
         * Total usd diff related to the account address
         */
        total_usd_diff: AccountSummary.TotalUsdDiff;

        /**
         * Total usd exposure related to the account address
         */
        total_usd_exposure: { [key: string]: string };

        /**
         * All assets traces related to the account address
         */
        traces: Array<
          | AccountSummary.RoutersEvmResponseErc20AssetTrace
          | AccountSummary.RoutersEvmResponseErc721AssetTrace
          | AccountSummary.RoutersEvmResponseErc1155AssetTrace
          | AccountSummary.RoutersEvmResponseNativeAssetTrace
          | AccountSummary.RoutersEvmResponseErc20ExposureTrace
          | AccountSummary.RoutersEvmResponseErc721ExposureTrace
          | AccountSummary.RoutersEvmResponseErc1155ExposureTrace
        >;
      }

      export namespace AccountSummary {
        export interface RoutersEvmResponseErc20AddressAssetBalanceChangeDiff {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc20AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsErc20TokenDetails
            | RoutersEvmResponseErc20AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC20';

          /**
           * amount of the asset that was transferred to the address in this transaction
           */
          in: Array<RoutersEvmResponseErc20AddressAssetBalanceChangeDiff.In>;

          /**
           * amount of the asset that was transferred from the address in this transaction
           */
          out: Array<RoutersEvmResponseErc20AddressAssetBalanceChangeDiff.Out>;

          /**
           * shows the balance before making the transaction and after
           */
          balance_changes?: RoutersEvmResponseErc20AddressAssetBalanceChangeDiff.BalanceChanges;
        }

        export namespace RoutersEvmResponseErc20AddressAssetBalanceChangeDiff {
          export interface RoutersEvmTokenDetailsErc20TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface In {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          export interface Out {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          /**
           * shows the balance before making the transaction and after
           */
          export interface BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            after: BalanceChanges.After;

            /**
             * balance of the account before making the transaction
             */
            before: BalanceChanges.Before;
          }

          export namespace BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            export interface After {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }

            /**
             * balance of the account before making the transaction
             */
            export interface Before {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }
          }
        }

        export interface RoutersEvmResponseErc721AddressAssetBalanceChangeDiff {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc721AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsErc721TokenDetails
            | RoutersEvmResponseErc721AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC721';

          /**
           * amount of the asset that was transferred to the address in this transaction
           */
          in: Array<RoutersEvmResponseErc721AddressAssetBalanceChangeDiff.In>;

          /**
           * amount of the asset that was transferred from the address in this transaction
           */
          out: Array<RoutersEvmResponseErc721AddressAssetBalanceChangeDiff.Out>;

          /**
           * shows the balance before making the transaction and after
           */
          balance_changes?: RoutersEvmResponseErc721AddressAssetBalanceChangeDiff.BalanceChanges;
        }

        export namespace RoutersEvmResponseErc721AddressAssetBalanceChangeDiff {
          export interface RoutersEvmTokenDetailsErc721TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC721';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface In {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface Out {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          /**
           * shows the balance before making the transaction and after
           */
          export interface BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            after: BalanceChanges.After;

            /**
             * balance of the account before making the transaction
             */
            before: BalanceChanges.Before;
          }

          export namespace BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            export interface After {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            /**
             * balance of the account before making the transaction
             */
            export interface Before {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }
          }
        }

        export interface RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsErc1155TokenDetails
            | RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC1155';

          /**
           * amount of the asset that was transferred to the address in this transaction
           */
          in: Array<RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff.In>;

          /**
           * amount of the asset that was transferred from the address in this transaction
           */
          out: Array<RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff.Out>;

          /**
           * shows the balance before making the transaction and after
           */
          balance_changes?: RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff.BalanceChanges;
        }

        export namespace RoutersEvmResponseErc1155AddressAssetBalanceChangeDiff {
          export interface RoutersEvmTokenDetailsErc1155TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface In {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface Out {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          /**
           * shows the balance before making the transaction and after
           */
          export interface BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            after: BalanceChanges.After;

            /**
             * balance of the account before making the transaction
             */
            before: BalanceChanges.Before;
          }

          export namespace BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            export interface After {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * value before divided by decimal, that was transferred from this address
               */
              value: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            /**
             * balance of the account before making the transaction
             */
            export interface Before {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * value before divided by decimal, that was transferred from this address
               */
              value: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }
          }
        }

        export interface RoutersEvmResponseNativeAddressAssetBalanceChangeDiff {
          /**
           * description of the asset for the current diff
           */
          asset: RoutersEvmResponseNativeAddressAssetBalanceChangeDiff.Asset;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'NATIVE';

          /**
           * amount of the asset that was transferred to the address in this transaction
           */
          in: Array<RoutersEvmResponseNativeAddressAssetBalanceChangeDiff.In>;

          /**
           * amount of the asset that was transferred from the address in this transaction
           */
          out: Array<RoutersEvmResponseNativeAddressAssetBalanceChangeDiff.Out>;

          /**
           * shows the balance before making the transaction and after
           */
          balance_changes?: RoutersEvmResponseNativeAddressAssetBalanceChangeDiff.BalanceChanges;
        }

        export namespace RoutersEvmResponseNativeAddressAssetBalanceChangeDiff {
          /**
           * description of the asset for the current diff
           */
          export interface Asset {
            chain_id: number;

            chain_name: string;

            decimals: number;

            logo_url: string;

            /**
             * asset type.
             */
            type: 'NATIVE';

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface In {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          export interface Out {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          /**
           * shows the balance before making the transaction and after
           */
          export interface BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            after: BalanceChanges.After;

            /**
             * balance of the account before making the transaction
             */
            before: BalanceChanges.Before;
          }

          export namespace BalanceChanges {
            /**
             * balance of the account after making the transaction
             */
            export interface After {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }

            /**
             * balance of the account before making the transaction
             */
            export interface Before {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }
          }
        }

        export interface RoutersEvmResponseErc20AddressExposure {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc20AddressExposure.RoutersEvmTokenDetailsErc20TokenDetails
            | RoutersEvmResponseErc20AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC20';

          /**
           * dictionary of spender addresses where the exposure has changed during this
           * transaction for the current address and asset
           */
          spenders: { [key: string]: RoutersEvmResponseErc20AddressExposure.Spenders };
        }

        export namespace RoutersEvmResponseErc20AddressExposure {
          export interface RoutersEvmTokenDetailsErc20TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface Spenders {
            /**
             * the amount that was asked in the approval request for this spender from the
             * current address and asset
             */
            approval: string;

            exposure: Array<
              | Spenders.RoutersEvmResponseErc1155Diff
              | Spenders.RoutersEvmResponseErc721Diff
              | Spenders.RoutersEvmResponseErc20Diff
              | Spenders.RoutersEvmResponseNativeDiff
            >;

            /**
             * the usd price of the approval amount
             */
            approval_usd_price?: string;

            /**
             * the expiration time of the permit2 protocol
             */
            expiration?: string;

            /**
             * user friendly description of the approval
             */
            summary?: string;
          }

          export namespace Spenders {
            export interface RoutersEvmResponseErc1155Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * value before divided by decimal, that was transferred from this address
               */
              value: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc721Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }

            export interface RoutersEvmResponseNativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }
          }
        }

        export interface RoutersEvmResponseErc721AddressExposure {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc721AddressExposure.RoutersEvmTokenDetailsErc721TokenDetails
            | RoutersEvmResponseErc721AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC721';

          /**
           * dictionary of spender addresses where the exposure has changed during this
           * transaction for the current address and asset
           */
          spenders: { [key: string]: RoutersEvmResponseErc721AddressExposure.Spenders };
        }

        export namespace RoutersEvmResponseErc721AddressExposure {
          export interface RoutersEvmTokenDetailsErc721TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC721';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface Spenders {
            exposure: Array<
              | Spenders.RoutersEvmResponseErc1155Diff
              | Spenders.RoutersEvmResponseErc721Diff
              | Spenders.RoutersEvmResponseErc20Diff
              | Spenders.RoutersEvmResponseNativeDiff
            >;

            /**
             * boolean indicates whether an is_approved_for_all function was used (missing in
             * case of ERC20 / ERC1155)
             */
            is_approved_for_all: boolean;

            /**
             * user friendly description of the approval
             */
            summary?: string;
          }

          export namespace Spenders {
            export interface RoutersEvmResponseErc1155Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * value before divided by decimal, that was transferred from this address
               */
              value: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc721Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }

            export interface RoutersEvmResponseNativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }
          }
        }

        export interface RoutersEvmResponseErc1155AddressExposure {
          /**
           * description of the asset for the current diff
           */
          asset:
            | RoutersEvmResponseErc1155AddressExposure.RoutersEvmTokenDetailsErc1155TokenDetails
            | RoutersEvmResponseErc1155AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * type of the asset for the current diff
           */
          asset_type: 'ERC1155';

          /**
           * dictionary of spender addresses where the exposure has changed during this
           * transaction for the current address and asset
           */
          spenders: { [key: string]: RoutersEvmResponseErc1155AddressExposure.Spenders };
        }

        export namespace RoutersEvmResponseErc1155AddressExposure {
          export interface RoutersEvmTokenDetailsErc1155TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface Spenders {
            exposure: Array<
              | Spenders.RoutersEvmResponseErc1155Diff
              | Spenders.RoutersEvmResponseErc721Diff
              | Spenders.RoutersEvmResponseErc20Diff
              | Spenders.RoutersEvmResponseNativeDiff
            >;

            /**
             * boolean indicates whether an is_approved_for_all function was used (missing in
             * case of ERC20 / ERC1155)
             */
            is_approved_for_all: boolean;

            /**
             * user friendly description of the approval
             */
            summary?: string;
          }

          export namespace Spenders {
            export interface RoutersEvmResponseErc1155Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * value before divided by decimal, that was transferred from this address
               */
              value: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc721Diff {
              /**
               * Indicates whether the token ID represents an arbitrary token from a collection,
               * unpredictable while running the simulation
               */
              arbitrary_collection_token: boolean;

              /**
               * id of the token
               */
              token_id: string;

              /**
               * url of the token logo
               */
              logo_url?: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;
            }

            export interface RoutersEvmResponseErc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }

            export interface RoutersEvmResponseNativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: string;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: string;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: string;
            }
          }
        }

        /**
         * Total usd diff related to the account address
         */
        export interface TotalUsdDiff {
          in: string;

          out: string;

          total: string;
        }

        export interface RoutersEvmResponseErc20AssetTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc20AssetTrace.RoutersEvmTokenDetailsErc20TokenDetails
            | RoutersEvmResponseErc20AssetTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * The difference in value for the asset in the trace
           */
          diff: RoutersEvmResponseErc20AssetTrace.Diff;

          /**
           * The address where the assets are moved from
           */
          from_address: string;

          /**
           * The address where the assets are moved to
           */
          to_address: string;

          /**
           * type of the trace
           */
          trace_type: 'AssetTrace';

          /**
           * The type of the model
           */
          type: 'ERC20AssetTrace';

          /**
           * List of labels that describe the trace
           */
          labels?: Array<'GAS_FEE' | (string & {})>;
        }

        export namespace RoutersEvmResponseErc20AssetTrace {
          export interface RoutersEvmTokenDetailsErc20TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          /**
           * The difference in value for the asset in the trace
           */
          export interface Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }
        }

        export interface RoutersEvmResponseErc721AssetTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc721AssetTrace.RoutersEvmTokenDetailsErc721TokenDetails
            | RoutersEvmResponseErc721AssetTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * The difference in value for the asset in the trace
           */
          diff: RoutersEvmResponseErc721AssetTrace.Diff;

          /**
           * The address where the assets are moved from
           */
          from_address: string;

          /**
           * The address where the assets are moved to
           */
          to_address: string;

          /**
           * type of the trace
           */
          trace_type: 'AssetTrace';

          /**
           * The type of the model
           */
          type: 'ERC721AssetTrace';

          /**
           * List of labels that describe the trace
           */
          labels?: Array<'GAS_FEE' | (string & {})>;
        }

        export namespace RoutersEvmResponseErc721AssetTrace {
          export interface RoutersEvmTokenDetailsErc721TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC721';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          /**
           * The difference in value for the asset in the trace
           */
          export interface Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }
        }

        export interface RoutersEvmResponseErc1155AssetTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc1155AssetTrace.RoutersEvmTokenDetailsErc1155TokenDetails
            | RoutersEvmResponseErc1155AssetTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * The difference in value for the asset in the trace
           */
          diff: RoutersEvmResponseErc1155AssetTrace.Diff;

          /**
           * The address where the assets are moved from
           */
          from_address: string;

          /**
           * The address where the assets are moved to
           */
          to_address: string;

          /**
           * type of the trace
           */
          trace_type: 'AssetTrace';

          /**
           * The type of the model
           */
          type: 'ERC1155AssetTrace';

          /**
           * List of labels that describe the trace
           */
          labels?: Array<'GAS_FEE' | (string & {})>;
        }

        export namespace RoutersEvmResponseErc1155AssetTrace {
          export interface RoutersEvmTokenDetailsErc1155TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          /**
           * The difference in value for the asset in the trace
           */
          export interface Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }
        }

        export interface RoutersEvmResponseNativeAssetTrace {
          /**
           * Description of the asset in the trace
           */
          asset: RoutersEvmResponseNativeAssetTrace.Asset;

          /**
           * The difference in value for the asset in the trace
           */
          diff: RoutersEvmResponseNativeAssetTrace.Diff;

          /**
           * The address where the assets are moved from
           */
          from_address: string;

          /**
           * The address where the assets are moved to
           */
          to_address: string;

          /**
           * type of the trace
           */
          trace_type: 'AssetTrace';

          /**
           * The type of the model
           */
          type: 'NativeAssetTrace';

          /**
           * List of labels that describe the trace
           */
          labels?: Array<'GAS_FEE' | (string & {})>;
        }

        export namespace RoutersEvmResponseNativeAssetTrace {
          /**
           * Description of the asset in the trace
           */
          export interface Asset {
            chain_id: number;

            chain_name: string;

            decimals: number;

            logo_url: string;

            /**
             * asset type.
             */
            type: 'NATIVE';

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          /**
           * The difference in value for the asset in the trace
           */
          export interface Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }
        }

        export interface RoutersEvmResponseErc20ExposureTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc20ExposureTrace.RoutersEvmTokenDetailsErc20TokenDetails
            | RoutersEvmResponseErc20ExposureTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          exposed: RoutersEvmResponseErc20ExposureTrace.Exposed;

          /**
           * The owner of the assets
           */
          owner: string;

          /**
           * The spender of the assets
           */
          spender: string;

          /**
           * type of the trace
           */
          trace_type: 'ExposureTrace';

          /**
           * The type of the model
           */
          type: 'ERC20ExposureTrace';
        }

        export namespace RoutersEvmResponseErc20ExposureTrace {
          export interface RoutersEvmTokenDetailsErc20TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface Exposed {
            raw_value: string;

            usd_price?: number;

            value?: number;
          }
        }

        export interface RoutersEvmResponseErc721ExposureTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc721ExposureTrace.RoutersEvmTokenDetailsErc721TokenDetails
            | RoutersEvmResponseErc721ExposureTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * The owner of the assets
           */
          owner: string;

          /**
           * The spender of the assets
           */
          spender: string;

          /**
           * type of the trace
           */
          trace_type: 'ExposureTrace';

          /**
           * The type of the model
           */
          type: 'ERC721ExposureTrace';

          exposed?: RoutersEvmResponseErc721ExposureTrace.Exposed;
        }

        export namespace RoutersEvmResponseErc721ExposureTrace {
          export interface RoutersEvmTokenDetailsErc721TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC721';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface Exposed {
            amount: number;

            token_id: string;

            is_mint?: boolean;

            logo_url?: string;

            usd_price?: number;
          }
        }

        export interface RoutersEvmResponseErc1155ExposureTrace {
          /**
           * Description of the asset in the trace
           */
          asset:
            | RoutersEvmResponseErc1155ExposureTrace.RoutersEvmTokenDetailsErc1155TokenDetails
            | RoutersEvmResponseErc1155ExposureTrace.RoutersEvmTokenDetailsNonercTokenDetails;

          /**
           * The owner of the assets
           */
          owner: string;

          /**
           * The spender of the assets
           */
          spender: string;

          /**
           * type of the trace
           */
          trace_type: 'ExposureTrace';

          /**
           * The type of the model
           */
          type: 'ERC1155ExposureTrace';
        }

        export namespace RoutersEvmResponseErc1155ExposureTrace {
          export interface RoutersEvmTokenDetailsErc1155TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsNonercTokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'NONERC';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }
      }

      export interface AddressDetails {
        /**
         * contains the contract's name if the address is a verified contract
         */
        contract_name?: string;

        /**
         * Whether the address is an eoa or a contract
         */
        is_eoa?: boolean;

        /**
         * known name tag for the address
         */
        name_tag?: string;
      }

      export interface RoutersEvmResponseErc20AddressAssetDiff {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc20AddressAssetDiff.RoutersEvmTokenDetailsErc20TokenDetails
          | RoutersEvmResponseErc20AddressAssetDiff.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC20';

        /**
         * amount of the asset that was transferred to the address in this transaction
         */
        in: Array<RoutersEvmResponseErc20AddressAssetDiff.In>;

        /**
         * amount of the asset that was transferred from the address in this transaction
         */
        out: Array<RoutersEvmResponseErc20AddressAssetDiff.Out>;
      }

      export namespace RoutersEvmResponseErc20AddressAssetDiff {
        export interface RoutersEvmTokenDetailsErc20TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset's decimals
           */
          decimals: number;

          /**
           * asset type.
           */
          type: 'ERC20';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface In {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: string;
        }

        export interface Out {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: string;
        }
      }

      export interface RoutersEvmResponseErc721AddressAssetDiff {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc721AddressAssetDiff.RoutersEvmTokenDetailsErc721TokenDetails
          | RoutersEvmResponseErc721AddressAssetDiff.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC721';

        /**
         * amount of the asset that was transferred to the address in this transaction
         */
        in: Array<RoutersEvmResponseErc721AddressAssetDiff.In>;

        /**
         * amount of the asset that was transferred from the address in this transaction
         */
        out: Array<RoutersEvmResponseErc721AddressAssetDiff.Out>;
      }

      export namespace RoutersEvmResponseErc721AddressAssetDiff {
        export interface RoutersEvmTokenDetailsErc721TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'ERC721';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface In {
          /**
           * Indicates whether the token ID represents an arbitrary token from a collection,
           * unpredictable while running the simulation
           */
          arbitrary_collection_token: boolean;

          /**
           * id of the token
           */
          token_id: string;

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;
        }

        export interface Out {
          /**
           * Indicates whether the token ID represents an arbitrary token from a collection,
           * unpredictable while running the simulation
           */
          arbitrary_collection_token: boolean;

          /**
           * id of the token
           */
          token_id: string;

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;
        }
      }

      export interface RoutersEvmResponseErc1155AddressAssetDiff {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc1155AddressAssetDiff.RoutersEvmTokenDetailsErc1155TokenDetails
          | RoutersEvmResponseErc1155AddressAssetDiff.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC1155';

        /**
         * amount of the asset that was transferred to the address in this transaction
         */
        in: Array<RoutersEvmResponseErc1155AddressAssetDiff.In>;

        /**
         * amount of the asset that was transferred from the address in this transaction
         */
        out: Array<RoutersEvmResponseErc1155AddressAssetDiff.Out>;
      }

      export namespace RoutersEvmResponseErc1155AddressAssetDiff {
        export interface RoutersEvmTokenDetailsErc1155TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'ERC1155';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface In {
          /**
           * Indicates whether the token ID represents an arbitrary token from a collection,
           * unpredictable while running the simulation
           */
          arbitrary_collection_token: boolean;

          /**
           * id of the token
           */
          token_id: string;

          /**
           * value before divided by decimal, that was transferred from this address
           */
          value: string;

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;
        }

        export interface Out {
          /**
           * Indicates whether the token ID represents an arbitrary token from a collection,
           * unpredictable while running the simulation
           */
          arbitrary_collection_token: boolean;

          /**
           * id of the token
           */
          token_id: string;

          /**
           * value before divided by decimal, that was transferred from this address
           */
          value: string;

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;
        }
      }

      export interface RoutersEvmResponseNativeAddressAssetDiff {
        /**
         * description of the asset for the current diff
         */
        asset: RoutersEvmResponseNativeAddressAssetDiff.Asset;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'NATIVE';

        /**
         * amount of the asset that was transferred to the address in this transaction
         */
        in: Array<RoutersEvmResponseNativeAddressAssetDiff.In>;

        /**
         * amount of the asset that was transferred from the address in this transaction
         */
        out: Array<RoutersEvmResponseNativeAddressAssetDiff.Out>;
      }

      export namespace RoutersEvmResponseNativeAddressAssetDiff {
        /**
         * description of the asset for the current diff
         */
        export interface Asset {
          chain_id: number;

          chain_name: string;

          decimals: number;

          logo_url: string;

          /**
           * asset type.
           */
          type: 'NATIVE';

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface In {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: string;
        }

        export interface Out {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: string;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: string;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: string;
        }
      }

      export interface RoutersEvmResponseErc20AddressExposure {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc20AddressExposure.RoutersEvmTokenDetailsErc20TokenDetails
          | RoutersEvmResponseErc20AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC20';

        /**
         * dictionary of spender addresses where the exposure has changed during this
         * transaction for the current address and asset
         */
        spenders: { [key: string]: RoutersEvmResponseErc20AddressExposure.Spenders };
      }

      export namespace RoutersEvmResponseErc20AddressExposure {
        export interface RoutersEvmTokenDetailsErc20TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset's decimals
           */
          decimals: number;

          /**
           * asset type.
           */
          type: 'ERC20';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface Spenders {
          /**
           * the amount that was asked in the approval request for this spender from the
           * current address and asset
           */
          approval: string;

          exposure: Array<
            | Spenders.RoutersEvmResponseErc1155Diff
            | Spenders.RoutersEvmResponseErc721Diff
            | Spenders.RoutersEvmResponseErc20Diff
            | Spenders.RoutersEvmResponseNativeDiff
          >;

          /**
           * the usd price of the approval amount
           */
          approval_usd_price?: string;

          /**
           * the expiration time of the permit2 protocol
           */
          expiration?: string;

          /**
           * user friendly description of the approval
           */
          summary?: string;
        }

        export namespace Spenders {
          export interface RoutersEvmResponseErc1155Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc721Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          export interface RoutersEvmResponseNativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }
        }
      }

      export interface RoutersEvmResponseErc721AddressExposure {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc721AddressExposure.RoutersEvmTokenDetailsErc721TokenDetails
          | RoutersEvmResponseErc721AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC721';

        /**
         * dictionary of spender addresses where the exposure has changed during this
         * transaction for the current address and asset
         */
        spenders: { [key: string]: RoutersEvmResponseErc721AddressExposure.Spenders };
      }

      export namespace RoutersEvmResponseErc721AddressExposure {
        export interface RoutersEvmTokenDetailsErc721TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'ERC721';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface Spenders {
          exposure: Array<
            | Spenders.RoutersEvmResponseErc1155Diff
            | Spenders.RoutersEvmResponseErc721Diff
            | Spenders.RoutersEvmResponseErc20Diff
            | Spenders.RoutersEvmResponseNativeDiff
          >;

          /**
           * boolean indicates whether an is_approved_for_all function was used (missing in
           * case of ERC20 / ERC1155)
           */
          is_approved_for_all: boolean;

          /**
           * user friendly description of the approval
           */
          summary?: string;
        }

        export namespace Spenders {
          export interface RoutersEvmResponseErc1155Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc721Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          export interface RoutersEvmResponseNativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }
        }
      }

      export interface RoutersEvmResponseErc1155AddressExposure {
        /**
         * description of the asset for the current diff
         */
        asset:
          | RoutersEvmResponseErc1155AddressExposure.RoutersEvmTokenDetailsErc1155TokenDetails
          | RoutersEvmResponseErc1155AddressExposure.RoutersEvmTokenDetailsNonercTokenDetails;

        /**
         * type of the asset for the current diff
         */
        asset_type: 'ERC1155';

        /**
         * dictionary of spender addresses where the exposure has changed during this
         * transaction for the current address and asset
         */
        spenders: { [key: string]: RoutersEvmResponseErc1155AddressExposure.Spenders };
      }

      export namespace RoutersEvmResponseErc1155AddressExposure {
        export interface RoutersEvmTokenDetailsErc1155TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'ERC1155';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNonercTokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset type.
           */
          type: 'NONERC';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface Spenders {
          exposure: Array<
            | Spenders.RoutersEvmResponseErc1155Diff
            | Spenders.RoutersEvmResponseErc721Diff
            | Spenders.RoutersEvmResponseErc20Diff
            | Spenders.RoutersEvmResponseNativeDiff
          >;

          /**
           * boolean indicates whether an is_approved_for_all function was used (missing in
           * case of ERC20 / ERC1155)
           */
          is_approved_for_all: boolean;

          /**
           * user friendly description of the approval
           */
          summary?: string;
        }

        export namespace Spenders {
          export interface RoutersEvmResponseErc1155Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * value before divided by decimal, that was transferred from this address
             */
            value: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc721Diff {
            /**
             * Indicates whether the token ID represents an arbitrary token from a collection,
             * unpredictable while running the simulation
             */
            arbitrary_collection_token: boolean;

            /**
             * id of the token
             */
            token_id: string;

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;
          }

          export interface RoutersEvmResponseErc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }

          export interface RoutersEvmResponseNativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: string;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: string;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: string;
          }
        }
      }

      export interface SessionKey {
        key: string;

        policies: Array<
          | SessionKey.RoutersEvmSessionKeysTransferPolicy
          | SessionKey.RoutersEvmSessionKeysCallPolicy
          | SessionKey.RoutersEvmSessionKeysGasPolicy
          | SessionKey.RoutersEvmSessionKeysExpirationPolicy
        >;

        signer: string;
      }

      export namespace SessionKey {
        export interface RoutersEvmSessionKeysTransferPolicy {
          asset_details:
            | RoutersEvmSessionKeysTransferPolicy.RoutersEvmTokenDetailsNativeAssetDetails
            | RoutersEvmSessionKeysTransferPolicy.RoutersEvmTokenDetailsErc20TokenDetails;

          recipient?: string;

          type?: 'TRANSFER_POLICY';

          value_limit?: string;
        }

        export namespace RoutersEvmSessionKeysTransferPolicy {
          export interface RoutersEvmTokenDetailsNativeAssetDetails {
            chain_id: number;

            chain_name: string;

            decimals: number;

            logo_url: string;

            /**
             * asset type.
             */
            type: 'NATIVE';

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }

          export interface RoutersEvmTokenDetailsErc20TokenDetails {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }

        export interface RoutersEvmSessionKeysCallPolicy {
          to_address: string;

          args?: Array<RoutersEvmSessionKeysCallPolicy.Arg>;

          method?: string;

          type?: 'CALL_POLICY';

          value_limit?: string;
        }

        export namespace RoutersEvmSessionKeysCallPolicy {
          export interface Arg {
            /**
             * Comparison operator used to evaluate an argument/value against a policy
             * constraint.
             */
            condition:
              | 'UNCONSTRAINED'
              | 'EQUAL'
              | 'GREATER'
              | 'LESS'
              | 'GREATER_OR_EQUAL'
              | 'LESS_OR_EQUAL'
              | 'NOT_EQUAL';

            index: number;

            value: string;
          }
        }

        export interface RoutersEvmSessionKeysGasPolicy {
          value_limit: string;

          type?: 'GAS_POLICY';
        }

        export interface RoutersEvmSessionKeysExpirationPolicy {
          end_time?: string;

          start_time?: string;

          type?: 'EXPIRATION_POLICY';
        }
      }

      export interface TotalUsdDiff {
        in: string;

        out: string;

        total: string;
      }

      export interface RoutersEvmResponseProxyUpgradeManagement {
        /**
         * The state after the transaction
         */
        after: RoutersEvmResponseProxyUpgradeManagement.After;

        /**
         * The state before the transaction
         */
        before: RoutersEvmResponseProxyUpgradeManagement.Before;

        /**
         * The type of the state change
         */
        type: 'PROXY_UPGRADE';
      }

      export namespace RoutersEvmResponseProxyUpgradeManagement {
        /**
         * The state after the transaction
         */
        export interface After {
          address: string;
        }

        /**
         * The state before the transaction
         */
        export interface Before {
          address: string;
        }
      }

      export interface RoutersEvmResponseOwnershipChangeManagement {
        /**
         * The state after the transaction
         */
        after: RoutersEvmResponseOwnershipChangeManagement.After;

        /**
         * The state before the transaction
         */
        before: RoutersEvmResponseOwnershipChangeManagement.Before;

        /**
         * The type of the state change
         */
        type: 'OWNERSHIP_CHANGE';
      }

      export namespace RoutersEvmResponseOwnershipChangeManagement {
        /**
         * The state after the transaction
         */
        export interface After {
          owners: Array<string>;
        }

        /**
         * The state before the transaction
         */
        export interface Before {
          owners: Array<string>;
        }
      }

      export interface RoutersEvmResponseModulesChangeManagement {
        /**
         * The state after the transaction
         */
        after: RoutersEvmResponseModulesChangeManagement.After;

        /**
         * The state before the transaction
         */
        before: RoutersEvmResponseModulesChangeManagement.Before;

        /**
         * The type of the state change
         */
        type: 'MODULE_CHANGE';
      }

      export namespace RoutersEvmResponseModulesChangeManagement {
        /**
         * The state after the transaction
         */
        export interface After {
          modules: Array<string>;
        }

        /**
         * The state before the transaction
         */
        export interface Before {
          modules: Array<string>;
        }
      }

      export interface RoutersEvmResponseSetCodeAccountManagement {
        /**
         * The delegated address
         */
        delegated_address: string;

        /**
         * The type of the state change
         */
        type: 'SET_CODE_ACCOUNT';
      }

      export interface RoutersEvmResponseContractCreation {
        /**
         * The direct creator address of the new contract
         */
        deployer: string;

        /**
         * The type of the state change
         */
        type: 'CONTRACT_CREATION';
      }

      export interface MissingBalance {
        /**
         * The asset that is missing balance
         */
        asset:
          | MissingBalance.RoutersEvmTokenDetailsErc20TokenDetails
          | MissingBalance.RoutersEvmTokenDetailsNativeAssetDetails;

        /**
         * The account address's current balance of the asset
         */
        current_balance: MissingBalance.CurrentBalance;

        /**
         * The account address's missing balance of the asset
         */
        missing_balance: MissingBalance.MissingBalance;

        /**
         * The required balance of the asset for this action
         */
        required_balance: MissingBalance.RequiredBalance;
      }

      export namespace MissingBalance {
        export interface RoutersEvmTokenDetailsErc20TokenDetails {
          /**
           * address of the token
           */
          address: string;

          /**
           * asset's decimals
           */
          decimals: number;

          /**
           * asset type.
           */
          type: 'ERC20';

          /**
           * url of the token logo
           */
          logo_url?: string;

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        export interface RoutersEvmTokenDetailsNativeAssetDetails {
          chain_id: number;

          chain_name: string;

          decimals: number;

          logo_url: string;

          /**
           * asset type.
           */
          type: 'NATIVE';

          /**
           * string represents the name of the asset
           */
          name?: string;

          /**
           * asset's symbol name
           */
          symbol?: string;
        }

        /**
         * The account address's current balance of the asset
         */
        export interface CurrentBalance {
          /**
           * The raw value of the balance in hex string format
           */
          raw_value: string;

          /**
           * The value of the balance in decimal string format
           */
          value?: string;
        }

        /**
         * The account address's missing balance of the asset
         */
        export interface MissingBalance {
          /**
           * The raw value of the balance in hex string format
           */
          raw_value: string;

          /**
           * The value of the balance in decimal string format
           */
          value?: string;
        }

        /**
         * The required balance of the asset for this action
         */
        export interface RequiredBalance {
          /**
           * The raw value of the balance in hex string format
           */
          raw_value: string;

          /**
           * The value of the balance in decimal string format
           */
          value?: string;
        }
      }

      /**
       * The parameters of the transaction that was simulated.
       */
      export interface Params {
        /**
         * The block tag to be sent.
         */
        block_tag?: string;

        /**
         * The calldata to be sent.
         */
        calldata?: Params.Calldata;

        /**
         * The chain to be sent.
         */
        chain?: string;

        /**
         * The data to be sent.
         */
        data?: string;

        /**
         * The address the transaction is sent from.
         */
        from?: string;

        /**
         * The gas to be sent.
         */
        gas?: string;

        /**
         * The gas price to be sent.
         */
        gas_price?: string;

        /**
         * The address the transaction is directed to.
         */
        to?: string;

        /**
         * The user operation call data to be sent.
         */
        user_operation_calldata?: Params.UserOperationCalldata;

        /**
         * The value to be sent.
         */
        value?: string;
      }

      export namespace Params {
        /**
         * The calldata to be sent.
         */
        export interface Calldata {
          /**
           * The function selector of the function called in the transaction
           */
          function_selector: string;

          /**
           * The function declaration of the function called in the transaction
           */
          function_declaration?: string;

          /**
           * The function signature of the function called in the transaction
           */
          function_signature?: string;
        }

        /**
         * The user operation call data to be sent.
         */
        export interface UserOperationCalldata {
          /**
           * The function selector of the function called in the transaction
           */
          function_selector: string;

          /**
           * The function declaration of the function called in the transaction
           */
          function_declaration?: string;

          /**
           * The function signature of the function called in the transaction
           */
          function_signature?: string;
        }
      }
    }

    export interface RoutersEvmResponseTransactionSimulationError {
      /**
       * A string explaining why the transaction failed
       */
      description: string;

      /**
       * An error message if the simulation failed.
       */
      error: string;

      /**
       * A string indicating if the simulation was successful or not.
       */
      status: 'Error';

      /**
       * Error details if the simulation failed.
       */
      error_details?:
        | RoutersEvmResponseTransactionSimulationError.RoutersEvmResponseGeneralInsufficientFundsErrorDetails
        | RoutersEvmResponseTransactionSimulationError.RoutersEvmResponseGeneralInvalidAddressErrorDetails
        | RoutersEvmResponseTransactionSimulationError.RoutersEvmResponseGenericErrorDetails
        | RoutersEvmResponseTransactionSimulationError.RoutersEvmResponseUnsupportedEip712MessageErrorDetails;
    }

    export namespace RoutersEvmResponseTransactionSimulationError {
      export interface RoutersEvmResponseGeneralInsufficientFundsErrorDetails {
        /**
         * The address of the account
         */
        account_address: string;

        /**
         * The asset that the account does not have enough balance for
         */
        asset:
          | RoutersEvmResponseGeneralInsufficientFundsErrorDetails.RoutersEvmResponseNativeAsset
          | RoutersEvmResponseGeneralInsufficientFundsErrorDetails.RoutersEvmResponseErc20Asset
          | RoutersEvmResponseGeneralInsufficientFundsErrorDetails.RoutersEvmResponseErc721Asset
          | RoutersEvmResponseGeneralInsufficientFundsErrorDetails.RoutersEvmResponseErc1155Asset;

        /**
         * The type of the model
         */
        code: 'GENERAL_INSUFFICIENT_FUNDS';

        category?: 'REVERT';

        /**
         * The current balance of the account
         */
        current_balance?: string;

        /**
         * The required balance of the account
         */
        required_balance?: string;
      }

      export namespace RoutersEvmResponseGeneralInsufficientFundsErrorDetails {
        export interface RoutersEvmResponseNativeAsset {
          /**
           * Details
           */
          details: RoutersEvmResponseNativeAsset.Details;

          /**
           * The type of the model
           */
          type: 'NATIVE';
        }

        export namespace RoutersEvmResponseNativeAsset {
          /**
           * Details
           */
          export interface Details {
            chain_id: number;

            chain_name: string;

            decimals: number;

            logo_url: string;

            /**
             * asset type.
             */
            type: 'NATIVE';

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }

        export interface RoutersEvmResponseErc20Asset {
          /**
           * Details
           */
          details: RoutersEvmResponseErc20Asset.Details;

          /**
           * The type of the model
           */
          type: 'ERC20';
        }

        export namespace RoutersEvmResponseErc20Asset {
          /**
           * Details
           */
          export interface Details {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset's decimals
             */
            decimals: number;

            /**
             * asset type.
             */
            type: 'ERC20';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }

        export interface RoutersEvmResponseErc721Asset {
          /**
           * Details
           */
          details: RoutersEvmResponseErc721Asset.Details;

          /**
           * Token Id
           */
          token_id: number;

          /**
           * The type of the model
           */
          type: 'ERC721';
        }

        export namespace RoutersEvmResponseErc721Asset {
          /**
           * Details
           */
          export interface Details {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }

        export interface RoutersEvmResponseErc1155Asset {
          /**
           * Details
           */
          details: RoutersEvmResponseErc1155Asset.Details;

          /**
           * Token Id
           */
          token_id: number;

          /**
           * The type of the model
           */
          type: 'ERC1155';
        }

        export namespace RoutersEvmResponseErc1155Asset {
          /**
           * Details
           */
          export interface Details {
            /**
             * address of the token
             */
            address: string;

            /**
             * asset type.
             */
            type: 'ERC1155';

            /**
             * url of the token logo
             */
            logo_url?: string;

            /**
             * string represents the name of the asset
             */
            name?: string;

            /**
             * asset's symbol name
             */
            symbol?: string;
          }
        }
      }

      export interface RoutersEvmResponseGeneralInvalidAddressErrorDetails {
        /**
         * The address that is invalid
         */
        address: string;

        /**
         * The type of the model
         */
        code: 'GENERAL_INVALID_ADDRESS';

        category?: 'INVALID_INPUT';
      }

      export interface RoutersEvmResponseGenericErrorDetails {
        category: string;

        /**
         * The error code
         */
        code: string;
      }

      export interface RoutersEvmResponseUnsupportedEip712MessageErrorDetails {
        /**
         * The type of the model
         */
        code: 'UNSUPPORTED_EIP712_MESSAGE';

        /**
         * The domain name that is unsupported
         */
        domain_name: string;

        /**
         * The message type that is unsupported
         */
        message_type: string;

        category?: 'INVALID_INPUT';
      }
    }

    export interface RoutersEvmModelsTransactionScanGasEstimationError {
      error: string;

      status: 'Error';
    }

    export interface RoutersEvmResponseTransactionValidation {
      /**
       * A list of features about this transaction explaining the validation.
       */
      features: Array<RoutersEvmResponseTransactionValidation.Feature>;

      /**
       * Result type returned when validation succeeds.
       */
      result_type: 'Benign' | 'Warning' | 'Malicious';

      /**
       * A string indicating if the simulation was successful or not.
       */
      status: 'Success';

      /**
       * A textual classification that can be presented to the user explaining the
       * reason.
       */
      classification?: string;

      /**
       * A textual description that can be presented to the user about what this
       * transaction is doing.
       */
      description?: string;

      /**
       * A textual description about the reasons the transaction was flagged with
       * result_type.
       */
      reason?: string;
    }

    export namespace RoutersEvmResponseTransactionValidation {
      export interface Feature {
        /**
         * Textual description
         */
        description: string;

        /**
         * Feature name
         */
        feature_id: string;

        /**
         * Security result of a transaction scan feature.
         */
        type: 'Malicious' | 'Warning' | 'Benign' | 'Info';

        /**
         * Address the feature refers to
         */
        address?: string;

        /**
         * Metadata related to the feature
         */
        metadata?: unknown;
      }
    }

    export interface RoutersEvmResponseTransactionValidationError {
      /**
       * A textual classification that can be presented to the user explaining the
       * reason.
       */
      classification: '';

      /**
       * A textual description that can be presented to the user about what this
       * transaction is doing.
       */
      description: '';

      /**
       * An error message if the validation failed.
       */
      error: string;

      /**
       * A list of features about this transaction explaining the validation.
       */
      features: Array<RoutersEvmResponseTransactionValidationError.Feature>;

      /**
       * A textual description about the reasons the transaction was flagged with
       * result_type.
       */
      reason: '';

      /**
       * A string indicating if the transaction is safe to sign or not.
       */
      result_type: 'Error';

      /**
       * A string indicating if the simulation was successful or not.
       */
      status: 'Success';
    }

    export namespace RoutersEvmResponseTransactionValidationError {
      export interface Feature {
        /**
         * Textual description
         */
        description: string;

        /**
         * Feature name
         */
        feature_id: string;

        /**
         * Security result of a transaction scan feature.
         */
        type: 'Malicious' | 'Warning' | 'Benign' | 'Info';

        /**
         * Address the feature refers to
         */
        address?: string;

        /**
         * Metadata related to the feature
         */
        metadata?: unknown;
      }
    }
  }
}

export interface TransactionBulkScanParams {
  /**
   * The chain name or chain ID
   */
  chain: EvmAPI.TransactionScanSupportedChain | (string & {});

  /**
   * Transaction bulk parameters
   */
  data: Array<TransactionBulkScanParams.Data>;

  /**
   * Additional context for the scan (e.g., dapp URL/domain, integration source).
   * Used to enrich results and reduce false positives/negatives.
   */
  metadata:
    | TransactionBulkScanParams.RoutersEvmModelsMetadataNonDapp
    | TransactionBulkScanParams.RoutersEvmModelsMetadataDapp;

  /**
   * Should aggregate the results to one result
   */
  aggregated?: boolean;

  /**
   * The relative block for the block validation. Can be "latest" or a block number.
   */
  block?: number | string;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;

  /**
   * Simulate transactions using gas estimation result. This requires
   * "gas_estimation" option to be enabled.
   */
  simulate_with_estimated_gas?: boolean;

  /**
   * Override the state of the chain. This is useful for testing purposes.
   */
  state_override?: { [key: string]: TransactionBulkScanParams.StateOverride };
}

export namespace TransactionBulkScanParams {
  export interface Data {
    /**
     * The source address of the transaction in hex string format
     */
    from: string;

    /**
     * The authorization list
     */
    authorization_list?: Array<EvmAPI.Authorization>;

    /**
     * The encoded call data of the transaction in hex string format
     */
    data?: string;

    /**
     * The gas required for the transaction in hex string format.
     */
    gas?: string;

    /**
     * The gas price for the transaction in hex string format.
     */
    gas_price?: string;

    /**
     * The destination address of the transaction in hex string format
     */
    to?: string;

    /**
     * The value of the transaction in Wei in hex string format
     */
    value?: string;
  }

  export interface RoutersEvmModelsMetadataNonDapp {
    /**
     * Indicates that the transaction was not initiated by a dapp.
     */
    non_dapp?: true;
  }

  export interface RoutersEvmModelsMetadataDapp {
    /**
     * The full URL of the DApp or website that initiated the transaction, for
     * cross-reference. Must use the https or http scheme and contain a valid hostname.
     * Cannot contain JSON, braces, or other embedded data structures.
     */
    domain: string;

    /**
     * Indicates that the transaction was not initiated by a dapp. Use false when the
     * transaction is from a dapp.
     */
    non_dapp?: boolean;
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
    state?: { [key: string]: string };

    /**
     * Fake key-value mapping to override individual slots in the account storage
     * before executing the call.
     */
    stateDiff?: { [key: string]: string };
  }
}

export declare namespace TransactionBulk {
  export {
    type TransactionBulkScanResponse as TransactionBulkScanResponse,
    type TransactionBulkScanParams as TransactionBulkScanParams,
  };
}
