/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetCheckRequest = {
  /**
   * The deployment to get the check for.
   */
  deploymentId: string;
  /**
   * The check to fetch
   */
  checkId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export const GetCheckStatus = {
  Registered: "registered",
  Running: "running",
  Completed: "completed",
} as const;
export type GetCheckStatus = ClosedEnum<typeof GetCheckStatus>;

export const GetCheckConclusion = {
  Canceled: "canceled",
  Failed: "failed",
  Neutral: "neutral",
  Succeeded: "succeeded",
  Skipped: "skipped",
  Stale: "stale",
} as const;
export type GetCheckConclusion = ClosedEnum<typeof GetCheckConclusion>;

export const GetCheckSource = {
  WebVitals: "web-vitals",
} as const;
export type GetCheckSource = ClosedEnum<typeof GetCheckSource>;

export type GetCheckFCP = {
  value: number | null;
  previousValue?: number | undefined;
  source: GetCheckSource;
};

export const GetCheckChecksSource = {
  WebVitals: "web-vitals",
} as const;
export type GetCheckChecksSource = ClosedEnum<typeof GetCheckChecksSource>;

export type GetCheckLCP = {
  value: number | null;
  previousValue?: number | undefined;
  source: GetCheckChecksSource;
};

export const GetCheckChecksResponseSource = {
  WebVitals: "web-vitals",
} as const;
export type GetCheckChecksResponseSource = ClosedEnum<
  typeof GetCheckChecksResponseSource
>;

export type GetCheckCLS = {
  value: number | null;
  previousValue?: number | undefined;
  source: GetCheckChecksResponseSource;
};

export const GetCheckChecksResponse200Source = {
  WebVitals: "web-vitals",
} as const;
export type GetCheckChecksResponse200Source = ClosedEnum<
  typeof GetCheckChecksResponse200Source
>;

export type GetCheckTBT = {
  value: number | null;
  previousValue?: number | undefined;
  source: GetCheckChecksResponse200Source;
};

export const GetCheckChecksResponse200ApplicationJSONSource = {
  WebVitals: "web-vitals",
} as const;
export type GetCheckChecksResponse200ApplicationJSONSource = ClosedEnum<
  typeof GetCheckChecksResponse200ApplicationJSONSource
>;

export type GetCheckVirtualExperienceScore = {
  value: number | null;
  previousValue?: number | undefined;
  source: GetCheckChecksResponse200ApplicationJSONSource;
};

export type GetCheckMetrics = {
  fcp: GetCheckFCP;
  lcp: GetCheckLCP;
  cls: GetCheckCLS;
  tbt: GetCheckTBT;
  virtualExperienceScore?: GetCheckVirtualExperienceScore | undefined;
};

export type GetCheckOutput = {
  metrics?: GetCheckMetrics | undefined;
};

export type GetCheckResponseBody = {
  id: string;
  name: string;
  path?: string | undefined;
  status: GetCheckStatus;
  conclusion?: GetCheckConclusion | undefined;
  blocking: boolean;
  output?: GetCheckOutput | undefined;
  detailsUrl?: string | undefined;
  integrationId: string;
  deploymentId: string;
  externalId?: string | undefined;
  createdAt: number;
  updatedAt: number;
  startedAt?: number | undefined;
  completedAt?: number | undefined;
  rerequestable?: boolean | undefined;
};

/** @internal */
export const GetCheckRequest$inboundSchema: z.ZodType<
  GetCheckRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  deploymentId: z.string(),
  checkId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type GetCheckRequest$Outbound = {
  deploymentId: string;
  checkId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetCheckRequest$outboundSchema: z.ZodType<
  GetCheckRequest$Outbound,
  z.ZodTypeDef,
  GetCheckRequest
> = z.object({
  deploymentId: z.string(),
  checkId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckRequest$ {
  /** @deprecated use `GetCheckRequest$inboundSchema` instead. */
  export const inboundSchema = GetCheckRequest$inboundSchema;
  /** @deprecated use `GetCheckRequest$outboundSchema` instead. */
  export const outboundSchema = GetCheckRequest$outboundSchema;
  /** @deprecated use `GetCheckRequest$Outbound` instead. */
  export type Outbound = GetCheckRequest$Outbound;
}

export function getCheckRequestToJSON(
  getCheckRequest: GetCheckRequest,
): string {
  return JSON.stringify(GetCheckRequest$outboundSchema.parse(getCheckRequest));
}

export function getCheckRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckRequest' from JSON`,
  );
}

/** @internal */
export const GetCheckStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckStatus
> = z.nativeEnum(GetCheckStatus);

/** @internal */
export const GetCheckStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckStatus
> = GetCheckStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckStatus$ {
  /** @deprecated use `GetCheckStatus$inboundSchema` instead. */
  export const inboundSchema = GetCheckStatus$inboundSchema;
  /** @deprecated use `GetCheckStatus$outboundSchema` instead. */
  export const outboundSchema = GetCheckStatus$outboundSchema;
}

/** @internal */
export const GetCheckConclusion$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckConclusion
> = z.nativeEnum(GetCheckConclusion);

/** @internal */
export const GetCheckConclusion$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckConclusion
> = GetCheckConclusion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckConclusion$ {
  /** @deprecated use `GetCheckConclusion$inboundSchema` instead. */
  export const inboundSchema = GetCheckConclusion$inboundSchema;
  /** @deprecated use `GetCheckConclusion$outboundSchema` instead. */
  export const outboundSchema = GetCheckConclusion$outboundSchema;
}

/** @internal */
export const GetCheckSource$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckSource
> = z.nativeEnum(GetCheckSource);

/** @internal */
export const GetCheckSource$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckSource
> = GetCheckSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckSource$ {
  /** @deprecated use `GetCheckSource$inboundSchema` instead. */
  export const inboundSchema = GetCheckSource$inboundSchema;
  /** @deprecated use `GetCheckSource$outboundSchema` instead. */
  export const outboundSchema = GetCheckSource$outboundSchema;
}

/** @internal */
export const GetCheckFCP$inboundSchema: z.ZodType<
  GetCheckFCP,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckSource$inboundSchema,
});

