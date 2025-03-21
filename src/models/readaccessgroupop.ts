/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ReadAccessGroupRequest = {
  idOrName: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const ReadAccessGroupEntitlements = {
  V0: "v0",
} as const;
export type ReadAccessGroupEntitlements = ClosedEnum<
  typeof ReadAccessGroupEntitlements
>;

export type ReadAccessGroupResponseBody = {
  entitlements?: Array<ReadAccessGroupEntitlements> | undefined;
  isDsyncManaged: boolean;
  /**
   * The name of this access group.
   */
  name: string;
  /**
   * Timestamp in milliseconds when the access group was created.
   */
  createdAt: string;
  /**
   * ID of the team that this access group belongs to.
   */
  teamId: string;
  /**
   * Timestamp in milliseconds when the access group was last updated.
   */
  updatedAt: string;
  /**
   * ID of the access group.
   */
  accessGroupId: string;
  /**
   * Number of members in the access group.
   */
  membersCount: number;
  /**
   * Number of projects in the access group.
   */
  projectsCount: number;
  /**
   * Roles that the team has in the access group.
   */
  teamRoles?: Array<string> | undefined;
  /**
   * Permissions that the team has in the access group.
   */
  teamPermissions?: Array<string> | undefined;
};

/** @internal */
export const ReadAccessGroupRequest$inboundSchema: z.ZodType<
  ReadAccessGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type ReadAccessGroupRequest$Outbound = {
  idOrName: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const ReadAccessGroupRequest$outboundSchema: z.ZodType<
  ReadAccessGroupRequest$Outbound,
  z.ZodTypeDef,
  ReadAccessGroupRequest
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadAccessGroupRequest$ {
  /** @deprecated use `ReadAccessGroupRequest$inboundSchema` instead. */
  export const inboundSchema = ReadAccessGroupRequest$inboundSchema;
  /** @deprecated use `ReadAccessGroupRequest$outboundSchema` instead. */
  export const outboundSchema = ReadAccessGroupRequest$outboundSchema;
  /** @deprecated use `ReadAccessGroupRequest$Outbound` instead. */
  export type Outbound = ReadAccessGroupRequest$Outbound;
}

export function readAccessGroupRequestToJSON(
  readAccessGroupRequest: ReadAccessGroupRequest,
): string {
  return JSON.stringify(
    ReadAccessGroupRequest$outboundSchema.parse(readAccessGroupRequest),
  );
}

export function readAccessGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<ReadAccessGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadAccessGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadAccessGroupRequest' from JSON`,
  );
}

/** @internal */
export const ReadAccessGroupEntitlements$inboundSchema: z.ZodNativeEnum<
  typeof ReadAccessGroupEntitlements
> = z.nativeEnum(ReadAccessGroupEntitlements);

/** @internal */
export const ReadAccessGroupEntitlements$outboundSchema: z.ZodNativeEnum<
  typeof ReadAccessGroupEntitlements
> = ReadAccessGroupEntitlements$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadAccessGroupEntitlements$ {
  /** @deprecated use `ReadAccessGroupEntitlements$inboundSchema` instead. */
  export const inboundSchema = ReadAccessGroupEntitlements$inboundSchema;
  /** @deprecated use `ReadAccessGroupEntitlements$outboundSchema` instead. */
  export const outboundSchema = ReadAccessGroupEntitlements$outboundSchema;
}

/** @internal */
export const ReadAccessGroupResponseBody$inboundSchema: z.ZodType<
  ReadAccessGroupResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  entitlements: z.array(ReadAccessGroupEntitlements$inboundSchema).optional(),
  isDsyncManaged: z.boolean(),
  name: z.string(),
  createdAt: z.string(),
  teamId: z.string(),
  updatedAt: z.string(),
  accessGroupId: z.string(),
  membersCount: z.number(),
  projectsCount: z.number(),
  teamRoles: z.array(z.string()).optional(),
  teamPermissions: z.array(z.string()).optional(),
});

/** @internal */
export type ReadAccessGroupResponseBody$Outbound = {
  entitlements?: Array<string> | undefined;
  isDsyncManaged: boolean;
  name: string;
  createdAt: string;
  teamId: string;
  updatedAt: string;
  accessGroupId: string;
  membersCount: number;
  projectsCount: number;
  teamRoles?: Array<string> | undefined;
  teamPermissions?: Array<string> | undefined;
};

/** @internal */
export const ReadAccessGroupResponseBody$outboundSchema: z.ZodType<
  ReadAccessGroupResponseBody$Outbound,
  z.ZodTypeDef,
  ReadAccessGroupResponseBody
> = z.object({
  entitlements: z.array(ReadAccessGroupEntitlements$outboundSchema).optional(),
  isDsyncManaged: z.boolean(),
  name: z.string(),
  createdAt: z.string(),
  teamId: z.string(),
  updatedAt: z.string(),
  accessGroupId: z.string(),
  membersCount: z.number(),
  projectsCount: z.number(),
  teamRoles: z.array(z.string()).optional(),
  teamPermissions: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadAccessGroupResponseBody$ {
  /** @deprecated use `ReadAccessGroupResponseBody$inboundSchema` instead. */
  export const inboundSchema = ReadAccessGroupResponseBody$inboundSchema;
  /** @deprecated use `ReadAccessGroupResponseBody$outboundSchema` instead. */
  export const outboundSchema = ReadAccessGroupResponseBody$outboundSchema;
  /** @deprecated use `ReadAccessGroupResponseBody$Outbound` instead. */
  export type Outbound = ReadAccessGroupResponseBody$Outbound;
}

export function readAccessGroupResponseBodyToJSON(
  readAccessGroupResponseBody: ReadAccessGroupResponseBody,
): string {
  return JSON.stringify(
    ReadAccessGroupResponseBody$outboundSchema.parse(
      readAccessGroupResponseBody,
    ),
  );
}

export function readAccessGroupResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ReadAccessGroupResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadAccessGroupResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadAccessGroupResponseBody' from JSON`,
  );
}
