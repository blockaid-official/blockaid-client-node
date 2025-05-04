// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WithdrawalAPI from './withdrawal';
import { Withdrawal, WithdrawalScanParams, WithdrawalScanResponse } from './withdrawal';

export class ExchangeProtection extends APIResource {
  withdrawal: WithdrawalAPI.Withdrawal = new WithdrawalAPI.Withdrawal(this._client);
}

ExchangeProtection.Withdrawal = Withdrawal;

export declare namespace ExchangeProtection {
  export {
    Withdrawal as Withdrawal,
    type WithdrawalScanResponse as WithdrawalScanResponse,
    type WithdrawalScanParams as WithdrawalScanParams,
  };
}
