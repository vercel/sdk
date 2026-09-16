# CreateDeploymentResponseBody

Returns the newly created deployment object. Poll `readyState` to track build progress. See https://vercel.com/docs/deployments/deployment-states for possible states.
Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.


## Supported Types

### `models.CreateDeploymentResponseBody1`

```typescript
const value: models.CreateDeploymentResponseBody1 = {
  aliasAssigned: true,
  aliasError: null,
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  readyState: "READY",
  target: null,
};
```

### `models.CreateDeploymentResponseBody2`

```typescript
const value: models.CreateDeploymentResponseBody2 = {
  alias: [],
  aliasAssigned: true,
  aliasError: null,
  bootedAt: 6328.25,
  build: {
    env: [],
  },
  buildingAt: 9689.99,
  buildSkipped: true,
  createdAt: 1540257589405,
  createdIn: "<value>",
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  deletedAt: 1540257589405,
  env: [
    "<value 1>",
    "<value 2>",
  ],
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  inspectorUrl: "https://surprised-synergy.info/",
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: false,
  meta: {},
  name: "my-project",
  ownerId: "<id>",
  plan: "enterprise",
  previewCommentsEnabled: false,
  projectId: "<id>",
  projectSettings: {},
  public: false,
  readyState: "READY",
  regions: [
    "sfo1",
  ],
  routes: [],
  softDeletedByRetention: true,
  source: "cli",
  status: "READY",
  target: null,
  type: "LAMBDAS",
  undeletedAt: 1540257589405,
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  userAliases: [
    "sub1.example.com",
    "sub2.example.com",
  ],
  userConfiguredDeploymentId: "abc123",
  version: 2,
};
```

