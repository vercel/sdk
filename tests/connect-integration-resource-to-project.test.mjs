import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  ConnectIntegrationResourceToProjectRequestBody$outboundSchema,
  EnvVarEnvironments,
} from "../esm/models/connectintegrationresourcetoprojectop.js";

test("keeps the named union on the Connect operation only", async () => {
  const spec = JSON.parse(await readFile("vercel-spec.json", "utf8"));
  const connectItems =
    spec.paths[
      "/v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections"
    ].post.requestBody.content["application/json"].schema.properties
      .envVarEnvironments.items;
  const redirectItems =
    spec.paths["/v1/bulk-redirects"].delete.requestBody.content[
      "application/json"
    ].schema.properties.redirects.items;

  assert.equal(connectItems.title, "EnvVarEnvironmentsTarget");
  assert.deepEqual(connectItems.anyOf[0].enum, [
    "production",
    "preview",
    "development",
  ]);
  assert.equal(connectItems.anyOf[1].type, "string");
  assert.deepEqual(redirectItems, { type: "string" });
});

test("preserves the focused test command during generation", async () => {
  const generatorConfig = await readFile(".speakeasy/gen.yaml", "utf8");
  assert.match(
    generatorConfig,
    /additionalScripts:\n\s+test:connect-environments: npm run build && node --test tests\/connect-integration-resource-to-project\.test\.mjs/,
  );
});

test("accepts built-in, custom, and mixed environment strings", () => {
  const values = [
    ["production"],
    ["preview", "team-preview"],
    ["env_1234567890", "development"],
    ["production", "custom-slug", "env_1234567890"],
  ];

  for (const environments of values) {
    assert.deepEqual(
      ConnectIntegrationResourceToProjectRequestBody$outboundSchema.parse({
        projectId: "project-id",
        envVarEnvironments: environments,
      }).envVarEnvironments,
      environments,
    );
  }
  assert.equal(EnvVarEnvironments.Production, "production");
  assert.equal(EnvVarEnvironments.Preview, "preview");
  assert.equal(EnvVarEnvironments.Development, "development");
});

test("rejects non-string environment values", () => {
  for (const value of [null, 1, true, {}, []]) {
    assert.throws(() =>
      ConnectIntegrationResourceToProjectRequestBody$outboundSchema.parse({
        projectId: "project-id",
        envVarEnvironments: [value],
      }),
    );
  }
});
