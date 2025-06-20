/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { edgeConfigCreateEdgeConfig } from "../funcs/edgeConfigCreateEdgeConfig.js";
import { edgeConfigCreateEdgeConfigToken } from "../funcs/edgeConfigCreateEdgeConfigToken.js";
import { edgeConfigDeleteEdgeConfig } from "../funcs/edgeConfigDeleteEdgeConfig.js";
import { edgeConfigDeleteEdgeConfigSchema } from "../funcs/edgeConfigDeleteEdgeConfigSchema.js";
import { edgeConfigDeleteEdgeConfigTokens } from "../funcs/edgeConfigDeleteEdgeConfigTokens.js";
import { edgeConfigGetEdgeConfig } from "../funcs/edgeConfigGetEdgeConfig.js";
import { edgeConfigGetEdgeConfigBackup } from "../funcs/edgeConfigGetEdgeConfigBackup.js";
import { edgeConfigGetEdgeConfigBackups } from "../funcs/edgeConfigGetEdgeConfigBackups.js";
import { edgeConfigGetEdgeConfigItem } from "../funcs/edgeConfigGetEdgeConfigItem.js";
import { edgeConfigGetEdgeConfigItems } from "../funcs/edgeConfigGetEdgeConfigItems.js";
import { edgeConfigGetEdgeConfigs } from "../funcs/edgeConfigGetEdgeConfigs.js";
import { edgeConfigGetEdgeConfigSchema } from "../funcs/edgeConfigGetEdgeConfigSchema.js";
import { edgeConfigGetEdgeConfigToken } from "../funcs/edgeConfigGetEdgeConfigToken.js";
import { edgeConfigGetEdgeConfigTokens } from "../funcs/edgeConfigGetEdgeConfigTokens.js";
import { edgeConfigPatchEdgeConfigItems } from "../funcs/edgeConfigPatchEdgeConfigItems.js";
import { edgeConfigPatchEdgeConfigSchema } from "../funcs/edgeConfigPatchEdgeConfigSchema.js";
import { edgeConfigUpdateEdgeConfig } from "../funcs/edgeConfigUpdateEdgeConfig.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateEdgeConfigRequest,
  CreateEdgeConfigResponseBody,
} from "../models/createedgeconfigop.js";
import {
  CreateEdgeConfigTokenRequest,
  CreateEdgeConfigTokenResponseBody,
} from "../models/createedgeconfigtokenop.js";
import { DeleteEdgeConfigRequest } from "../models/deleteedgeconfigop.js";
import { DeleteEdgeConfigSchemaRequest } from "../models/deleteedgeconfigschemaop.js";
import { DeleteEdgeConfigTokensRequest } from "../models/deleteedgeconfigtokensop.js";
import { EdgeConfigItem } from "../models/edgeconfigitem.js";
import { EdgeConfigToken } from "../models/edgeconfigtoken.js";
import {
  GetEdgeConfigBackupRequest,
  GetEdgeConfigBackupResponseBody,
} from "../models/getedgeconfigbackupop.js";
import {
  GetEdgeConfigBackupsRequest,
  GetEdgeConfigBackupsResponseBody,
} from "../models/getedgeconfigbackupsop.js";
import { GetEdgeConfigItemRequest } from "../models/getedgeconfigitemop.js";
import { GetEdgeConfigItemsRequest } from "../models/getedgeconfigitemsop.js";
import {
  GetEdgeConfigRequest,
  GetEdgeConfigResponseBody,
} from "../models/getedgeconfigop.js";
import {
  GetEdgeConfigSchemaRequest,
  GetEdgeConfigSchemaResponseBody,
} from "../models/getedgeconfigschemaop.js";
import {
  GetEdgeConfigsRequest,
  GetEdgeConfigsResponseBody,
} from "../models/getedgeconfigsop.js";
import { GetEdgeConfigTokenRequest } from "../models/getedgeconfigtokenop.js";
import { GetEdgeConfigTokensRequest } from "../models/getedgeconfigtokensop.js";
import {
  PatchEdgeConfigItemsRequest,
  PatchEdgeConfigItemsResponseBody,
} from "../models/patchedgeconfigitemsop.js";
import {
  PatchEdgeConfigSchemaRequest,
  PatchEdgeConfigSchemaResponseBody,
} from "../models/patchedgeconfigschemaop.js";
import {
  UpdateEdgeConfigRequest,
  UpdateEdgeConfigResponseBody,
} from "../models/updateedgeconfigop.js";
import { unwrapAsync } from "../types/fp.js";

