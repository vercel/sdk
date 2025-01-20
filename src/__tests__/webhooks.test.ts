/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Webhooks Create Webhook", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("createWebhook"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.webhooks.createWebhook({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      url: "https://woeful-yin.biz",
      events: [],
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    secret: "<value>",
    events: [
      "deployment.created",
    ],
    id: "account_hook_GflD6EYyo7F4ViYS",
    url: "https://my-webhook.com",
    ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
    createdAt: 1567024758130,
    updatedAt: 1567024758130,
    projectIds: [
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    ],
  });
});

test("Webhooks Get Webhooks", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getWebhooks"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.webhooks.getWebhooks({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      projectsMetadata: [
        {
          id: "<id>",
          name: "<value>",
        },
        {
          id: "<id>",
          name: "<value>",
        },
        {
          id: "<id>",
          name: "<value>",
        },
      ],
      events: [
        "deployment.created",
      ],
      id: "account_hook_GflD6EYyo7F4ViYS",
      url: "https://my-webhook.com",
      ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
      createdAt: 1567024758130,
      updatedAt: 1567024758130,
      projectIds: [
        "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      ],
    },
    {
      projectsMetadata: [
        {
          id: "<id>",
          name: "<value>",
        },
      ],
      events: [
        "deployment.created",
      ],
      id: "account_hook_GflD6EYyo7F4ViYS",
      url: "https://my-webhook.com",
      ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
      createdAt: 1567024758130,
      updatedAt: 1567024758130,
      projectIds: [
        "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      ],
    },
    {
      projectsMetadata: [
        {
          id: "<id>",
          name: "<value>",
        },
      ],
      events: [
        "deployment.created",
      ],
      id: "account_hook_GflD6EYyo7F4ViYS",
      url: "https://my-webhook.com",
      ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
      createdAt: 1567024758130,
      updatedAt: 1567024758130,
      projectIds: [
        "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      ],
    },
  ]);
});

test("Webhooks Get Webhook", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getWebhook"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.webhooks.getWebhook({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    events: [
      "deployment.created",
    ],
    id: "account_hook_GflD6EYyo7F4ViYS",
    url: "https://my-webhook.com",
    ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
    createdAt: 1567024758130,
    updatedAt: 1567024758130,
    projectIds: [
      "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    ],
  });
});

test("Webhooks Delete Webhook", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("deleteWebhook"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.webhooks.deleteWebhook({
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});