/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteEdgeConfigTokensRequestBody = {
  tokens: Array<string>;
};

export type DeleteEdgeConfigTokensRequest = {
  edgeConfigId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody: DeleteEdgeConfigTokensRequestBody;
};

/** @internal */
export const DeleteEdgeConfigTokensRequestBody$inboundSchema: z.ZodType<
  DeleteEdgeConfigTokensRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  tokens: z.array(z.string()),
});

/** @internal */
export type DeleteEdgeConfigTokensRequestBody$Outbound = {
  tokens: Array<string>;
};

/** @internal */
export const DeleteEdgeConfigTokensRequestBody$outboundSchema: z.ZodType<
  DeleteEdgeConfigTokensRequestBody$Outbound,
  z.ZodTypeDef,
  DeleteEdgeConfigTokensRequestBody
> = z.object({
  tokens: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteEdgeConfigTokensRequestBody$ {
  /** @deprecated use `DeleteEdgeConfigTokensRequestBody$inboundSchema` instead. */
  export const inboundSchema = DeleteEdgeConfigTokensRequestBody$inboundSchema;
  /** @deprecated use `DeleteEdgeConfigTokensRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteEdgeConfigTokensRequestBody$outboundSchema;
  /** @deprecated use `DeleteEdgeConfigTokensRequestBody$Outbound` instead. */
  export type Outbound = DeleteEdgeConfigTokensRequestBody$Outbound;
}

export function deleteEdgeConfigTokensRequestBodyToJSON(
  deleteEdgeConfigTokensRequestBody: DeleteEdgeConfigTokensRequestBody,
): string {
  return JSON.stringify(
    DeleteEdgeConfigTokensRequestBody$outboundSchema.parse(
      deleteEdgeConfigTokensRequestBody,
    ),
  );
}

export function deleteEdgeConfigTokensRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEdgeConfigTokensRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteEdgeConfigTokensRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEdgeConfigTokensRequestBody' from JSON`,
  );
}

/** @internal */
export const DeleteEdgeConfigTokensRequest$inboundSchema: z.ZodType<
  DeleteEdgeConfigTokensRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  edgeConfigId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => DeleteEdgeConfigTokensRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type DeleteEdgeConfigTokensRequest$Outbound = {
  edgeConfigId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody: DeleteEdgeConfigTokensRequestBody$Outbound;
};

/** @internal */
export const DeleteEdgeConfigTokensRequest$outboundSchema: z.ZodType<
  DeleteEdgeConfigTokensRequest$Outbound,
  z.ZodTypeDef,
  DeleteEdgeConfigTokensRequest
> = z.object({
  edgeConfigId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => DeleteEdgeConfigTokensRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteEdgeConfigTokensRequest$ {
  /** @deprecated use `DeleteEdgeConfigTokensRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteEdgeConfigTokensRequest$inboundSchema;
  /** @deprecated use `DeleteEdgeConfigTokensRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteEdgeConfigTokensRequest$outboundSchema;
  /** @deprecated use `DeleteEdgeConfigTokensRequest$Outbound` instead. */
  export type Outbound = DeleteEdgeConfigTokensRequest$Outbound;
}

export function deleteEdgeConfigTokensRequestToJSON(
  deleteEdgeConfigTokensRequest: DeleteEdgeConfigTokensRequest,
): string {
  return JSON.stringify(
    DeleteEdgeConfigTokensRequest$outboundSchema.parse(
      deleteEdgeConfigTokensRequest,
    ),
  );
}

export function deleteEdgeConfigTokensRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEdgeConfigTokensRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteEdgeConfigTokensRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEdgeConfigTokensRequest' from JSON`,
  );
}
