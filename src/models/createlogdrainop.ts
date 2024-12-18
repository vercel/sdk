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
 * The delivery log format
 */
export const DeliveryFormat = {
  Json: "json",
  Ndjson: "ndjson",
  Syslog: "syslog",
} as const;
/**
 * The delivery log format
 */
export type DeliveryFormat = ClosedEnum<typeof DeliveryFormat>;

export const Sources = {
  Static: "static",
  Lambda: "lambda",
  Build: "build",
  Edge: "edge",
  External: "external",
  Firewall: "firewall",
} as const;
export type Sources = ClosedEnum<typeof Sources>;

export const Environments = {
  Preview: "preview",
  Production: "production",
} as const;
export type Environments = ClosedEnum<typeof Environments>;

export type CreateLogDrainRequestBody = {
  /**
   * The name of the log drain
   */
  name: string;
  projectIds?: Array<string> | undefined;
  /**
   * A secret to sign log drain notification headers so a consumer can verify their authenticity
   */
  secret?: string | undefined;
  /**
   * The delivery log format
   */
  deliveryFormat?: DeliveryFormat | undefined;
  /**
   * The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`.
   */
  url: string;
  sources?: Array<Sources> | undefined;
  /**
   * Headers to be sent together with the request
   */
  headers?: { [k: string]: string } | undefined;
  environments?: Array<Environments> | undefined;
};

export type CreateLogDrainRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody: CreateLogDrainRequestBody;
};

/**
 * The delivery log format
 */
export const CreateLogDrainDeliveryFormat = {
  Json: "json",
  Ndjson: "ndjson",
  Syslog: "syslog",
} as const;
/**
 * The delivery log format
 */
export type CreateLogDrainDeliveryFormat = ClosedEnum<
  typeof CreateLogDrainDeliveryFormat
>;

/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export const CreateLogDrainSources = {
  Build: "build",
  Edge: "edge",
  Lambda: "lambda",
  Static: "static",
  External: "external",
  Firewall: "firewall",
} as const;
/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export type CreateLogDrainSources = ClosedEnum<typeof CreateLogDrainSources>;

/**
 * Whether the log drain was created by an integration or by a user
 */
export const CreateLogDrainCreatedFrom = {
  SelfServed: "self-served",
  Integration: "integration",
} as const;
/**
 * Whether the log drain was created by an integration or by a user
 */
export type CreateLogDrainCreatedFrom = ClosedEnum<
  typeof CreateLogDrainCreatedFrom
>;

/**
 * The environment of log drain
 */
export const CreateLogDrainEnvironments = {
  Production: "production",
  Preview: "preview",
} as const;
/**
 * The environment of log drain
 */
export type CreateLogDrainEnvironments = ClosedEnum<
  typeof CreateLogDrainEnvironments
>;

/**
 * The log drain was successfully created
 */
export type CreateLogDrainResponseBody = {
  /**
   * The oauth2 client application id that created this log drain
   */
  clientId?: string | undefined;
  /**
   * The client configuration this log drain was created with
   */
  configurationId?: string | undefined;
  /**
   * A timestamp that tells you when the log drain was created
   */
  createdAt: number;
  /**
   * The unique identifier of the log drain. Always prefixed with `ld_`
   */
  id: string;
  /**
   * The delivery log format
   */
  deliveryFormat?: CreateLogDrainDeliveryFormat | undefined;
  /**
   * The name of the log drain
   */
  name: string;
  /**
   * The identifier of the team or user whose events will trigger the log drain
   */
  ownerId: string;
  projectId?: string | null | undefined;
  /**
   * The identifier of the projects this log drain is associated with
   */
  projectIds?: Array<string> | undefined;
  /**
   * The URL to call when logs are generated
   */
  url: string;
  /**
   * The sources from which logs are currently being delivered to this log drain.
   */
  sources?: Array<CreateLogDrainSources> | undefined;
  /**
   * Whether the log drain was created by an integration or by a user
   */
  createdFrom?: CreateLogDrainCreatedFrom | undefined;
  /**
   * The headers to send with the request
   */
  headers?: { [k: string]: string } | undefined;
  /**
   * The environment of log drain
   */
  environments: Array<CreateLogDrainEnvironments>;
  /**
   * The branch regexp of log drain
   */
  branch?: string | undefined;
  /**
   * The sampling rate of log drain
   */
  samplingRate?: number | undefined;
};

/** @internal */
export const DeliveryFormat$inboundSchema: z.ZodNativeEnum<
  typeof DeliveryFormat
> = z.nativeEnum(DeliveryFormat);

/** @internal */
export const DeliveryFormat$outboundSchema: z.ZodNativeEnum<
  typeof DeliveryFormat
> = DeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliveryFormat$ {
  /** @deprecated use `DeliveryFormat$inboundSchema` instead. */
  export const inboundSchema = DeliveryFormat$inboundSchema;
  /** @deprecated use `DeliveryFormat$outboundSchema` instead. */
  export const outboundSchema = DeliveryFormat$outboundSchema;
}

