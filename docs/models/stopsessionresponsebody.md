# StopSessionResponseBody

The session was stopped successfully.


## Supported Types

### `models.StopSessionResponseBody1`

```typescript
const value: models.StopSessionResponseBody1 = {
  session: {
    sourceSandboxName: "my-sandbox",
    projectId: "prj_123a6c5209bc3778245d011443644c8d27dc2c50",
    id: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    memory: 2048,
    vcpus: 2,
    region: "iad1",
    runtime: "node22",
    timeout: 3600000,
    status: "running",
    requestedAt: 1750344501629,
    startedAt: 1750344501629,
    cwd: "/vercel/sandbox",
    requestedStopAt: 1750344501629,
    stoppedAt: 1750344501629,
    abortedAt: 1750344501629,
    duration: 3600000,
    sourceSnapshotId: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    snapshottedAt: 1750344501629,
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
    networkPolicy: {
      mode: "custom",
      allowedDomains: [
        "api.vercel.com",
        "*.example.com",
      ],
      allowedCIDRs: [
        "10.0.0.0/8",
      ],
      deniedCIDRs: [
        "10.0.0.0/8",
      ],
      injectionRules: [
        {
          domain: "api.vercel.com",
          headerNames: [
            "Authorization",
            "X-API-Key",
          ],
        },
      ],
    },
    activeCpuDurationMs: 42,
    networkTransfer: {
      ingress: 1009.44,
      egress: 7683.25,
    },
  },
};
```

### `models.StopSessionResponseBody2`

```typescript
const value: models.StopSessionResponseBody2 = {
  snapshot: {
    id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    sourceSessionId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    region: "iad1",
    status: "created",
    sizeBytes: 104857600,
    expiresAt: 1750344501629,
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
    lastUsedAt: 1750344501629,
    creationMethod: "manual",
    parentId: "snap_parent123",
  },
  sandbox: {
    name: "my-sandbox",
    currentSessionId: "<id>",
    status: "running",
    statusUpdatedAt: 1750344501629,
    persistent: true,
    region: "iad1",
    vcpus: 2,
    memory: 1024,
    runtime: "node22",
    timeout: 300000,
    snapshotExpiration: 604800000,
    keepLastSnapshots: {
      count: 5,
      expiration: 604800000,
      deleteEvicted: true,
    },
    totalEgressBytes: 4096,
    totalIngressBytes: 2048,
    totalActiveCpuDurationMs: 5000,
    totalDurationMs: 60000,
    cwd: "/vercel/sandbox",
    tags: {
      "team": "hive",
      "user": "bob",
    },
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
    expiresAt: 1750344801629,
  },
  session: {
    sourceSandboxName: "my-sandbox",
    projectId: "prj_123a6c5209bc3778245d011443644c8d27dc2c50",
    id: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    memory: 2048,
    vcpus: 2,
    region: "iad1",
    runtime: "node22",
    timeout: 3600000,
    status: "running",
    requestedAt: 1750344501629,
    startedAt: 1750344501629,
    cwd: "/vercel/sandbox",
    requestedStopAt: 1750344501629,
    stoppedAt: 1750344501629,
    abortedAt: 1750344501629,
    duration: 3600000,
    sourceSnapshotId: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    snapshottedAt: 1750344501629,
    createdAt: 1750344501629,
    updatedAt: 1750344501629,
    networkPolicy: {
      mode: "custom",
      allowedDomains: [
        "api.vercel.com",
        "*.example.com",
      ],
      allowedCIDRs: [
        "10.0.0.0/8",
      ],
      deniedCIDRs: [
        "10.0.0.0/8",
      ],
      injectionRules: [
        {
          domain: "api.vercel.com",
          headerNames: [
            "Authorization",
            "X-API-Key",
          ],
        },
      ],
    },
    activeCpuDurationMs: 42,
    networkTransfer: {
      ingress: 1009.44,
      egress: 7683.25,
    },
  },
};
```

