# CreateDeploymentResponseBody

Returns the newly created deployment object. Poll `readyState` to track build progress. See https://vercel.com/docs/deployments/deployment-states for possible states.
Returns the reduced deployment view for anonymous (`vcn_`) callers, with an `anonymous.expiresAt` marking when the project and its token expire. Pool-team details are withheld.


## Supported Types

### `models.CreateDeploymentResponseBody1`

```typescript
const value: models.CreateDeploymentResponseBody1 = {
  aliasAssigned: true,
  anonymous: {
    expiresAt: 1753120000000,
  },
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  name: "my-project",
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  projectId: "<id>",
  target: null,
  createdAt: 1540257589405,
  readyState: "READY",
  aliasError: null,
};
```

### `models.CreateDeploymentResponseBody2`

```typescript
const value: models.CreateDeploymentResponseBody2 = {
  build: {
    env: [
      "<value 1>",
      "<value 2>",
    ],
  },
  env: [],
  inspectorUrl: "https://posh-remark.info/",
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: false,
  projectSettings: {},
  alias: [],
  aliasAssigned: true,
  bootedAt: 4957.96,
  buildingAt: 7594.9,
  buildSkipped: false,
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  public: false,
  status: "BLOCKED",
  userAliases: [
    "sub1.example.com",
    "sub2.example.com",
  ],
  previewCommentsEnabled: false,
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  name: "my-project",
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  target: null,
  createdAt: 1540257589405,
  readyState: "READY",
  aliasError: null,
  type: "LAMBDAS",
  deletedAt: 1540257589405,
  meta: {},
  regions: [
    "sfo1",
  ],
  softDeletedByRetention: true,
  source: "cli",
  undeletedAt: 1540257589405,
  userConfiguredDeploymentId: "abc123",
  version: 2,
  projectId: "<id>",
  plan: "enterprise",
  createdIn: "<value>",
  ownerId: "<id>",
  routes: [
    {
      src: "<value>",
      continue: true,
      middleware: 9821.51,
    },
  ],
};
```

