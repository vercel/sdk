# GetDeploymentResponseBody

The deployment including only public information
The deployment including both public and private information


## Supported Types

### `models.GetDeploymentResponseBody1`

```typescript
const value: models.GetDeploymentResponseBody1 = {
  build: {
    env: [],
  },
  env: [
    "<value 1>",
    "<value 2>",
  ],
  inspectorUrl: "https://guilty-armoire.info/",
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: true,
  projectSettings: {},
  aliasAssigned: false,
  bootedAt: 2272.68,
  buildingAt: 1383.88,
  buildSkipped: true,
  creator: {
    uid: "<id>",
  },
  public: true,
  status: "ERROR",
  id: "<id>",
  createdAt: 5083.52,
  readyState: "INITIALIZING",
  name: "<value>",
  type: "LAMBDAS",
  meta: {
    "key": "<value>",
  },
  regions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  url: "https://stale-giant.net",
  version: 3513.65,
  projectId: "<id>",
  plan: "pro",
  createdIn: "<value>",
  ownerId: "<id>",
  routes: [],
};
```

### `models.GetDeploymentResponseBody2`

```typescript
const value: models.GetDeploymentResponseBody2 = {
  aliasAssigned: true,
  bootedAt: 1303.95,
  buildingAt: 4156.67,
  buildSkipped: false,
  creator: {
    uid: "<id>",
  },
  public: false,
  status: "ERROR",
  id: "<id>",
  createdAt: 9590.27,
  readyState: "READY",
  name: "<value>",
  type: "LAMBDAS",
  meta: {},
  regions: [
    "<value 1>",
    "<value 2>",
  ],
  url: "https://normal-sonnet.info",
  version: 2871.74,
};
```

