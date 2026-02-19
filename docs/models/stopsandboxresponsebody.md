# StopSandboxResponseBody

The sandbox was stopped successfully.

## Example Usage

```typescript
import { StopSandboxResponseBody } from "@vercel/sdk/models/stopsandboxop.js";

let value: StopSandboxResponseBody = {
  sandbox: {
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
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `sandbox`                                                     | [models.Sandbox](../models/sandbox.md)                        | :heavy_check_mark:                                            | This object contains information related to a Vercel Sandbox. |