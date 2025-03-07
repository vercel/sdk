/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("User List User Events", async () => {
  const testHttpClient = createTestHTTPClient("listUserEvents");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.user.listUserEvents({
    limit: 20,
    since: "2019-12-08T10:00:38.976Z",
    until: "2019-12-09T23:00:38.976Z",
    types: "login,team-member-join,domain-buy",
    userId: "aeIInYVk59zbFF2SxfyxxmuO",
    withPayload: "true",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    events: [],
  });
});

test("User Request Delete", async () => {
  const testHttpClient = createTestHTTPClient("requestDelete");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.user.requestDelete({});
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: "<id>",
    email: "Lamont82@gmail.com",
    message: "Verification email sent",
  });
});
