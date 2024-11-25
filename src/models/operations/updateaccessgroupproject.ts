/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The project role that will be added to this Access Group.
 */
export const UpdateAccessGroupProjectRole = {
  Admin: "ADMIN",
  ProjectViewer: "PROJECT_VIEWER",
  ProjectDeveloper: "PROJECT_DEVELOPER",
} as const;
/**
 * The project role that will be added to this Access Group.
 */
export type UpdateAccessGroupProjectRole = ClosedEnum<
  typeof UpdateAccessGroupProjectRole
>;

export type UpdateAccessGroupProjectRequestBody = {
  /**
   * The project role that will be added to this Access Group.
   */
  role: UpdateAccessGroupProjectRole;
};

export type UpdateAccessGroupProjectRequest = {
  accessGroupIdOrName: string;
  projectId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: UpdateAccessGroupProjectRequestBody | undefined;
};

export const UpdateAccessGroupProjectAccessGroupsRole = {
  Admin: "ADMIN",
  ProjectDeveloper: "PROJECT_DEVELOPER",
  ProjectViewer: "PROJECT_VIEWER",
} as const;
export type UpdateAccessGroupProjectAccessGroupsRole = ClosedEnum<
  typeof UpdateAccessGroupProjectAccessGroupsRole
>;

export type UpdateAccessGroupProjectResponseBody = {
  teamId: string;
  accessGroupId: string;
  projectId: string;
  role: UpdateAccessGroupProjectAccessGroupsRole;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const UpdateAccessGroupProjectRole$inboundSchema: z.ZodNativeEnum<
  typeof UpdateAccessGroupProjectRole
> = z.nativeEnum(UpdateAccessGroupProjectRole);

/** @internal */
export const UpdateAccessGroupProjectRole$outboundSchema: z.ZodNativeEnum<
  typeof UpdateAccessGroupProjectRole
> = UpdateAccessGroupProjectRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjectRole$ {
  /** @deprecated use `UpdateAccessGroupProjectRole$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupProjectRole$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectRole$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupProjectRole$outboundSchema;
}

/** @internal */
export const UpdateAccessGroupProjectRequestBody$inboundSchema: z.ZodType<
  UpdateAccessGroupProjectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: UpdateAccessGroupProjectRole$inboundSchema,
});

/** @internal */
export type UpdateAccessGroupProjectRequestBody$Outbound = {
  role: string;
};

/** @internal */
export const UpdateAccessGroupProjectRequestBody$outboundSchema: z.ZodType<
  UpdateAccessGroupProjectRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupProjectRequestBody
> = z.object({
  role: UpdateAccessGroupProjectRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjectRequestBody$ {
  /** @deprecated use `UpdateAccessGroupProjectRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateAccessGroupProjectRequestBody$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateAccessGroupProjectRequestBody$outboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectRequestBody$Outbound` instead. */
  export type Outbound = UpdateAccessGroupProjectRequestBody$Outbound;
}

export function updateAccessGroupProjectRequestBodyToJSON(
  updateAccessGroupProjectRequestBody: UpdateAccessGroupProjectRequestBody,
): string {
  return JSON.stringify(
    UpdateAccessGroupProjectRequestBody$outboundSchema.parse(
      updateAccessGroupProjectRequestBody,
    ),
  );
}

export function updateAccessGroupProjectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAccessGroupProjectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateAccessGroupProjectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAccessGroupProjectRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateAccessGroupProjectRequest$inboundSchema: z.ZodType<
  UpdateAccessGroupProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessGroupIdOrName: z.string(),
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => UpdateAccessGroupProjectRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateAccessGroupProjectRequest$Outbound = {
  accessGroupIdOrName: string;
  projectId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: UpdateAccessGroupProjectRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateAccessGroupProjectRequest$outboundSchema: z.ZodType<
  UpdateAccessGroupProjectRequest$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupProjectRequest
> = z.object({
  accessGroupIdOrName: z.string(),
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => UpdateAccessGroupProjectRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjectRequest$ {
  /** @deprecated use `UpdateAccessGroupProjectRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupProjectRequest$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupProjectRequest$outboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectRequest$Outbound` instead. */
  export type Outbound = UpdateAccessGroupProjectRequest$Outbound;
}

export function updateAccessGroupProjectRequestToJSON(
  updateAccessGroupProjectRequest: UpdateAccessGroupProjectRequest,
): string {
  return JSON.stringify(
    UpdateAccessGroupProjectRequest$outboundSchema.parse(
      updateAccessGroupProjectRequest,
    ),
  );
}

export function updateAccessGroupProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAccessGroupProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAccessGroupProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAccessGroupProjectRequest' from JSON`,
  );
}

/** @internal */
export const UpdateAccessGroupProjectAccessGroupsRole$inboundSchema:
  z.ZodNativeEnum<typeof UpdateAccessGroupProjectAccessGroupsRole> = z
    .nativeEnum(UpdateAccessGroupProjectAccessGroupsRole);

/** @internal */
export const UpdateAccessGroupProjectAccessGroupsRole$outboundSchema:
  z.ZodNativeEnum<typeof UpdateAccessGroupProjectAccessGroupsRole> =
    UpdateAccessGroupProjectAccessGroupsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjectAccessGroupsRole$ {
  /** @deprecated use `UpdateAccessGroupProjectAccessGroupsRole$inboundSchema` instead. */
  export const inboundSchema =
    UpdateAccessGroupProjectAccessGroupsRole$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectAccessGroupsRole$outboundSchema` instead. */
  export const outboundSchema =
    UpdateAccessGroupProjectAccessGroupsRole$outboundSchema;
}

/** @internal */
export const UpdateAccessGroupProjectResponseBody$inboundSchema: z.ZodType<
  UpdateAccessGroupProjectResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string(),
  accessGroupId: z.string(),
  projectId: z.string(),
  role: UpdateAccessGroupProjectAccessGroupsRole$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

/** @internal */
export type UpdateAccessGroupProjectResponseBody$Outbound = {
  teamId: string;
  accessGroupId: string;
  projectId: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const UpdateAccessGroupProjectResponseBody$outboundSchema: z.ZodType<
  UpdateAccessGroupProjectResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupProjectResponseBody
> = z.object({
  teamId: z.string(),
  accessGroupId: z.string(),
  projectId: z.string(),
  role: UpdateAccessGroupProjectAccessGroupsRole$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjectResponseBody$ {
  /** @deprecated use `UpdateAccessGroupProjectResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateAccessGroupProjectResponseBody$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateAccessGroupProjectResponseBody$outboundSchema;
  /** @deprecated use `UpdateAccessGroupProjectResponseBody$Outbound` instead. */
  export type Outbound = UpdateAccessGroupProjectResponseBody$Outbound;
}

export function updateAccessGroupProjectResponseBodyToJSON(
  updateAccessGroupProjectResponseBody: UpdateAccessGroupProjectResponseBody,
): string {
  return JSON.stringify(
    UpdateAccessGroupProjectResponseBody$outboundSchema.parse(
      updateAccessGroupProjectResponseBody,
    ),
  );
}

export function updateAccessGroupProjectResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAccessGroupProjectResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateAccessGroupProjectResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAccessGroupProjectResponseBody' from JSON`,
  );
}