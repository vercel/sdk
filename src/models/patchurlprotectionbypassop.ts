/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export const RequestBodyScope = {
  AliasProtectionOverride: "alias-protection-override",
} as const;
export type RequestBodyScope = ClosedEnum<typeof RequestBodyScope>;

export const PatchUrlProtectionBypassRequestBodyAction = {
  Create: "create",
  Revoke: "revoke",
} as const;
export type PatchUrlProtectionBypassRequestBodyAction = ClosedEnum<
  typeof PatchUrlProtectionBypassRequestBodyAction
>;

export type Override = {
  scope: RequestBodyScope;
  action: PatchUrlProtectionBypassRequestBodyAction;
};

export type PatchUrlProtectionBypassRequestBody3 = {
  override: Override;
};

/**
 * Invitation status for the user scoped bypass.
 */
export const ScopeAccess = {
  Denied: "denied",
  Granted: "granted",
} as const;
/**
 * Invitation status for the user scoped bypass.
 */
export type ScopeAccess = ClosedEnum<typeof ScopeAccess>;

export type Scope2 = {
  /**
   * Specified user id for the scoped bypass.
   */
  userId?: string | undefined;
  /**
   * Specified email for the scoped bypass.
   */
  email: string;
  /**
   * Invitation status for the user scoped bypass.
   */
  access: ScopeAccess;
};

/**
 * Invitation status for the user scoped bypass.
 */
export const Access = {
  Denied: "denied",
  Granted: "granted",
} as const;
/**
 * Invitation status for the user scoped bypass.
 */
export type Access = ClosedEnum<typeof Access>;

export type Scope1 = {
  /**
   * Specified user id for the scoped bypass.
   */
  userId: string;
  /**
   * Specified email for the scoped bypass.
   */
  email?: string | undefined;
  /**
   * Invitation status for the user scoped bypass.
   */
  access: Access;
};

/**
 * Instructions for creating a user scoped protection bypass
 */
export type Scope = Scope1 | Scope2;

export type PatchUrlProtectionBypassRequestBody2 = {
  /**
   * Instructions for creating a user scoped protection bypass
   */
  scope: Scope1 | Scope2;
};

/**
 * Optional instructions for revoking and regenerating a shareable link
 */
export type RequestBodyRevoke = {
  /**
   * Sharebale link to revoked
   */
  secret: string;
  /**
   * Whether or not a new shareable link should be created after the provided secret is revoked
   */
  regenerate: boolean;
};

export type PatchUrlProtectionBypassRequestBody1 = {
  /**
   * Optional instructions for revoking and regenerating a shareable link
   */
  revoke?: RequestBodyRevoke | undefined;
};

export type PatchUrlProtectionBypassRequestBody =
  | PatchUrlProtectionBypassRequestBody2
  | PatchUrlProtectionBypassRequestBody3
  | PatchUrlProtectionBypassRequestBody1;

export type PatchUrlProtectionBypassRequest = {
  /**
   * The alias or deployment ID
   */
  id: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?:
    | PatchUrlProtectionBypassRequestBody2
    | PatchUrlProtectionBypassRequestBody3
    | PatchUrlProtectionBypassRequestBody1
    | undefined;
};

/** @internal */
export const RequestBodyScope$inboundSchema: z.ZodNativeEnum<
  typeof RequestBodyScope
> = z.nativeEnum(RequestBodyScope);

/** @internal */
export const RequestBodyScope$outboundSchema: z.ZodNativeEnum<
  typeof RequestBodyScope
> = RequestBodyScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestBodyScope$ {
  /** @deprecated use `RequestBodyScope$inboundSchema` instead. */
  export const inboundSchema = RequestBodyScope$inboundSchema;
  /** @deprecated use `RequestBodyScope$outboundSchema` instead. */
  export const outboundSchema = RequestBodyScope$outboundSchema;
}

/** @internal */
export const PatchUrlProtectionBypassRequestBodyAction$inboundSchema:
  z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyAction> = z
    .nativeEnum(PatchUrlProtectionBypassRequestBodyAction);

