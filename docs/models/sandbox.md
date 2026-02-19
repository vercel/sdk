# Sandbox

This object contains information related to a Vercel Sandbox.

## Example Usage

```typescript
import { Sandbox } from "@vercel/sdk/models/sandbox.js";

let value: Sandbox = {
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier of the sandbox.                                             | sbx_123a6c5209bc3778245d011443644c8d27dc2c50                                      |
| `memory`                                                                          | *number*                                                                          | :heavy_check_mark:                                                                | Memory allocated to this sandbox in MB.                                           | 2048                                                                              |
| `vcpus`                                                                           | *number*                                                                          | :heavy_check_mark:                                                                | Number of vCPUs allocated to this sandbox.                                        | 2                                                                                 |
| `region`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | The region where the sandbox is hosted.                                           | iad1                                                                              |
| `runtime`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | The runtime of the sandbox.                                                       | node22                                                                            |
| `timeout`                                                                         | *number*                                                                          | :heavy_check_mark:                                                                | The maximum amount of time the sandbox will run for in milliseconds.              | 3600000                                                                           |
| `status`                                                                          | [models.SandboxStatus](../models/sandboxstatus.md)                                | :heavy_check_mark:                                                                | The status of the sandbox.                                                        | running                                                                           |
| `requestedAt`                                                                     | *number*                                                                          | :heavy_check_mark:                                                                | The time when the sandbox was requested, in milliseconds since the epoch.         | 1750344501629                                                                     |
| `startedAt`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | The time when the sandbox was started, in milliseconds since the epoch.           | 1750344501629                                                                     |
| `cwd`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The working directory of the sandbox.                                             | /vercel/sandbox                                                                   |
| `requestedStopAt`                                                                 | *number*                                                                          | :heavy_minus_sign:                                                                | The time when the sandbox was requested to stop, in milliseconds since the epoch. | 1750344501629                                                                     |
| `stoppedAt`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | The time when the sandbox was stopped, in milliseconds since the epoch.           | 1750344501629                                                                     |
| `abortedAt`                                                                       | *number*                                                                          | :heavy_minus_sign:                                                                | The time when the sandbox was aborted, in milliseconds since the epoch.           | 1750344501629                                                                     |
| `duration`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | The duration of the sandbox in milliseconds.                                      | 3600000                                                                           |
| `sourceSnapshotId`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | The unique identifier of the snapshot associated with this sandbox, if any.       | snap_123a6c5209bc3778245d011443644c8d27dc2c50                                     |
| `snapshottedAt`                                                                   | *number*                                                                          | :heavy_minus_sign:                                                                | The time when a snapshot was requested, in milliseconds since the epoch.          | 1750344501629                                                                     |
| `createdAt`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | The time when the sandbox was created, in milliseconds since the epoch.           | 1750344501629                                                                     |
| `updatedAt`                                                                       | *number*                                                                          | :heavy_check_mark:                                                                | The last time the sandbox was updated, in milliseconds since the epoch.           | 1750344501629                                                                     |
| `networkPolicy`                                                                   | [models.SandboxNetworkPolicy](../models/sandboxnetworkpolicy.md)                  | :heavy_minus_sign:                                                                | The network policy applied to this sandbox, if any.                               |                                                                                   |