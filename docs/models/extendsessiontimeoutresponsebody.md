# ExtendSessionTimeoutResponseBody

The session timeout was extended successfully.

## Example Usage

```typescript
import { ExtendSessionTimeoutResponseBody } from "@vercel/sdk/models/extendsessiontimeoutop.js";

let value: ExtendSessionTimeoutResponseBody = {
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

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session`                                                                                                                                             | [models.Session](../models/session.md)                                                                                                                | :heavy_check_mark:                                                                                                                                    | This object contains information related to a Vercel Sandbox Session. v2 endpoints return "session" instead of "sandbox" as the response wrapper key. |