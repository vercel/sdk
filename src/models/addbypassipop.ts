/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type AddBypassIpRequestBody2 = {
  domain?: string | undefined;
  /**
   * If the specified bypass will apply to all domains for a project.
   */
  projectScope: boolean;
  sourceIp?: string | undefined;
  allSources?: boolean | undefined;
  /**
   * Time to live in milliseconds
   */
  ttl?: number | undefined;
  note?: string | undefined;
};

export type AddBypassIpRequestBody1 = {
  domain: string;
  /**
   * If the specified bypass will apply to all domains for a project.
   */
  projectScope?: boolean | undefined;
  sourceIp?: string | undefined;
  allSources?: boolean | undefined;
  /**
   * Time to live in milliseconds
   */
  ttl?: number | undefined;
  note?: string | undefined;
};

export type AddBypassIpRequestBody =
  | AddBypassIpRequestBody1
  | AddBypassIpRequestBody2;

export type AddBypassIpRequest = {
  projectId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: AddBypassIpRequestBody1 | AddBypassIpRequestBody2 | undefined;
};

export const AddBypassIpResponseBodyAction = {
  Block: "block",
  Bypass: "bypass",
} as const;
export type AddBypassIpResponseBodyAction = ClosedEnum<
  typeof AddBypassIpResponseBodyAction
>;

export type AddBypassIpResponseBodySecurityResult = {
  ownerId: string;
  id: string;
  domain: string;
  ip: string;
  action?: AddBypassIpResponseBodyAction | undefined;
  projectId?: string | undefined;
  isProjectRule?: boolean | undefined;
  note?: string | undefined;
  createdAt: string;
  actorId?: string | undefined;
  updatedAt: string;
  updatedAtHour: string;
  deletedAt?: string | undefined;
  expiresAt?: number | null | undefined;
};

export type AddBypassIpResponseBody2 = {
  ok: boolean;
  result?: Array<AddBypassIpResponseBodySecurityResult> | undefined;
};

export type AddBypassIpResponseBodyResult = {
  ownerId: string;
  id: string;
  domain: string;
  ip?: string | undefined;
  projectId: string;
  note: string;
  isProjectRule: boolean;
};

export type AddBypassIpResponseBody1 = {
  ok: boolean;
  result: Array<AddBypassIpResponseBodyResult>;
  pagination?: any | null | undefined;
};

export type AddBypassIpResponseBody =
  | AddBypassIpResponseBody1
  | AddBypassIpResponseBody2;

/** @internal */
export const AddBypassIpRequestBody2$inboundSchema: z.ZodType<
  AddBypassIpRequestBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.string().optional(),
  projectScope: z.boolean(),
  sourceIp: z.string().optional(),
  allSources: z.boolean().optional(),
  ttl: z.number().optional(),
  note: z.string().optional(),
});

/** @internal */
export type AddBypassIpRequestBody2$Outbound = {
  domain?: string | undefined;
  projectScope: boolean;
  sourceIp?: string | undefined;
  allSources?: boolean | undefined;
  ttl?: number | undefined;
  note?: string | undefined;
};

/** @internal */
export const AddBypassIpRequestBody2$outboundSchema: z.ZodType<
  AddBypassIpRequestBody2$Outbound,
  z.ZodTypeDef,
  AddBypassIpRequestBody2
> = z.object({
  domain: z.string().optional(),
  projectScope: z.boolean(),
  sourceIp: z.string().optional(),
  allSources: z.boolean().optional(),
  ttl: z.number().optional(),
  note: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpRequestBody2$ {
  /** @deprecated use `AddBypassIpRequestBody2$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpRequestBody2$inboundSchema;
  /** @deprecated use `AddBypassIpRequestBody2$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpRequestBody2$outboundSchema;
  /** @deprecated use `AddBypassIpRequestBody2$Outbound` instead. */
  export type Outbound = AddBypassIpRequestBody2$Outbound;
}

export function addBypassIpRequestBody2ToJSON(
  addBypassIpRequestBody2: AddBypassIpRequestBody2,
): string {
  return JSON.stringify(
    AddBypassIpRequestBody2$outboundSchema.parse(addBypassIpRequestBody2),
  );
}

export function addBypassIpRequestBody2FromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpRequestBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpRequestBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpRequestBody2' from JSON`,
  );
}

