import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../src/models/connectintegrationresourcetoprojectop.ts", import.meta.url),
  "utf8",
);
const spec = JSON.parse(
  await readFile(new URL("../vercel-spec.json", import.meta.url), "utf8"),
);
const schema =
  spec.paths[
    "/v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections"
  ].post.requestBody.content["application/json"].schema.properties
    .envVarEnvironments;

test("accepts built-in, custom, and mixed environment strings", () => {
  const values = [
    ["production"],
    ["preview", "team-preview"],
    ["env_1234567890", "development"],
    ["production", "custom-slug", "env_1234567890"],
  ];

  assert.equal(schema.items.type, "string");
  assert.equal("enum" in schema.items, false);
  assert.match(source, /EnvVarEnvironments\$outboundSchema: z\.ZodString/);
  for (const environments of values) {
    assert.deepEqual(environments.map((value) => String(value)), environments);
  }
});

test("rejects non-string environment values", () => {
  for (const value of [null, 1, true, {}, []]) {
    assert.notEqual(typeof value, "string");
  }
});
