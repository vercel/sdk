/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type Secrets = {
  name: string;
  value: string;
  prefix?: string | undefined;
};

export type UpdateResourceSecretsRequestBody = {
  secrets: Array<Secrets>;
};

export type UpdateResourceSecretsRequest = {
  integrationConfigurationId: string;
  integrationProductIdOrSlug: string;
  resourceId: string;
  requestBody: UpdateResourceSecretsRequestBody;
};

/** @internal */
export const Secrets$inboundSchema: z.ZodType<Secrets, z.ZodTypeDef, unknown> =
  z.object({
    name: z.string(),
    value: z.string(),
    prefix: z.string().optional(),
  });

/** @internal */
export type Secrets$Outbound = {
  name: string;
  value: string;
  prefix?: string | undefined;
};

/** @internal */
export const Secrets$outboundSchema: z.ZodType<
  Secrets$Outbound,
  z.ZodTypeDef,
  Secrets
> = z.object({
  name: z.string(),
  value: z.string(),
  prefix: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Secrets$ {
  /** @deprecated use `Secrets$inboundSchema` instead. */
  export const inboundSchema = Secrets$inboundSchema;
  /** @deprecated use `Secrets$outboundSchema` instead. */
  export const outboundSchema = Secrets$outboundSchema;
  /** @deprecated use `Secrets$Outbound` instead. */
  export type Outbound = Secrets$Outbound;
}

export function secretsToJSON(secrets: Secrets): string {
  return JSON.stringify(Secrets$outboundSchema.parse(secrets));
}

export function secretsFromJSON(
  jsonString: string,
): SafeParseResult<Secrets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Secrets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Secrets' from JSON`,
  );
}

/** @internal */
export const UpdateResourceSecretsRequestBody$inboundSchema: z.ZodType<
  UpdateResourceSecretsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  secrets: z.array(z.lazy(() => Secrets$inboundSchema)),
});

/** @internal */
export type UpdateResourceSecretsRequestBody$Outbound = {
  secrets: Array<Secrets$Outbound>;
};

/** @internal */
export const UpdateResourceSecretsRequestBody$outboundSchema: z.ZodType<
  UpdateResourceSecretsRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateResourceSecretsRequestBody
> = z.object({
  secrets: z.array(z.lazy(() => Secrets$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateResourceSecretsRequestBody$ {
  /** @deprecated use `UpdateResourceSecretsRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateResourceSecretsRequestBody$inboundSchema;
  /** @deprecated use `UpdateResourceSecretsRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateResourceSecretsRequestBody$outboundSchema;
  /** @deprecated use `UpdateResourceSecretsRequestBody$Outbound` instead. */
  export type Outbound = UpdateResourceSecretsRequestBody$Outbound;
}

export function updateResourceSecretsRequestBodyToJSON(
  updateResourceSecretsRequestBody: UpdateResourceSecretsRequestBody,
): string {
  return JSON.stringify(
    UpdateResourceSecretsRequestBody$outboundSchema.parse(
      updateResourceSecretsRequestBody,
    ),
  );
}

export function updateResourceSecretsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateResourceSecretsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateResourceSecretsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateResourceSecretsRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateResourceSecretsRequest$inboundSchema: z.ZodType<
  UpdateResourceSecretsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  integrationConfigurationId: z.string(),
  integrationProductIdOrSlug: z.string(),
  resourceId: z.string(),
  RequestBody: z.lazy(() => UpdateResourceSecretsRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateResourceSecretsRequest$Outbound = {
  integrationConfigurationId: string;
  integrationProductIdOrSlug: string;
  resourceId: string;
  RequestBody: UpdateResourceSecretsRequestBody$Outbound;
};

/** @internal */
export const UpdateResourceSecretsRequest$outboundSchema: z.ZodType<
  UpdateResourceSecretsRequest$Outbound,
  z.ZodTypeDef,
  UpdateResourceSecretsRequest
> = z.object({
  integrationConfigurationId: z.string(),
  integrationProductIdOrSlug: z.string(),
  resourceId: z.string(),
  requestBody: z.lazy(() => UpdateResourceSecretsRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateResourceSecretsRequest$ {
  /** @deprecated use `UpdateResourceSecretsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateResourceSecretsRequest$inboundSchema;
  /** @deprecated use `UpdateResourceSecretsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateResourceSecretsRequest$outboundSchema;
  /** @deprecated use `UpdateResourceSecretsRequest$Outbound` instead. */
  export type Outbound = UpdateResourceSecretsRequest$Outbound;
}

export function updateResourceSecretsRequestToJSON(
  updateResourceSecretsRequest: UpdateResourceSecretsRequest,
): string {
  return JSON.stringify(
    UpdateResourceSecretsRequest$outboundSchema.parse(
      updateResourceSecretsRequest,
    ),
  );
}

export function updateResourceSecretsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateResourceSecretsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateResourceSecretsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateResourceSecretsRequest' from JSON`,
  );
}