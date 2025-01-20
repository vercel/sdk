/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Projects Update Project Data Cache", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateProjectDataCache"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.updateProjectDataCache({
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      disabled: true,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    accountId: "<id>",
    crons: {
      enabledAt: 7135.80,
      disabledAt: 2989.85,
      updatedAt: 6226.22,
      deploymentId: "<id>",
      definitions: [
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
      ],
    },
    directoryListing: false,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 5719.60,
        createdIn: "<value>",
        creator: {
          email: "Braeden15@gmail.com",
          uid: "<id>",
          username: "Teresa84",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: false,
        readyState: "BUILDING",
        type: "LAMBDAS",
        url: "https://unknown-gift.biz",
        userId: "<id>",
      },
      {
        id: "<id>",
        createdAt: 7644.50,
        createdIn: "<value>",
        creator: {
          email: "Erich.Mann@hotmail.com",
          uid: "<id>",
          username: "Genoveva89",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: true,
        readyState: "ERROR",
        type: "LAMBDAS",
        url: "https://slimy-tuba.name",
        userId: "<id>",
      },
      {
        id: "<id>",
        createdAt: 2357.62,
        createdIn: "<value>",
        creator: {
          email: "Garret.Ferry81@gmail.com",
          uid: "<id>",
          username: "Vivianne.Gutkowski",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: true,
        readyState: "CANCELED",
        type: "LAMBDAS",
        url: "https://astonishing-cinema.net/",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "10.x",
  });
});

test("Projects Get Projects", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getProjects"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.getProjects({
    gitForkProtection: "1",
    repoUrl: "https://github.com/vercel/next.js",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    projects: [],
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  });
});

test("Projects Create Project", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("createProject"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.createProject({
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "a-project-name",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    accountId: "<id>",
    crons: {
      enabledAt: 5535.60,
      disabledAt: 7749.32,
      updatedAt: 4248.45,
      deploymentId: "<id>",
      definitions: [
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
      ],
    },
    directoryListing: false,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 3954.07,
        createdIn: "<value>",
        creator: {
          email: "Junior46@yahoo.com",
          uid: "<id>",
          username: "Rick.Fritsch",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "enterprise",
        previewCommentsEnabled: false,
        private: false,
        readyState: "CANCELED",
        type: "LAMBDAS",
        url: "https://potable-bid.biz",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "22.x",
    targets: {
      "key": {
        id: "<id>",
        createdAt: 1667.88,
        createdIn: "<value>",
        creator: {
          email: "Mustafa49@yahoo.com",
          uid: "<id>",
          username: "Roberta.Cormier",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "INITIALIZING",
        type: "LAMBDAS",
        url: "https://formal-breastplate.org",
        userId: "<id>",
      },
    },
  });
});

test("Projects Update Project", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateProject"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.updateProject({
    idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "a-project-name",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    accountId: "<id>",
    crons: {
      enabledAt: 6482.22,
      disabledAt: 3040.87,
      updatedAt: 9398.85,
      deploymentId: "<id>",
      definitions: [
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
        {
          host: "vercel.com",
          path: "/api/crons/sync-something?hello=world",
          schedule: "0 0 * * *",
        },
      ],
    },
    directoryListing: true,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 7688.55,
        createdIn: "<value>",
        creator: {
          email: "Alfredo_Murazik@yahoo.com",
          uid: "<id>",
          username: "Kiera28",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "enterprise",
        previewCommentsEnabled: false,
        private: false,
        readyState: "ERROR",
        type: "LAMBDAS",
        url: "https://close-premise.net/",
        userId: "<id>",
      },
      {
        id: "<id>",
        createdAt: 3847.37,
        createdIn: "<value>",
        creator: {
          email: "Zachery.Johns68@yahoo.com",
          uid: "<id>",
          username: "Nicole_Reynolds",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: true,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://unsightly-newsstand.net/",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "14.x",
    targets: {
      "key": {
        id: "<id>",
        createdAt: 5163.13,
        createdIn: "<value>",
        creator: {
          email: "Joyce_Hodkiewicz46@yahoo.com",
          uid: "<id>",
          username: "Bud.Bogan18",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: true,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://frugal-coordination.net/",
        userId: "<id>",
      },
    },
  });
});

test("Projects Delete Project", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("deleteProject"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.projects.deleteProject({
    idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});

test("Projects Get Project Domains", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getProjectDomains"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.getProjectDomains({
    idOrName: "<value>",
    customEnvironmentId: "env_123abc4567",
    redirect: "example.com",
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
        name: "<value>",
        apexName: "<value>",
        projectId: "<id>",
        verified: true,
      },
    ],
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  });
});

test("Projects Get Project Domain", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getProjectDomain"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.getProjectDomain({
    idOrName: "<value>",
    domain: "www.example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: "<value>",
    apexName: "<value>",
    projectId: "<id>",
    verified: true,
  });
});

test("Projects Update Project Domain", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateProjectDomain"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.updateProjectDomain({
    idOrName: "<value>",
    domain: "www.example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      gitBranch: null,
      redirect: "foobar.com",
      redirectStatusCode: 307,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: "<value>",
    apexName: "<value>",
    projectId: "<id>",
    verified: false,
  });
});

test("Projects Remove Project Domain", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("removeProjectDomain"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.removeProjectDomain({
    idOrName: "<value>",
    domain: "www.example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Projects Add Project Domain", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("addProjectDomain"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.addProjectDomain({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "www.example.com",
      gitBranch: null,
      redirect: "foobar.com",
      redirectStatusCode: 307,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: "<value>",
    apexName: "<value>",
    projectId: "<id>",
    verified: true,
  });
});

test("Projects Verify Project Domain", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("verifyProjectDomain"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.verifyProjectDomain({
    idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: "<value>",
    apexName: "<value>",
    projectId: "<id>",
    verified: false,
  });
});

test("Projects Get Project Env", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getProjectEnv"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.getProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    id: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    type: "plain",
    key: "<key>",
    value: "<value>",
  });
});

test("Projects Create Project Env", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("createProjectEnv"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.createProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    upsert: "true",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: [
      {
        key: "API_URL",
        value: "https://api.vercel.com",
        type: "plain",
        target: [
          "preview",
        ],
        gitBranch: "feature-1",
        comment: "database connection string for production",
      },
    ],
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    created: [
      {},
    ],
    failed: [
      {
        error: {
          code: "<value>",
          message: "<value>",
        },
      },
    ],
  });
});

test("Projects Remove Project Env", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("removeProjectEnv"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.removeProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    id: "XMbOEya1gUUO1ir4",
    customEnvironmentId: "env_123abc4567",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      type: "sensitive",
      key: "<key>",
      value: "<value>",
    },
    {
      type: "plain",
      key: "<key>",
      value: "<value>",
    },
    {
      type: "encrypted",
      key: "<key>",
      value: "<value>",
    },
  ]);
});

test("Projects Update Project Protection Bypass", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("updateProjectProtectionBypass"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.updateProjectProtectionBypass({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {},
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Projects Request Promote", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("requestPromote"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.projects.requestPromote({
    projectId: "<id>",
    deploymentId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});

test("Projects List Promote Aliases", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("listPromoteAliases"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.listPromoteAliases({
    projectId: "<id>",
    limit: 20,
    since: 1609499532000,
    until: 1612264332000,
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Projects Create Project Transfer Request", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("createProjectTransferRequest"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.createProjectTransferRequest({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Projects Accept Project Transfer Request", async () => {
  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("acceptProjectTransferRequest"),
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.acceptProjectTransferRequest({
    code: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      newProjectName: "a-project-name",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});
