/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Utm = {
  /**
   * UTM source
   */
  utmSource?: string | undefined;
  /**
   * UTM medium
   */
  utmMedium?: string | undefined;
  /**
   * UTM campaign
   */
  utmCampaign?: string | undefined;
  /**
   * UTM term
   */
  utmTerm?: string | undefined;
};

/**
 * Attribution information for the session or current page
 */
export type Attribution = {
  /**
   * Session referrer
   */
  sessionReferrer?: string | undefined;
  /**
   * Session landing page
   */
  landingPage?: string | undefined;
  /**
   * Referrer to the signup page
   */
  pageBeforeConversionPage?: string | undefined;
  utm?: Utm | undefined;
};

export type CreateTeamRequestBody = {
  /**
   * The desired slug for the Team
   */
  slug: string;
  /**
   * The desired name for the Team. It will be generated from the provided slug if nothing is provided
   */
  name?: string | undefined;
  /**
   * Attribution information for the session or current page
   */
  attribution?: Attribution | undefined;
};

/**
 * IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
 */
export type CreateTeamBilling = {};

/**
 * The team was created successfully
 */
export type CreateTeamResponseBody = {
  /**
   * Id of the created team
   */
  id: string;
  slug: string;
  /**
   * IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
   */
  billing: CreateTeamBilling;
};

/** @internal */
export const Utm$inboundSchema: z.ZodType<Utm, z.ZodTypeDef, unknown> = z
  .object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmTerm: z.string().optional(),
  });

/** @internal */
export type Utm$Outbound = {
  utmSource?: string | undefined;
  utmMedium?: string | undefined;
  utmCampaign?: string | undefined;
  utmTerm?: string | undefined;
};

/** @internal */
export const Utm$outboundSchema: z.ZodType<Utm$Outbound, z.ZodTypeDef, Utm> = z
  .object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmTerm: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Utm$ {
  /** @deprecated use `Utm$inboundSchema` instead. */
  export const inboundSchema = Utm$inboundSchema;
  /** @deprecated use `Utm$outboundSchema` instead. */
  export const outboundSchema = Utm$outboundSchema;
  /** @deprecated use `Utm$Outbound` instead. */
  export type Outbound = Utm$Outbound;
}

export function utmToJSON(utm: Utm): string {
  return JSON.stringify(Utm$outboundSchema.parse(utm));
}

export function utmFromJSON(
  jsonString: string,
): SafeParseResult<Utm, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Utm$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Utm' from JSON`,
  );
}

/** @internal */
export const Attribution$inboundSchema: z.ZodType<
  Attribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utm: z.lazy(() => Utm$inboundSchema).optional(),
});

/** @internal */
export type Attribution$Outbound = {
  sessionReferrer?: string | undefined;
  landingPage?: string | undefined;
  pageBeforeConversionPage?: string | undefined;
  utm?: Utm$Outbound | undefined;
};

/** @internal */
export const Attribution$outboundSchema: z.ZodType<
  Attribution$Outbound,
  z.ZodTypeDef,
  Attribution
> = z.object({
  sessionReferrer: z.string().optional(),
  landingPage: z.string().optional(),
  pageBeforeConversionPage: z.string().optional(),
  utm: z.lazy(() => Utm$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attribution$ {
  /** @deprecated use `Attribution$inboundSchema` instead. */
  export const inboundSchema = Attribution$inboundSchema;
  /** @deprecated use `Attribution$outboundSchema` instead. */
  export const outboundSchema = Attribution$outboundSchema;
  /** @deprecated use `Attribution$Outbound` instead. */
  export type Outbound = Attribution$Outbound;
}

export function attributionToJSON(attribution: Attribution): string {
  return JSON.stringify(Attribution$outboundSchema.parse(attribution));
}

export function attributionFromJSON(
  jsonString: string,
): SafeParseResult<Attribution, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Attribution$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Attribution' from JSON`,
  );
}

/** @internal */
export const CreateTeamRequestBody$inboundSchema: z.ZodType<
  CreateTeamRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
  name: z.string().optional(),
  attribution: z.lazy(() => Attribution$inboundSchema).optional(),
});

