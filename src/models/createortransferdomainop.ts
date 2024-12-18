/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * transfer-in
 */
export type CreateOrTransferDomainRequestBody3 = {
  /**
   * The domain name you want to add.
   */
  name: string;
  /**
   * The domain operation to perform. It can be either `add` or `transfer-in`.
   */
  method: string;
  /**
   * The authorization code assigned to the domain.
   */
  authCode?: string | undefined;
  /**
   * The price you expect to be charged for the required 1 year renewal.
   */
  expectedPrice?: number | undefined;
};

/**
 * move-in
 */
export type CreateOrTransferDomainRequestBody2 = {
  /**
   * The domain name you want to add.
   */
  name: string;
  /**
   * The domain operation to perform. It can be either `add` or `transfer-in`.
   */
  method: string;
  /**
   * The move-in token from Move Requested email.
   */
  token?: string | undefined;
};

/**
 * add
 */
export type CreateOrTransferDomainRequestBody1 = {
  /**
   * The domain name you want to add.
   */
  name: string;
  /**
   * Whether the domain has the Vercel Edge Network enabled or not.
   */
  cdnEnabled?: boolean | undefined;
  zone?: boolean | undefined;
  /**
   * The domain operation to perform. It can be either `add` or `transfer-in`.
   */
  method?: string | undefined;
};

export type CreateOrTransferDomainRequestBody =
  | CreateOrTransferDomainRequestBody2
  | CreateOrTransferDomainRequestBody1
  | CreateOrTransferDomainRequestBody3;

export type CreateOrTransferDomainRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody:
    | CreateOrTransferDomainRequestBody2
    | CreateOrTransferDomainRequestBody1
    | CreateOrTransferDomainRequestBody3;
};

/**
 * An object containing information of the domain creator, including the user's id, username, and email.
 */
export type CreateOrTransferDomainCreator = {
  username: string;
  email: string;
  customerId?: string | null | undefined;
  isDomainReseller?: boolean | undefined;
  id: string;
};

/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export const CreateOrTransferDomainServiceType = {
  ZeitWorld: "zeit.world",
  External: "external",
  Na: "na",
} as const;
/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export type CreateOrTransferDomainServiceType = ClosedEnum<
  typeof CreateOrTransferDomainServiceType
>;

export type CreateOrTransferDomainDomain = {
  /**
   * If the domain has the ownership verified.
   */
  verified: boolean;
  /**
   * A list of the current nameservers of the domain.
   */
  nameservers: Array<string>;
  /**
   * A list of the intended nameservers for the domain to point to Vercel DNS.
   */
  intendedNameservers: Array<string>;
  /**
   * A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
   */
  customNameservers?: Array<string> | undefined;
  /**
   * An object containing information of the domain creator, including the user's id, username, and email.
   */
  creator: CreateOrTransferDomainCreator;
  /**
   * The domain name.
   */
  name: string;
  /**
   * If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
   */
  boughtAt: number | null;
  /**
   * Timestamp in milliseconds when the domain was created in the registry.
   */
  createdAt: number;
  /**
   * Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.
   */
  expiresAt: number | null;
  /**
   * The unique identifier of the domain.
   */
  id: string;
  /**
   * Timestamp in milliseconds at which the domain was ordered.
   */
  orderedAt?: number | undefined;
  /**
   * Indicates whether the domain is set to automatically renew.
   */
  renew?: boolean | undefined;
  /**
   * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
   */
  serviceType: CreateOrTransferDomainServiceType;
  /**
   * Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.
   */
  transferredAt?: number | null | undefined;
  /**
   * If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.
   */
  transferStartedAt?: number | undefined;
  userId: string;
  teamId: string | null;
};

export type CreateOrTransferDomainResponseBody = {
  domain: CreateOrTransferDomainDomain;
};

/** @internal */
export const CreateOrTransferDomainRequestBody3$inboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody3,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  method: z.string(),
  authCode: z.string().optional(),
  expectedPrice: z.number().optional(),
});

/** @internal */
export type CreateOrTransferDomainRequestBody3$Outbound = {
  name: string;
  method: string;
  authCode?: string | undefined;
  expectedPrice?: number | undefined;
};

