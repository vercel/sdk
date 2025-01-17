/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export const PostV1ProjectsIdOrNameCustomEnvironmentsType = {
  Equals: "equals",
  StartsWith: "startsWith",
  EndsWith: "endsWith",
} as const;
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export type PostV1ProjectsIdOrNameCustomEnvironmentsType = ClosedEnum<
  typeof PostV1ProjectsIdOrNameCustomEnvironmentsType
>;

/**
 * How we want to determine a matching branch. This is optional.
 */
export type BranchMatcher = {
  /**
   * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
   */
  type: PostV1ProjectsIdOrNameCustomEnvironmentsType;
  /**
   * Git branch name or portion thereof.
   */
  pattern: string;
};

export type PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody = {
  /**
   * The slug of the custom environment to create.
   */
  slug?: string | undefined;
  /**
   * Description of the custom environment. This is optional.
   */
  description?: string | undefined;
  /**
   * How we want to determine a matching branch. This is optional.
   */
  branchMatcher?: BranchMatcher | undefined;
  /**
   * Where to copy environment variables from. This is optional.
   */
  copyEnvVarsFrom?: string | undefined;
};

export type PostV1ProjectsIdOrNameCustomEnvironmentsRequest = {
  /**
   * The unique project identifier or the project name
   */
  idOrName: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody | undefined;
};

export type PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody = {};

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsType$inboundSchema:
  z.ZodNativeEnum<typeof PostV1ProjectsIdOrNameCustomEnvironmentsType> = z
    .nativeEnum(PostV1ProjectsIdOrNameCustomEnvironmentsType);

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsType$outboundSchema:
  z.ZodNativeEnum<typeof PostV1ProjectsIdOrNameCustomEnvironmentsType> =
    PostV1ProjectsIdOrNameCustomEnvironmentsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ProjectsIdOrNameCustomEnvironmentsType$ {
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsType$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsType$inboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsType$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsType$outboundSchema;
}

/** @internal */
export const BranchMatcher$inboundSchema: z.ZodType<
  BranchMatcher,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: PostV1ProjectsIdOrNameCustomEnvironmentsType$inboundSchema,
  pattern: z.string(),
});

/** @internal */
export type BranchMatcher$Outbound = {
  type: string;
  pattern: string;
};

/** @internal */
export const BranchMatcher$outboundSchema: z.ZodType<
  BranchMatcher$Outbound,
  z.ZodTypeDef,
  BranchMatcher
> = z.object({
  type: PostV1ProjectsIdOrNameCustomEnvironmentsType$outboundSchema,
  pattern: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BranchMatcher$ {
  /** @deprecated use `BranchMatcher$inboundSchema` instead. */
  export const inboundSchema = BranchMatcher$inboundSchema;
  /** @deprecated use `BranchMatcher$outboundSchema` instead. */
  export const outboundSchema = BranchMatcher$outboundSchema;
  /** @deprecated use `BranchMatcher$Outbound` instead. */
  export type Outbound = BranchMatcher$Outbound;
}

export function branchMatcherToJSON(branchMatcher: BranchMatcher): string {
  return JSON.stringify(BranchMatcher$outboundSchema.parse(branchMatcher));
}

export function branchMatcherFromJSON(
  jsonString: string,
): SafeParseResult<BranchMatcher, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BranchMatcher$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BranchMatcher' from JSON`,
  );
}

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$inboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    slug: z.string().optional(),
    description: z.string().optional(),
    branchMatcher: z.lazy(() => BranchMatcher$inboundSchema).optional(),
    copyEnvVarsFrom: z.string().optional(),
  });

/** @internal */
export type PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$Outbound = {
  slug?: string | undefined;
  description?: string | undefined;
  branchMatcher?: BranchMatcher$Outbound | undefined;
  copyEnvVarsFrom?: string | undefined;
};

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$outboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody
  > = z.object({
    slug: z.string().optional(),
    description: z.string().optional(),
    branchMatcher: z.lazy(() => BranchMatcher$outboundSchema).optional(),
    copyEnvVarsFrom: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$ {
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$inboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$outboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$Outbound;
}

export function postV1ProjectsIdOrNameCustomEnvironmentsRequestBodyToJSON(
  postV1ProjectsIdOrNameCustomEnvironmentsRequestBody:
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody,
): string {
  return JSON.stringify(
    PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$outboundSchema.parse(
      postV1ProjectsIdOrNameCustomEnvironmentsRequestBody,
    ),
  );
}

export function postV1ProjectsIdOrNameCustomEnvironmentsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    idOrName: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
    RequestBody: z.lazy(() =>
      PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1ProjectsIdOrNameCustomEnvironmentsRequest$Outbound = {
  idOrName: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?:
    | PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$Outbound
    | undefined;
};

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest$Outbound,
    z.ZodTypeDef,
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest
  > = z.object({
    idOrName: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
    requestBody: z.lazy(() =>
      PostV1ProjectsIdOrNameCustomEnvironmentsRequestBody$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ProjectsIdOrNameCustomEnvironmentsRequest$ {
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsRequest$Outbound` instead. */
  export type Outbound =
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest$Outbound;
}

export function postV1ProjectsIdOrNameCustomEnvironmentsRequestToJSON(
  postV1ProjectsIdOrNameCustomEnvironmentsRequest:
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest,
): string {
  return JSON.stringify(
    PostV1ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema.parse(
      postV1ProjectsIdOrNameCustomEnvironmentsRequest,
    ),
  );
}

export function postV1ProjectsIdOrNameCustomEnvironmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1ProjectsIdOrNameCustomEnvironmentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1ProjectsIdOrNameCustomEnvironmentsRequest' from JSON`,
  );
}

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound = {};

/** @internal */
export const PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema:
  z.ZodType<
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound,
    z.ZodTypeDef,
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$ {
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema;
  /** @deprecated use `PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound` instead. */
  export type Outbound =
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound;
}

export function postV1ProjectsIdOrNameCustomEnvironmentsResponseBodyToJSON(
  postV1ProjectsIdOrNameCustomEnvironmentsResponseBody:
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody,
): string {
  return JSON.stringify(
    PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema.parse(
      postV1ProjectsIdOrNameCustomEnvironmentsResponseBody,
    ),
  );
}

export function postV1ProjectsIdOrNameCustomEnvironmentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1ProjectsIdOrNameCustomEnvironmentsResponseBody' from JSON`,
  );
}
