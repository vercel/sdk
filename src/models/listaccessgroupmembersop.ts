/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ListAccessGroupMembersRequest = {
  /**
   * The ID or name of the Access Group.
   */
  idOrName: string;
  /**
   * Limit how many access group members should be returned.
   */
  limit?: number | undefined;
  /**
   * Continuation cursor to retrieve the next page of results.
   */
  next?: string | undefined;
  /**
   * Search project members by their name, username, and email.
   */
  search?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const TeamRole = {
  Owner: "OWNER",
  Member: "MEMBER",
  Developer: "DEVELOPER",
  Security: "SECURITY",
  Billing: "BILLING",
  Viewer: "VIEWER",
  Contributor: "CONTRIBUTOR",
} as const;
export type TeamRole = ClosedEnum<typeof TeamRole>;

export type Members = {
  avatar?: string | undefined;
  email: string;
  uid: string;
  username: string;
  name?: string | undefined;
  createdAt?: string | undefined;
  teamRole: TeamRole;
};

export type ListAccessGroupMembersPagination = {
  count: number;
  next: string | null;
};

export type ListAccessGroupMembersResponseBody = {
  members: Array<Members>;
  pagination: ListAccessGroupMembersPagination;
};

/** @internal */
export const ListAccessGroupMembersRequest$inboundSchema: z.ZodType<
  ListAccessGroupMembersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  limit: z.number().int().optional(),
  next: z.string().optional(),
  search: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type ListAccessGroupMembersRequest$Outbound = {
  idOrName: string;
  limit?: number | undefined;
  next?: string | undefined;
  search?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const ListAccessGroupMembersRequest$outboundSchema: z.ZodType<
  ListAccessGroupMembersRequest$Outbound,
  z.ZodTypeDef,
  ListAccessGroupMembersRequest
> = z.object({
  idOrName: z.string(),
  limit: z.number().int().optional(),
  next: z.string().optional(),
  search: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupMembersRequest$ {
  /** @deprecated use `ListAccessGroupMembersRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupMembersRequest$inboundSchema;
  /** @deprecated use `ListAccessGroupMembersRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupMembersRequest$outboundSchema;
  /** @deprecated use `ListAccessGroupMembersRequest$Outbound` instead. */
  export type Outbound = ListAccessGroupMembersRequest$Outbound;
}

export function listAccessGroupMembersRequestToJSON(
  listAccessGroupMembersRequest: ListAccessGroupMembersRequest,
): string {
  return JSON.stringify(
    ListAccessGroupMembersRequest$outboundSchema.parse(
      listAccessGroupMembersRequest,
    ),
  );
}

export function listAccessGroupMembersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccessGroupMembersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccessGroupMembersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccessGroupMembersRequest' from JSON`,
  );
}

/** @internal */
export const TeamRole$inboundSchema: z.ZodNativeEnum<typeof TeamRole> = z
  .nativeEnum(TeamRole);

/** @internal */
export const TeamRole$outboundSchema: z.ZodNativeEnum<typeof TeamRole> =
  TeamRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamRole$ {
  /** @deprecated use `TeamRole$inboundSchema` instead. */
  export const inboundSchema = TeamRole$inboundSchema;
  /** @deprecated use `TeamRole$outboundSchema` instead. */
  export const outboundSchema = TeamRole$outboundSchema;
}

/** @internal */
export const Members$inboundSchema: z.ZodType<Members, z.ZodTypeDef, unknown> =
  z.object({
    avatar: z.string().optional(),
    email: z.string(),
    uid: z.string(),
    username: z.string(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    teamRole: TeamRole$inboundSchema,
  });

/** @internal */
export type Members$Outbound = {
  avatar?: string | undefined;
  email: string;
  uid: string;
  username: string;
  name?: string | undefined;
  createdAt?: string | undefined;
  teamRole: string;
};

/** @internal */
export const Members$outboundSchema: z.ZodType<
  Members$Outbound,
  z.ZodTypeDef,
  Members
> = z.object({
  avatar: z.string().optional(),
  email: z.string(),
  uid: z.string(),
  username: z.string(),
  name: z.string().optional(),
  createdAt: z.string().optional(),
  teamRole: TeamRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Members$ {
  /** @deprecated use `Members$inboundSchema` instead. */
  export const inboundSchema = Members$inboundSchema;
  /** @deprecated use `Members$outboundSchema` instead. */
  export const outboundSchema = Members$outboundSchema;
  /** @deprecated use `Members$Outbound` instead. */
  export type Outbound = Members$Outbound;
}

export function membersToJSON(members: Members): string {
  return JSON.stringify(Members$outboundSchema.parse(members));
}

export function membersFromJSON(
  jsonString: string,
): SafeParseResult<Members, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Members$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Members' from JSON`,
  );
}

/** @internal */
export const ListAccessGroupMembersPagination$inboundSchema: z.ZodType<
  ListAccessGroupMembersPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
});

/** @internal */
export type ListAccessGroupMembersPagination$Outbound = {
  count: number;
  next: string | null;
};

/** @internal */
export const ListAccessGroupMembersPagination$outboundSchema: z.ZodType<
  ListAccessGroupMembersPagination$Outbound,
  z.ZodTypeDef,
  ListAccessGroupMembersPagination
> = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupMembersPagination$ {
  /** @deprecated use `ListAccessGroupMembersPagination$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupMembersPagination$inboundSchema;
  /** @deprecated use `ListAccessGroupMembersPagination$outboundSchema` instead. */
  export const outboundSchema = ListAccessGroupMembersPagination$outboundSchema;
  /** @deprecated use `ListAccessGroupMembersPagination$Outbound` instead. */
  export type Outbound = ListAccessGroupMembersPagination$Outbound;
}

export function listAccessGroupMembersPaginationToJSON(
  listAccessGroupMembersPagination: ListAccessGroupMembersPagination,
): string {
  return JSON.stringify(
    ListAccessGroupMembersPagination$outboundSchema.parse(
      listAccessGroupMembersPagination,
    ),
  );
}

export function listAccessGroupMembersPaginationFromJSON(
  jsonString: string,
): SafeParseResult<ListAccessGroupMembersPagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccessGroupMembersPagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccessGroupMembersPagination' from JSON`,
  );
}