/** @internal */
export const Sources$inboundSchema: z.ZodNativeEnum<typeof Sources> = z
  .nativeEnum(Sources);

/** @internal */
export const Sources$outboundSchema: z.ZodNativeEnum<typeof Sources> =
  Sources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sources$ {
  /** @deprecated use `Sources$inboundSchema` instead. */
  export const inboundSchema = Sources$inboundSchema;
  /** @deprecated use `Sources$outboundSchema` instead. */
  export const outboundSchema = Sources$outboundSchema;
}

/** @internal */
export const Environments$inboundSchema: z.ZodNativeEnum<typeof Environments> =
  z.nativeEnum(Environments);

/** @internal */
export const Environments$outboundSchema: z.ZodNativeEnum<typeof Environments> =
  Environments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Environments$ {
  /** @deprecated use `Environments$inboundSchema` instead. */
  export const inboundSchema = Environments$inboundSchema;
  /** @deprecated use `Environments$outboundSchema` instead. */
  export const outboundSchema = Environments$outboundSchema;
}

/** @internal */
export const CreateLogDrainRequestBody$inboundSchema: z.ZodType<
  CreateLogDrainRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  projectIds: z.array(z.string()).optional(),
  secret: z.string().optional(),
  deliveryFormat: DeliveryFormat$inboundSchema.optional(),
  url: z.string(),
  sources: z.array(Sources$inboundSchema).optional(),
  headers: z.record(z.string()).optional(),
  environments: z.array(Environments$inboundSchema).optional(),
});

/** @internal */
export type CreateLogDrainRequestBody$Outbound = {
  name: string;
  projectIds?: Array<string> | undefined;
  secret?: string | undefined;
  deliveryFormat?: string | undefined;
  url: string;
  sources?: Array<string> | undefined;
  headers?: { [k: string]: string } | undefined;
  environments?: Array<string> | undefined;
};

/** @internal */
export const CreateLogDrainRequestBody$outboundSchema: z.ZodType<
  CreateLogDrainRequestBody$Outbound,
  z.ZodTypeDef,
  CreateLogDrainRequestBody
> = z.object({
  name: z.string(),
  projectIds: z.array(z.string()).optional(),
  secret: z.string().optional(),
  deliveryFormat: DeliveryFormat$outboundSchema.optional(),
  url: z.string(),
  sources: z.array(Sources$outboundSchema).optional(),
  headers: z.record(z.string()).optional(),
  environments: z.array(Environments$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainRequestBody$ {
  /** @deprecated use `CreateLogDrainRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainRequestBody$inboundSchema;
  /** @deprecated use `CreateLogDrainRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainRequestBody$outboundSchema;
  /** @deprecated use `CreateLogDrainRequestBody$Outbound` instead. */
  export type Outbound = CreateLogDrainRequestBody$Outbound;
}

export function createLogDrainRequestBodyToJSON(
  createLogDrainRequestBody: CreateLogDrainRequestBody,
): string {
  return JSON.stringify(
    CreateLogDrainRequestBody$outboundSchema.parse(createLogDrainRequestBody),
  );
}

export function createLogDrainRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateLogDrainRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLogDrainRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLogDrainRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateLogDrainRequest$inboundSchema: z.ZodType<
  CreateLogDrainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => CreateLogDrainRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateLogDrainRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody: CreateLogDrainRequestBody$Outbound;
};

/** @internal */
export const CreateLogDrainRequest$outboundSchema: z.ZodType<
  CreateLogDrainRequest$Outbound,
  z.ZodTypeDef,
  CreateLogDrainRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => CreateLogDrainRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainRequest$ {
  /** @deprecated use `CreateLogDrainRequest$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainRequest$inboundSchema;
  /** @deprecated use `CreateLogDrainRequest$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainRequest$outboundSchema;
  /** @deprecated use `CreateLogDrainRequest$Outbound` instead. */
  export type Outbound = CreateLogDrainRequest$Outbound;
}

export function createLogDrainRequestToJSON(
  createLogDrainRequest: CreateLogDrainRequest,
): string {
  return JSON.stringify(
    CreateLogDrainRequest$outboundSchema.parse(createLogDrainRequest),
  );
}

export function createLogDrainRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateLogDrainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLogDrainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLogDrainRequest' from JSON`,
  );
}

/** @internal */
export const CreateLogDrainDeliveryFormat$inboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainDeliveryFormat
> = z.nativeEnum(CreateLogDrainDeliveryFormat);