/** @internal */
export const PatchUrlProtectionBypassRequestBodyAction$outboundSchema:
  z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyAction> =
    PatchUrlProtectionBypassRequestBodyAction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUrlProtectionBypassRequestBodyAction$ {
  /** @deprecated use `PatchUrlProtectionBypassRequestBodyAction$inboundSchema` instead. */
  export const inboundSchema =
    PatchUrlProtectionBypassRequestBodyAction$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBodyAction$outboundSchema` instead. */
  export const outboundSchema =
    PatchUrlProtectionBypassRequestBodyAction$outboundSchema;
}

/** @internal */
export const Override$inboundSchema: z.ZodType<
  Override,
  z.ZodTypeDef,
  unknown
> = z.object({
  scope: RequestBodyScope$inboundSchema,
  action: PatchUrlProtectionBypassRequestBodyAction$inboundSchema,
});

/** @internal */
export type Override$Outbound = {
  scope: string;
  action: string;
};

/** @internal */
export const Override$outboundSchema: z.ZodType<
  Override$Outbound,
  z.ZodTypeDef,
  Override
> = z.object({
  scope: RequestBodyScope$outboundSchema,
  action: PatchUrlProtectionBypassRequestBodyAction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Override$ {
  /** @deprecated use `Override$inboundSchema` instead. */
  export const inboundSchema = Override$inboundSchema;
  /** @deprecated use `Override$outboundSchema` instead. */
  export const outboundSchema = Override$outboundSchema;
  /** @deprecated use `Override$Outbound` instead. */
  export type Outbound = Override$Outbound;
}

export function overrideToJSON(override: Override): string {
  return JSON.stringify(Override$outboundSchema.parse(override));
}

export function overrideFromJSON(
  jsonString: string,
): SafeParseResult<Override, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Override$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Override' from JSON`,
  );
}

/** @internal */
export const PatchUrlProtectionBypassRequestBody3$inboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody3,
  z.ZodTypeDef,
  unknown
> = z.object({
  override: z.lazy(() => Override$inboundSchema),
});

/** @internal */
export type PatchUrlProtectionBypassRequestBody3$Outbound = {
  override: Override$Outbound;
};

/** @internal */
export const PatchUrlProtectionBypassRequestBody3$outboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody3$Outbound,
  z.ZodTypeDef,
  PatchUrlProtectionBypassRequestBody3
