/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteAliasRequest = {
  /**
   * The ID or alias that will be removed
   */
  aliasId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const DeleteAliasStatus = {
  Success: "SUCCESS",
} as const;
export type DeleteAliasStatus = ClosedEnum<typeof DeleteAliasStatus>;

/**
 * The alias was successfully removed
 */
export type DeleteAliasResponseBody = {
  status: DeleteAliasStatus;
};

/** @internal */
export const DeleteAliasRequest$inboundSchema: z.ZodType<
  DeleteAliasRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  aliasId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type DeleteAliasRequest$Outbound = {
  aliasId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const DeleteAliasRequest$outboundSchema: z.ZodType<
  DeleteAliasRequest$Outbound,
  z.ZodTypeDef,
  DeleteAliasRequest
> = z.object({
  aliasId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAliasRequest$ {
  /** @deprecated use `DeleteAliasRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAliasRequest$inboundSchema;
  /** @deprecated use `DeleteAliasRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAliasRequest$outboundSchema;
  /** @deprecated use `DeleteAliasRequest$Outbound` instead. */
  export type Outbound = DeleteAliasRequest$Outbound;
}

export function deleteAliasRequestToJSON(
  deleteAliasRequest: DeleteAliasRequest,
): string {
  return JSON.stringify(
    DeleteAliasRequest$outboundSchema.parse(deleteAliasRequest),
  );
}

export function deleteAliasRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAliasRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteAliasRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAliasRequest' from JSON`,
  );
}

/** @internal */
export const DeleteAliasStatus$inboundSchema: z.ZodNativeEnum<
  typeof DeleteAliasStatus
> = z.nativeEnum(DeleteAliasStatus);

/** @internal */
export const DeleteAliasStatus$outboundSchema: z.ZodNativeEnum<
  typeof DeleteAliasStatus
> = DeleteAliasStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAliasStatus$ {
  /** @deprecated use `DeleteAliasStatus$inboundSchema` instead. */
  export const inboundSchema = DeleteAliasStatus$inboundSchema;
  /** @deprecated use `DeleteAliasStatus$outboundSchema` instead. */
  export const outboundSchema = DeleteAliasStatus$outboundSchema;
}

/** @internal */
export const DeleteAliasResponseBody$inboundSchema: z.ZodType<
  DeleteAliasResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: DeleteAliasStatus$inboundSchema,
});

/** @internal */
export type DeleteAliasResponseBody$Outbound = {
  status: string;
};

/** @internal */
export const DeleteAliasResponseBody$outboundSchema: z.ZodType<
  DeleteAliasResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteAliasResponseBody
> = z.object({
  status: DeleteAliasStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAliasResponseBody$ {
  /** @deprecated use `DeleteAliasResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteAliasResponseBody$inboundSchema;
  /** @deprecated use `DeleteAliasResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteAliasResponseBody$outboundSchema;
  /** @deprecated use `DeleteAliasResponseBody$Outbound` instead. */
  export type Outbound = DeleteAliasResponseBody$Outbound;
}

export function deleteAliasResponseBodyToJSON(
  deleteAliasResponseBody: DeleteAliasResponseBody,
): string {
  return JSON.stringify(
    DeleteAliasResponseBody$outboundSchema.parse(deleteAliasResponseBody),
  );
}

export function deleteAliasResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAliasResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteAliasResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAliasResponseBody' from JSON`,
  );
}