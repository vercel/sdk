# GetDeploymentResponseBody

Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner.
Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata.
Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.


## Supported Types

### `models.GetDeploymentResponseBody1`

```typescript
const value: models.GetDeploymentResponseBody1 = {
  aliasAssigned: true,
  aliasError: null,
  duration: {},
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  readyState: "READY",
  target: null,
};
```

### `models.GetDeploymentResponseBody2`

```typescript
const value: models.GetDeploymentResponseBody2 = {
  alias: [],
  aliasAssigned: true,
  aliasError: null,
  bootedAt: 3380.01,
  build: {
    env: [],
  },
  buildingAt: 4156.67,
  buildSkipped: false,
  createdAt: 1540257589405,
  createdIn: "<value>",
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  deletedAt: 1540257589405,
  duration: {},
  env: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  inspectorUrl: "https://rosy-airbus.net",
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: false,
  meta: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "my-project",
  ownerId: "<id>",
  plan: "hobby",
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
  status: "CANCELED",
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

### `models.GetDeploymentResponseBody3`

```typescript
const value: models.GetDeploymentResponseBody3 = {
  alias: [],
  aliasAssigned: true,
  aliasError: null,
  bootedAt: 3182.75,
  buildingAt: 2485.22,
  buildSkipped: false,
  createdAt: 1540257589405,
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  deletedAt: 1540257589405,
  duration: {},
  id: "dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ",
  meta: {},
  name: "my-project",
  previewCommentsEnabled: false,
  public: false,
  readyState: "READY",
  regions: [
    "sfo1",
  ],
  softDeletedByRetention: false,
  source: "cli",
  status: "ERROR",
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

