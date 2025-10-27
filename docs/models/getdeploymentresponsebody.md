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
  alias: [],
  aliasAssigned: true,
  bootedAt: 8312.01,
  buildingAt: 2272.68,
  buildSkipped: true,
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  public: false,
  status: "BUILDING",
  userAliases: [
    "sub1.example.com",
    "sub2.example.com",
  ],
  previewCommentsEnabled: false,
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  createdAt: 1540257589405,
  readyState: "READY",
  name: "my-project",
  type: "LAMBDAS",
  aliasError: null,
  deletedAt: 1540257589405,
  meta: {
    "key": "<value>",
  },
  regions: [
    "sfo1",
  ],
  softDeletedByRetention: true,
  source: "cli",
  target: null,
  undeletedAt: 1540257589405,
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  version: 2,
  projectId: "<id>",
  plan: "enterprise",
  createdIn: "<value>",
  ownerId: "<id>",
  routes: [],
};
```

### `models.GetDeploymentResponseBody2`

```typescript
const value: models.GetDeploymentResponseBody2 = {
  alias: [],
  aliasAssigned: true,
  bootedAt: 3380.01,
  buildingAt: 1303.95,
  buildSkipped: true,
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  public: false,
  status: "INITIALIZING",
  userAliases: [
    "sub1.example.com",
    "sub2.example.com",
  ],
  previewCommentsEnabled: false,
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  createdAt: 1540257589405,
  readyState: "READY",
  name: "my-project",
  type: "LAMBDAS",
  aliasError: null,
  deletedAt: 1540257589405,
  meta: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  regions: [
    "sfo1",
  ],
  softDeletedByRetention: true,
  source: "cli",
  target: null,
  undeletedAt: 1540257589405,
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  version: 2,
};
```

