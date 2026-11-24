import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { inspect } from "node:util";
import test from "node:test";
import { Vercel } from "../esm/index.js";
import { HTTPClient } from "../esm/lib/http.js";

const API_TOKEN = "vercel_api_token_1234567890";
const WEBHOOK_SECRET = "webhook_signing_secret_1234567890";

function captureLogger() {
  const lines = [];
  const record = (...args) => {
    lines.push(args.map((arg) => inspect(arg, { depth: null })).join(" "));
  };
  return {
    lines,
    logger: { group: record, groupEnd: () => {}, log: record },
  };
}

function webhookClient() {
  return new HTTPClient({
    fetcher: async () =>
      new Response(
        JSON.stringify({
          id: "account_hook_1234567890",
          url: "https://example.com/webhook",
          events: ["deployment.created"],
          ownerId: "team_1234567890",
          createdAt: 1234567890123,
          updatedAt: 1234567890123,
          secret: WEBHOOK_SECRET,
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
            "set-cookie": `session=${API_TOKEN}`,
          },
        },
      ),
  });
}

test("redacts the API token and webhook secret from debug logs", async () => {
  const { lines, logger } = captureLogger();
  const vercel = new Vercel({
    bearerToken: API_TOKEN,
    httpClient: webhookClient(),
    debugLogger: logger,
  });

  const result = await vercel.webhooks.createWebhook({
    teamId: "team_1234567890",
    requestBody: {
      url: "https://example.com/webhook",
      events: ["deployment.created"],
    },
  });

  assert.equal(result.secret, WEBHOOK_SECRET);

  const output = lines.join("\n");
  assert.match(output, /authorization: \[REDACTED\]/i);
  assert.match(output, /set-cookie: \[REDACTED\]/i);
  assert.match(output, /secret: '\[REDACTED\]'/);
  assert.match(output, /https:\/\/example\.com\/webhook/);
  assert.doesNotMatch(output, new RegExp(API_TOKEN));
  assert.doesNotMatch(output, new RegExp(WEBHOOK_SECRET));
});

test("redacts non-string values under secret-like keys", async () => {
  const { lines, logger } = captureLogger();
  const vercel = new Vercel({
    bearerToken: API_TOKEN,
    httpClient: new HTTPClient({
      fetcher: async () =>
        new Response(
          JSON.stringify({
            secret: 9876543210,
            token: ["token_value_1", "token_value_2"],
            clientSecret: { value: "nested_secret_value_1" },
            url: "https://example.com/webhook",
          }),
          { status: 200, headers: { "content-type": "application/json" } },
        ),
    }),
    debugLogger: logger,
  });

  await vercel.webhooks
    .createWebhook({
      teamId: "team_1234567890",
      requestBody: {
        url: "https://example.com/webhook",
        events: ["deployment.created"],
      },
    })
    .catch(() => {});

  const output = lines.join("\n");
  assert.match(output, /https:\/\/example\.com\/webhook/);
  assert.doesNotMatch(output, /9876543210/);
  assert.doesNotMatch(output, /token_value_/);
  assert.doesNotMatch(output, /nested_secret_value_1/);
});

test("preserves the debug logger redaction across generations", async () => {
  const patch = await readFile(
    ".speakeasy/patches/src/lib/sdks.ts.patch",
    "utf8",
  );
  assert.match(patch, /redactDebugLogger\(this\._options\.debugLogger\)/);

  const generatorConfig = await readFile(".speakeasy/gen.yaml", "utf8");
  assert.match(generatorConfig, /tests\/debug-logger-redaction\.test\.mjs/);
});
