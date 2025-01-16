/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  DeleteTeamRequest,
  DeleteTeamRequest$outboundSchema,
  DeleteTeamResponseBody,
  DeleteTeamResponseBody$inboundSchema,
} from "../models/deleteteamop.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import {
  VercelBadRequestError,
  VercelBadRequestError$inboundSchema,
} from "../models/vercelbadrequesterror.js";
import {
  VercelForbiddenError,
  VercelForbiddenError$inboundSchema,
} from "../models/vercelforbiddenerror.js";
import {
  VercelNotFoundError,
  VercelNotFoundError$inboundSchema,
} from "../models/vercelnotfounderror.js";
import { Result } from "../types/fp.js";

/**
 * Delete a Team
 *
 * @remarks
 * Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.
 */
export async function teamsDeleteTeam(
  client: VercelCore,
  request: DeleteTeamRequest,
  options?: RequestOptions,
): Promise<
  Result<
    DeleteTeamResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | VercelNotFoundError
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
    (value) => DeleteTeamRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    teamId: encodeSimple("teamId", payload.teamId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/teams/{teamId}")(pathParams);

  const query = encodeFormQuery({
    "newDefaultTeamId": payload.newDefaultTeamId,
    "slug": payload.slug,
  });

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "deleteTeam",
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
    method: "DELETE",
    baseURL: options?.serverURL,
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
    errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    DeleteTeamResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | VercelNotFoundError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, DeleteTeamResponseBody$inboundSchema),
    M.jsonErr(400, VercelBadRequestError$inboundSchema),
    M.jsonErr(401, VercelForbiddenError$inboundSchema),
    M.fail([402, 403, 409, "4XX"]),
    M.jsonErr(404, VercelNotFoundError$inboundSchema),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
