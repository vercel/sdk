/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
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
  GetProjectDomainsRequest,
  GetProjectDomainsRequest$outboundSchema,
  GetProjectDomainsResponseBody,
  GetProjectDomainsResponseBody$inboundSchema,
} from "../models/operations/getprojectdomains.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve project domains by project by id or name
 *
 * @remarks
 * Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.
 */
export async function projectsGetProjectDomains(
  client: VercelCore,
  request: GetProjectDomainsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    GetProjectDomainsResponseBody,
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
    (value) => GetProjectDomainsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    idOrName: encodeSimple("idOrName", payload.idOrName, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v9/projects/{idOrName}/domains")(pathParams);

  const query = encodeFormQuery({
    "gitBranch": payload.gitBranch,
    "limit": payload.limit,
    "order": payload.order,
    "production": payload.production,
    "redirect": payload.redirect,
    "redirects": payload.redirects,
    "since": payload.since,
    "slug": payload.slug,
    "target": payload.target,
    "teamId": payload.teamId,
    "until": payload.until,
    "verified": payload.verified,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "getProjectDomains",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.bearerToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    GetProjectDomainsResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, GetProjectDomainsResponseBody$inboundSchema),
    M.fail([400, 401, 403, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}