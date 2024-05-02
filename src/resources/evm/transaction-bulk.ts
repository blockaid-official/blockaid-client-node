// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'blockaid/core';
import { APIResource } from 'blockaid/resource';
import * as TransactionBulkAPI from 'blockaid/resources/evm/transaction-bulk';

export class TransactionBulk extends APIResource {
  /**
   * Gets a bulk of transactions and returns a simulation showcasing the outcome
   * after executing the transactions synchronously, along with a suggested course of
   * action and textual explanations highlighting the reasons for flagging the bulk
   * in that manner.
   */
  scan(
    body: TransactionBulkScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionBulkScanResponse> {
    return this._client.post('/evm/transaction-bulk/scan', { body, ...options });
  }
}

export type TransactionBulkScanResponse = Array<TransactionBulkScanResponse.TransactionBulkScanResponseItem>;

export namespace TransactionBulkScanResponse {
  export interface TransactionBulkScanResponseItem {
    events?: Array<TransactionBulkScanResponseItem.Event>;

    gas_estimation?:
      | TransactionBulkScanResponseItem.TransactionScanGasEstimation
      | TransactionBulkScanResponseItem.TransactionScanGasEstimationError;

    simulation?:
      | TransactionBulkScanResponseItem.TransactionSimulation
      | TransactionBulkScanResponseItem.TransactionSimulationError;

    validation?:
      | TransactionBulkScanResponseItem.TransactionValidation
      | TransactionBulkScanResponseItem.TransactrionValidationError;
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

    export interface TransactionScanGasEstimation {
      estimate: number;

      used: number;
    }

    export interface TransactionScanGasEstimationError {
      error: string;
    }

    export interface TransactionSimulation {
      /**
       * Account summary for the account address. account address is determined implicit
       * by the `from` field in the transaction request, or explicit by the
       * account_address field in the request.
       */
      account_summary: TransactionSimulation.AccountSummary;

      /**
       * a dictionary including additional information about each relevant address in the
       * transaction.
       */
      address_details: Record<string, TransactionSimulation.AddressDetails>;

      /**
       * dictionary describes the assets differences as a result of this transaction for
       * every involved address
       */
      assets_diffs: Record<string, Array<TransactionSimulation.AssetsDiff>>;

      /**
       * dictionary describes the exposure differences as a result of this transaction
       * for every involved address (as a result of any approval / setApproval / permit
       * function)
       */
      exposures: Record<string, Array<TransactionSimulation.Exposure>>;

      /**
       * dictionary represents the usd value each address gained / lost during this
       * transaction
       */
      total_usd_diff: Record<string, TransactionSimulation.TotalUsdDiff>;

      /**
       * a dictionary representing the usd value each address is exposed to, split by
       * spenders
       */
      total_usd_exposure: Record<string, Record<string, string>>;
    }

    export namespace TransactionSimulation {
      /**
       * Account summary for the account address. account address is determined implicit
       * by the `from` field in the transaction request, or explicit by the
       * account_address field in the request.
       */
      export interface AccountSummary {
        /**
         * All assets diffs related to the account address
         */
        assets_diffs: Array<AccountSummary.AssetsDiff>;

        /**
         * All assets exposures related to the account address
         */
        exposures: Array<AccountSummary.Exposure>;

        /**
         * Total usd diff related to the account address
         */
        total_usd_diff: AccountSummary.TotalUsdDiff;

        /**
         * Total usd exposure related to the account address
         */
        total_usd_exposure: Record<string, string>;
      }

      export namespace AccountSummary {
        export interface AssetsDiff {
          /**
           * description of the asset for the current diff
           */
          asset:
            | AssetsDiff.Erc20TokenDetails
            | AssetsDiff.Erc1155TokenDetails
            | AssetsDiff.Erc721TokenDetails
            | AssetsDiff.NonercTokenDetails
            | AssetsDiff.NativeAssetDetails;

          /**
           * amount of the asset that was transferred to the address in this transaction
           */
          in: Array<
            AssetsDiff.Erc1155Diff | AssetsDiff.Erc721Diff | AssetsDiff.Erc20Diff | AssetsDiff.NativeDiff
          >;

          /**
           * amount of the asset that was transferred from the address in this transaction
           */
          out: Array<
            AssetsDiff.Erc1155Diff | AssetsDiff.Erc721Diff | AssetsDiff.Erc20Diff | AssetsDiff.NativeDiff
          >;
        }

        export namespace AssetsDiff {
          export interface Erc20TokenDetails {
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

          export interface Erc1155TokenDetails {
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

          export interface Erc721TokenDetails {
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

          export interface NonercTokenDetails {
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

          export interface NativeAssetDetails {
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

          export interface Erc1155Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc721Diff {
            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface NativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface Erc1155Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc721Diff {
            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface NativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }
        }

        export interface Exposure {
          /**
           * description of the asset for the current diff
           */
          asset:
            | Exposure.Erc20TokenDetails
            | Exposure.Erc1155TokenDetails
            | Exposure.Erc721TokenDetails
            | Exposure.NonercTokenDetails;