/** @internal */
export const AddBypassIpRequestBody1$inboundSchema: z.ZodType<
  AddBypassIpRequestBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.string(),
  projectScope: z.boolean().optional(),
  sourceIp: z.string().optional(),
  allSources: z.boolean().optional(),
  ttl: z.number().optional(),
  note: z.string().optional(),
});

/** @internal */
export type AddBypassIpRequestBody1$Outbound = {
  domain: string;
  projectScope?: boolean | undefined;
  sourceIp?: string | undefined;
  allSources?: boolean | undefined;
  ttl?: number | undefined;
  note?: string | undefined;
};

/** @internal */
export const AddBypassIpRequestBody1$outboundSchema: z.ZodType<
  AddBypassIpRequestBody1$Outbound,
  z.ZodTypeDef,
  AddBypassIpRequestBody1
> = z.object({
  domain: z.string(),
  projectScope: z.boolean().optional(),
  sourceIp: z.string().optional(),
  allSources: z.boolean().optional(),
  ttl: z.number().optional(),
  note: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpRequestBody1$ {
  /** @deprecated use `AddBypassIpRequestBody1$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpRequestBody1$inboundSchema;
  /** @deprecated use `AddBypassIpRequestBody1$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpRequestBody1$outboundSchema;
  /** @deprecated use `AddBypassIpRequestBody1$Outbound` instead. */
  export type Outbound = AddBypassIpRequestBody1$Outbound;
}

export function addBypassIpRequestBody1ToJSON(
  addBypassIpRequestBody1: AddBypassIpRequestBody1,
): string {
  return JSON.stringify(
    AddBypassIpRequestBody1$outboundSchema.parse(addBypassIpRequestBody1),
  );
}

export function addBypassIpRequestBody1FromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpRequestBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpRequestBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpRequestBody1' from JSON`,
  );
}

/** @internal */
export const AddBypassIpRequestBody$inboundSchema: z.ZodType<
  AddBypassIpRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AddBypassIpRequestBody1$inboundSchema),
  z.lazy(() => AddBypassIpRequestBody2$inboundSchema),
]);

/** @internal */
export type AddBypassIpRequestBody$Outbound =
  | AddBypassIpRequestBody1$Outbound
  | AddBypassIpRequestBody2$Outbound;

/** @internal */
export const AddBypassIpRequestBody$outboundSchema: z.ZodType<
  AddBypassIpRequestBody$Outbound,
  z.ZodTypeDef,
  AddBypassIpRequestBody