> = z.object({
  override: z.lazy(() => Override$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUrlProtectionBypassRequestBody3$ {
  /** @deprecated use `PatchUrlProtectionBypassRequestBody3$inboundSchema` instead. */
  export const inboundSchema =
    PatchUrlProtectionBypassRequestBody3$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody3$outboundSchema` instead. */
  export const outboundSchema =
    PatchUrlProtectionBypassRequestBody3$outboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody3$Outbound` instead. */
  export type Outbound = PatchUrlProtectionBypassRequestBody3$Outbound;
}

export function patchUrlProtectionBypassRequestBody3ToJSON(
  patchUrlProtectionBypassRequestBody3: PatchUrlProtectionBypassRequestBody3,
): string {
  return JSON.stringify(
    PatchUrlProtectionBypassRequestBody3$outboundSchema.parse(
      patchUrlProtectionBypassRequestBody3,
    ),
  );
}

export function patchUrlProtectionBypassRequestBody3FromJSON(
  jsonString: string,
): SafeParseResult<PatchUrlProtectionBypassRequestBody3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchUrlProtectionBypassRequestBody3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUrlProtectionBypassRequestBody3' from JSON`,
  );
}

/** @internal */
export const ScopeAccess$inboundSchema: z.ZodNativeEnum<typeof ScopeAccess> = z
  .nativeEnum(ScopeAccess);

/** @internal */
export const ScopeAccess$outboundSchema: z.ZodNativeEnum<typeof ScopeAccess> =
  ScopeAccess$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScopeAccess$ {
  /** @deprecated use `ScopeAccess$inboundSchema` instead. */
  export const inboundSchema = ScopeAccess$inboundSchema;
  /** @deprecated use `ScopeAccess$outboundSchema` instead. */
  export const outboundSchema = ScopeAccess$outboundSchema;
}

/** @internal */
export const Scope2$inboundSchema: z.ZodType<Scope2, z.ZodTypeDef, unknown> = z
  .object({
    userId: z.string().optional(),
    email: z.string(),
    access: ScopeAccess$inboundSchema,
  });

/** @internal */
export type Scope2$Outbound = {
  userId?: string | undefined;
  email: string;
  access: string;
};

/** @internal */
export const Scope2$outboundSchema: z.ZodType<
  Scope2$Outbound,
  z.ZodTypeDef,
  Scope2
> = z.object({
  userId: z.string().optional(),
  email: z.string(),
  access: ScopeAccess$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope2$ {
  /** @deprecated use `Scope2$inboundSchema` instead. */
  export const inboundSchema = Scope2$inboundSchema;
  /** @deprecated use `Scope2$outboundSchema` instead. */
  export const outboundSchema = Scope2$outboundSchema;
  /** @deprecated use `Scope2$Outbound` instead. */
  export type Outbound = Scope2$Outbound;
}

export function scope2ToJSON(scope2: Scope2): string {
  return JSON.stringify(Scope2$outboundSchema.parse(scope2));
}

export function scope2FromJSON(
  jsonString: string,
): SafeParseResult<Scope2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scope2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scope2' from JSON`,
  );
}

/** @internal */
export const Access$inboundSchema: z.ZodNativeEnum<typeof Access> = z
  .nativeEnum(Access);

/** @internal */
export const Access$outboundSchema: z.ZodNativeEnum<typeof Access> =
  Access$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Access$ {
  /** @deprecated use `Access$inboundSchema` instead. */
  export const inboundSchema = Access$inboundSchema;
  /** @deprecated use `Access$outboundSchema` instead. */
  export const outboundSchema = Access$outboundSchema;
}

/** @internal */
export const Scope1$inboundSchema: z.ZodType<Scope1, z.ZodTypeDef, unknown> = z
  .object({
    userId: z.string(),
    email: z.string().optional(),
    access: Access$inboundSchema,
  });

/** @internal */
export type Scope1$Outbound = {
  userId: string;
  email?: string | undefined;
  access: string;
};

/** @internal */
export const Scope1$outboundSchema: z.ZodType<
  Scope1$Outbound,
  z.ZodTypeDef,
  Scope1
> = z.object({
  userId: z.string(),
  email: z.string().optional(),
  access: Access$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope1$ {
  /** @deprecated use `Scope1$inboundSchema` instead. */
  export const inboundSchema = Scope1$inboundSchema;
  /** @deprecated use `Scope1$outboundSchema` instead. */
  export const outboundSchema = Scope1$outboundSchema;
  /** @deprecated use `Scope1$Outbound` instead. */
  export type Outbound = Scope1$Outbound;
}

export function scope1ToJSON(scope1: Scope1): string {
  return JSON.stringify(Scope1$outboundSchema.parse(scope1));
}

export function scope1FromJSON(
  jsonString: string,
): SafeParseResult<Scope1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scope1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scope1' from JSON`,
  );
}

/** @internal */
export const Scope$inboundSchema: z.ZodType<Scope, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Scope1$inboundSchema),
    z.lazy(() => Scope2$inboundSchema),
  ]);

/** @internal */
export type Scope$Outbound = Scope1$Outbound | Scope2$Outbound;

/** @internal */
export const Scope$outboundSchema: z.ZodType<
  Scope$Outbound,
  z.ZodTypeDef,
  Scope
> = z.union([
  z.lazy(() => Scope1$outboundSchema),
  z.lazy(() => Scope2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope$ {
  /** @deprecated use `Scope$inboundSchema` instead. */
  export const inboundSchema = Scope$inboundSchema;
  /** @deprecated use `Scope$outboundSchema` instead. */
  export const outboundSchema = Scope$outboundSchema;
  /** @deprecated use `Scope$Outbound` instead. */
  export type Outbound = Scope$Outbound;
}

export function scopeToJSON(scope: Scope): string {
  return JSON.stringify(Scope$outboundSchema.parse(scope));
}

export function scopeFromJSON(
  jsonString: string,
): SafeParseResult<Scope, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Scope$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Scope' from JSON`,
  );
}

/** @internal */
export const PatchUrlProtectionBypassRequestBody2$inboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  scope: z.union([
    z.lazy(() => Scope1$inboundSchema),
    z.lazy(() => Scope2$inboundSchema),
  ]),
});

/** @internal */
export type PatchUrlProtectionBypassRequestBody2$Outbound = {
  scope: Scope1$Outbound | Scope2$Outbound;
};

/** @internal */
export const PatchUrlProtectionBypassRequestBody2$outboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody2$Outbound,
  z.ZodTypeDef,
  PatchUrlProtectionBypassRequestBody2
