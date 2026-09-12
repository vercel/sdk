import assert from "node:assert/strict";
import test from "node:test";
import {
  ConnectIntegrationResourceToProjectRequestBody$outboundSchema,
  EnvVarEnvironments,
} from "../src/models/connectintegrationresourcetoprojectop.ts";

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
