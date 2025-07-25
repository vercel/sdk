/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * move-out
 */
export type PatchDomainRequestBody2 = {
  op?: string | undefined;
  /**
   * User or team to move domain to
   */
  destination?: string | undefined;
};

/**
 * update
 */
export type PatchDomainRequestBody1 = {
  op?: string | undefined;
  /**
   * Specifies whether domain should be renewed.
   */
  renew?: boolean | undefined;
  /**
   * The custom nameservers for this project.
   */
  customNameservers?: Array<string> | undefined;
  /**
   * Specifies whether this is a DNS zone that intends to use Vercel's nameservers.
   */
  zone?: boolean | undefined;
};

export type PatchDomainRequestBody =
  | PatchDomainRequestBody1
  | PatchDomainRequestBody2;

export type PatchDomainRequest = {
  domain: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody: PatchDomainRequestBody1 | PatchDomainRequestBody2;
};

export type PatchDomainResponseBody3 = {
  renew?: boolean | undefined;
  customNameservers?: Array<string> | undefined;
  zone?: boolean | undefined;
};

export type PatchDomainResponseBody2 = {
  moved: boolean;
  token: string;
};

export type PatchDomainResponseBody1 = {
  moved: boolean;
};

export type PatchDomainResponseBody =
  | PatchDomainResponseBody2
  | PatchDomainResponseBody1
  | PatchDomainResponseBody3;

/** @internal */
export const PatchDomainRequestBody2$inboundSchema: z.ZodType<
  PatchDomainRequestBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  op: z.string().optional(),
  destination: z.string().optional(),
});

/** @internal */
export type PatchDomainRequestBody2$Outbound = {
  op?: string | undefined;
  destination?: string | undefined;
};

/** @internal */
export const PatchDomainRequestBody2$outboundSchema: z.ZodType<
  PatchDomainRequestBody2$Outbound,
  z.ZodTypeDef,
  PatchDomainRequestBody2
> = z.object({
  op: z.string().optional(),
  destination: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainRequestBody2$ {
  /** @deprecated use `PatchDomainRequestBody2$inboundSchema` instead. */
  export const inboundSchema = PatchDomainRequestBody2$inboundSchema;
  /** @deprecated use `PatchDomainRequestBody2$outboundSchema` instead. */
  export const outboundSchema = PatchDomainRequestBody2$outboundSchema;
  /** @deprecated use `PatchDomainRequestBody2$Outbound` instead. */
  export type Outbound = PatchDomainRequestBody2$Outbound;
}

export function patchDomainRequestBody2ToJSON(
  patchDomainRequestBody2: PatchDomainRequestBody2,
): string {
  return JSON.stringify(
    PatchDomainRequestBody2$outboundSchema.parse(patchDomainRequestBody2),
  );
}

export function patchDomainRequestBody2FromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainRequestBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainRequestBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainRequestBody2' from JSON`,
  );
}

/** @internal */
export const PatchDomainRequestBody1$inboundSchema: z.ZodType<
  PatchDomainRequestBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  op: z.string().optional(),
  renew: z.boolean().optional(),
  customNameservers: z.array(z.string()).optional(),
  zone: z.boolean().optional(),
});

/** @internal */
export type PatchDomainRequestBody1$Outbound = {
  op?: string | undefined;
  renew?: boolean | undefined;
  customNameservers?: Array<string> | undefined;
  zone?: boolean | undefined;
};

/** @internal */
export const PatchDomainRequestBody1$outboundSchema: z.ZodType<
  PatchDomainRequestBody1$Outbound,
  z.ZodTypeDef,
  PatchDomainRequestBody1
> = z.object({
  op: z.string().optional(),
  renew: z.boolean().optional(),
  customNameservers: z.array(z.string()).optional(),
  zone: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainRequestBody1$ {
  /** @deprecated use `PatchDomainRequestBody1$inboundSchema` instead. */
  export const inboundSchema = PatchDomainRequestBody1$inboundSchema;
  /** @deprecated use `PatchDomainRequestBody1$outboundSchema` instead. */
  export const outboundSchema = PatchDomainRequestBody1$outboundSchema;
  /** @deprecated use `PatchDomainRequestBody1$Outbound` instead. */
  export type Outbound = PatchDomainRequestBody1$Outbound;
}

export function patchDomainRequestBody1ToJSON(
  patchDomainRequestBody1: PatchDomainRequestBody1,
): string {
  return JSON.stringify(
    PatchDomainRequestBody1$outboundSchema.parse(patchDomainRequestBody1),
  );
}

export function patchDomainRequestBody1FromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainRequestBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainRequestBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainRequestBody1' from JSON`,
  );
}

