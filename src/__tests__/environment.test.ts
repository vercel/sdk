/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Environment Post /V1 /Projects/{id Or Name}/custom Environments", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient(
      "post_/v1/projects/{idOrName}/custom-environments",
    ),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.environment
    .postV1ProjectsIdOrNameCustomEnvironments({
      idOrName: "<value>",
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
      slug: "my-team-url-slug",
    });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Environment Get /V9 /Projects/{id Or Name}/custom Environments", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient(
      "get_/v9/projects/{idOrName}/custom-environments",
    ),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.environment
    .getV9ProjectsIdOrNameCustomEnvironments({
      idOrName: "<value>",
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
      slug: "my-team-url-slug",
    });
  expect(result).toBeDefined();
  expect(result).toEqual({
    environments: [],
  });
});

test("Environment Get /V9 /Projects/{id Or Name}/custom Environments/{environment Slug Or Id}", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient(
      "get_/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}",
    ),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.environment
    .getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId({
      idOrName: "<value>",
      environmentSlugOrId: "<id>",
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
      slug: "my-team-url-slug",
    });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Environment Patch /V9 /Projects/{id Or Name}/custom Environments/{environment Slug Or Id}", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient(
      "patch_/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}",
    ),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.environment
    .patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId({
      idOrName: "<value>",
      environmentSlugOrId: "<id>",
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
      slug: "my-team-url-slug",
    });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Environment Delete /V9 /Projects/{id Or Name}/custom Environments/{environment Slug Or Id}", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient(
      "delete_/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}",
    ),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.environment
    .deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId({
      idOrName: "<value>",
      environmentSlugOrId: "<id>",
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
      slug: "my-team-url-slug",
    });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});
