# CreateSandboxesSessionsBySessionIdSnapshotV2ResponseBody

## Example Usage

```typescript
import { CreateSandboxesSessionsBySessionIdSnapshotV2ResponseBody } from "@vercel/sdk/models/createsandboxessessionsbysessionidsnapshotv2op.js";

let value: CreateSandboxesSessionsBySessionIdSnapshotV2ResponseBody = {
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

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session`                                                                                                                                             | [models.Session](../models/session.md)                                                                                                                | :heavy_check_mark:                                                                                                                                    | This object contains information related to a Vercel Sandbox Session. v2 endpoints return "session" instead of "sandbox" as the response wrapper key. |
| `snapshot`                                                                                                                                            | [models.Snapshot](../models/snapshot.md)                                                                                                              | :heavy_check_mark:                                                                                                                                    | This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).                                                          |