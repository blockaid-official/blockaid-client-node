// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class RiskExposureConfiguration extends APIResource {
  /**
   * Returns your organization's current risk exposure settings, including category
   * risk scores and verdict thresholds.
   *
   * @example
   * ```ts
   * const organizationRiskConfigView =
   *   await client.organization.riskExposureConfiguration.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<OrganizationRiskConfigView> {
    return this._client.get('/v0/platform/organization/configuration/risk-exposure', options);
  }

  /**
   * Update your organization's risk exposure settings. Pass a category name or
   * verdict level with a new value to override the platform default, or pass null to
   * revert to the default. Any key you omit stays unchanged.
   *
   * @example
   * ```ts
   * const organizationRiskConfigView =
   *   await client.organization.riskExposureConfiguration.update(
   *     {
   *       category_overrides: {
   *         sanctioned_entity: 0.7,
   *         stolen_funds: 0.5,
   *       },
   *       verdict_overrides: {
   *         warning: 0.3,
   *         high_risk: 0.6,
   *         malicious: null,
   *       },
   *     },
   *   );
   * ```
   */
  update(
    body: RiskExposureConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationRiskConfigView> {
    return this._client.patch('/v0/platform/organization/configuration/risk-exposure', { body, ...options });
  }
}

/**
 * A risk-exposure category with its platform default score and the organization's
 * override (null when unset).
 */
export interface OrganizationCategoryRiskView {
  /**
   * The exposure category name, such as sanctioned_entity, stolen_funds, or mixer.
   */
  category: string;

  /**
   * Scores at or above this value contribute to this category's risk. Platform
   * default, set by Blockaid.
   */
  default_risk_score: number;

  /**
   * Your organization's custom risk score for this category. Overrides the platform
   * default when set, or null to use the default.
   */
  override_risk_score: number | null;
}

/**
 * Your organization's risk exposure settings, including category risk scores and
 * verdict thresholds.
 */
export interface OrganizationRiskConfigView {
  /**
   * The risk score configuration for each exposure category.
   */
  categories: Array<OrganizationCategoryRiskView>;

  /**
   * The score thresholds that determine each verdict level.
   */
  verdicts: Array<VerdictThresholdView>;
}

/**
 * A partial update to your organization's risk exposure settings. Only the fields
 * you include are changed.
 */
export interface PatchRiskConfigRequest {
  /**
   * Risk score overrides by category name. Pass a value in [0, 1] to set an
   * override, or null to revert to the platform default.
   */
  category_overrides?: { [key: string]: number | null };

  /**
   * Verdict threshold overrides by level. Pass a value in [0, 1] to set an override,
   * or null to revert to the platform default. The resulting thresholds must be
   * strictly increasing (warning < high_risk < malicious).
   */
  verdict_overrides?: PatchRiskConfigRequest.VerdictOverrides;
}

export namespace PatchRiskConfigRequest {
  /**
   * Verdict threshold overrides by level. Pass a value in [0, 1] to set an override,
   * or null to revert to the platform default. The resulting thresholds must be
   * strictly increasing (warning < high_risk < malicious).
   */
  export interface VerdictOverrides {
    /**
     * Scores at or above this value are classified as high_risk. Set to null to revert
     * to the platform default.
     */
    high_risk?: number | null;

    /**
     * Scores at or above this value are classified as malicious. Set to null to revert
     * to the platform default.
     */
    malicious?: number | null;

    /**
     * Scores at or above this value are classified as warning. Set to null to revert
     * to the platform default.
     */
    warning?: number | null;
  }
}

/**
 * A verdict level with its platform default threshold and the organization's
 * override (null when unset).
 */
export interface VerdictThresholdView {
  /**
   * The minimum aggregate score at which this verdict is applied, as set by
   * Blockaid.
   */
  default_threshold: number;

  /**
   * The verdict level this threshold applies to. benign is excluded as it is the
   * implicit default below warning.
   */
  level: 'warning' | 'high_risk' | 'malicious';

  /**
   * Your organization's custom minimum score for this verdict. Overrides the
   * platform default when set, or null to use the default.
   */
  override_threshold: number | null;
}

export interface RiskExposureConfigurationUpdateParams {
  /**
   * Risk score overrides by category name. Pass a value in [0, 1] to set an
   * override, or null to revert to the platform default.
   */
  category_overrides?: { [key: string]: number | null };

  /**
   * Verdict threshold overrides by level. Pass a value in [0, 1] to set an override,
   * or null to revert to the platform default. The resulting thresholds must be
   * strictly increasing (warning < high_risk < malicious).
   */
  verdict_overrides?: RiskExposureConfigurationUpdateParams.VerdictOverrides;
}

export namespace RiskExposureConfigurationUpdateParams {
  /**
   * Verdict threshold overrides by level. Pass a value in [0, 1] to set an override,
   * or null to revert to the platform default. The resulting thresholds must be
   * strictly increasing (warning < high_risk < malicious).
   */
  export interface VerdictOverrides {
    /**
     * Scores at or above this value are classified as high_risk. Set to null to revert
     * to the platform default.
     */
    high_risk?: number | null;

    /**
     * Scores at or above this value are classified as malicious. Set to null to revert
     * to the platform default.
     */
    malicious?: number | null;

    /**
     * Scores at or above this value are classified as warning. Set to null to revert
     * to the platform default.
     */
    warning?: number | null;
  }
}

export declare namespace RiskExposureConfiguration {
  export {
    type OrganizationCategoryRiskView as OrganizationCategoryRiskView,
    type OrganizationRiskConfigView as OrganizationRiskConfigView,
    type PatchRiskConfigRequest as PatchRiskConfigRequest,
    type VerdictThresholdView as VerdictThresholdView,
    type RiskExposureConfigurationUpdateParams as RiskExposureConfigurationUpdateParams,
  };
}
