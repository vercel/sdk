/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  ExchangeSsoTokenRequestBody,
  ExchangeSsoTokenRequestBody$outboundSchema,
  ExchangeSsoTokenResponseBody,
  ExchangeSsoTokenResponseBody$inboundSchema,
} from "../models/operations/exchangessotoken.js";
import { Result } from "../types/fp.js";

/**
 * SSO Token Exchange
 *
 * @remarks
 * During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. This is used to verify the identity of the user during the [**Open in Provider** flow](https://vercel.com/docs/integrations/marketplace-flows#open-in-provider-button-flow). Providers should not persist the returned `id_token` in a database since the token will expire.
 */
export async function authenticationExchangeSsoToken(
  client: VercelCore,
  request?: ExchangeSsoTokenRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    ExchangeSsoTokenResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      ExchangeSsoTokenRequestBody$outboundSchema.optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/v1/integrations/sso/token")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const context = {
    operationID: "exchange-sso-token",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "404", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    ExchangeSsoTokenResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, ExchangeSsoTokenResponseBody$inboundSchema),
    M.fail([400, 404, "4XX", 500, "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
