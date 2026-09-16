# DeleteSandboxResponseBody

## Example Usage

```typescript
import { DeleteSandboxResponseBody } from "@vercel/sdk/models/deletesandboxop.js";

let value: DeleteSandboxResponseBody = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `sandbox`                                                          | [models.NamedSandbox](../models/namedsandbox.md)                   | :heavy_check_mark:                                                 | This object contains information related to a Vercel NamedSandbox. |