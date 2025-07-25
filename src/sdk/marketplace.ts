/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceCreateEvent } from "../funcs/marketplaceCreateEvent.js";
import { marketplaceCreateInstallationIntegrationConfiguration } from "../funcs/marketplaceCreateInstallationIntegrationConfiguration.js";
import { marketplaceCreateInstallationIntegrationEdgeConfig } from "../funcs/marketplaceCreateInstallationIntegrationEdgeConfig.js";
import { marketplaceDeleteInstallationIntegrationConfiguration } from "../funcs/marketplaceDeleteInstallationIntegrationConfiguration.js";
import { marketplaceDeleteIntegrationResource } from "../funcs/marketplaceDeleteIntegrationResource.js";
import { marketplaceExchangeSsoToken } from "../funcs/marketplaceExchangeSsoToken.js";
import { marketplaceGetAccountInfo } from "../funcs/marketplaceGetAccountInfo.js";
import { marketplaceGetIntegrationResource } from "../funcs/marketplaceGetIntegrationResource.js";
import { marketplaceGetIntegrationResources } from "../funcs/marketplaceGetIntegrationResources.js";
import { marketplaceGetInvoice } from "../funcs/marketplaceGetInvoice.js";
import { marketplaceGetMember } from "../funcs/marketplaceGetMember.js";
import { marketplaceImportResource } from "../funcs/marketplaceImportResource.js";
import { marketplaceSubmitBillingData } from "../funcs/marketplaceSubmitBillingData.js";
import { marketplaceSubmitInvoice } from "../funcs/marketplaceSubmitInvoice.js";
import { marketplaceSubmitPrepaymentBalances } from "../funcs/marketplaceSubmitPrepaymentBalances.js";
import { marketplaceUpdateInstallationIntegrationConfiguration } from "../funcs/marketplaceUpdateInstallationIntegrationConfiguration.js";
import { marketplaceUpdateInstallationIntegrationEdgeConfig } from "../funcs/marketplaceUpdateInstallationIntegrationEdgeConfig.js";
import { marketplaceUpdateInvoice } from "../funcs/marketplaceUpdateInvoice.js";
import { marketplaceUpdateResourceSecrets } from "../funcs/marketplaceUpdateResourceSecrets.js";
import { marketplaceUpdateResourceSecretsById } from "../funcs/marketplaceUpdateResourceSecretsById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateEventRequest } from "../models/createeventop.js";
import { DeleteIntegrationResourceRequest } from "../models/deleteintegrationresourceop.js";
import {
  DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest,
} from "../models/deletev1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidop.js";
import {
  ExchangeSsoTokenRequestBody,
  ExchangeSsoTokenResponseBody,
} from "../models/exchangessotokenop.js";
import {
  GetAccountInfoRequest,
  GetAccountInfoResponseBody,
} from "../models/getaccountinfoop.js";
import {
  GetIntegrationResourceRequest,
  GetIntegrationResourceResponseBody,
} from "../models/getintegrationresourceop.js";
import {
  GetIntegrationResourcesRequest,
  GetIntegrationResourcesResponseBody,
} from "../models/getintegrationresourcesop.js";
import {
  GetInvoiceRequest,
  GetInvoiceResponseBody,
} from "../models/getinvoiceop.js";
import {
  GetMemberRequest,
  GetMemberResponseBody,
} from "../models/getmemberop.js";
import {
  HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
  HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
} from "../models/headv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.js";
import {
  ImportResourceRequest,
  ImportResourceResponseBody,
} from "../models/importresourceop.js";
import {
  PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest,
} from "../models/patchv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidop.js";
import {
  PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest,
} from "../models/postv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsop.js";
import {
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
} from "../models/putv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.js";
import { SubmitBillingDataRequest } from "../models/submitbillingdataop.js";
import {
  SubmitInvoiceRequest,
  SubmitInvoiceResponseBody,
} from "../models/submitinvoiceop.js";
import { SubmitPrepaymentBalancesRequest } from "../models/submitprepaymentbalancesop.js";
import { UpdateInvoiceRequest } from "../models/updateinvoiceop.js";
import { UpdateResourceSecretsByIdRequest } from "../models/updateresourcesecretsbyidop.js";
import { UpdateResourceSecretsRequest } from "../models/updateresourcesecretsop.js";
import { unwrapAsync } from "../types/fp.js";