          /**
           * dictionary of spender addresses where the exposure has changed during this
           * transaction for the current address and asset
           */
          spenders: Record<
            string,
            Exposure.Erc20Exposure | Exposure.Erc721Exposure | Exposure.Erc1155Exposure
          >;
        }

        export namespace Exposure {
          export interface Erc20TokenDetails {
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

          export interface Erc1155TokenDetails {
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

          export interface Erc721TokenDetails {
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

          export interface NonercTokenDetails {
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

          export interface Erc20Exposure {
            /**
             * the amount that was asked in the approval request for this spender from the
             * current address and asset
             */
            approval: number;

            exposure: Array<
              | Erc20Exposure.Erc1155Diff
              | Erc20Exposure.Erc721Diff
              | Erc20Exposure.Erc20Diff
              | Erc20Exposure.NativeDiff
            >;

            /**
             * the expiration time of the permit2 protocol
             */
            expiration?: string;

            /**
             * user friendly description of the approval
             */
            summary?: string;
          }

          export namespace Erc20Exposure {
            export interface Erc1155Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc721Diff {
              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
            }

            export interface NativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
            }
          }

          export interface Erc721Exposure {
            exposure: Array<
              | Erc721Exposure.Erc1155Diff
              | Erc721Exposure.Erc721Diff
              | Erc721Exposure.Erc20Diff
              | Erc721Exposure.NativeDiff
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

          export namespace Erc721Exposure {
            export interface Erc1155Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc721Diff {
              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
            }

            export interface NativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
            }
          }

          export interface Erc1155Exposure {
            exposure: Array<
              | Erc1155Exposure.Erc1155Diff
              | Erc1155Exposure.Erc721Diff
              | Erc1155Exposure.Erc20Diff
              | Erc1155Exposure.NativeDiff
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

          export namespace Erc1155Exposure {
            export interface Erc1155Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc721Diff {
              /**
               * id of the token
               */
              token_id: number;

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
              usd_price?: number;
            }

            export interface Erc20Diff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
            }

            export interface NativeDiff {
              /**
               * value before divided by decimal, that was transferred from this address
               */
              raw_value: number;

              /**
               * user friendly description of the asset transfer
               */
              summary?: string;

              /**
               * usd equal of the asset that was transferred from this address
               */
              usd_price?: number;

              /**
               * value after divided by decimals, that was transferred from this address
               */
              value?: number;
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
      }

      export interface AddressDetails {
        /**
         * contains the contract's name if the address is a verified contract
         */
        contract_name?: string;

        /**
         * known name tag for the address
         */
        name_tag?: string;
      }

      export interface AssetsDiff {
        /**
         * description of the asset for the current diff
         */
        asset:
          | AssetsDiff.Erc20TokenDetails
          | AssetsDiff.Erc1155TokenDetails
          | AssetsDiff.Erc721TokenDetails
          | AssetsDiff.NonercTokenDetails
          | AssetsDiff.NativeAssetDetails;

        /**
         * amount of the asset that was transferred to the address in this transaction
         */
        in: Array<
          AssetsDiff.Erc1155Diff | AssetsDiff.Erc721Diff | AssetsDiff.Erc20Diff | AssetsDiff.NativeDiff
        >;

        /**
         * amount of the asset that was transferred from the address in this transaction
         */
        out: Array<
          AssetsDiff.Erc1155Diff | AssetsDiff.Erc721Diff | AssetsDiff.Erc20Diff | AssetsDiff.NativeDiff
        >;
      }

      export namespace AssetsDiff {
        export interface Erc20TokenDetails {
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

        export interface Erc1155TokenDetails {
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

        export interface Erc721TokenDetails {
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

        export interface NonercTokenDetails {
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

        export interface NativeAssetDetails {
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

        export interface Erc1155Diff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * id of the token
           */
          token_id: number;

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
          usd_price?: number;
        }

        export interface Erc721Diff {
          /**
           * id of the token
           */
          token_id: number;

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
          usd_price?: number;
        }

        export interface Erc20Diff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: number;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: number;
        }

        export interface NativeDiff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: number;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: number;
        }

        export interface Erc1155Diff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * id of the token
           */
          token_id: number;

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
          usd_price?: number;
        }

        export interface Erc721Diff {
          /**
           * id of the token
           */
          token_id: number;

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
          usd_price?: number;
        }

        export interface Erc20Diff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: number;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: number;
        }

        export interface NativeDiff {
          /**
           * value before divided by decimal, that was transferred from this address
           */
          raw_value: number;

          /**
           * user friendly description of the asset transfer
           */
          summary?: string;

          /**
           * usd equal of the asset that was transferred from this address
           */
          usd_price?: number;

          /**
           * value after divided by decimals, that was transferred from this address
           */
          value?: number;
        }
      }