/** @internal */
export type GetCheckFCP$Outbound = {
  value: number | null;
  previousValue?: number | undefined;
  source: string;
};

/** @internal */
export const GetCheckFCP$outboundSchema: z.ZodType<
  GetCheckFCP$Outbound,
  z.ZodTypeDef,
  GetCheckFCP
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckSource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckFCP$ {
  /** @deprecated use `GetCheckFCP$inboundSchema` instead. */
  export const inboundSchema = GetCheckFCP$inboundSchema;
  /** @deprecated use `GetCheckFCP$outboundSchema` instead. */
  export const outboundSchema = GetCheckFCP$outboundSchema;
  /** @deprecated use `GetCheckFCP$Outbound` instead. */
  export type Outbound = GetCheckFCP$Outbound;
}

export function getCheckFCPToJSON(getCheckFCP: GetCheckFCP): string {
  return JSON.stringify(GetCheckFCP$outboundSchema.parse(getCheckFCP));
}

export function getCheckFCPFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckFCP, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckFCP$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckFCP' from JSON`,
  );
}

/** @internal */
export const GetCheckChecksSource$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksSource
> = z.nativeEnum(GetCheckChecksSource);

/** @internal */
export const GetCheckChecksSource$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksSource
> = GetCheckChecksSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckChecksSource$ {
  /** @deprecated use `GetCheckChecksSource$inboundSchema` instead. */
  export const inboundSchema = GetCheckChecksSource$inboundSchema;
  /** @deprecated use `GetCheckChecksSource$outboundSchema` instead. */
  export const outboundSchema = GetCheckChecksSource$outboundSchema;
}

/** @internal */
export const GetCheckLCP$inboundSchema: z.ZodType<
  GetCheckLCP,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksSource$inboundSchema,
});

/** @internal */
export type GetCheckLCP$Outbound = {
  value: number | null;
  previousValue?: number | undefined;
  source: string;
};

/** @internal */
export const GetCheckLCP$outboundSchema: z.ZodType<
  GetCheckLCP$Outbound,
  z.ZodTypeDef,
  GetCheckLCP
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksSource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckLCP$ {
  /** @deprecated use `GetCheckLCP$inboundSchema` instead. */
  export const inboundSchema = GetCheckLCP$inboundSchema;
  /** @deprecated use `GetCheckLCP$outboundSchema` instead. */
  export const outboundSchema = GetCheckLCP$outboundSchema;
  /** @deprecated use `GetCheckLCP$Outbound` instead. */
  export type Outbound = GetCheckLCP$Outbound;
}

export function getCheckLCPToJSON(getCheckLCP: GetCheckLCP): string {
  return JSON.stringify(GetCheckLCP$outboundSchema.parse(getCheckLCP));
}

