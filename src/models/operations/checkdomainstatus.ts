/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckDomainStatusRequest = {
  /**
   * The name of the domain for which we would like to check the status.
   */
  name: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/**
 * Successful response checking if a Domain's name is available.
 */
export type CheckDomainStatusResponseBody = {
  available: boolean;
};

/** @internal */
export const CheckDomainStatusRequest$inboundSchema: z.ZodType<
  CheckDomainStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type CheckDomainStatusRequest$Outbound = {
  name: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const CheckDomainStatusRequest$outboundSchema: z.ZodType<
  CheckDomainStatusRequest$Outbound,
  z.ZodTypeDef,
  CheckDomainStatusRequest
> = z.object({
  name: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckDomainStatusRequest$ {
  /** @deprecated use `CheckDomainStatusRequest$inboundSchema` instead. */
  export const inboundSchema = CheckDomainStatusRequest$inboundSchema;
  /** @deprecated use `CheckDomainStatusRequest$outboundSchema` instead. */
  export const outboundSchema = CheckDomainStatusRequest$outboundSchema;
  /** @deprecated use `CheckDomainStatusRequest$Outbound` instead. */
  export type Outbound = CheckDomainStatusRequest$Outbound;
}

export function checkDomainStatusRequestToJSON(
  checkDomainStatusRequest: CheckDomainStatusRequest,
): string {
  return JSON.stringify(
    CheckDomainStatusRequest$outboundSchema.parse(checkDomainStatusRequest),
  );
}

export function checkDomainStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckDomainStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckDomainStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckDomainStatusRequest' from JSON`,
  );
}

/** @internal */
export const CheckDomainStatusResponseBody$inboundSchema: z.ZodType<
  CheckDomainStatusResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  available: z.boolean(),
});

/** @internal */
export type CheckDomainStatusResponseBody$Outbound = {
  available: boolean;
};

/** @internal */
export const CheckDomainStatusResponseBody$outboundSchema: z.ZodType<
  CheckDomainStatusResponseBody$Outbound,
  z.ZodTypeDef,
  CheckDomainStatusResponseBody
> = z.object({
  available: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckDomainStatusResponseBody$ {
  /** @deprecated use `CheckDomainStatusResponseBody$inboundSchema` instead. */
  export const inboundSchema = CheckDomainStatusResponseBody$inboundSchema;
  /** @deprecated use `CheckDomainStatusResponseBody$outboundSchema` instead. */
  export const outboundSchema = CheckDomainStatusResponseBody$outboundSchema;
  /** @deprecated use `CheckDomainStatusResponseBody$Outbound` instead. */
  export type Outbound = CheckDomainStatusResponseBody$Outbound;
}

export function checkDomainStatusResponseBodyToJSON(
  checkDomainStatusResponseBody: CheckDomainStatusResponseBody,
): string {
  return JSON.stringify(
    CheckDomainStatusResponseBody$outboundSchema.parse(
      checkDomainStatusResponseBody,
    ),
  );
}

export function checkDomainStatusResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CheckDomainStatusResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckDomainStatusResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckDomainStatusResponseBody' from JSON`,
  );
}