/** @internal */
export const CreateOrTransferDomainRequestBody3$outboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody3$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainRequestBody3
> = z.object({
  name: z.string(),
  method: z.string(),
  authCode: z.string().optional(),
  expectedPrice: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainRequestBody3$ {
  /** @deprecated use `CreateOrTransferDomainRequestBody3$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainRequestBody3$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody3$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainRequestBody3$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody3$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainRequestBody3$Outbound;
}

export function createOrTransferDomainRequestBody3ToJSON(
  createOrTransferDomainRequestBody3: CreateOrTransferDomainRequestBody3,
): string {
  return JSON.stringify(
    CreateOrTransferDomainRequestBody3$outboundSchema.parse(
      createOrTransferDomainRequestBody3,
    ),
  );
}

export function createOrTransferDomainRequestBody3FromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainRequestBody3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOrTransferDomainRequestBody3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainRequestBody3' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainRequestBody2$inboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  method: z.string(),
  token: z.string().optional(),
});

/** @internal */
export type CreateOrTransferDomainRequestBody2$Outbound = {
  name: string;
  method: string;
  token?: string | undefined;
};

/** @internal */
export const CreateOrTransferDomainRequestBody2$outboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody2$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainRequestBody2
> = z.object({
  name: z.string(),
  method: z.string(),
  token: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainRequestBody2$ {
  /** @deprecated use `CreateOrTransferDomainRequestBody2$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainRequestBody2$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody2$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainRequestBody2$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody2$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainRequestBody2$Outbound;
}

export function createOrTransferDomainRequestBody2ToJSON(
  createOrTransferDomainRequestBody2: CreateOrTransferDomainRequestBody2,
): string {
  return JSON.stringify(
    CreateOrTransferDomainRequestBody2$outboundSchema.parse(
      createOrTransferDomainRequestBody2,
    ),
  );
}

export function createOrTransferDomainRequestBody2FromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainRequestBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOrTransferDomainRequestBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainRequestBody2' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainRequestBody1$inboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  cdnEnabled: z.boolean().optional(),
  zone: z.boolean().optional(),
  method: z.string().optional(),
});

/** @internal */
export type CreateOrTransferDomainRequestBody1$Outbound = {
  name: string;
  cdnEnabled?: boolean | undefined;
  zone?: boolean | undefined;
  method?: string | undefined;
};

/** @internal */
export const CreateOrTransferDomainRequestBody1$outboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody1$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainRequestBody1
> = z.object({
  name: z.string(),
  cdnEnabled: z.boolean().optional(),
  zone: z.boolean().optional(),
  method: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainRequestBody1$ {
  /** @deprecated use `CreateOrTransferDomainRequestBody1$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainRequestBody1$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody1$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainRequestBody1$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody1$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainRequestBody1$Outbound;
}

export function createOrTransferDomainRequestBody1ToJSON(
  createOrTransferDomainRequestBody1: CreateOrTransferDomainRequestBody1,
): string {
  return JSON.stringify(
    CreateOrTransferDomainRequestBody1$outboundSchema.parse(
      createOrTransferDomainRequestBody1,
    ),
  );
}

export function createOrTransferDomainRequestBody1FromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainRequestBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOrTransferDomainRequestBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainRequestBody1' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainRequestBody$inboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateOrTransferDomainRequestBody2$inboundSchema),
  z.lazy(() => CreateOrTransferDomainRequestBody1$inboundSchema),
  z.lazy(() => CreateOrTransferDomainRequestBody3$inboundSchema),
]);

/** @internal */
export type CreateOrTransferDomainRequestBody$Outbound =
  | CreateOrTransferDomainRequestBody2$Outbound
  | CreateOrTransferDomainRequestBody1$Outbound
  | CreateOrTransferDomainRequestBody3$Outbound;

/** @internal */
export const CreateOrTransferDomainRequestBody$outboundSchema: z.ZodType<
  CreateOrTransferDomainRequestBody$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainRequestBody
> = z.union([
  z.lazy(() => CreateOrTransferDomainRequestBody2$outboundSchema),
  z.lazy(() => CreateOrTransferDomainRequestBody1$outboundSchema),
  z.lazy(() => CreateOrTransferDomainRequestBody3$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainRequestBody$ {
  /** @deprecated use `CreateOrTransferDomainRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainRequestBody$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainRequestBody$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequestBody$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainRequestBody$Outbound;
}

export function createOrTransferDomainRequestBodyToJSON(
  createOrTransferDomainRequestBody: CreateOrTransferDomainRequestBody,
): string {
  return JSON.stringify(
    CreateOrTransferDomainRequestBody$outboundSchema.parse(
      createOrTransferDomainRequestBody,
    ),
  );
}

export function createOrTransferDomainRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrTransferDomainRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainRequest$inboundSchema: z.ZodType<
  CreateOrTransferDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.union([
    z.lazy(() => CreateOrTransferDomainRequestBody2$inboundSchema),
    z.lazy(() => CreateOrTransferDomainRequestBody1$inboundSchema),
    z.lazy(() => CreateOrTransferDomainRequestBody3$inboundSchema),
  ]),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateOrTransferDomainRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody:
    | CreateOrTransferDomainRequestBody2$Outbound
    | CreateOrTransferDomainRequestBody1$Outbound
    | CreateOrTransferDomainRequestBody3$Outbound;
};

/** @internal */
export const CreateOrTransferDomainRequest$outboundSchema: z.ZodType<
  CreateOrTransferDomainRequest$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.union([
    z.lazy(() => CreateOrTransferDomainRequestBody2$outboundSchema),
    z.lazy(() => CreateOrTransferDomainRequestBody1$outboundSchema),
    z.lazy(() => CreateOrTransferDomainRequestBody3$outboundSchema),
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
export namespace CreateOrTransferDomainRequest$ {
  /** @deprecated use `CreateOrTransferDomainRequest$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainRequest$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequest$outboundSchema` instead. */
  export const outboundSchema = CreateOrTransferDomainRequest$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainRequest$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainRequest$Outbound;
}

export function createOrTransferDomainRequestToJSON(
  createOrTransferDomainRequest: CreateOrTransferDomainRequest,
): string {
  return JSON.stringify(
    CreateOrTransferDomainRequest$outboundSchema.parse(
      createOrTransferDomainRequest,
    ),
  );
}

export function createOrTransferDomainRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrTransferDomainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainRequest' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainCreator$inboundSchema: z.ZodType<
  CreateOrTransferDomainCreator,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  email: z.string(),
  customerId: z.nullable(z.string()).optional(),
  isDomainReseller: z.boolean().optional(),
  id: z.string(),
});

/** @internal */
export type CreateOrTransferDomainCreator$Outbound = {
  username: string;
  email: string;
  customerId?: string | null | undefined;
  isDomainReseller?: boolean | undefined;
  id: string;
};

/** @internal */
export const CreateOrTransferDomainCreator$outboundSchema: z.ZodType<
  CreateOrTransferDomainCreator$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainCreator
> = z.object({
  username: z.string(),
  email: z.string(),
  customerId: z.nullable(z.string()).optional(),
  isDomainReseller: z.boolean().optional(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainCreator$ {
  /** @deprecated use `CreateOrTransferDomainCreator$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainCreator$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainCreator$outboundSchema` instead. */
  export const outboundSchema = CreateOrTransferDomainCreator$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainCreator$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainCreator$Outbound;
}

export function createOrTransferDomainCreatorToJSON(
  createOrTransferDomainCreator: CreateOrTransferDomainCreator,
): string {
  return JSON.stringify(
    CreateOrTransferDomainCreator$outboundSchema.parse(
      createOrTransferDomainCreator,
    ),
  );
}

export function createOrTransferDomainCreatorFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainCreator, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrTransferDomainCreator$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainCreator' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainServiceType$inboundSchema: z.ZodNativeEnum<
  typeof CreateOrTransferDomainServiceType
> = z.nativeEnum(CreateOrTransferDomainServiceType);

/** @internal */
export const CreateOrTransferDomainServiceType$outboundSchema: z.ZodNativeEnum<
  typeof CreateOrTransferDomainServiceType
> = CreateOrTransferDomainServiceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainServiceType$ {
  /** @deprecated use `CreateOrTransferDomainServiceType$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainServiceType$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainServiceType$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainServiceType$outboundSchema;
}

/** @internal */
export const CreateOrTransferDomainDomain$inboundSchema: z.ZodType<
  CreateOrTransferDomainDomain,
  z.ZodTypeDef,
  unknown
> = z.object({
  verified: z.boolean(),
  nameservers: z.array(z.string()),
  intendedNameservers: z.array(z.string()),
  customNameservers: z.array(z.string()).optional(),
  creator: z.lazy(() => CreateOrTransferDomainCreator$inboundSchema),
  name: z.string(),
  boughtAt: z.nullable(z.number()),
  createdAt: z.number(),
  expiresAt: z.nullable(z.number()),
  id: z.string(),
  orderedAt: z.number().optional(),
  renew: z.boolean().optional(),
  serviceType: CreateOrTransferDomainServiceType$inboundSchema,
  transferredAt: z.nullable(z.number()).optional(),
  transferStartedAt: z.number().optional(),
  userId: z.string(),
  teamId: z.nullable(z.string()),
});

/** @internal */
export type CreateOrTransferDomainDomain$Outbound = {
  verified: boolean;
  nameservers: Array<string>;
  intendedNameservers: Array<string>;
  customNameservers?: Array<string> | undefined;
  creator: CreateOrTransferDomainCreator$Outbound;
  name: string;
  boughtAt: number | null;
  createdAt: number;
  expiresAt: number | null;
  id: string;
  orderedAt?: number | undefined;
  renew?: boolean | undefined;
  serviceType: string;
  transferredAt?: number | null | undefined;
  transferStartedAt?: number | undefined;
  userId: string;
  teamId: string | null;
};

/** @internal */
export const CreateOrTransferDomainDomain$outboundSchema: z.ZodType<
  CreateOrTransferDomainDomain$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainDomain
> = z.object({
  verified: z.boolean(),
  nameservers: z.array(z.string()),
  intendedNameservers: z.array(z.string()),
  customNameservers: z.array(z.string()).optional(),
  creator: z.lazy(() => CreateOrTransferDomainCreator$outboundSchema),
  name: z.string(),
  boughtAt: z.nullable(z.number()),
  createdAt: z.number(),
  expiresAt: z.nullable(z.number()),
  id: z.string(),
  orderedAt: z.number().optional(),
  renew: z.boolean().optional(),
  serviceType: CreateOrTransferDomainServiceType$outboundSchema,
  transferredAt: z.nullable(z.number()).optional(),
  transferStartedAt: z.number().optional(),
  userId: z.string(),
  teamId: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainDomain$ {
  /** @deprecated use `CreateOrTransferDomainDomain$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainDomain$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainDomain$outboundSchema` instead. */
  export const outboundSchema = CreateOrTransferDomainDomain$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainDomain$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainDomain$Outbound;
}

export function createOrTransferDomainDomainToJSON(
  createOrTransferDomainDomain: CreateOrTransferDomainDomain,
): string {
  return JSON.stringify(
    CreateOrTransferDomainDomain$outboundSchema.parse(
      createOrTransferDomainDomain,
    ),
  );
}

export function createOrTransferDomainDomainFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainDomain, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrTransferDomainDomain$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainDomain' from JSON`,
  );
}

/** @internal */
export const CreateOrTransferDomainResponseBody$inboundSchema: z.ZodType<
  CreateOrTransferDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.lazy(() => CreateOrTransferDomainDomain$inboundSchema),
});

/** @internal */
export type CreateOrTransferDomainResponseBody$Outbound = {
  domain: CreateOrTransferDomainDomain$Outbound;
};

/** @internal */
export const CreateOrTransferDomainResponseBody$outboundSchema: z.ZodType<
  CreateOrTransferDomainResponseBody$Outbound,
  z.ZodTypeDef,
  CreateOrTransferDomainResponseBody
> = z.object({
  domain: z.lazy(() => CreateOrTransferDomainDomain$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrTransferDomainResponseBody$ {
  /** @deprecated use `CreateOrTransferDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateOrTransferDomainResponseBody$inboundSchema;
  /** @deprecated use `CreateOrTransferDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateOrTransferDomainResponseBody$outboundSchema;
  /** @deprecated use `CreateOrTransferDomainResponseBody$Outbound` instead. */
  export type Outbound = CreateOrTransferDomainResponseBody$Outbound;
}

export function createOrTransferDomainResponseBodyToJSON(
  createOrTransferDomainResponseBody: CreateOrTransferDomainResponseBody,
): string {
  return JSON.stringify(
    CreateOrTransferDomainResponseBody$outboundSchema.parse(
      createOrTransferDomainResponseBody,
    ),
  );
}

export function createOrTransferDomainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrTransferDomainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOrTransferDomainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrTransferDomainResponseBody' from JSON`,
  );
}
