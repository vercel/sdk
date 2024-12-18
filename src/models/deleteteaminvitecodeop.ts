/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteTeamInviteCodeRequest = {
  /**
   * The Team invite code ID.
   */
  inviteId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId: string;
};

/**
 * Successfully deleted Team invite code.
 */
export type DeleteTeamInviteCodeResponseBody = {
  /**
   * ID of the team.
   */
  id: string;
};

/** @internal */
export const DeleteTeamInviteCodeRequest$inboundSchema: z.ZodType<
  DeleteTeamInviteCodeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  inviteId: z.string(),
  teamId: z.string(),
});

/** @internal */
export type DeleteTeamInviteCodeRequest$Outbound = {
  inviteId: string;
  teamId: string;
};

/** @internal */
export const DeleteTeamInviteCodeRequest$outboundSchema: z.ZodType<
  DeleteTeamInviteCodeRequest$Outbound,
  z.ZodTypeDef,
  DeleteTeamInviteCodeRequest
> = z.object({
  inviteId: z.string(),
  teamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTeamInviteCodeRequest$ {
  /** @deprecated use `DeleteTeamInviteCodeRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamInviteCodeRequest$inboundSchema;
  /** @deprecated use `DeleteTeamInviteCodeRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamInviteCodeRequest$outboundSchema;
  /** @deprecated use `DeleteTeamInviteCodeRequest$Outbound` instead. */
  export type Outbound = DeleteTeamInviteCodeRequest$Outbound;
}

export function deleteTeamInviteCodeRequestToJSON(
  deleteTeamInviteCodeRequest: DeleteTeamInviteCodeRequest,
): string {
  return JSON.stringify(
    DeleteTeamInviteCodeRequest$outboundSchema.parse(
      deleteTeamInviteCodeRequest,
    ),
  );
}

export function deleteTeamInviteCodeRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTeamInviteCodeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTeamInviteCodeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTeamInviteCodeRequest' from JSON`,
  );
}

/** @internal */
export const DeleteTeamInviteCodeResponseBody$inboundSchema: z.ZodType<
  DeleteTeamInviteCodeResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteTeamInviteCodeResponseBody$Outbound = {
  id: string;
};

/** @internal */
export const DeleteTeamInviteCodeResponseBody$outboundSchema: z.ZodType<
  DeleteTeamInviteCodeResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteTeamInviteCodeResponseBody
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTeamInviteCodeResponseBody$ {
  /** @deprecated use `DeleteTeamInviteCodeResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamInviteCodeResponseBody$inboundSchema;
  /** @deprecated use `DeleteTeamInviteCodeResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamInviteCodeResponseBody$outboundSchema;
  /** @deprecated use `DeleteTeamInviteCodeResponseBody$Outbound` instead. */
  export type Outbound = DeleteTeamInviteCodeResponseBody$Outbound;
}

export function deleteTeamInviteCodeResponseBodyToJSON(
  deleteTeamInviteCodeResponseBody: DeleteTeamInviteCodeResponseBody,
): string {
  return JSON.stringify(
    DeleteTeamInviteCodeResponseBody$outboundSchema.parse(
      deleteTeamInviteCodeResponseBody,
    ),
  );
}

export function deleteTeamInviteCodeResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTeamInviteCodeResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTeamInviteCodeResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTeamInviteCodeResponseBody' from JSON`,
  );
}