export function getCheckLCPFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckLCP, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckLCP$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckLCP' from JSON`,
  );
}

/** @internal */
export const GetCheckChecksResponseSource$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksResponseSource
> = z.nativeEnum(GetCheckChecksResponseSource);

/** @internal */
export const GetCheckChecksResponseSource$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksResponseSource
> = GetCheckChecksResponseSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckChecksResponseSource$ {
  /** @deprecated use `GetCheckChecksResponseSource$inboundSchema` instead. */
  export const inboundSchema = GetCheckChecksResponseSource$inboundSchema;
  /** @deprecated use `GetCheckChecksResponseSource$outboundSchema` instead. */
  export const outboundSchema = GetCheckChecksResponseSource$outboundSchema;
}

/** @internal */
export const GetCheckCLS$inboundSchema: z.ZodType<
  GetCheckCLS,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponseSource$inboundSchema,
});

/** @internal */
export type GetCheckCLS$Outbound = {
  value: number | null;
  previousValue?: number | undefined;
  source: string;
};

/** @internal */
export const GetCheckCLS$outboundSchema: z.ZodType<
  GetCheckCLS$Outbound,
  z.ZodTypeDef,
  GetCheckCLS
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponseSource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckCLS$ {
  /** @deprecated use `GetCheckCLS$inboundSchema` instead. */
  export const inboundSchema = GetCheckCLS$inboundSchema;
  /** @deprecated use `GetCheckCLS$outboundSchema` instead. */
  export const outboundSchema = GetCheckCLS$outboundSchema;
  /** @deprecated use `GetCheckCLS$Outbound` instead. */
  export type Outbound = GetCheckCLS$Outbound;
}

export function getCheckCLSToJSON(getCheckCLS: GetCheckCLS): string {
  return JSON.stringify(GetCheckCLS$outboundSchema.parse(getCheckCLS));
}

export function getCheckCLSFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckCLS, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckCLS$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckCLS' from JSON`,
  );
}

/** @internal */
export const GetCheckChecksResponse200Source$inboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksResponse200Source
> = z.nativeEnum(GetCheckChecksResponse200Source);

/** @internal */
export const GetCheckChecksResponse200Source$outboundSchema: z.ZodNativeEnum<
  typeof GetCheckChecksResponse200Source
> = GetCheckChecksResponse200Source$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckChecksResponse200Source$ {
  /** @deprecated use `GetCheckChecksResponse200Source$inboundSchema` instead. */
  export const inboundSchema = GetCheckChecksResponse200Source$inboundSchema;
  /** @deprecated use `GetCheckChecksResponse200Source$outboundSchema` instead. */
  export const outboundSchema = GetCheckChecksResponse200Source$outboundSchema;
}

/** @internal */
export const GetCheckTBT$inboundSchema: z.ZodType<
  GetCheckTBT,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponse200Source$inboundSchema,
});

/** @internal */
export type GetCheckTBT$Outbound = {
  value: number | null;
  previousValue?: number | undefined;
  source: string;
};

/** @internal */
export const GetCheckTBT$outboundSchema: z.ZodType<
  GetCheckTBT$Outbound,
  z.ZodTypeDef,
  GetCheckTBT
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponse200Source$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckTBT$ {
  /** @deprecated use `GetCheckTBT$inboundSchema` instead. */
  export const inboundSchema = GetCheckTBT$inboundSchema;
  /** @deprecated use `GetCheckTBT$outboundSchema` instead. */
  export const outboundSchema = GetCheckTBT$outboundSchema;
  /** @deprecated use `GetCheckTBT$Outbound` instead. */
  export type Outbound = GetCheckTBT$Outbound;
}

export function getCheckTBTToJSON(getCheckTBT: GetCheckTBT): string {
  return JSON.stringify(GetCheckTBT$outboundSchema.parse(getCheckTBT));
}

export function getCheckTBTFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckTBT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckTBT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckTBT' from JSON`,
  );
}

/** @internal */
export const GetCheckChecksResponse200ApplicationJSONSource$inboundSchema:
  z.ZodNativeEnum<typeof GetCheckChecksResponse200ApplicationJSONSource> = z
    .nativeEnum(GetCheckChecksResponse200ApplicationJSONSource);

