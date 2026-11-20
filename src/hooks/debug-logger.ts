import { Logger } from "../lib/logger.js";

/*
 * This file is not generated. `.speakeasy/patches/src/lib/sdks.ts.patch`
 * wraps the caller's `debugLogger` with `redactDebugLogger` so the request and
 * response logging in `src/lib/sdks.ts` never prints credentials.
 */

const REDACTED = "[REDACTED]";

const SENSITIVE_HEADERS = new Set([
  "authorization",
  "cookie",
  "proxy-authorization",
  "set-cookie",
  "x-api-key",
]);

const SENSITIVE_KEY_SUFFIXES = [
  "apikey",
  "password",
  "privatekey",
  "secret",
  "token",
];

// Header and multipart field lines are logged as a single "name: value" string.
const NAME_VALUE_LINE = /^([A-Za-z0-9_.-]+):\s/;

function isSensitiveKey(key: string): boolean {
  const normalized = key.toLowerCase().replace(/[-_]/g, "");
  return SENSITIVE_KEY_SUFFIXES.some((suffix) => normalized.endsWith(suffix));
}

function redactLine(line: string): string {
  const match = NAME_VALUE_LINE.exec(line);
  const name = match?.[1];
  if (!name) {
    return line;
  }
  if (SENSITIVE_HEADERS.has(name.toLowerCase()) || isSensitiveKey(name)) {
    return `${name}: ${REDACTED}`;
  }
  return line;
}

function redactValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(redactValue);
  }
  if (value === null || typeof value !== "object") {
    return value;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) {
    return value;
  }
  const redacted: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(value)) {
    redacted[key] = typeof entry === "string" && isSensitiveKey(key)
      ? REDACTED
      : redactValue(entry);
  }
  return redacted;
}

function redactArg(arg: unknown): unknown {
  return typeof arg === "string" ? redactLine(arg) : redactValue(arg);
}

export function redactDebugLogger(
  logger: Logger | undefined,
): Logger | undefined {
  if (!logger) {
    return undefined;
  }
  return {
    group: (label?: string) =>
      logger.group(label === undefined ? label : redactLine(label)),
    groupEnd: () => logger.groupEnd(),
    log: (message: any, ...args: any[]) =>
      logger.log(redactArg(message), ...args.map(redactArg)),
  };
}