> = z.object({
  scope: z.union([
    z.lazy(() => Scope1$outboundSchema),
    z.lazy(() => Scope2$outboundSchema),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUrlProtectionBypassRequestBody2$ {
  /** @deprecated use `PatchUrlProtectionBypassRequestBody2$inboundSchema` instead. */
  export const inboundSchema =
    PatchUrlProtectionBypassRequestBody2$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody2$outboundSchema` instead. */
  export const outboundSchema =
    PatchUrlProtectionBypassRequestBody2$outboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody2$Outbound` instead. */
  export type Outbound = PatchUrlProtectionBypassRequestBody2$Outbound;
}

export function patchUrlProtectionBypassRequestBody2ToJSON(
  patchUrlProtectionBypassRequestBody2: PatchUrlProtectionBypassRequestBody2,
): string {
  return JSON.stringify(
    PatchUrlProtectionBypassRequestBody2$outboundSchema.parse(
      patchUrlProtectionBypassRequestBody2,
    ),
  );
}

export function patchUrlProtectionBypassRequestBody2FromJSON(
  jsonString: string,
): SafeParseResult<PatchUrlProtectionBypassRequestBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchUrlProtectionBypassRequestBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUrlProtectionBypassRequestBody2' from JSON`,
  );
}

/** @internal */
export const RequestBodyRevoke$inboundSchema: z.ZodType<
  RequestBodyRevoke,
  z.ZodTypeDef,
  unknown
> = z.object({
  secret: z.string(),
  regenerate: z.boolean(),
});

/** @internal */
export type RequestBodyRevoke$Outbound = {
  secret: string;
  regenerate: boolean;
};

/** @internal */
export const RequestBodyRevoke$outboundSchema: z.ZodType<
  RequestBodyRevoke$Outbound,
  z.ZodTypeDef,
  RequestBodyRevoke
> = z.object({
  secret: z.string(),
  regenerate: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestBodyRevoke$ {
  /** @deprecated use `RequestBodyRevoke$inboundSchema` instead. */
  export const inboundSchema = RequestBodyRevoke$inboundSchema;
  /** @deprecated use `RequestBodyRevoke$outboundSchema` instead. */
  export const outboundSchema = RequestBodyRevoke$outboundSchema;
  /** @deprecated use `RequestBodyRevoke$Outbound` instead. */
  export type Outbound = RequestBodyRevoke$Outbound;
}

export function requestBodyRevokeToJSON(
  requestBodyRevoke: RequestBodyRevoke,
): string {
  return JSON.stringify(
    RequestBodyRevoke$outboundSchema.parse(requestBodyRevoke),
  );
}

export function requestBodyRevokeFromJSON(
  jsonString: string,
): SafeParseResult<RequestBodyRevoke, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestBodyRevoke$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestBodyRevoke' from JSON`,
  );
}

/** @internal */
export const PatchUrlProtectionBypassRequestBody1$inboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  revoke: z.lazy(() => RequestBodyRevoke$inboundSchema).optional(),
});

/** @internal */
export type PatchUrlProtectionBypassRequestBody1$Outbound = {
  revoke?: RequestBodyRevoke$Outbound | undefined;
};

/** @internal */
export const PatchUrlProtectionBypassRequestBody1$outboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody1$Outbound,
  z.ZodTypeDef,
  PatchUrlProtectionBypassRequestBody1
> = z.object({
  revoke: z.lazy(() => RequestBodyRevoke$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUrlProtectionBypassRequestBody1$ {
  /** @deprecated use `PatchUrlProtectionBypassRequestBody1$inboundSchema` instead. */
  export const inboundSchema =
    PatchUrlProtectionBypassRequestBody1$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody1$outboundSchema` instead. */
  export const outboundSchema =
    PatchUrlProtectionBypassRequestBody1$outboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody1$Outbound` instead. */
  export type Outbound = PatchUrlProtectionBypassRequestBody1$Outbound;
}

export function patchUrlProtectionBypassRequestBody1ToJSON(
  patchUrlProtectionBypassRequestBody1: PatchUrlProtectionBypassRequestBody1,
): string {
  return JSON.stringify(
    PatchUrlProtectionBypassRequestBody1$outboundSchema.parse(
      patchUrlProtectionBypassRequestBody1,
    ),
  );
}

export function patchUrlProtectionBypassRequestBody1FromJSON(
  jsonString: string,
): SafeParseResult<PatchUrlProtectionBypassRequestBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchUrlProtectionBypassRequestBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUrlProtectionBypassRequestBody1' from JSON`,
  );
}

/** @internal */
export const PatchUrlProtectionBypassRequestBody$inboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => PatchUrlProtectionBypassRequestBody2$inboundSchema),
  z.lazy(() => PatchUrlProtectionBypassRequestBody3$inboundSchema),
  z.lazy(() => PatchUrlProtectionBypassRequestBody1$inboundSchema),
]);

