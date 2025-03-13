/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type VercelNotFoundErrorError = {
  code: string;
  message: string;
};

export type VercelNotFoundErrorData = {
  error: VercelNotFoundErrorError;
};

export class VercelNotFoundError extends Error {
  error: VercelNotFoundErrorError;

  /** The original data that was passed to this error instance. */
  data$: VercelNotFoundErrorData;

  constructor(err: VercelNotFoundErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "VercelNotFoundError";
  }
}

/** @internal */
export const VercelNotFoundErrorError$inboundSchema: z.ZodType<
  VercelNotFoundErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
});

/** @internal */
export type VercelNotFoundErrorError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const VercelNotFoundErrorError$outboundSchema: z.ZodType<
  VercelNotFoundErrorError$Outbound,
  z.ZodTypeDef,
  VercelNotFoundErrorError
> = z.object({
  code: z.string(),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VercelNotFoundErrorError$ {
  /** @deprecated use `VercelNotFoundErrorError$inboundSchema` instead. */
  export const inboundSchema = VercelNotFoundErrorError$inboundSchema;
  /** @deprecated use `VercelNotFoundErrorError$outboundSchema` instead. */
  export const outboundSchema = VercelNotFoundErrorError$outboundSchema;
  /** @deprecated use `VercelNotFoundErrorError$Outbound` instead. */
  export type Outbound = VercelNotFoundErrorError$Outbound;
}

export function vercelNotFoundErrorErrorToJSON(
  vercelNotFoundErrorError: VercelNotFoundErrorError,
): string {
  return JSON.stringify(
    VercelNotFoundErrorError$outboundSchema.parse(vercelNotFoundErrorError),
  );
}

export function vercelNotFoundErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<VercelNotFoundErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VercelNotFoundErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VercelNotFoundErrorError' from JSON`,
  );
}

/** @internal */
export const VercelNotFoundError$inboundSchema: z.ZodType<
  VercelNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => VercelNotFoundErrorError$inboundSchema),
})
  .transform((v) => {
    return new VercelNotFoundError(v);
  });

/** @internal */
export type VercelNotFoundError$Outbound = {
  error: VercelNotFoundErrorError$Outbound;
};

/** @internal */
export const VercelNotFoundError$outboundSchema: z.ZodType<
  VercelNotFoundError$Outbound,
  z.ZodTypeDef,
  VercelNotFoundError
> = z.instanceof(VercelNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => VercelNotFoundErrorError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VercelNotFoundError$ {
  /** @deprecated use `VercelNotFoundError$inboundSchema` instead. */
  export const inboundSchema = VercelNotFoundError$inboundSchema;
  /** @deprecated use `VercelNotFoundError$outboundSchema` instead. */
  export const outboundSchema = VercelNotFoundError$outboundSchema;
  /** @deprecated use `VercelNotFoundError$Outbound` instead. */
  export type Outbound = VercelNotFoundError$Outbound;
}