/** @internal */
export type CreateTeamRequestBody$Outbound = {
  slug: string;
  name?: string | undefined;
  attribution?: Attribution$Outbound | undefined;
};

/** @internal */
export const CreateTeamRequestBody$outboundSchema: z.ZodType<
  CreateTeamRequestBody$Outbound,
  z.ZodTypeDef,
  CreateTeamRequestBody
> = z.object({
  slug: z.string(),
  name: z.string().optional(),
  attribution: z.lazy(() => Attribution$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTeamRequestBody$ {
  /** @deprecated use `CreateTeamRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateTeamRequestBody$inboundSchema;
  /** @deprecated use `CreateTeamRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateTeamRequestBody$outboundSchema;
  /** @deprecated use `CreateTeamRequestBody$Outbound` instead. */
  export type Outbound = CreateTeamRequestBody$Outbound;
}

export function createTeamRequestBodyToJSON(
  createTeamRequestBody: CreateTeamRequestBody,
): string {
  return JSON.stringify(
    CreateTeamRequestBody$outboundSchema.parse(createTeamRequestBody),
  );
}

export function createTeamRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateTeamRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTeamRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTeamRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateTeamBilling$inboundSchema: z.ZodType<
  CreateTeamBilling,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateTeamBilling$Outbound = {};

/** @internal */
export const CreateTeamBilling$outboundSchema: z.ZodType<
  CreateTeamBilling$Outbound,
  z.ZodTypeDef,
  CreateTeamBilling
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTeamBilling$ {
  /** @deprecated use `CreateTeamBilling$inboundSchema` instead. */
  export const inboundSchema = CreateTeamBilling$inboundSchema;
  /** @deprecated use `CreateTeamBilling$outboundSchema` instead. */
  export const outboundSchema = CreateTeamBilling$outboundSchema;
  /** @deprecated use `CreateTeamBilling$Outbound` instead. */
  export type Outbound = CreateTeamBilling$Outbound;
}

export function createTeamBillingToJSON(
  createTeamBilling: CreateTeamBilling,
): string {
  return JSON.stringify(
    CreateTeamBilling$outboundSchema.parse(createTeamBilling),
  );
}

export function createTeamBillingFromJSON(
  jsonString: string,
): SafeParseResult<CreateTeamBilling, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTeamBilling$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTeamBilling' from JSON`,
  );
}

/** @internal */
export const CreateTeamResponseBody$inboundSchema: z.ZodType<
  CreateTeamResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  slug: z.string(),
  billing: z.lazy(() => CreateTeamBilling$inboundSchema),
});

/** @internal */
export type CreateTeamResponseBody$Outbound = {
  id: string;
  slug: string;
  billing: CreateTeamBilling$Outbound;
};

/** @internal */
export const CreateTeamResponseBody$outboundSchema: z.ZodType<
  CreateTeamResponseBody$Outbound,
  z.ZodTypeDef,
  CreateTeamResponseBody
> = z.object({
  id: z.string(),
  slug: z.string(),
  billing: z.lazy(() => CreateTeamBilling$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTeamResponseBody$ {
  /** @deprecated use `CreateTeamResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateTeamResponseBody$inboundSchema;
  /** @deprecated use `CreateTeamResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateTeamResponseBody$outboundSchema;
  /** @deprecated use `CreateTeamResponseBody$Outbound` instead. */
  export type Outbound = CreateTeamResponseBody$Outbound;
}

export function createTeamResponseBodyToJSON(
  createTeamResponseBody: CreateTeamResponseBody,
): string {
  return JSON.stringify(
    CreateTeamResponseBody$outboundSchema.parse(createTeamResponseBody),
  );
}

export function createTeamResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateTeamResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTeamResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTeamResponseBody' from JSON`,
  );
}
