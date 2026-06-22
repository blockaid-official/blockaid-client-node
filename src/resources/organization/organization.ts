// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RiskExposureConfigurationAPI from './risk-exposure-configuration';
import {
  OrganizationCategoryRiskView,
  OrganizationRiskConfigView,
  PatchRiskConfigRequest,
  RiskExposureConfiguration,
  RiskExposureConfigurationUpdateParams,
  VerdictThresholdView,
} from './risk-exposure-configuration';

export class Organization extends APIResource {
  riskExposureConfiguration: RiskExposureConfigurationAPI.RiskExposureConfiguration =
    new RiskExposureConfigurationAPI.RiskExposureConfiguration(this._client);
}

Organization.RiskExposureConfiguration = RiskExposureConfiguration;

export declare namespace Organization {
  export {
    RiskExposureConfiguration as RiskExposureConfiguration,
    type OrganizationCategoryRiskView as OrganizationCategoryRiskView,
    type OrganizationRiskConfigView as OrganizationRiskConfigView,
    type PatchRiskConfigRequest as PatchRiskConfigRequest,
    type VerdictThresholdView as VerdictThresholdView,
    type RiskExposureConfigurationUpdateParams as RiskExposureConfigurationUpdateParams,
  };
}