/** @internal */
export type PatchUrlProtectionBypassRequestBody$Outbound =
  | PatchUrlProtectionBypassRequestBody2$Outbound
  | PatchUrlProtectionBypassRequestBody3$Outbound
  | PatchUrlProtectionBypassRequestBody1$Outbound;

/** @internal */
export const PatchUrlProtectionBypassRequestBody$outboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequestBody$Outbound,
  z.ZodTypeDef,
  PatchUrlProtectionBypassRequestBody
> = z.union([
  z.lazy(() => PatchUrlProtectionBypassRequestBody2$outboundSchema),
  z.lazy(() => PatchUrlProtectionBypassRequestBody3$outboundSchema),
  z.lazy(() => PatchUrlProtectionBypassRequestBody1$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUrlProtectionBypassRequestBody$ {
  /** @deprecated use `PatchUrlProtectionBypassRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchUrlProtectionBypassRequestBody$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchUrlProtectionBypassRequestBody$outboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequestBody$Outbound` instead. */
  export type Outbound = PatchUrlProtectionBypassRequestBody$Outbound;
}

export function patchUrlProtectionBypassRequestBodyToJSON(
  patchUrlProtectionBypassRequestBody: PatchUrlProtectionBypassRequestBody,
): string {
  return JSON.stringify(
    PatchUrlProtectionBypassRequestBody$outboundSchema.parse(
      patchUrlProtectionBypassRequestBody,
    ),
  );
}

export function patchUrlProtectionBypassRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PatchUrlProtectionBypassRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchUrlProtectionBypassRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUrlProtectionBypassRequestBody' from JSON`,
  );
}

/** @internal */
export const PatchUrlProtectionBypassRequest$inboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.union([
    z.lazy(() => PatchUrlProtectionBypassRequestBody2$inboundSchema),
    z.lazy(() => PatchUrlProtectionBypassRequestBody3$inboundSchema),
    z.lazy(() => PatchUrlProtectionBypassRequestBody1$inboundSchema),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PatchUrlProtectionBypassRequest$Outbound = {
  id: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?:
    | PatchUrlProtectionBypassRequestBody2$Outbound
    | PatchUrlProtectionBypassRequestBody3$Outbound
    | PatchUrlProtectionBypassRequestBody1$Outbound
    | undefined;
};

/** @internal */
export const PatchUrlProtectionBypassRequest$outboundSchema: z.ZodType<
  PatchUrlProtectionBypassRequest$Outbound,
  z.ZodTypeDef,
  PatchUrlProtectionBypassRequest
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.union([
    z.lazy(() => PatchUrlProtectionBypassRequestBody2$outboundSchema),
    z.lazy(() => PatchUrlProtectionBypassRequestBody3$outboundSchema),
    z.lazy(() => PatchUrlProtectionBypassRequestBody1$outboundSchema),
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
export namespace PatchUrlProtectionBypassRequest$ {
  /** @deprecated use `PatchUrlProtectionBypassRequest$inboundSchema` instead. */
  export const inboundSchema = PatchUrlProtectionBypassRequest$inboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequest$outboundSchema` instead. */
  export const outboundSchema = PatchUrlProtectionBypassRequest$outboundSchema;
  /** @deprecated use `PatchUrlProtectionBypassRequest$Outbound` instead. */
  export type Outbound = PatchUrlProtectionBypassRequest$Outbound;
}

export function patchUrlProtectionBypassRequestToJSON(
  patchUrlProtectionBypassRequest: PatchUrlProtectionBypassRequest,
): string {
  return JSON.stringify(
    PatchUrlProtectionBypassRequest$outboundSchema.parse(
      patchUrlProtectionBypassRequest,
    ),
  );
}

export function patchUrlProtectionBypassRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchUrlProtectionBypassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchUrlProtectionBypassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUrlProtectionBypassRequest' from JSON`,
  );
}