/** @internal */
export const GetCheckChecksResponse200ApplicationJSONSource$outboundSchema:
  z.ZodNativeEnum<typeof GetCheckChecksResponse200ApplicationJSONSource> =
    GetCheckChecksResponse200ApplicationJSONSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckChecksResponse200ApplicationJSONSource$ {
  /** @deprecated use `GetCheckChecksResponse200ApplicationJSONSource$inboundSchema` instead. */
  export const inboundSchema =
    GetCheckChecksResponse200ApplicationJSONSource$inboundSchema;
  /** @deprecated use `GetCheckChecksResponse200ApplicationJSONSource$outboundSchema` instead. */
  export const outboundSchema =
    GetCheckChecksResponse200ApplicationJSONSource$outboundSchema;
}

/** @internal */
export const GetCheckVirtualExperienceScore$inboundSchema: z.ZodType<
  GetCheckVirtualExperienceScore,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponse200ApplicationJSONSource$inboundSchema,
});

/** @internal */
export type GetCheckVirtualExperienceScore$Outbound = {
  value: number | null;
  previousValue?: number | undefined;
  source: string;
};

/** @internal */
export const GetCheckVirtualExperienceScore$outboundSchema: z.ZodType<
  GetCheckVirtualExperienceScore$Outbound,
  z.ZodTypeDef,
  GetCheckVirtualExperienceScore
> = z.object({
  value: z.nullable(z.number()),
  previousValue: z.number().optional(),
  source: GetCheckChecksResponse200ApplicationJSONSource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckVirtualExperienceScore$ {
  /** @deprecated use `GetCheckVirtualExperienceScore$inboundSchema` instead. */
  export const inboundSchema = GetCheckVirtualExperienceScore$inboundSchema;
  /** @deprecated use `GetCheckVirtualExperienceScore$outboundSchema` instead. */
  export const outboundSchema = GetCheckVirtualExperienceScore$outboundSchema;
  /** @deprecated use `GetCheckVirtualExperienceScore$Outbound` instead. */
  export type Outbound = GetCheckVirtualExperienceScore$Outbound;
}

export function getCheckVirtualExperienceScoreToJSON(
  getCheckVirtualExperienceScore: GetCheckVirtualExperienceScore,
): string {
  return JSON.stringify(
    GetCheckVirtualExperienceScore$outboundSchema.parse(
      getCheckVirtualExperienceScore,
    ),
  );
}

export function getCheckVirtualExperienceScoreFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckVirtualExperienceScore, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckVirtualExperienceScore$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckVirtualExperienceScore' from JSON`,
  );
}

/** @internal */
export const GetCheckMetrics$inboundSchema: z.ZodType<
  GetCheckMetrics,
  z.ZodTypeDef,
  unknown
> = z.object({
  FCP: z.lazy(() => GetCheckFCP$inboundSchema),
  LCP: z.lazy(() => GetCheckLCP$inboundSchema),
  CLS: z.lazy(() => GetCheckCLS$inboundSchema),
  TBT: z.lazy(() => GetCheckTBT$inboundSchema),
  virtualExperienceScore: z.lazy(() =>
    GetCheckVirtualExperienceScore$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "FCP": "fcp",
    "LCP": "lcp",
    "CLS": "cls",
    "TBT": "tbt",
  });
});

/** @internal */
export type GetCheckMetrics$Outbound = {
  FCP: GetCheckFCP$Outbound;
  LCP: GetCheckLCP$Outbound;
  CLS: GetCheckCLS$Outbound;
  TBT: GetCheckTBT$Outbound;
  virtualExperienceScore?: GetCheckVirtualExperienceScore$Outbound | undefined;
};

/** @internal */
export const GetCheckMetrics$outboundSchema: z.ZodType<
  GetCheckMetrics$Outbound,
  z.ZodTypeDef,
  GetCheckMetrics
> = z.object({
  fcp: z.lazy(() => GetCheckFCP$outboundSchema),
  lcp: z.lazy(() => GetCheckLCP$outboundSchema),
  cls: z.lazy(() => GetCheckCLS$outboundSchema),
  tbt: z.lazy(() => GetCheckTBT$outboundSchema),
  virtualExperienceScore: z.lazy(() =>
    GetCheckVirtualExperienceScore$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    fcp: "FCP",
    lcp: "LCP",
    cls: "CLS",
    tbt: "TBT",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckMetrics$ {
  /** @deprecated use `GetCheckMetrics$inboundSchema` instead. */
  export const inboundSchema = GetCheckMetrics$inboundSchema;
  /** @deprecated use `GetCheckMetrics$outboundSchema` instead. */
  export const outboundSchema = GetCheckMetrics$outboundSchema;
  /** @deprecated use `GetCheckMetrics$Outbound` instead. */
  export type Outbound = GetCheckMetrics$Outbound;
}

export function getCheckMetricsToJSON(
  getCheckMetrics: GetCheckMetrics,
): string {
  return JSON.stringify(GetCheckMetrics$outboundSchema.parse(getCheckMetrics));
}

export function getCheckMetricsFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckMetrics, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckMetrics$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckMetrics' from JSON`,
  );
}

/** @internal */
export const GetCheckOutput$inboundSchema: z.ZodType<
  GetCheckOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  metrics: z.lazy(() => GetCheckMetrics$inboundSchema).optional(),
});

