# DeleteSandboxResponseBody

## Example Usage

```typescript
import { DeleteSandboxResponseBody } from "@vercel/sdk/models/deletesandboxop.js";

let value: DeleteSandboxResponseBody = {
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
    image:
      "my-repo@sha256:2c4e8f9a1b3d5e7f091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708",
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `sandbox`                                                          | [models.NamedSandbox](../models/namedsandbox.md)                   | :heavy_check_mark:                                                 | This object contains information related to a Vercel NamedSandbox. |