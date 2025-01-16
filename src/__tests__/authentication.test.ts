/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Authentication List Auth Tokens", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("listAuthTokens"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.authentication.listAuthTokens();
  expect(result).toBeDefined();
  expect(result).toEqual({
    tokens: [
      {
        id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
        name: "<value>",
        type: "oauth2-token",
        origin: "github",
        expiresAt: 1632816536002,
        activeAt: 1632816536002,
        createdAt: 1632816536002,
      },
      {
        id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
        name: "<value>",
        type: "oauth2-token",
        origin: "github",
        expiresAt: 1632816536002,
        activeAt: 1632816536002,
        createdAt: 1632816536002,
      },
      {
        id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
        name: "<value>",
        type: "oauth2-token",
        origin: "github",
        expiresAt: 1632816536002,
        activeAt: 1632816536002,
        createdAt: 1632816536002,
      },
    ],
    testingToken: {
      id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      name: "<value>",
      type: "oauth2-token",
      origin: "github",
      expiresAt: 1632816536002,
      activeAt: 1632816536002,
      createdAt: 1632816536002,
    },
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  });
});

test("Authentication Create Auth Token", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("createAuthToken"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.authentication.createAuthToken({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "<value>",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    token: {
      id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      name: "<value>",
      type: "oauth2-token",
      origin: "github",
      expiresAt: 1632816536002,
      activeAt: 1632816536002,
      createdAt: 1632816536002,
    },
    bearerToken: "uRKJSTt0L4RaSkiMj41QTkxM",
  });
});

test("Authentication Get Auth Token", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getAuthToken"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.authentication.getAuthToken({
    tokenId: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    token: {
      id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      name: "<value>",
      type: "oauth2-token",
      origin: "github",
      expiresAt: 1632816536002,
      activeAt: 1632816536002,
      createdAt: 1632816536002,
    },
  });
});

test("Authentication Delete Auth Token", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("deleteAuthToken"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.authentication.deleteAuthToken({
    tokenId: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    tokenId: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  });
});