/** @internal */
export const ListAccessGroupMembersResponseBody$inboundSchema: z.ZodType<
  ListAccessGroupMembersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  members: z.array(z.lazy(() => Members$inboundSchema)),
  pagination: z.lazy(() => ListAccessGroupMembersPagination$inboundSchema),
});

/** @internal */
export type ListAccessGroupMembersResponseBody$Outbound = {
  members: Array<Members$Outbound>;
  pagination: ListAccessGroupMembersPagination$Outbound;
};

/** @internal */
export const ListAccessGroupMembersResponseBody$outboundSchema: z.ZodType<
  ListAccessGroupMembersResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccessGroupMembersResponseBody
> = z.object({
  members: z.array(z.lazy(() => Members$outboundSchema)),
  pagination: z.lazy(() => ListAccessGroupMembersPagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccessGroupMembersResponseBody$ {
  /** @deprecated use `ListAccessGroupMembersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAccessGroupMembersResponseBody$inboundSchema;
  /** @deprecated use `ListAccessGroupMembersResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccessGroupMembersResponseBody$outboundSchema;
  /** @deprecated use `ListAccessGroupMembersResponseBody$Outbound` instead. */
  export type Outbound = ListAccessGroupMembersResponseBody$Outbound;
}

export function listAccessGroupMembersResponseBodyToJSON(
  listAccessGroupMembersResponseBody: ListAccessGroupMembersResponseBody,
): string {
  return JSON.stringify(
    ListAccessGroupMembersResponseBody$outboundSchema.parse(
      listAccessGroupMembersResponseBody,
    ),
  );
}

export function listAccessGroupMembersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListAccessGroupMembersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccessGroupMembersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccessGroupMembersResponseBody' from JSON`,
  );
}
