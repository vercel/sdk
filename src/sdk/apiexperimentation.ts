/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { apiExperimentationGetV1ExperimentationItems } from "../funcs/apiExperimentationGetV1ExperimentationItems.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetV1ExperimentationItemsRequest,
  GetV1ExperimentationItemsResponseBody,
} from "../models/getv1experimentationitemsop.js";
import { unwrapAsync } from "../types/fp.js";

export class ApiExperimentation extends ClientSDK {
  /**
   * Query experimentation items
   */
  async getV1ExperimentationItems(
    request: GetV1ExperimentationItemsRequest,
    options?: RequestOptions,
  ): Promise<GetV1ExperimentationItemsResponseBody> {
    return unwrapAsync(apiExperimentationGetV1ExperimentationItems(
      this,
      request,
      options,
    ));
  }
}
