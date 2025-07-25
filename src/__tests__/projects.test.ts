/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Vercel } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Projects Update Project Data Cache", async () => {
  const testHttpClient = createTestHTTPClient("updateProjectDataCache");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
      enabledAt: 4537.72,
      disabledAt: 4306.04,
      updatedAt: 4313.17,
      deploymentId: "<id>",
      definitions: [],
    },
    directoryListing: true,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 1954.03,
        createdIn: "<value>",
        creator: {
          email: "Cleveland_Bruen@gmail.com",
          uid: "<id>",
          username: "Frida_Stamm12",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: false,
        readyState: "CANCELED",
        type: "LAMBDAS",
        url: "https://well-worn-handful.biz/",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "22.x",
    resourceConfig: {
      functionDefaultRegions: [],
    },
    defaultResourceConfig: {
      functionDefaultRegions: [],
    },
    targets: {
      "key": {
        id: "<id>",
        createdAt: 5941.68,
        createdIn: "<value>",
        creator: {
          email: "Fay_Herman21@yahoo.com",
          uid: "<id>",
          username: "Anna.Barrows31",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: false,
        readyState: "READY",
        type: "LAMBDAS",
        url: "https://scaly-epic.com",
        userId: "<id>",
      },
    },
  });
});

test("Projects Get Projects", async () => {
  const testHttpClient = createTestHTTPClient("getProjects");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
    projects: [
      {
        accountId: "<id>",
        crons: {
          enabledAt: 5254.53,
          disabledAt: null,
          updatedAt: 514.35,
          deploymentId: "<id>",
          definitions: [
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
            createdAt: 6310.4,
            createdIn: "<value>",
            creator: {
              email: "Howell_Metz@gmail.com",
              uid: "<id>",
              username: "Mohammed_Bechtelar67",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "pro",
            previewCommentsEnabled: false,
            private: true,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://monthly-numeracy.net/",
            userId: "<id>",
          },
          {
            id: "<id>",
            createdAt: 6310.4,
            createdIn: "<value>",
            creator: {
              email: "Howell_Metz@gmail.com",
              uid: "<id>",
              username: "Mohammed_Bechtelar67",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "pro",
            previewCommentsEnabled: false,
            private: true,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://monthly-numeracy.net/",
            userId: "<id>",
          },
        ],
        name: "<value>",
        nodeVersion: "14.x",
        resourceConfig: {
          functionDefaultRegions: [
            "<value 1>",
            "<value 2>",
          ],
        },
        defaultResourceConfig: {
          functionDefaultRegions: [
            "<value 1>",
            "<value 2>",
          ],
        },
        targets: {
          "key": {
            id: "<id>",
            createdAt: 3954.3,
            createdIn: "<value>",
            creator: {
              email: "Tavares_Hills95@gmail.com",
              uid: "<id>",
              username: "Dariana_Hand",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "hobby",
            previewCommentsEnabled: false,
            private: false,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://obedient-mentor.org/",
            userId: "<id>",
          },
        },
      },
      {
        accountId: "<id>",
        crons: {
          enabledAt: 5254.53,
          disabledAt: null,
          updatedAt: 514.35,
          deploymentId: "<id>",
          definitions: [
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
            createdAt: 6310.4,
            createdIn: "<value>",
            creator: {
              email: "Howell_Metz@gmail.com",
              uid: "<id>",
              username: "Mohammed_Bechtelar67",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "pro",
            previewCommentsEnabled: false,
            private: true,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://monthly-numeracy.net/",
            userId: "<id>",
          },
          {
            id: "<id>",
            createdAt: 6310.4,
            createdIn: "<value>",
            creator: {
              email: "Howell_Metz@gmail.com",
              uid: "<id>",
              username: "Mohammed_Bechtelar67",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "pro",
            previewCommentsEnabled: false,
            private: true,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://monthly-numeracy.net/",
            userId: "<id>",
          },
        ],
        name: "<value>",
        nodeVersion: "14.x",
        resourceConfig: {
          functionDefaultRegions: [
            "<value 1>",
            "<value 2>",
          ],
        },
        defaultResourceConfig: {
          functionDefaultRegions: [
            "<value 1>",
            "<value 2>",
          ],
        },
        targets: {
          "key": {
            id: "<id>",
            createdAt: 3954.3,
            createdIn: "<value>",
            creator: {
              email: "Tavares_Hills95@gmail.com",
              uid: "<id>",
              username: "Dariana_Hand",
            },
            deploymentHostname: "<value>",
            name: "<value>",
            plan: "hobby",
            previewCommentsEnabled: false,
            private: false,
            readyState: "ERROR",
            type: "LAMBDAS",
            url: "https://obedient-mentor.org/",
            userId: "<id>",
          },
        },
      },
    ],
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  });
});

test("Projects Create Project", async () => {
  const testHttpClient = createTestHTTPClient("createProject");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
      enabledAt: 9025.89,
      disabledAt: 7665.94,
      updatedAt: 4493.49,
      deploymentId: "<id>",
      definitions: [],
    },
    directoryListing: true,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 79.03,
        createdIn: "<value>",
        creator: {
          email: "Merle_Boehm@yahoo.com",
          uid: "<id>",
          username: "Wilbert.Conn",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "READY",
        type: "LAMBDAS",
        url: "https://likable-validity.info",
        userId: "<id>",
      },
      {
        id: "<id>",
        createdAt: 79.03,
        createdIn: "<value>",
        creator: {
          email: "Merle_Boehm@yahoo.com",
          uid: "<id>",
          username: "Wilbert.Conn",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "READY",
        type: "LAMBDAS",
        url: "https://likable-validity.info",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "16.x",
    resourceConfig: {
      functionDefaultRegions: [
        "<value 1>",
        "<value 2>",
      ],
    },
    defaultResourceConfig: {
      functionDefaultRegions: [
        "<value 1>",
      ],
    },
    targets: {
      "key": {
        id: "<id>",
        createdAt: 3635.11,
        createdIn: "<value>",
        creator: {
          email: "Leanne_Langworth@gmail.com",
          uid: "<id>",
          username: "Kurtis_Marks97",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "ERROR",
        type: "LAMBDAS",
        url: "https://twin-hydrolyse.com/",
        userId: "<id>",
      },
    },
  });
});

test("Projects Update Project", async () => {
  const testHttpClient = createTestHTTPClient("updateProject");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
      enabledAt: 827.44,
      disabledAt: 9685.26,
      updatedAt: 3884.97,
      deploymentId: "<id>",
      definitions: [],
    },
    directoryListing: true,
    id: "<id>",
    latestDeployments: [
      {
        id: "<id>",
        createdAt: 5470.28,
        createdIn: "<value>",
        creator: {
          email: "Richmond72@yahoo.com",
          uid: "<id>",
          username: "Ryley1",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: true,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://cheap-muscat.name/",
        userId: "<id>",
      },
      {
        id: "<id>",
        createdAt: 5470.28,
        createdIn: "<value>",
        creator: {
          email: "Richmond72@yahoo.com",
          uid: "<id>",
          username: "Ryley1",
        },
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "pro",
        previewCommentsEnabled: false,
        private: true,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://cheap-muscat.name/",
        userId: "<id>",
      },
    ],
    name: "<value>",
    nodeVersion: "22.x",
    resourceConfig: {
      functionDefaultRegions: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    defaultResourceConfig: {
      functionDefaultRegions: [
        "<value 1>",
      ],
    },
    targets: {
      "key": {
        id: "<id>",
        createdAt: 8270.86,
        createdIn: "<value>",
        creator: null,
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://feline-valley.name/",
        userId: "<id>",
      },
      "key1": {
        id: "<id>",
        createdAt: 8270.86,
        createdIn: "<value>",
        creator: null,
        deploymentHostname: "<value>",
        name: "<value>",
        plan: "hobby",
        previewCommentsEnabled: false,
        private: false,
        readyState: "QUEUED",
        type: "LAMBDAS",
        url: "https://feline-valley.name/",
        userId: "<id>",
      },
    },
  });
});

test("Projects Delete Project", async () => {
  const testHttpClient = createTestHTTPClient("deleteProject");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.projects.deleteProject({
    idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});

test("Projects Get Project Domains", async () => {
  const testHttpClient = createTestHTTPClient("getProjectDomains");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
  const testHttpClient = createTestHTTPClient("getProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
    verified: false,
  });
});

test("Projects Update Project Domain", async () => {
  const testHttpClient = createTestHTTPClient("updateProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
    verified: true,
  });
});

test("Projects Remove Project Domain", async () => {
  const testHttpClient = createTestHTTPClient("removeProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
  const testHttpClient = createTestHTTPClient("addProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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

test("Projects Move Project Domain", async () => {
  const testHttpClient = createTestHTTPClient("moveProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.moveProjectDomain({
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
    verified: false,
  });
});

test("Projects Verify Project Domain", async () => {
  const testHttpClient = createTestHTTPClient("verifyProjectDomain");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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

test("Projects Create Project Env", async () => {
  const testHttpClient = createTestHTTPClient("createProjectEnv");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.createProjectEnv({
    idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
    upsert: "true",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      key: "API_URL",
      value: "https://api.vercel.com",
      type: "plain",
      target: [
        "preview",
      ],
      gitBranch: "feature-1",
      comment: "database connection string for production",
      customEnvironmentIds: [
        "env_1234567890",
      ],
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    created: [],
    failed: [],
  });
});

test("Projects Get Project Env", async () => {
  const testHttpClient = createTestHTTPClient("getProjectEnv");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
    type: "sensitive",
    value: "<value>",
    key: "<key>",
  });
});

test("Projects Remove Project Env", async () => {
  const testHttpClient = createTestHTTPClient("removeProjectEnv");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
      type: "system",
      value: "<value>",
      key: "<key>",
    },
    {
      type: "system",
      value: "<value>",
      key: "<key>",
    },
  ]);
});

test("Projects Create Project Transfer Request", async () => {
  const testHttpClient = createTestHTTPClient("createProjectTransferRequest");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await vercel.projects.createProjectTransferRequest({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    code: "f99cc49a-602e-4786-a748-762dfb205880",
  });
});

test("Projects Accept Project Transfer Request", async () => {
  const testHttpClient = createTestHTTPClient("acceptProjectTransferRequest");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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

test("Projects Update Project Protection Bypass", async () => {
  const testHttpClient = createTestHTTPClient("updateProjectProtectionBypass");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
  const testHttpClient = createTestHTTPClient("requestPromote");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
  const testHttpClient = createTestHTTPClient("listPromoteAliases");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
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
});

test("Projects Pause Project", async () => {
  const testHttpClient = createTestHTTPClient("pauseProject");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.projects.pauseProject({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});

test("Projects Unpause Project", async () => {
  const testHttpClient = createTestHTTPClient("unpauseProject");

  const vercel = new Vercel({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await vercel.projects.unpauseProject({
    projectId: "<id>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });
});
