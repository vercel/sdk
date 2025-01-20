/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Security Update Attack Challenge Mode", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateAttackChallengeMode"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.updateAttackChallengeMode({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      projectId: "<id>",
      attackModeEnabled: true,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    attackModeEnabled: true,
    attackModeUpdatedAt: 4536.22,
  });
});

test("Security Put Firewall Config", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("putFirewallConfig"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.putFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      firewallEnabled: true,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    active: {
      ownerId: "<id>",
      projectKey: "<value>",
      id: "<id>",
      version: 4570.86,
      updatedAt: "<value>",
      firewallEnabled: true,
      crs: {
        sd: {
          active: false,
          action: "deny",
        },
        ma: {
          active: false,
          action: "log",
        },
        lfi: {
          active: false,
          action: "log",
        },
        rfi: {
          active: false,
          action: "deny",
        },
        rce: {
          active: false,
          action: "deny",
        },
        php: {
          active: true,
          action: "deny",
        },
        gen: {
          active: false,
          action: "deny",
        },
        xss: {
          active: false,
          action: "deny",
        },
        sqli: {
          active: true,
          action: "log",
        },
        sf: {
          active: true,
          action: "deny",
        },
        java: {
          active: true,
          action: "log",
        },
      },
      rules: [
        {
          id: "<id>",
          name: "<value>",
          active: true,
          conditionGroup: [
            {
              conditions: [
                {
                  type: "ip_address",
                  op: "suf",
                },
                {
                  type: "geo_as_number",
                  op: "pre",
                },
                {
                  type: "ja3_digest",
                  op: "inc",
                },
              ],
            },
            {
              conditions: [
                {
                  type: "geo_as_number",
                  op: "neq",
                },
                {
                  type: "protocol",
                  op: "sub",
                },
                {
                  type: "ja3_digest",
                  op: "suf",
                },
              ],
            },
            {
              conditions: [
                {
                  type: "region",
                  op: "neq",
                },
              ],
            },
          ],
          action: {},
        },
        {
          id: "<id>",
          name: "<value>",
          active: false,
          conditionGroup: [],
          action: {},
        },
        {
          id: "<id>",
          name: "<value>",
          active: false,
          conditionGroup: [
            {
              conditions: [
                {
                  type: "scheme",
                  op: "neq",
                },
              ],
            },
            {
              conditions: [],
            },
            {
              conditions: [
                {
                  type: "header",
                  op: "inc",
                },
                {
                  type: "query",
                  op: "eq",
                },
              ],
            },
          ],
          action: {},
        },
      ],
      ips: [],
      changes: [],
    },
  });
});

test("Security Update Firewall Config", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateFirewallConfig"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.updateFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      action: "ip.remove",
      id: "<id>",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Security Get Firewall Config", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getFirewallConfig"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.getFirewallConfig({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    configVersion: "<value>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 228.91,
    updatedAt: "<value>",
    firewallEnabled: true,
    crs: {
      sd: {
        active: false,
        action: "deny",
      },
      ma: {
        active: true,
        action: "log",
      },
      lfi: {
        active: false,
        action: "log",
      },
      rfi: {
        active: false,
        action: "deny",
      },
      rce: {
        active: true,
        action: "deny",
      },
      php: {
        active: false,
        action: "log",
      },
      gen: {
        active: false,
        action: "log",
      },
      xss: {
        active: true,
        action: "deny",
      },
      sqli: {
        active: true,
        action: "deny",
      },
      sf: {
        active: true,
        action: "deny",
      },
      java: {
        active: true,
        action: "deny",
      },
    },
    rules: [
      {
        id: "<id>",
        name: "<value>",
        active: true,
        conditionGroup: [
          {
            conditions: [
              {
                type: "ip_address",
                op: "eq",
              },
            ],
          },
          {
            conditions: [
              {
                type: "geo_city",
                op: "ex",
              },
              {
                type: "ja4_digest",
                op: "nex",
              },
              {
                type: "ip_address",
                op: "lte",
              },
            ],
          },
        ],
        action: {},
      },
    ],
    ips: [
      {
        id: "<id>",
        hostname: "puny-goat.org",
        ip: "0.147.40.42",
        action: "challenge",
      },
    ],
    changes: [],
  });
});

test("Security Get Bypass Ip", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getBypassIp"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.getBypassIp({
    projectId: "<id>",
    limit: 10,
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    result: [
      {
        ownerId: "<id>",
        id: "<id>",
        domain: "sneaky-intervention.info",
        ip: "124.153.161.35",
        projectId: "<id>",
        isProjectRule: false,
      },
    ],
    pagination: "<value>",
  });
});

test("Security Add Bypass Ip", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("addBypassIp"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.addBypassIp({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    ok: false,
    result: [
      {
        ownerId: "<id>",
        id: "<id>",
        domain: "jubilant-outrun.name",
        projectId: "<id>",
        isProjectRule: true,
      },
    ],
    pagination: "<value>",
  });
});

test("Security Remove Bypass Ip", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("removeBypassIp"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.security.removeBypassIp({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    ok: true,
  });
});