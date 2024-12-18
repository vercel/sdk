/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * In which status of the domain the price needs to be checked.
 */
export const QueryParamType = {
  New: "new",
  Renewal: "renewal",
  Transfer: "transfer",
  Redemption: "redemption",
} as const;
/**
 * In which status of the domain the price needs to be checked.
 */
export type QueryParamType = ClosedEnum<typeof QueryParamType>;

export type CheckDomainPriceRequest = {
  /**
   * The name of the domain for which the price needs to be checked.
   */
  name: string;
  /**
   * In which status of the domain the price needs to be checked.
   */
  type?: QueryParamType | undefined;
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
 * Successful response which returns the price of the domain and the period.
 */
export type CheckDomainPriceResponseBody = {};

/** @internal */
export const QueryParamType$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamType
> = z.nativeEnum(QueryParamType);

/** @internal */
export const QueryParamType$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamType
> = QueryParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamType$ {
  /** @deprecated use `QueryParamType$inboundSchema` instead. */
  export const inboundSchema = QueryParamType$inboundSchema;
  /** @deprecated use `QueryParamType$outboundSchema` instead. */
  export const outboundSchema = QueryParamType$outboundSchema;
}

/** @internal */
export const CheckDomainPriceRequest$inboundSchema: z.ZodType<
  CheckDomainPriceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  type: QueryParamType$inboundSchema.optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type CheckDomainPriceRequest$Outbound = {
  name: string;
  type?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const CheckDomainPriceRequest$outboundSchema: z.ZodType<
  CheckDomainPriceRequest$Outbound,
  z.ZodTypeDef,
  CheckDomainPriceRequest
> = z.object({
  name: z.string(),
  type: QueryParamType$outboundSchema.optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckDomainPriceRequest$ {
  /** @deprecated use `CheckDomainPriceRequest$inboundSchema` instead. */
  export const inboundSchema = CheckDomainPriceRequest$inboundSchema;
  /** @deprecated use `CheckDomainPriceRequest$outboundSchema` instead. */
  export const outboundSchema = CheckDomainPriceRequest$outboundSchema;
  /** @deprecated use `CheckDomainPriceRequest$Outbound` instead. */
  export type Outbound = CheckDomainPriceRequest$Outbound;
}

export function checkDomainPriceRequestToJSON(
  checkDomainPriceRequest: CheckDomainPriceRequest,
): string {
  return JSON.stringify(
    CheckDomainPriceRequest$outboundSchema.parse(checkDomainPriceRequest),
  );
}

export function checkDomainPriceRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckDomainPriceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckDomainPriceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckDomainPriceRequest' from JSON`,
  );
}

/** @internal */
export const CheckDomainPriceResponseBody$inboundSchema: z.ZodType<
  CheckDomainPriceResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CheckDomainPriceResponseBody$Outbound = {};

/** @internal */
export const CheckDomainPriceResponseBody$outboundSchema: z.ZodType<
  CheckDomainPriceResponseBody$Outbound,
  z.ZodTypeDef,
  CheckDomainPriceResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckDomainPriceResponseBody$ {
  /** @deprecated use `CheckDomainPriceResponseBody$inboundSchema` instead. */
  export const inboundSchema = CheckDomainPriceResponseBody$inboundSchema;
  /** @deprecated use `CheckDomainPriceResponseBody$outboundSchema` instead. */
  export const outboundSchema = CheckDomainPriceResponseBody$outboundSchema;
  /** @deprecated use `CheckDomainPriceResponseBody$Outbound` instead. */
  export type Outbound = CheckDomainPriceResponseBody$Outbound;
}

export function checkDomainPriceResponseBodyToJSON(
  checkDomainPriceResponseBody: CheckDomainPriceResponseBody,
): string {
  return JSON.stringify(
    CheckDomainPriceResponseBody$outboundSchema.parse(
      checkDomainPriceResponseBody,
    ),
  );
}

export function checkDomainPriceResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CheckDomainPriceResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckDomainPriceResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckDomainPriceResponseBody' from JSON`,
  );
}