/** @internal */
export type GetCheckOutput$Outbound = {
  metrics?: GetCheckMetrics$Outbound | undefined;
};

/** @internal */
export const GetCheckOutput$outboundSchema: z.ZodType<
  GetCheckOutput$Outbound,
  z.ZodTypeDef,
  GetCheckOutput
> = z.object({
  metrics: z.lazy(() => GetCheckMetrics$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckOutput$ {
  /** @deprecated use `GetCheckOutput$inboundSchema` instead. */
  export const inboundSchema = GetCheckOutput$inboundSchema;
  /** @deprecated use `GetCheckOutput$outboundSchema` instead. */
  export const outboundSchema = GetCheckOutput$outboundSchema;
  /** @deprecated use `GetCheckOutput$Outbound` instead. */
  export type Outbound = GetCheckOutput$Outbound;
}

export function getCheckOutputToJSON(getCheckOutput: GetCheckOutput): string {
  return JSON.stringify(GetCheckOutput$outboundSchema.parse(getCheckOutput));
}

export function getCheckOutputFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckOutput' from JSON`,
  );
}

/** @internal */
export const GetCheckResponseBody$inboundSchema: z.ZodType<
  GetCheckResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  path: z.string().optional(),
  status: GetCheckStatus$inboundSchema,
  conclusion: GetCheckConclusion$inboundSchema.optional(),
  blocking: z.boolean(),
  output: z.lazy(() => GetCheckOutput$inboundSchema).optional(),
  detailsUrl: z.string().optional(),
  integrationId: z.string(),
  deploymentId: z.string(),
  externalId: z.string().optional(),
  createdAt: z.number(),
  updatedAt: z.number(),
  startedAt: z.number().optional(),
  completedAt: z.number().optional(),
  rerequestable: z.boolean().optional(),
});

/** @internal */
export type GetCheckResponseBody$Outbound = {
  id: string;
  name: string;
  path?: string | undefined;
  status: string;
  conclusion?: string | undefined;
  blocking: boolean;
  output?: GetCheckOutput$Outbound | undefined;
  detailsUrl?: string | undefined;
  integrationId: string;
  deploymentId: string;
  externalId?: string | undefined;
  createdAt: number;
  updatedAt: number;
  startedAt?: number | undefined;
  completedAt?: number | undefined;
  rerequestable?: boolean | undefined;
};

/** @internal */
export const GetCheckResponseBody$outboundSchema: z.ZodType<
  GetCheckResponseBody$Outbound,
  z.ZodTypeDef,
  GetCheckResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  path: z.string().optional(),
  status: GetCheckStatus$outboundSchema,
  conclusion: GetCheckConclusion$outboundSchema.optional(),
  blocking: z.boolean(),
  output: z.lazy(() => GetCheckOutput$outboundSchema).optional(),
  detailsUrl: z.string().optional(),
  integrationId: z.string(),
  deploymentId: z.string(),
  externalId: z.string().optional(),
  createdAt: z.number(),
  updatedAt: z.number(),
  startedAt: z.number().optional(),
  completedAt: z.number().optional(),
  rerequestable: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckResponseBody$ {
  /** @deprecated use `GetCheckResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCheckResponseBody$inboundSchema;
  /** @deprecated use `GetCheckResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetCheckResponseBody$outboundSchema;
  /** @deprecated use `GetCheckResponseBody$Outbound` instead. */
  export type Outbound = GetCheckResponseBody$Outbound;
}

export function getCheckResponseBodyToJSON(
  getCheckResponseBody: GetCheckResponseBody,
): string {
  return JSON.stringify(
    GetCheckResponseBody$outboundSchema.parse(getCheckResponseBody),
  );
}

export function getCheckResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckResponseBody' from JSON`,
  );
}