export class Marketplace extends ClientSDK {
  /**
   * Get Account Information
   *
   * @remarks
   * Fetches the best account or user’s contact info
   */
  async getAccountInfo(
    request: GetAccountInfoRequest,
    options?: RequestOptions,
  ): Promise<GetAccountInfoResponseBody> {
    return unwrapAsync(marketplaceGetAccountInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Member Information
   *
   * @remarks
   * Returns the member role and other information for a given member ID ("user_id" claim in the SSO OIDC token).
   */
  async getMember(
    request: GetMemberRequest,
    options?: RequestOptions,
  ): Promise<GetMemberResponseBody> {
    return unwrapAsync(marketplaceGetMember(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Event
   *
   * @remarks
   * Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.<br/> <br/> `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.<br/> `installation.updated` event should be dispatched when an installation's billing plan is changed via the provider instead of Vercel.<br/> <br/> Resource update use cases: <br/> <br/> - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.<br/> - A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource's status in Vercel's datastores.<br/>
   */
  async createEvent(
    request: CreateEventRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceCreateEvent(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Integration Resources
   *
   * @remarks
   * Get all resources for a given installation ID.
   */
  async getIntegrationResources(
    request: GetIntegrationResourcesRequest,
    options?: RequestOptions,
  ): Promise<GetIntegrationResourcesResponseBody> {
    return unwrapAsync(marketplaceGetIntegrationResources(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Integration Resource
   *
   * @remarks
   * Get a resource by its partner ID.
   */
  async getIntegrationResource(
    request: GetIntegrationResourceRequest,
    options?: RequestOptions,
  ): Promise<GetIntegrationResourceResponseBody> {
    return unwrapAsync(marketplaceGetIntegrationResource(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Integration Resource
   *
   * @remarks
   * Delete a resource owned by the selected installation ID.
   */
  async deleteIntegrationResource(
    request: DeleteIntegrationResourceRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceDeleteIntegrationResource(
      this,
      request,
      options,
    ));
  }

  /**
   * Import Resource
   *
   * @remarks
   * This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel.
   */
  async importResource(
    request: ImportResourceRequest,
    options?: RequestOptions,
  ): Promise<ImportResourceResponseBody> {
    return unwrapAsync(marketplaceImportResource(
      this,
      request,
      options,
    ));
  }

  /**
   * Submit Billing Data
   *
   * @remarks
   * Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.
   */
  async submitBillingData(
    request: SubmitBillingDataRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceSubmitBillingData(
      this,
      request,
      options,
    ));
  }

  /**
   * Submit Invoice
   *
   * @remarks
   * This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.<br/> <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request. <br/> There are several limitations to the invoice submission:<br/> <br/> 1. A resource can only be billed once per the billing period and the billing plan.<br/> 2. The billing plan used to bill the resource must have been active for this resource during the billing period.<br/> 3. The billing plan used must be a subscription plan.<br/> 4. The interim usage data must be sent hourly for all types of subscriptions. See [Send subscription billing and usage data](#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.<br/>
   */
  async submitInvoice(
    request: SubmitInvoiceRequest,
    options?: RequestOptions,
  ): Promise<SubmitInvoiceResponseBody> {
    return unwrapAsync(marketplaceSubmitInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Invoice
   *
   * @remarks
   * Get Invoice details and status for a given invoice ID.<br/> <br/> See Billing Events with Webhooks documentation on how to receive invoice events. This endpoint is used to retrieve the invoice details.
   */
  async getInvoice(
    request: GetInvoiceRequest,
    options?: RequestOptions,
  ): Promise<GetInvoiceResponseBody> {
    return unwrapAsync(marketplaceGetInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Invoice Actions
   *
   * @remarks
   * This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the [Submit Invoice API](#submit-invoice-api).
   */
  async updateInvoice(
    request: UpdateInvoiceRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceUpdateInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Submit Prepayment Balances
   *
   * @remarks
   * Sends the prepayment balances. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.
   */
  async submitPrepaymentBalances(
    request: SubmitPrepaymentBalancesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceSubmitPrepaymentBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Resource Secrets (Deprecated)
   *
   * @remarks
   * This endpoint is deprecated and replaced with the endpoint [Update Resource Secrets](#update-resource-secrets). <br/> This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>
   */
  async updateResourceSecrets(
    request: UpdateResourceSecretsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceUpdateResourceSecrets(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Resource Secrets
   *
   * @remarks
   * This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>
   */
  async updateResourceSecretsById(
    request: UpdateResourceSecretsByIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceUpdateResourceSecretsById(
      this,
      request,
      options,
    ));
  }

  /**
   * SSO Token Exchange
   *
   * @remarks
   * During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. Providers should not persist the returned `id_token` in a database since the token will expire. See [**Authentication with SSO**](https://vercel.com/docs/integrations/create-integration/marketplace-api#authentication-with-sso) for more details.
   */
  async exchangeSsoToken(
    request: ExchangeSsoTokenRequestBody,
    options?: RequestOptions,
  ): Promise<ExchangeSsoTokenResponseBody> {
    return unwrapAsync(marketplaceExchangeSsoToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Create one or multiple experimentation items
   *
   * @remarks
   * Create one or multiple experimentation items
   */
  async createInstallationIntegrationConfiguration(
    request:
      PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceCreateInstallationIntegrationConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * Patch an existing experimentation item
   *
   * @remarks
   * Patch an existing experimentation item
   */
  async updateInstallationIntegrationConfiguration(
    request:
      PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceUpdateInstallationIntegrationConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an existing experimentation item
   *
   * @remarks
   * Delete an existing experimentation item
   */
  async deleteInstallationIntegrationConfiguration(
    request:
      DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(marketplaceDeleteInstallationIntegrationConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the data of a user-provided Edge Config
   *
   * @remarks
   * When the user enabled Edge Config syncing, then this endpoint can be used by the partner to fetch the contents of the Edge Config.
   */
  async createInstallationIntegrationEdgeConfig(
    request:
      HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<
    | HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody
    | undefined
  > {
    return unwrapAsync(marketplaceCreateInstallationIntegrationEdgeConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Push data into a user-provided Edge Config
   *
   * @remarks
   * When the user enabled Edge Config syncing, then this endpoint can be used by the partner to push their configuration data into the relevant Edge Config.
   */
  async updateInstallationIntegrationEdgeConfig(
    request:
      PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
    options?: RequestOptions,
  ): Promise<
    PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody
  > {
    return unwrapAsync(marketplaceUpdateInstallationIntegrationEdgeConfig(
      this,
      request,
      options,
    ));
  }
}
