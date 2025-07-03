// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Withdrawal extends APIResource {
  /**
   * Gets a withdrawal and returns a full security assessment indicating weather or
   * not this withdrawal is malicious as well as textual reasons of why the
   * withdrawal was flagged that way.
   */
  scan(body: WithdrawalScanParams, options?: Core.RequestOptions): Core.APIPromise<WithdrawalScanResponse> {
    return this._client.post('/v0/exchange/withdrawal/scan', { body, ...options });
  }
}

export interface WithdrawalScanResponse {
  /**
   * An enumeration.
   */
  risk_level: 'low' | 'medium' | 'high' | 'severe';

  description?: string;

  labels?: Array<WithdrawalScanResponse.Label>;

  reason?: string;
}

export namespace WithdrawalScanResponse {
  export interface Label {
    details: Label.Details;

    label: string;

    /**
     * An enumeration.
     */
    risk_level: 'low' | 'medium' | 'high' | 'severe';

    evidences?: Array<Label.Evidence>;
  }

  export namespace Label {
    export interface Details {
      description: string;

      title: string;
    }

    export interface Evidence {
      addresses?: Array<Evidence.Address>;

      urls?: Array<Evidence.URL>;
    }

    export namespace Evidence {
      export interface Address {
        address: string;

        labels: Array<Address.Label>;
      }

      export namespace Address {
        export interface Label {
          label: string;

          origin: string;

          /**
           * An enumeration.
           */
          severity: 'low' | 'medium' | 'high' | 'severe';
        }
      }

      export interface URL {
        labels: Array<URL.Label>;

        url: string;
      }

      export namespace URL {
        export interface Label {
          label: string;

          origin: string;

          /**
           * An enumeration.
           */
          severity: 'low' | 'medium' | 'high' | 'severe';
        }
      }
    }
  }
}

export interface WithdrawalScanParams {
  account: WithdrawalScanParams.Account;

  event_time: string;

  onchain_transaction: WithdrawalScanParams.OnchainTransaction;

  withdrawal_id: string;

  connection_metadata?: WithdrawalScanParams.ConnectionMetadata;
}

export namespace WithdrawalScanParams {
  export interface Account {
    account_id: string;

    account_creation_timestamp?: string;

    user_age?: number;

    user_country_code?: string;
  }

  export interface OnchainTransaction {
    amount: number;

    asset: string;

    /**
     * An enumeration.
     */
    chain: 'ethereum' | 'base' | 'arbitrum' | 'optimism' | 'polygon' | 'bitcoin' | 'solana';

    to_address: string;
  }

  export interface ConnectionMetadata {
    customer_ip: string;

    user_agent: string;
  }
}

export declare namespace Withdrawal {
  export {
    type WithdrawalScanResponse as WithdrawalScanResponse,
    type WithdrawalScanParams as WithdrawalScanParams,
  };
}