/** @internal */
export const CreateLogDrainDeliveryFormat$outboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainDeliveryFormat
> = CreateLogDrainDeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainDeliveryFormat$ {
  /** @deprecated use `CreateLogDrainDeliveryFormat$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainDeliveryFormat$inboundSchema;
  /** @deprecated use `CreateLogDrainDeliveryFormat$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainDeliveryFormat$outboundSchema;
}

/** @internal */
export const CreateLogDrainSources$inboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainSources
> = z.nativeEnum(CreateLogDrainSources);

/** @internal */
export const CreateLogDrainSources$outboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainSources
> = CreateLogDrainSources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainSources$ {
  /** @deprecated use `CreateLogDrainSources$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainSources$inboundSchema;
  /** @deprecated use `CreateLogDrainSources$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainSources$outboundSchema;
}

/** @internal */
export const CreateLogDrainCreatedFrom$inboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainCreatedFrom
> = z.nativeEnum(CreateLogDrainCreatedFrom);

/** @internal */
export const CreateLogDrainCreatedFrom$outboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainCreatedFrom
> = CreateLogDrainCreatedFrom$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainCreatedFrom$ {
  /** @deprecated use `CreateLogDrainCreatedFrom$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainCreatedFrom$inboundSchema;
  /** @deprecated use `CreateLogDrainCreatedFrom$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainCreatedFrom$outboundSchema;
}

/** @internal */
export const CreateLogDrainEnvironments$inboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainEnvironments
> = z.nativeEnum(CreateLogDrainEnvironments);

/** @internal */
export const CreateLogDrainEnvironments$outboundSchema: z.ZodNativeEnum<
  typeof CreateLogDrainEnvironments
> = CreateLogDrainEnvironments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainEnvironments$ {
  /** @deprecated use `CreateLogDrainEnvironments$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainEnvironments$inboundSchema;
  /** @deprecated use `CreateLogDrainEnvironments$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainEnvironments$outboundSchema;
}

/** @internal */
export const CreateLogDrainResponseBody$inboundSchema: z.ZodType<
  CreateLogDrainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientId: z.string().optional(),
  configurationId: z.string().optional(),
  createdAt: z.number(),
  id: z.string(),
  deliveryFormat: CreateLogDrainDeliveryFormat$inboundSchema.optional(),
  name: z.string(),
  ownerId: z.string(),
  projectId: z.nullable(z.string()).optional(),
  projectIds: z.array(z.string()).optional(),
  url: z.string(),
  sources: z.array(CreateLogDrainSources$inboundSchema).optional(),
  createdFrom: CreateLogDrainCreatedFrom$inboundSchema.optional(),
  headers: z.record(z.string()).optional(),
  environments: z.array(CreateLogDrainEnvironments$inboundSchema),
  branch: z.string().optional(),
  samplingRate: z.number().optional(),
});

/** @internal */
export type CreateLogDrainResponseBody$Outbound = {
  clientId?: string | undefined;
  configurationId?: string | undefined;
  createdAt: number;
  id: string;
  deliveryFormat?: string | undefined;
  name: string;
  ownerId: string;
  projectId?: string | null | undefined;
  projectIds?: Array<string> | undefined;
  url: string;
  sources?: Array<string> | undefined;
  createdFrom?: string | undefined;
  headers?: { [k: string]: string } | undefined;
  environments: Array<string>;
  branch?: string | undefined;
  samplingRate?: number | undefined;
};

/** @internal */
export const CreateLogDrainResponseBody$outboundSchema: z.ZodType<
  CreateLogDrainResponseBody$Outbound,
  z.ZodTypeDef,
  CreateLogDrainResponseBody
> = z.object({
  clientId: z.string().optional(),
  configurationId: z.string().optional(),
  createdAt: z.number(),
  id: z.string(),
  deliveryFormat: CreateLogDrainDeliveryFormat$outboundSchema.optional(),
  name: z.string(),
  ownerId: z.string(),
  projectId: z.nullable(z.string()).optional(),
  projectIds: z.array(z.string()).optional(),
  url: z.string(),
  sources: z.array(CreateLogDrainSources$outboundSchema).optional(),
  createdFrom: CreateLogDrainCreatedFrom$outboundSchema.optional(),
  headers: z.record(z.string()).optional(),
  environments: z.array(CreateLogDrainEnvironments$outboundSchema),
  branch: z.string().optional(),
  samplingRate: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLogDrainResponseBody$ {
  /** @deprecated use `CreateLogDrainResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateLogDrainResponseBody$inboundSchema;
  /** @deprecated use `CreateLogDrainResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateLogDrainResponseBody$outboundSchema;
  /** @deprecated use `CreateLogDrainResponseBody$Outbound` instead. */
  export type Outbound = CreateLogDrainResponseBody$Outbound;
}

export function createLogDrainResponseBodyToJSON(
  createLogDrainResponseBody: CreateLogDrainResponseBody,
): string {
  return JSON.stringify(
    CreateLogDrainResponseBody$outboundSchema.parse(createLogDrainResponseBody),
  );
}

export function createLogDrainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateLogDrainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLogDrainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLogDrainResponseBody' from JSON`,
  );
}
