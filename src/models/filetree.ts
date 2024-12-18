/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * String indicating the type of file tree entry.
 */
export const Type = {
  Directory: "directory",
  File: "file",
  Symlink: "symlink",
  Lambda: "lambda",
  Middleware: "middleware",
  Invalid: "invalid",
} as const;
/**
 * String indicating the type of file tree entry.
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * A deployment file tree entry
 */
export type FileTree = {
  /**
   * The name of the file tree entry
   */
  name: string;
  /**
   * String indicating the type of file tree entry.
   */
  type: Type;
  /**
   * The unique identifier of the file (only valid for the `file` type)
   */
  uid?: string | undefined;
  /**
   * The list of children files of the directory (only valid for the `directory` type)
   */
  children?: Array<FileTree> | undefined;
  /**
   * The content-type of the file (only valid for the `file` type)
   */
  contentType?: string | undefined;
  /**
   * The file "mode" indicating file type and permissions.
   */
  mode: number;
  /**
   * Not currently used. See `file-list-to-tree.ts`.
   */
  symlink?: string | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const FileTree$inboundSchema: z.ZodType<
  FileTree,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  type: Type$inboundSchema,
  uid: z.string().optional(),
  children: z.array(z.lazy(() => FileTree$inboundSchema)).optional(),
  contentType: z.string().optional(),
  mode: z.number(),
  symlink: z.string().optional(),
});

/** @internal */
export type FileTree$Outbound = {
  name: string;
  type: string;
  uid?: string | undefined;
  children?: Array<FileTree$Outbound> | undefined;
  contentType?: string | undefined;
  mode: number;
  symlink?: string | undefined;
};

/** @internal */
export const FileTree$outboundSchema: z.ZodType<
  FileTree$Outbound,
  z.ZodTypeDef,
  FileTree
> = z.object({
  name: z.string(),
  type: Type$outboundSchema,
  uid: z.string().optional(),
  children: z.array(z.lazy(() => FileTree$outboundSchema)).optional(),
  contentType: z.string().optional(),
  mode: z.number(),
  symlink: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileTree$ {
  /** @deprecated use `FileTree$inboundSchema` instead. */
  export const inboundSchema = FileTree$inboundSchema;
  /** @deprecated use `FileTree$outboundSchema` instead. */
  export const outboundSchema = FileTree$outboundSchema;
  /** @deprecated use `FileTree$Outbound` instead. */
  export type Outbound = FileTree$Outbound;
}

export function fileTreeToJSON(fileTree: FileTree): string {
  return JSON.stringify(FileTree$outboundSchema.parse(fileTree));
}

export function fileTreeFromJSON(
  jsonString: string,
): SafeParseResult<FileTree, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileTree$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileTree' from JSON`,
  );
}