export class EdgeConfig extends ClientSDK {
  /**
   * Get Edge Configs
   *
   * @remarks
   * Returns all Edge Configs.
   */
  async getEdgeConfigs(
    request: GetEdgeConfigsRequest,
    options?: RequestOptions,
  ): Promise<Array<GetEdgeConfigsResponseBody>> {
    return unwrapAsync(edgeConfigGetEdgeConfigs(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an Edge Config
   *
   * @remarks
   * Creates an Edge Config.
   */
  async createEdgeConfig(
    request: CreateEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<CreateEdgeConfigResponseBody> {
    return unwrapAsync(edgeConfigCreateEdgeConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an Edge Config
   *
   * @remarks
   * Returns an Edge Config.
   */
  async getEdgeConfig(
    request: GetEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<GetEdgeConfigResponseBody> {
    return unwrapAsync(edgeConfigGetEdgeConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an Edge Config
   *
   * @remarks
   * Updates an Edge Config.
   */
  async updateEdgeConfig(
    request: UpdateEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<UpdateEdgeConfigResponseBody> {
    return unwrapAsync(edgeConfigUpdateEdgeConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an Edge Config
   *
   * @remarks
   * Delete an Edge Config by id.
   */
  async deleteEdgeConfig(
    request: DeleteEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(edgeConfigDeleteEdgeConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Edge Config items
   *
   * @remarks
   * Returns all items of an Edge Config.
   */
  async getEdgeConfigItems(
    request: GetEdgeConfigItemsRequest,
    options?: RequestOptions,
  ): Promise<Array<EdgeConfigItem>> {
    return unwrapAsync(edgeConfigGetEdgeConfigItems(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Edge Config items in batch
   *
   * @remarks
   * Update multiple Edge Config Items in batch.
   */
  async patchEdgeConfigItems(
    request: PatchEdgeConfigItemsRequest,
    options?: RequestOptions,
  ): Promise<PatchEdgeConfigItemsResponseBody> {
    return unwrapAsync(edgeConfigPatchEdgeConfigItems(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Edge Config schema
   *
   * @remarks
   * Returns the schema of an Edge Config.
   */
  async getEdgeConfigSchema(
    request: GetEdgeConfigSchemaRequest,
    options?: RequestOptions,
  ): Promise<GetEdgeConfigSchemaResponseBody> {
    return unwrapAsync(edgeConfigGetEdgeConfigSchema(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Edge Config schema
   *
   * @remarks
   * Update an Edge Config's schema.
   */
  async patchEdgeConfigSchema(
    request: PatchEdgeConfigSchemaRequest,
    options?: RequestOptions,
  ): Promise<PatchEdgeConfigSchemaResponseBody> {
    return unwrapAsync(edgeConfigPatchEdgeConfigSchema(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an Edge Config's schema
   *
   * @remarks
   * Deletes the schema of existing Edge Config.
   */
  async deleteEdgeConfigSchema(
    request: DeleteEdgeConfigSchemaRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(edgeConfigDeleteEdgeConfigSchema(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an Edge Config item
   *
   * @remarks
   * Returns a specific Edge Config Item.
   */
  async getEdgeConfigItem(
    request: GetEdgeConfigItemRequest,
    options?: RequestOptions,
  ): Promise<EdgeConfigItem> {
    return unwrapAsync(edgeConfigGetEdgeConfigItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all tokens of an Edge Config
   *
   * @remarks
   * Returns all tokens of an Edge Config.
   */
  async getEdgeConfigTokens(
    request: GetEdgeConfigTokensRequest,
    options?: RequestOptions,
  ): Promise<EdgeConfigToken> {
    return unwrapAsync(edgeConfigGetEdgeConfigTokens(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete one or more Edge Config tokens
   *
   * @remarks
   * Deletes one or more tokens of an existing Edge Config.
   */
  async deleteEdgeConfigTokens(
    request: DeleteEdgeConfigTokensRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(edgeConfigDeleteEdgeConfigTokens(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Edge Config token meta data
   *
   * @remarks
   * Return meta data about an Edge Config token.
   */
  async getEdgeConfigToken(
    request: GetEdgeConfigTokenRequest,
    options?: RequestOptions,
  ): Promise<EdgeConfigToken> {
    return unwrapAsync(edgeConfigGetEdgeConfigToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an Edge Config token
   *
   * @remarks
   * Adds a token to an existing Edge Config.
   */
  async createEdgeConfigToken(
    request: CreateEdgeConfigTokenRequest,
    options?: RequestOptions,
  ): Promise<CreateEdgeConfigTokenResponseBody> {
    return unwrapAsync(edgeConfigCreateEdgeConfigToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Edge Config backup
   *
   * @remarks
   * Retrieves a specific version of an Edge Config from backup storage.
   */
  async getEdgeConfigBackup(
    request: GetEdgeConfigBackupRequest,
    options?: RequestOptions,
  ): Promise<GetEdgeConfigBackupResponseBody> {
    return unwrapAsync(edgeConfigGetEdgeConfigBackup(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Edge Config backups
   *
   * @remarks
   * Returns backups of an Edge Config.
   */
  async getEdgeConfigBackups(
    request: GetEdgeConfigBackupsRequest,
    options?: RequestOptions,
  ): Promise<GetEdgeConfigBackupsResponseBody> {
    return unwrapAsync(edgeConfigGetEdgeConfigBackups(
      this,
      request,
      options,
    ));
  }
}
