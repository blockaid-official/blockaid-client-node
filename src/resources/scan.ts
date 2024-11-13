// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Scan extends APIResource {
  /**
   * Report whether the end-user accepted the Blockaid classification on the entity
   * being scanned.
   */
  status(body: ScanStatusParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v0/scan/status/', { body, ...options });
  }
}

export type ScanStatusResponse = unknown;

export interface ScanStatusParams {
  /**
   * The x-request-id header returned from the previous Blockaid api request
   */
  request_id: string;

  /**
   * An enumeration.
   */
  status: 'accepted' | 'rejected';
}

export declare namespace Scan {
  export { type ScanStatusResponse as ScanStatusResponse, type ScanStatusParams as ScanStatusParams };
}