> = z.union([
  z.lazy(() => AddBypassIpRequestBody1$outboundSchema),
  z.lazy(() => AddBypassIpRequestBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpRequestBody$ {
  /** @deprecated use `AddBypassIpRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpRequestBody$inboundSchema;
  /** @deprecated use `AddBypassIpRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpRequestBody$outboundSchema;
  /** @deprecated use `AddBypassIpRequestBody$Outbound` instead. */
  export type Outbound = AddBypassIpRequestBody$Outbound;
}

export function addBypassIpRequestBodyToJSON(
  addBypassIpRequestBody: AddBypassIpRequestBody,
): string {
  return JSON.stringify(
    AddBypassIpRequestBody$outboundSchema.parse(addBypassIpRequestBody),
  );
}

export function addBypassIpRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpRequestBody' from JSON`,
  );
}

/** @internal */
export const AddBypassIpRequest$inboundSchema: z.ZodType<
  AddBypassIpRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.union([
    z.lazy(() => AddBypassIpRequestBody1$inboundSchema),
    z.lazy(() => AddBypassIpRequestBody2$inboundSchema),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddBypassIpRequest$Outbound = {
  projectId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?:
    | AddBypassIpRequestBody1$Outbound
    | AddBypassIpRequestBody2$Outbound
    | undefined;
};

/** @internal */
export const AddBypassIpRequest$outboundSchema: z.ZodType<
  AddBypassIpRequest$Outbound,
  z.ZodTypeDef,
  AddBypassIpRequest
> = z.object({
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.union([
    z.lazy(() => AddBypassIpRequestBody1$outboundSchema),
    z.lazy(() => AddBypassIpRequestBody2$outboundSchema),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpRequest$ {
  /** @deprecated use `AddBypassIpRequest$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpRequest$inboundSchema;
  /** @deprecated use `AddBypassIpRequest$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpRequest$outboundSchema;
  /** @deprecated use `AddBypassIpRequest$Outbound` instead. */
  export type Outbound = AddBypassIpRequest$Outbound;
}

export function addBypassIpRequestToJSON(
  addBypassIpRequest: AddBypassIpRequest,
): string {
  return JSON.stringify(
    AddBypassIpRequest$outboundSchema.parse(addBypassIpRequest),
  );
}

export function addBypassIpRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpRequest' from JSON`,
  );
}

/** @internal */
export const AddBypassIpResponseBodyAction$inboundSchema: z.ZodNativeEnum<
  typeof AddBypassIpResponseBodyAction
> = z.nativeEnum(AddBypassIpResponseBodyAction);

/** @internal */
export const AddBypassIpResponseBodyAction$outboundSchema: z.ZodNativeEnum<
  typeof AddBypassIpResponseBodyAction
> = AddBypassIpResponseBodyAction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBodyAction$ {
  /** @deprecated use `AddBypassIpResponseBodyAction$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpResponseBodyAction$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBodyAction$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpResponseBodyAction$outboundSchema;
}

/** @internal */
export const AddBypassIpResponseBodySecurityResult$inboundSchema: z.ZodType<
  AddBypassIpResponseBodySecurityResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  OwnerId: z.string(),
  Id: z.string(),
  Domain: z.string(),
  Ip: z.string(),
  Action: AddBypassIpResponseBodyAction$inboundSchema.optional(),
  ProjectId: z.string().optional(),
  IsProjectRule: z.boolean().optional(),
  Note: z.string().optional(),
  CreatedAt: z.string(),
  ActorId: z.string().optional(),
  UpdatedAt: z.string(),
  UpdatedAtHour: z.string(),
  DeletedAt: z.string().optional(),
  ExpiresAt: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "OwnerId": "ownerId",
    "Id": "id",
    "Domain": "domain",
    "Ip": "ip",
    "Action": "action",
    "ProjectId": "projectId",
    "IsProjectRule": "isProjectRule",
    "Note": "note",
    "CreatedAt": "createdAt",
    "ActorId": "actorId",
    "UpdatedAt": "updatedAt",
    "UpdatedAtHour": "updatedAtHour",
    "DeletedAt": "deletedAt",
    "ExpiresAt": "expiresAt",
  });
});

/** @internal */
export type AddBypassIpResponseBodySecurityResult$Outbound = {
  OwnerId: string;
  Id: string;
  Domain: string;
  Ip: string;
  Action?: string | undefined;
  ProjectId?: string | undefined;
  IsProjectRule?: boolean | undefined;
  Note?: string | undefined;
  CreatedAt: string;
  ActorId?: string | undefined;
  UpdatedAt: string;
  UpdatedAtHour: string;
  DeletedAt?: string | undefined;
  ExpiresAt?: number | null | undefined;
};

/** @internal */
export const AddBypassIpResponseBodySecurityResult$outboundSchema: z.ZodType<
  AddBypassIpResponseBodySecurityResult$Outbound,
  z.ZodTypeDef,
  AddBypassIpResponseBodySecurityResult
> = z.object({
  ownerId: z.string(),
  id: z.string(),
  domain: z.string(),
  ip: z.string(),
  action: AddBypassIpResponseBodyAction$outboundSchema.optional(),
  projectId: z.string().optional(),
  isProjectRule: z.boolean().optional(),
  note: z.string().optional(),
  createdAt: z.string(),
  actorId: z.string().optional(),
  updatedAt: z.string(),
  updatedAtHour: z.string(),
  deletedAt: z.string().optional(),
  expiresAt: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "OwnerId",
    id: "Id",
    domain: "Domain",
    ip: "Ip",
    action: "Action",
    projectId: "ProjectId",
    isProjectRule: "IsProjectRule",
    note: "Note",
    createdAt: "CreatedAt",
    actorId: "ActorId",
    updatedAt: "UpdatedAt",
    updatedAtHour: "UpdatedAtHour",
    deletedAt: "DeletedAt",
    expiresAt: "ExpiresAt",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBodySecurityResult$ {
  /** @deprecated use `AddBypassIpResponseBodySecurityResult$inboundSchema` instead. */
  export const inboundSchema =
    AddBypassIpResponseBodySecurityResult$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBodySecurityResult$outboundSchema` instead. */
  export const outboundSchema =
    AddBypassIpResponseBodySecurityResult$outboundSchema;
  /** @deprecated use `AddBypassIpResponseBodySecurityResult$Outbound` instead. */
  export type Outbound = AddBypassIpResponseBodySecurityResult$Outbound;
}

export function addBypassIpResponseBodySecurityResultToJSON(
  addBypassIpResponseBodySecurityResult: AddBypassIpResponseBodySecurityResult,
): string {
  return JSON.stringify(
    AddBypassIpResponseBodySecurityResult$outboundSchema.parse(
      addBypassIpResponseBodySecurityResult,
    ),
  );
}

export function addBypassIpResponseBodySecurityResultFromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpResponseBodySecurityResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AddBypassIpResponseBodySecurityResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpResponseBodySecurityResult' from JSON`,
  );
}

/** @internal */
export const AddBypassIpResponseBody2$inboundSchema: z.ZodType<
  AddBypassIpResponseBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  ok: z.boolean(),
  result: z.array(
    z.lazy(() => AddBypassIpResponseBodySecurityResult$inboundSchema),
  ).optional(),
});

/** @internal */
export type AddBypassIpResponseBody2$Outbound = {
  ok: boolean;
  result?: Array<AddBypassIpResponseBodySecurityResult$Outbound> | undefined;
};

/** @internal */
export const AddBypassIpResponseBody2$outboundSchema: z.ZodType<
  AddBypassIpResponseBody2$Outbound,
  z.ZodTypeDef,
  AddBypassIpResponseBody2
> = z.object({
  ok: z.boolean(),
  result: z.array(
    z.lazy(() => AddBypassIpResponseBodySecurityResult$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBody2$ {
  /** @deprecated use `AddBypassIpResponseBody2$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpResponseBody2$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBody2$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpResponseBody2$outboundSchema;
  /** @deprecated use `AddBypassIpResponseBody2$Outbound` instead. */
  export type Outbound = AddBypassIpResponseBody2$Outbound;
}

export function addBypassIpResponseBody2ToJSON(
  addBypassIpResponseBody2: AddBypassIpResponseBody2,
): string {
  return JSON.stringify(
    AddBypassIpResponseBody2$outboundSchema.parse(addBypassIpResponseBody2),
  );
}

export function addBypassIpResponseBody2FromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpResponseBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpResponseBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpResponseBody2' from JSON`,
  );
}

/** @internal */
export const AddBypassIpResponseBodyResult$inboundSchema: z.ZodType<
  AddBypassIpResponseBodyResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  OwnerId: z.string(),
  Id: z.string(),
  Domain: z.string(),
  Ip: z.string().optional(),
  ProjectId: z.string(),
  Note: z.string(),
  IsProjectRule: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "OwnerId": "ownerId",
    "Id": "id",
    "Domain": "domain",
    "Ip": "ip",
    "ProjectId": "projectId",
    "Note": "note",
    "IsProjectRule": "isProjectRule",
  });
});

