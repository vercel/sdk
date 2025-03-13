/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ErrorT = {
  code: string;
  message: string;
};

export type VercelBadRequestErrorData = {
  error: ErrorT;
};

export class VercelBadRequestError extends Error {
  error: ErrorT;

  /** The original data that was passed to this error instance. */
  data$: VercelBadRequestErrorData;

  constructor(err: VercelBadRequestErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "VercelBadRequestError";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    code: z.string(),
    message: z.string(),
  });

/** @internal */
export type ErrorT$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  code: z.string(),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const VercelBadRequestError$inboundSchema: z.ZodType<
  VercelBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => ErrorT$inboundSchema),
})
  .transform((v) => {
    return new VercelBadRequestError(v);
  });

/** @internal */
export type VercelBadRequestError$Outbound = {
  error: ErrorT$Outbound;
};

/** @internal */
export const VercelBadRequestError$outboundSchema: z.ZodType<
  VercelBadRequestError$Outbound,
  z.ZodTypeDef,
  VercelBadRequestError
> = z.instanceof(VercelBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => ErrorT$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VercelBadRequestError$ {
  /** @deprecated use `VercelBadRequestError$inboundSchema` instead. */
  export const inboundSchema = VercelBadRequestError$inboundSchema;
  /** @deprecated use `VercelBadRequestError$outboundSchema` instead. */
  export const outboundSchema = VercelBadRequestError$outboundSchema;
  /** @deprecated use `VercelBadRequestError$Outbound` instead. */
  export type Outbound = VercelBadRequestError$Outbound;
}
