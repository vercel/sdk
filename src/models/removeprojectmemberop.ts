/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type RemoveProjectMemberRequest = {
  /**
   * The ID or name of the Project.
   */
  idOrName: string;
  /**
   * The user ID of the member.
   */
  uid: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export type RemoveProjectMemberResponseBody = {
  id: string;
};

/** @internal */
export const RemoveProjectMemberRequest$inboundSchema: z.ZodType<
  RemoveProjectMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  uid: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type RemoveProjectMemberRequest$Outbound = {
  idOrName: string;
  uid: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const RemoveProjectMemberRequest$outboundSchema: z.ZodType<
  RemoveProjectMemberRequest$Outbound,
  z.ZodTypeDef,
  RemoveProjectMemberRequest
> = z.object({
  idOrName: z.string(),
  uid: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveProjectMemberRequest$ {
  /** @deprecated use `RemoveProjectMemberRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveProjectMemberRequest$inboundSchema;
  /** @deprecated use `RemoveProjectMemberRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveProjectMemberRequest$outboundSchema;
  /** @deprecated use `RemoveProjectMemberRequest$Outbound` instead. */
  export type Outbound = RemoveProjectMemberRequest$Outbound;
}

export function removeProjectMemberRequestToJSON(
  removeProjectMemberRequest: RemoveProjectMemberRequest,
): string {
  return JSON.stringify(
    RemoveProjectMemberRequest$outboundSchema.parse(removeProjectMemberRequest),
  );
}

export function removeProjectMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveProjectMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveProjectMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveProjectMemberRequest' from JSON`,
  );
}

/** @internal */
export const RemoveProjectMemberResponseBody$inboundSchema: z.ZodType<
  RemoveProjectMemberResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type RemoveProjectMemberResponseBody$Outbound = {
  id: string;
};

/** @internal */
export const RemoveProjectMemberResponseBody$outboundSchema: z.ZodType<
  RemoveProjectMemberResponseBody$Outbound,
  z.ZodTypeDef,
  RemoveProjectMemberResponseBody
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveProjectMemberResponseBody$ {
  /** @deprecated use `RemoveProjectMemberResponseBody$inboundSchema` instead. */
  export const inboundSchema = RemoveProjectMemberResponseBody$inboundSchema;
  /** @deprecated use `RemoveProjectMemberResponseBody$outboundSchema` instead. */
  export const outboundSchema = RemoveProjectMemberResponseBody$outboundSchema;
  /** @deprecated use `RemoveProjectMemberResponseBody$Outbound` instead. */
  export type Outbound = RemoveProjectMemberResponseBody$Outbound;
}

export function removeProjectMemberResponseBodyToJSON(
  removeProjectMemberResponseBody: RemoveProjectMemberResponseBody,
): string {
  return JSON.stringify(
    RemoveProjectMemberResponseBody$outboundSchema.parse(
      removeProjectMemberResponseBody,
    ),
  );
}

export function removeProjectMemberResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RemoveProjectMemberResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveProjectMemberResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveProjectMemberResponseBody' from JSON`,
  );
}
