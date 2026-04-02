# UpdateSandboxResponseBody

## Example Usage

```typescript
import { UpdateSandboxResponseBody } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxResponseBody = {
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
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `sandbox`                                                          | [models.NamedSandbox](../models/namedsandbox.md)                   | :heavy_check_mark:                                                 | This object contains information related to a Vercel NamedSandbox. |