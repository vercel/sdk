/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetProjectDomainRequest = {
  /**
   * The unique project identifier or the project name
   */
  idOrName: string;
  /**
   * The project domain name
   */
  domain: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type Verification = {
  type: string;
  domain: string;
  value: string;
  reason: string;
};

export type GetProjectDomainResponseBody = {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null | undefined;
  redirectStatusCode?: number | null | undefined;
  gitBranch?: string | null | undefined;
  customEnvironmentId?: string | null | undefined;
  updatedAt?: number | undefined;
  createdAt?: number | undefined;
  /**
   * `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
   */
  verified: boolean;
  /**
   * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
   */
  verification?: Array<Verification> | undefined;
};

/** @internal */
export const GetProjectDomainRequest$inboundSchema: z.ZodType<
  GetProjectDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type GetProjectDomainRequest$Outbound = {
  idOrName: string;
  domain: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetProjectDomainRequest$outboundSchema: z.ZodType<
  GetProjectDomainRequest$Outbound,
  z.ZodTypeDef,
  GetProjectDomainRequest
> = z.object({
  idOrName: z.string(),
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectDomainRequest$ {
  /** @deprecated use `GetProjectDomainRequest$inboundSchema` instead. */
  export const inboundSchema = GetProjectDomainRequest$inboundSchema;
  /** @deprecated use `GetProjectDomainRequest$outboundSchema` instead. */
  export const outboundSchema = GetProjectDomainRequest$outboundSchema;
  /** @deprecated use `GetProjectDomainRequest$Outbound` instead. */
  export type Outbound = GetProjectDomainRequest$Outbound;
}

export function getProjectDomainRequestToJSON(
  getProjectDomainRequest: GetProjectDomainRequest,
): string {
  return JSON.stringify(
    GetProjectDomainRequest$outboundSchema.parse(getProjectDomainRequest),
  );
}

export function getProjectDomainRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectDomainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectDomainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectDomainRequest' from JSON`,
  );
}

/** @internal */
export const Verification$inboundSchema: z.ZodType<
  Verification,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  domain: z.string(),
  value: z.string(),
  reason: z.string(),
});

/** @internal */
export type Verification$Outbound = {
  type: string;
  domain: string;
  value: string;
  reason: string;
};

/** @internal */
export const Verification$outboundSchema: z.ZodType<
  Verification$Outbound,
  z.ZodTypeDef,
  Verification
> = z.object({
  type: z.string(),
  domain: z.string(),
  value: z.string(),
  reason: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Verification$ {
  /** @deprecated use `Verification$inboundSchema` instead. */
  export const inboundSchema = Verification$inboundSchema;
  /** @deprecated use `Verification$outboundSchema` instead. */
  export const outboundSchema = Verification$outboundSchema;
  /** @deprecated use `Verification$Outbound` instead. */
  export type Outbound = Verification$Outbound;
}

export function verificationToJSON(verification: Verification): string {
  return JSON.stringify(Verification$outboundSchema.parse(verification));
}

export function verificationFromJSON(
  jsonString: string,
): SafeParseResult<Verification, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Verification$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Verification' from JSON`,
  );
}

/** @internal */
export const GetProjectDomainResponseBody$inboundSchema: z.ZodType<
  GetProjectDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  apexName: z.string(),
  projectId: z.string(),
  redirect: z.nullable(z.string()).optional(),
  redirectStatusCode: z.nullable(z.number()).optional(),
  gitBranch: z.nullable(z.string()).optional(),
  customEnvironmentId: z.nullable(z.string()).optional(),
  updatedAt: z.number().optional(),
  createdAt: z.number().optional(),
  verified: z.boolean(),
  verification: z.array(z.lazy(() => Verification$inboundSchema)).optional(),
});

/** @internal */
export type GetProjectDomainResponseBody$Outbound = {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null | undefined;
  redirectStatusCode?: number | null | undefined;
  gitBranch?: string | null | undefined;
  customEnvironmentId?: string | null | undefined;
  updatedAt?: number | undefined;
  createdAt?: number | undefined;
  verified: boolean;
  verification?: Array<Verification$Outbound> | undefined;
};

/** @internal */
export const GetProjectDomainResponseBody$outboundSchema: z.ZodType<
  GetProjectDomainResponseBody$Outbound,
  z.ZodTypeDef,
  GetProjectDomainResponseBody
> = z.object({
  name: z.string(),
  apexName: z.string(),
  projectId: z.string(),
  redirect: z.nullable(z.string()).optional(),
  redirectStatusCode: z.nullable(z.number()).optional(),
  gitBranch: z.nullable(z.string()).optional(),
  customEnvironmentId: z.nullable(z.string()).optional(),
  updatedAt: z.number().optional(),
  createdAt: z.number().optional(),
  verified: z.boolean(),
  verification: z.array(z.lazy(() => Verification$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectDomainResponseBody$ {
  /** @deprecated use `GetProjectDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetProjectDomainResponseBody$inboundSchema;
  /** @deprecated use `GetProjectDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetProjectDomainResponseBody$outboundSchema;
  /** @deprecated use `GetProjectDomainResponseBody$Outbound` instead. */
  export type Outbound = GetProjectDomainResponseBody$Outbound;
}

export function getProjectDomainResponseBodyToJSON(
  getProjectDomainResponseBody: GetProjectDomainResponseBody,
): string {
  return JSON.stringify(
    GetProjectDomainResponseBody$outboundSchema.parse(
      getProjectDomainResponseBody,
    ),
  );
}

export function getProjectDomainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectDomainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectDomainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectDomainResponseBody' from JSON`,
  );
}