/** @internal */
export const PatchDomainRequestBody$inboundSchema: z.ZodType<
  PatchDomainRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => PatchDomainRequestBody1$inboundSchema),
  z.lazy(() => PatchDomainRequestBody2$inboundSchema),
]);

/** @internal */
export type PatchDomainRequestBody$Outbound =
  | PatchDomainRequestBody1$Outbound
  | PatchDomainRequestBody2$Outbound;

/** @internal */
export const PatchDomainRequestBody$outboundSchema: z.ZodType<
  PatchDomainRequestBody$Outbound,
  z.ZodTypeDef,
  PatchDomainRequestBody
> = z.union([
  z.lazy(() => PatchDomainRequestBody1$outboundSchema),
  z.lazy(() => PatchDomainRequestBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainRequestBody$ {
  /** @deprecated use `PatchDomainRequestBody$inboundSchema` instead. */
  export const inboundSchema = PatchDomainRequestBody$inboundSchema;
  /** @deprecated use `PatchDomainRequestBody$outboundSchema` instead. */
  export const outboundSchema = PatchDomainRequestBody$outboundSchema;
  /** @deprecated use `PatchDomainRequestBody$Outbound` instead. */
  export type Outbound = PatchDomainRequestBody$Outbound;
}

export function patchDomainRequestBodyToJSON(
  patchDomainRequestBody: PatchDomainRequestBody,
): string {
  return JSON.stringify(
    PatchDomainRequestBody$outboundSchema.parse(patchDomainRequestBody),
  );
}

export function patchDomainRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainRequestBody' from JSON`,
  );
}

/** @internal */
export const PatchDomainRequest$inboundSchema: z.ZodType<
  PatchDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.union([
    z.lazy(() => PatchDomainRequestBody1$inboundSchema),
    z.lazy(() => PatchDomainRequestBody2$inboundSchema),
  ]),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PatchDomainRequest$Outbound = {
  domain: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody:
    | PatchDomainRequestBody1$Outbound
    | PatchDomainRequestBody2$Outbound;
};

/** @internal */
export const PatchDomainRequest$outboundSchema: z.ZodType<
  PatchDomainRequest$Outbound,
  z.ZodTypeDef,
  PatchDomainRequest
> = z.object({
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.union([
    z.lazy(() => PatchDomainRequestBody1$outboundSchema),
    z.lazy(() => PatchDomainRequestBody2$outboundSchema),
  ]),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainRequest$ {
  /** @deprecated use `PatchDomainRequest$inboundSchema` instead. */
  export const inboundSchema = PatchDomainRequest$inboundSchema;
  /** @deprecated use `PatchDomainRequest$outboundSchema` instead. */
  export const outboundSchema = PatchDomainRequest$outboundSchema;
  /** @deprecated use `PatchDomainRequest$Outbound` instead. */
  export type Outbound = PatchDomainRequest$Outbound;
}

export function patchDomainRequestToJSON(
  patchDomainRequest: PatchDomainRequest,
): string {
  return JSON.stringify(
    PatchDomainRequest$outboundSchema.parse(patchDomainRequest),
  );
}

export function patchDomainRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainRequest' from JSON`,
  );
}

/** @internal */
export const PatchDomainResponseBody3$inboundSchema: z.ZodType<
  PatchDomainResponseBody3,
  z.ZodTypeDef,
  unknown
> = z.object({
  renew: z.boolean().optional(),
  customNameservers: z.array(z.string()).optional(),
  zone: z.boolean().optional(),
});

/** @internal */
export type PatchDomainResponseBody3$Outbound = {
  renew?: boolean | undefined;
  customNameservers?: Array<string> | undefined;
  zone?: boolean | undefined;
};

/** @internal */
export const PatchDomainResponseBody3$outboundSchema: z.ZodType<
  PatchDomainResponseBody3$Outbound,
  z.ZodTypeDef,
  PatchDomainResponseBody3
> = z.object({
  renew: z.boolean().optional(),
  customNameservers: z.array(z.string()).optional(),
  zone: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainResponseBody3$ {
  /** @deprecated use `PatchDomainResponseBody3$inboundSchema` instead. */
  export const inboundSchema = PatchDomainResponseBody3$inboundSchema;
  /** @deprecated use `PatchDomainResponseBody3$outboundSchema` instead. */
  export const outboundSchema = PatchDomainResponseBody3$outboundSchema;
  /** @deprecated use `PatchDomainResponseBody3$Outbound` instead. */
  export type Outbound = PatchDomainResponseBody3$Outbound;
}

export function patchDomainResponseBody3ToJSON(
  patchDomainResponseBody3: PatchDomainResponseBody3,
): string {
  return JSON.stringify(
    PatchDomainResponseBody3$outboundSchema.parse(patchDomainResponseBody3),
  );
}

export function patchDomainResponseBody3FromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainResponseBody3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainResponseBody3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainResponseBody3' from JSON`,
  );
}

/** @internal */
export const PatchDomainResponseBody2$inboundSchema: z.ZodType<
  PatchDomainResponseBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  moved: z.boolean(),
  token: z.string(),
});

