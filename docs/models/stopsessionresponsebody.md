# StopSessionResponseBody

The session was stopped successfully.


## Supported Types

### `models.StopSessionResponseBody1`

```typescript
const value: models.StopSessionResponseBody1 = {
  session: {
    abortedAt: 1750344501629,
    activeCpuDurationMs: 42,
    createdAt: 1750344501629,
    cwd: "/vercel/sandbox",
    duration: 3600000,
    id: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    memory: 2048,
    networkPolicy: {
      allowedCIDRs: [
        "10.0.0.0/8",
      ],
      allowedDomains: [
        "api.vercel.com",
        "*.example.com",
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
      mode: "custom",
    },
    networkTransfer: {
      egress: 7683.25,
      ingress: 3996.32,
    },
    projectId: "prj_123a6c5209bc3778245d011443644c8d27dc2c50",
    region: "iad1",
    requestedAt: 1750344501629,
    requestedStopAt: 1750344501629,
    runtime: "node22",
    snapshottedAt: 1750344501629,
    sourceSandboxName: "my-sandbox",
    sourceSnapshotId: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    startedAt: 1750344501629,
    status: "running",
    stoppedAt: 1750344501629,
    timeout: 3600000,
    updatedAt: 1750344501629,
    vcpus: 2,
  },
};
```

### `models.StopSessionResponseBody2`

```typescript
const value: models.StopSessionResponseBody2 = {
  sandbox: {
    createdAt: 1750344501629,
    currentSessionId: "<id>",
    cwd: "/vercel/sandbox",
    expiresAt: 1750344801629,
    failoverRegions: [
      "sfo1",
      "cle1",
    ],
    image:
      "my-repo@sha256:2c4e8f9a1b3d5e7f091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708",
    keepLastSnapshots: {
      count: 5,
      deleteEvicted: true,
      expiration: 604800000,
    },
    memory: 1024,
    name: "my-sandbox",
    persistent: true,
    region: "iad1",
    runtime: "node22",
    snapshotExpiration: 604800000,
    status: "running",
    statusUpdatedAt: 1750344501629,
    tags: {
      "team": "hive",
      "user": "bob",
    },
    timeout: 300000,
    totalActiveCpuDurationMs: 5000,
    totalDurationMs: 60000,
    totalEgressBytes: 4096,
    totalIngressBytes: 2048,
    updatedAt: 1750344501629,
    vcpus: 2,
  },
  session: {
    abortedAt: 1750344501629,
    activeCpuDurationMs: 42,
    createdAt: 1750344501629,
    cwd: "/vercel/sandbox",
    duration: 3600000,
    id: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    memory: 2048,
    networkPolicy: {
      allowedCIDRs: [
        "10.0.0.0/8",
      ],
      allowedDomains: [
        "api.vercel.com",
        "*.example.com",
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
      mode: "custom",
    },
    networkTransfer: {
      egress: 7683.25,
      ingress: 3996.32,
    },
    projectId: "prj_123a6c5209bc3778245d011443644c8d27dc2c50",
    region: "iad1",
    requestedAt: 1750344501629,
    requestedStopAt: 1750344501629,
    runtime: "node22",
    snapshottedAt: 1750344501629,
    sourceSandboxName: "my-sandbox",
    sourceSnapshotId: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    startedAt: 1750344501629,
    status: "running",
    stoppedAt: 1750344501629,
    timeout: 3600000,
    updatedAt: 1750344501629,
    vcpus: 2,
  },
  snapshot: {
    createdAt: 1750344501629,
    creationMethod: "manual",
    expiresAt: 1750344501629,
    id: "snap_123a6c5209bc3778245d011443644c8d27dc2c50",
    lastUsedAt: 1750344501629,
    parentId: "snap_parent123",
    region: "iad1",
    regions: [
      "iad1",
      "sfo1",
    ],
    sizeBytes: 104857600,
    sourceSessionId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    status: "created",
    updatedAt: 1750344501629,
  },
};
```

