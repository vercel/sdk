/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceCreateEvent } from "../funcs/marketplaceCreateEvent.js";
import { marketplaceExchangeSsoToken } from "../funcs/marketplaceExchangeSsoToken.js";
import { marketplaceGetAccountInfo } from "../funcs/marketplaceGetAccountInfo.js";
import { marketplaceGetInvoice } from "../funcs/marketplaceGetInvoice.js";
import { marketplaceGetMember } from "../funcs/marketplaceGetMember.js";
import { marketplaceSubmitBillingData } from "../funcs/marketplaceSubmitBillingData.js";
import { marketplaceSubmitInvoice } from "../funcs/marketplaceSubmitInvoice.js";
import { marketplaceUpdateInvoice } from "../funcs/marketplaceUpdateInvoice.js";
import { marketplaceUpdateResourceSecrets } from "../funcs/marketplaceUpdateResourceSecrets.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateEventRequest } from "../models/operations/createevent.js";
import {
  ExchangeSsoTokenRequestBody,
  ExchangeSsoTokenResponseBody,
} from "../models/operations/exchangessotoken.js";
import {
  GetAccountInfoRequest,
  GetAccountInfoResponseBody,
} from "../models/operations/getaccountinfo.js";
import {
  GetInvoiceRequest,
  GetInvoiceResponseBody,
} from "../models/operations/getinvoice.js";
import {
  GetMemberRequest,
  GetMemberResponseBody,
} from "../models/operations/getmember.js";
import { SubmitBillingDataRequest } from "../models/operations/submitbillingdata.js";
import {
  SubmitInvoiceRequest,
  SubmitInvoiceResponseBody,
} from "../models/operations/submitinvoice.js";
import { UpdateInvoiceRequest } from "../models/operations/updateinvoice.js";
import { UpdateResourceSecretsRequest } from "../models/operations/updateresourcesecrets.js";
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
   * Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state. <br/> <br/> `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner. <br/> <br/> Use cases: <br/> <br/> - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores. <br/>
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
   * Submit Billing Data
   *
   * @remarks
   * Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour.
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
   * This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.<br/> <br/> There are several limitations to the invoice submission:<br/> <br/> 1. A resource can only be billed once per the billing period and the billing plan.<br/> 2. The billing plan used to bill the resource must have been active for this resource during the billing period.<br/> 3. The billing plan used must be a subscription plan.<br/> 4. The interim usage data must be sent hourly for all types of subscriptions. See [Send subscription billing and usage data](#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.<br/>
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
   * Update Resource Secrets
   *
   * @remarks
   * This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>
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
   * SSO Token Exchange
   *
   * @remarks
   * During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. This is used to verify the identity of the user during the [**Open in Provider** flow](https://vercel.com/docs/integrations/marketplace-flows#open-in-provider-button-flow). Providers should not persist the returned `id_token` in a database since the token will expire.
   */
  async exchangeSsoToken(
    request?: ExchangeSsoTokenRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<ExchangeSsoTokenResponseBody> {
    return unwrapAsync(marketplaceExchangeSsoToken(
      this,
      request,
      options,
    ));
  }
}