/** @internal */
export type AddBypassIpResponseBodyResult$Outbound = {
  OwnerId: string;
  Id: string;
  Domain: string;
  Ip?: string | undefined;
  ProjectId: string;
  Note: string;
  IsProjectRule: boolean;
};

/** @internal */
export const AddBypassIpResponseBodyResult$outboundSchema: z.ZodType<
  AddBypassIpResponseBodyResult$Outbound,
  z.ZodTypeDef,
  AddBypassIpResponseBodyResult
> = z.object({
  ownerId: z.string(),
  id: z.string(),
  domain: z.string(),
  ip: z.string().optional(),
  projectId: z.string(),
  note: z.string(),
  isProjectRule: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "OwnerId",
    id: "Id",
    domain: "Domain",
    ip: "Ip",
    projectId: "ProjectId",
    note: "Note",
    isProjectRule: "IsProjectRule",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBodyResult$ {
  /** @deprecated use `AddBypassIpResponseBodyResult$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpResponseBodyResult$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBodyResult$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpResponseBodyResult$outboundSchema;
  /** @deprecated use `AddBypassIpResponseBodyResult$Outbound` instead. */
  export type Outbound = AddBypassIpResponseBodyResult$Outbound;
}

export function addBypassIpResponseBodyResultToJSON(
  addBypassIpResponseBodyResult: AddBypassIpResponseBodyResult,
): string {
  return JSON.stringify(
    AddBypassIpResponseBodyResult$outboundSchema.parse(
      addBypassIpResponseBodyResult,
    ),
  );
}

export function addBypassIpResponseBodyResultFromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpResponseBodyResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpResponseBodyResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpResponseBodyResult' from JSON`,
  );
}

