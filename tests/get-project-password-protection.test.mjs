import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { GetProjectPasswordProtection$inboundSchema } from "../esm/models/getprojectresponsebody.js";

test("the GET project spec declares the password protection deployment scope", async () => {
  const spec = JSON.parse(await readFile("vercel-spec.json", "utf8"));
  const passwordProtection =
    spec.paths["/v9/projects/{idOrName}"].get.responses["200"].content[
      "application/json"
    ].schema.properties.passwordProtection;

  assert.deepEqual(passwordProtection.required, ["deploymentType"]);
  assert.ok(
    passwordProtection.properties.deploymentType.enum.includes(
      "all_except_custom_domains",
    ),
  );
});

test("the SDK retains password protection deployment scope", () => {
  const value = { deploymentType: "all_except_custom_domains" };
  assert.deepEqual(GetProjectPasswordProtection$inboundSchema.parse(value), value);
  assert.equal(GetProjectPasswordProtection$inboundSchema.safeParse({}).success, false);
  assert.equal(
    GetProjectPasswordProtection$inboundSchema.safeParse({
      deploymentType: "invalid",
    }).success,
    false,
  );
});
