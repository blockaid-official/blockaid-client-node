// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Blockaid } from './index';

export abstract class APIResource {
  protected _client: Blockaid;

  constructor(client: Blockaid) {
    this._client = client;
  }
}
