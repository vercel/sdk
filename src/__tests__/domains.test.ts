/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { BuyDomainResponseBody } from "../models/buydomainop.js";
import { createTestHTTPClient } from "./testclient.js";

test("Domains Buy Domain", async () => {
  const testHttpClient = createTestHTTPClient("buyDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.buyDomain({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "example.com",
      expectedPrice: 10,
      renew: true,
      country: "US",
      orgName: "Acme Inc.",
      firstName: "Jane",
      lastName: "Doe",
      address1: "340 S Lemon Ave Suite 4133",
      city: "San Francisco",
      state: "CA",
      postalCode: "91789",
      phone: "+1.4158551452",
      email: "jane.doe@someplace.com",
    },
  });
  expect(result).toBeDefined();
  expect(result as BuyDomainResponseBody).toEqual({
    domain: {
      uid: "<id>",
      ns: [
        "<value 1>",
      ],
      verified: true,
      created: 6683.9,
      pending: true,
    },
  });
});

test("Domains Check Domain Price", async () => {
  const testHttpClient = createTestHTTPClient("checkDomainPrice");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.checkDomainPrice({
    name: "example.com",
    type: "new",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    price: 20,
    period: 1,
  });
});

test("Domains Check Domain Status", async () => {
  const testHttpClient = createTestHTTPClient("checkDomainStatus");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.checkDomainStatus({
    name: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    available: true,
  });
});

test("Domains Get Domain Transfer", async () => {
  const testHttpClient = createTestHTTPClient("getDomainTransfer");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.getDomainTransfer({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    domain: "example.com",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    transferable: false,
    transferPolicy: null,
    reason: "<value>",
    status: "pending_admin",
  });
});

test("Domains Get Domain Config", async () => {
  const testHttpClient = createTestHTTPClient("getDomainConfig");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.getDomainConfig({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    misconfigured: false,
  });
});

test("Domains Get Domain", async () => {
  const testHttpClient = createTestHTTPClient("getDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.getDomain({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    domain: {
      suffix: true,
      verified: true,
      nameservers: [
        "ns1.nameserver.net",
        "ns2.nameserver.net",
      ],
      intendedNameservers: [
        "ns1.vercel-dns.com",
        "ns2.vercel-dns.com",
      ],
      customNameservers: [
        "ns1.nameserver.net",
        "ns2.nameserver.net",
      ],
      creator: {
        username: "vercel_user",
        email: "demo@example.com",
        id: "ZspSRT4ljIEEmMHgoDwKWDei",
      },
      teamId: "<id>",
      boughtAt: 1613602938882,
      name: "example.com",
      createdAt: 1613602938882,
      expiresAt: 1613602938882,
      id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
      orderedAt: 1613602938882,
      renew: true,
      serviceType: "zeit.world",
      transferredAt: 1613602938882,
      transferStartedAt: 1613602938882,
      userId: "<id>",
    },
  });
});

test("Domains Get Domains", async () => {
  const testHttpClient = createTestHTTPClient("getDomains");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.getDomains({
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    domains: [
      {
        verified: true,
        nameservers: [
          "ns1.nameserver.net",
          "ns2.nameserver.net",
        ],
        intendedNameservers: [
          "ns1.vercel-dns.com",
          "ns2.vercel-dns.com",
        ],
        customNameservers: [
          "ns1.nameserver.net",
          "ns2.nameserver.net",
        ],
        creator: {
          username: "vercel_user",
          email: "demo@example.com",
          id: "ZspSRT4ljIEEmMHgoDwKWDei",
        },
        teamId: "<id>",
        createdAt: 1613602938882,
        boughtAt: 1613602938882,
        expiresAt: 1613602938882,
        id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
        name: "example.com",
        orderedAt: 1613602938882,
        renew: true,
        serviceType: "zeit.world",
        transferredAt: 1613602938882,
        transferStartedAt: 1613602938882,
        userId: "<id>",
      },
    ],
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  });
});

test("Domains Delete Domain", async () => {
  const testHttpClient = createTestHTTPClient("deleteDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.domains.deleteDomain({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uid: "<id>",
  });
});
