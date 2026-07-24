# GetDeploymentResponseBody

Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner.
Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata.
Returns the reduced deployment view for anonymous (`vcn_`) callers, with an `anonymous.expiresAt` marking when the project and its token expire. Pool-team details are withheld.


## Supported Types

### `models.GetDeploymentResponseBody1`

```typescript
const value: models.GetDeploymentResponseBody1 = {
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

### `models.GetDeploymentResponseBody2`

```typescript
const value: models.GetDeploymentResponseBody2 = {
  build: {
    env: [
      "<value 1>",
    ],
  },
  env: [],
  inspectorUrl: "https://worthwhile-giant.org",
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: true,
  projectSettings: {},
  alias: [],
  aliasAssigned: true,
  bootedAt: 6963.76,
  buildingAt: 6799.19,
  buildSkipped: false,
  creator: {
    uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
    username: "john-doe",
  },
  public: false,
  status: "QUEUED",
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
  meta: {
    "key": "<value>",
  },
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
  routes: [],
};
```

### `models.GetDeploymentResponseBody3`

```typescript
const value: models.GetDeploymentResponseBody3 = {
  alias: [],
  aliasAssigned: true,
  bootedAt: 3182.75,
  buildingAt: 2485.22,
  buildSkipped: false,
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
  name: "my-project",
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
  target: null,
  createdAt: 1540257589405,
  readyState: "READY",
  aliasError: null,
  type: "LAMBDAS",
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
  undeletedAt: 1540257589405,
  userConfiguredDeploymentId: "abc123",
  version: 2,
};
```