/** @internal */
export const AddBypassIpResponseBody1$inboundSchema: z.ZodType<
  AddBypassIpResponseBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  ok: z.boolean(),
  result: z.array(z.lazy(() => AddBypassIpResponseBodyResult$inboundSchema)),
  pagination: z.nullable(z.any()).optional(),
});

/** @internal */
export type AddBypassIpResponseBody1$Outbound = {
  ok: boolean;
  result: Array<AddBypassIpResponseBodyResult$Outbound>;
  pagination?: any | null | undefined;
};

/** @internal */
export const AddBypassIpResponseBody1$outboundSchema: z.ZodType<
  AddBypassIpResponseBody1$Outbound,
  z.ZodTypeDef,
  AddBypassIpResponseBody1
> = z.object({
  ok: z.boolean(),
  result: z.array(z.lazy(() => AddBypassIpResponseBodyResult$outboundSchema)),
  pagination: z.nullable(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBody1$ {
  /** @deprecated use `AddBypassIpResponseBody1$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpResponseBody1$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBody1$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpResponseBody1$outboundSchema;
  /** @deprecated use `AddBypassIpResponseBody1$Outbound` instead. */
  export type Outbound = AddBypassIpResponseBody1$Outbound;
}

export function addBypassIpResponseBody1ToJSON(
  addBypassIpResponseBody1: AddBypassIpResponseBody1,
): string {
  return JSON.stringify(
    AddBypassIpResponseBody1$outboundSchema.parse(addBypassIpResponseBody1),
  );
}

export function addBypassIpResponseBody1FromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpResponseBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpResponseBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpResponseBody1' from JSON`,
  );
}

/** @internal */
export const AddBypassIpResponseBody$inboundSchema: z.ZodType<
  AddBypassIpResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AddBypassIpResponseBody1$inboundSchema),
  z.lazy(() => AddBypassIpResponseBody2$inboundSchema),
]);

/** @internal */
export type AddBypassIpResponseBody$Outbound =
  | AddBypassIpResponseBody1$Outbound
  | AddBypassIpResponseBody2$Outbound;

/** @internal */
export const AddBypassIpResponseBody$outboundSchema: z.ZodType<
  AddBypassIpResponseBody$Outbound,
  z.ZodTypeDef,
  AddBypassIpResponseBody
> = z.union([
  z.lazy(() => AddBypassIpResponseBody1$outboundSchema),
  z.lazy(() => AddBypassIpResponseBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBypassIpResponseBody$ {
  /** @deprecated use `AddBypassIpResponseBody$inboundSchema` instead. */
  export const inboundSchema = AddBypassIpResponseBody$inboundSchema;
  /** @deprecated use `AddBypassIpResponseBody$outboundSchema` instead. */
  export const outboundSchema = AddBypassIpResponseBody$outboundSchema;
  /** @deprecated use `AddBypassIpResponseBody$Outbound` instead. */
  export type Outbound = AddBypassIpResponseBody$Outbound;
}

export function addBypassIpResponseBodyToJSON(
  addBypassIpResponseBody: AddBypassIpResponseBody,
): string {
  return JSON.stringify(
    AddBypassIpResponseBody$outboundSchema.parse(addBypassIpResponseBody),
  );
}

export function addBypassIpResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddBypassIpResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBypassIpResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBypassIpResponseBody' from JSON`,
  );
}