/** @internal */
export type PatchDomainResponseBody2$Outbound = {
  moved: boolean;
  token: string;
};

/** @internal */
export const PatchDomainResponseBody2$outboundSchema: z.ZodType<
  PatchDomainResponseBody2$Outbound,
  z.ZodTypeDef,
  PatchDomainResponseBody2
> = z.object({
  moved: z.boolean(),
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainResponseBody2$ {
  /** @deprecated use `PatchDomainResponseBody2$inboundSchema` instead. */
  export const inboundSchema = PatchDomainResponseBody2$inboundSchema;
  /** @deprecated use `PatchDomainResponseBody2$outboundSchema` instead. */
  export const outboundSchema = PatchDomainResponseBody2$outboundSchema;
  /** @deprecated use `PatchDomainResponseBody2$Outbound` instead. */
  export type Outbound = PatchDomainResponseBody2$Outbound;
}

export function patchDomainResponseBody2ToJSON(
  patchDomainResponseBody2: PatchDomainResponseBody2,
): string {
  return JSON.stringify(
    PatchDomainResponseBody2$outboundSchema.parse(patchDomainResponseBody2),
  );
}

export function patchDomainResponseBody2FromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainResponseBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainResponseBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainResponseBody2' from JSON`,
  );
}

/** @internal */
export const PatchDomainResponseBody1$inboundSchema: z.ZodType<
  PatchDomainResponseBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  moved: z.boolean(),
});

/** @internal */
export type PatchDomainResponseBody1$Outbound = {
  moved: boolean;
};

/** @internal */
export const PatchDomainResponseBody1$outboundSchema: z.ZodType<
  PatchDomainResponseBody1$Outbound,
  z.ZodTypeDef,
  PatchDomainResponseBody1
> = z.object({
  moved: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainResponseBody1$ {
  /** @deprecated use `PatchDomainResponseBody1$inboundSchema` instead. */
  export const inboundSchema = PatchDomainResponseBody1$inboundSchema;
  /** @deprecated use `PatchDomainResponseBody1$outboundSchema` instead. */
  export const outboundSchema = PatchDomainResponseBody1$outboundSchema;
  /** @deprecated use `PatchDomainResponseBody1$Outbound` instead. */
  export type Outbound = PatchDomainResponseBody1$Outbound;
}

export function patchDomainResponseBody1ToJSON(
  patchDomainResponseBody1: PatchDomainResponseBody1,
): string {
  return JSON.stringify(
    PatchDomainResponseBody1$outboundSchema.parse(patchDomainResponseBody1),
  );
}

export function patchDomainResponseBody1FromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainResponseBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainResponseBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainResponseBody1' from JSON`,
  );
}

/** @internal */
export const PatchDomainResponseBody$inboundSchema: z.ZodType<
  PatchDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => PatchDomainResponseBody2$inboundSchema),
  z.lazy(() => PatchDomainResponseBody1$inboundSchema),
  z.lazy(() => PatchDomainResponseBody3$inboundSchema),
]);

/** @internal */
export type PatchDomainResponseBody$Outbound =
  | PatchDomainResponseBody2$Outbound
  | PatchDomainResponseBody1$Outbound
  | PatchDomainResponseBody3$Outbound;

/** @internal */
export const PatchDomainResponseBody$outboundSchema: z.ZodType<
  PatchDomainResponseBody$Outbound,
  z.ZodTypeDef,
  PatchDomainResponseBody
> = z.union([
  z.lazy(() => PatchDomainResponseBody2$outboundSchema),
  z.lazy(() => PatchDomainResponseBody1$outboundSchema),
  z.lazy(() => PatchDomainResponseBody3$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDomainResponseBody$ {
  /** @deprecated use `PatchDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = PatchDomainResponseBody$inboundSchema;
  /** @deprecated use `PatchDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema = PatchDomainResponseBody$outboundSchema;
  /** @deprecated use `PatchDomainResponseBody$Outbound` instead. */
  export type Outbound = PatchDomainResponseBody$Outbound;
}

export function patchDomainResponseBodyToJSON(
  patchDomainResponseBody: PatchDomainResponseBody,
): string {
  return JSON.stringify(
    PatchDomainResponseBody$outboundSchema.parse(patchDomainResponseBody),
  );
}

export function patchDomainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PatchDomainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchDomainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchDomainResponseBody' from JSON`,
  );
}