      export interface Exposure {
        /**
         * description of the asset for the current diff
         */
        asset:
          | Exposure.Erc20TokenDetails
          | Exposure.Erc1155TokenDetails
          | Exposure.Erc721TokenDetails
          | Exposure.NonercTokenDetails;

        /**
         * dictionary of spender addresses where the exposure has changed during this
         * transaction for the current address and asset
         */
        spenders: Record<string, Exposure.Erc20Exposure | Exposure.Erc721Exposure | Exposure.Erc1155Exposure>;
      }

      export namespace Exposure {
        export interface Erc20TokenDetails {
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

        export interface Erc1155TokenDetails {
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

        export interface Erc721TokenDetails {
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

        export interface NonercTokenDetails {
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

        export interface Erc20Exposure {
          /**
           * the amount that was asked in the approval request for this spender from the
           * current address and asset
           */
          approval: number;

          exposure: Array<
            | Erc20Exposure.Erc1155Diff
            | Erc20Exposure.Erc721Diff
            | Erc20Exposure.Erc20Diff
            | Erc20Exposure.NativeDiff
          >;

          /**
           * the expiration time of the permit2 protocol
           */
          expiration?: string;

          /**
           * user friendly description of the approval
           */
          summary?: string;
        }

        export namespace Erc20Exposure {
          export interface Erc1155Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc721Diff {
            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface NativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }
        }

        export interface Erc721Exposure {
          exposure: Array<
            | Erc721Exposure.Erc1155Diff
            | Erc721Exposure.Erc721Diff
            | Erc721Exposure.Erc20Diff
            | Erc721Exposure.NativeDiff
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

        export namespace Erc721Exposure {
          export interface Erc1155Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc721Diff {
            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface NativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }
        }

        export interface Erc1155Exposure {
          exposure: Array<
            | Erc1155Exposure.Erc1155Diff
            | Erc1155Exposure.Erc721Diff
            | Erc1155Exposure.Erc20Diff
            | Erc1155Exposure.NativeDiff
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

        export namespace Erc1155Exposure {
          export interface Erc1155Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc721Diff {
            /**
             * id of the token
             */
            token_id: number;

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
            usd_price?: number;
          }

          export interface Erc20Diff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }

          export interface NativeDiff {
            /**
             * value before divided by decimal, that was transferred from this address
             */
            raw_value: number;

            /**
             * user friendly description of the asset transfer
             */
            summary?: string;

            /**
             * usd equal of the asset that was transferred from this address
             */
            usd_price?: number;

            /**
             * value after divided by decimals, that was transferred from this address
             */
            value?: number;
          }
        }
      }

      export interface TotalUsdDiff {
        in: string;

        out: string;

        total: string;
      }
    }

    export interface TransactionSimulationError {
      /**
       * An error message if the simulation failed.
       */
      error: string;
    }

    export interface TransactionValidation {
      /**
       * A list of features about this transaction explaining the validation.
       */
      features: Array<TransactionValidation.Feature>;

      /**
       * An enumeration.
       */
      result_type: 'Benign' | 'Warning' | 'Malicious';

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

    export namespace TransactionValidation {
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
         * An enumeration.
         */
        type: 'Malicious' | 'Warning' | 'Benign' | 'Info';

        /**
         * Address the feature refers to
         */
        address?: string;
      }
    }

    export interface TransactrionValidationError {
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
      features: Array<TransactrionValidationError.Feature>;

      /**
       * A textual description about the reasons the transaction was flagged with
       * result_type.
       */
      reason: '';

      /**
       * A string indicating if the transaction is safe to sign or not.
       */
      result_type: 'Error';
    }

    export namespace TransactrionValidationError {
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
         * An enumeration.
         */
        type: 'Malicious' | 'Warning' | 'Benign' | 'Info';

        /**
         * Address the feature refers to
         */
        address?: string;
      }
    }
  }
}

export interface TransactionBulkScanParams {
  /**
   * The chain name
   */
  chain: string;

  /**
   * Transaction bulk parameters
   */
  data: Array<TransactionBulkScanParams.Data>;

  /**
   * Object of additional information to validate against.
   */
  metadata: TransactionBulkScanParams.Metadata;

  /**
   * List of one or both of options for the desired output. "simulation" - include
   * simulation output in your response. "validation" - include security validation
   * of the transaction in your response. Default is ["validation"]
   */
  options?: Array<'validation' | 'simulation' | 'gas_estimation' | 'events'>;
}

export namespace TransactionBulkScanParams {
  export interface Data {
    /**
     * The source address of the transaction in hex string format
     */
    from: string;

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

  /**
   * Object of additional information to validate against.
   */
  export interface Metadata {
    /**
     * cross reference transaction against the domain.
     */
    domain: string;
  }
}

export namespace TransactionBulk {
  export import TransactionBulkScanResponse = TransactionBulkAPI.TransactionBulkScanResponse;
  export import TransactionBulkScanParams = TransactionBulkAPI.TransactionBulkScanParams;
}
