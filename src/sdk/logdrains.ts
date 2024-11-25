/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { logDrainsCreateConfigurableLogDrain } from "../funcs/logDrainsCreateConfigurableLogDrain.js";
import { logDrainsCreateLogDrain } from "../funcs/logDrainsCreateLogDrain.js";
import { logDrainsDeleteConfigurableLogDrain } from "../funcs/logDrainsDeleteConfigurableLogDrain.js";
import { logDrainsDeleteIntegrationLogDrain } from "../funcs/logDrainsDeleteIntegrationLogDrain.js";
import { logDrainsGetAllLogDrains } from "../funcs/logDrainsGetAllLogDrains.js";
import { logDrainsGetConfigurableLogDrain } from "../funcs/logDrainsGetConfigurableLogDrain.js";
import { logDrainsGetIntegrationLogDrains } from "../funcs/logDrainsGetIntegrationLogDrains.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateConfigurableLogDrainRequest,
  CreateConfigurableLogDrainResponseBody,
} from "../models/operations/createconfigurablelogdrain.js";
import {
  CreateLogDrainRequest,
  CreateLogDrainResponseBody,
} from "../models/operations/createlogdrain.js";
import { DeleteConfigurableLogDrainRequest } from "../models/operations/deleteconfigurablelogdrain.js";
import { DeleteIntegrationLogDrainRequest } from "../models/operations/deleteintegrationlogdrain.js";
import {
  GetAllLogDrainsRequest,
  GetAllLogDrainsResponseBody,
} from "../models/operations/getalllogdrains.js";
import {
  GetConfigurableLogDrainRequest,
  GetConfigurableLogDrainResponseBody,
} from "../models/operations/getconfigurablelogdrain.js";
import {
  GetIntegrationLogDrainsRequest,
  GetIntegrationLogDrainsResponseBody,
} from "../models/operations/getintegrationlogdrains.js";
import { unwrapAsync } from "../types/fp.js";

export class LogDrains extends ClientSDK {
  /**
   * Retrieves a list of Integration log drains
   *
   * @remarks
   * Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.
   */
  async getIntegrationLogDrains(
    request: GetIntegrationLogDrainsRequest,
    options?: RequestOptions,
  ): Promise<Array<GetIntegrationLogDrainsResponseBody>> {
    return unwrapAsync(logDrainsGetIntegrationLogDrains(
      this,
      request,
      options,
    ));
  }

  /**
   * Creates a new Integration Log Drain
   *
   * @remarks
   * Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.
   */
  async createLogDrain(
    request: CreateLogDrainRequest,
    options?: RequestOptions,
  ): Promise<CreateLogDrainResponseBody> {
    return unwrapAsync(logDrainsCreateLogDrain(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes the Integration log drain with the provided `id`
   *
   * @remarks
   * Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.
   */
  async deleteIntegrationLogDrain(
    request: DeleteIntegrationLogDrainRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(logDrainsDeleteIntegrationLogDrain(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves a Configurable Log Drain
   *
   * @remarks
   * Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.
   */
  async getConfigurableLogDrain(
    request: GetConfigurableLogDrainRequest,
    options?: RequestOptions,
  ): Promise<GetConfigurableLogDrainResponseBody> {
    return unwrapAsync(logDrainsGetConfigurableLogDrain(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a Configurable Log Drain
   *
   * @remarks
   * Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.
   */
  async deleteConfigurableLogDrain(
    request: DeleteConfigurableLogDrainRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(logDrainsDeleteConfigurableLogDrain(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves a list of all the Log Drains
   *
   * @remarks
   * Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.
   */
  async getAllLogDrains(
    request: GetAllLogDrainsRequest,
    options?: RequestOptions,
  ): Promise<Array<GetAllLogDrainsResponseBody>> {
    return unwrapAsync(logDrainsGetAllLogDrains(
      this,
      request,
      options,
    ));
  }

  /**
   * Creates a Configurable Log Drain
   *
   * @remarks
   * Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)
   */
  async createConfigurableLogDrain(
    request: CreateConfigurableLogDrainRequest,
    options?: RequestOptions,
  ): Promise<CreateConfigurableLogDrainResponseBody> {
    return unwrapAsync(logDrainsCreateConfigurableLogDrain(
      this,
      request,
      options,
    ));
  }
}