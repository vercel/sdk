/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Logs Get Runtime Logs", async () => {
  const testHttpClient = createTestHTTPClient("getRuntimeLogs");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.logs.getRuntimeLogs({
    projectId: "<id>",
    deploymentId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    level: "error",
    message: "<value>",
    rowId: "<id>",
    source: "serverless",
    timestampInMs: 3529.38,
    domain: "tragic-larva.biz",
    messageTruncated: true,
    requestMethod: "<value>",
    requestPath: "<value>",
    responseStatusCode: 5431.32,
  });
});
