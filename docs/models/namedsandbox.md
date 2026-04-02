# NamedSandbox

This object contains information related to a Vercel NamedSandbox.

## Example Usage

```typescript
import { NamedSandbox } from "@vercel/sdk/models/namedsandbox.js";

let value: NamedSandbox = {
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
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | The unique identifier of the sandbox.                                               | my-sandbox                                                                          |
| `currentSnapshotId`                                                                 | *string*                                                                            | :heavy_minus_sign:                                                                  | Current snapshot ID that the named sandbox is pointing to.                          |                                                                                     |
| `currentSessionId`                                                                  | *string*                                                                            | :heavy_check_mark:                                                                  | Current session ID the sandbox is pointing to.                                      |                                                                                     |
| `status`                                                                            | [models.NamedSandboxStatus](../models/namedsandboxstatus.md)                        | :heavy_check_mark:                                                                  | The status of the current sandbox.                                                  | running                                                                             |
| `statusUpdatedAt`                                                                   | *number*                                                                            | :heavy_check_mark:                                                                  | The time when the sandbox status was last updated, in milliseconds since the epoch. | 1750344501629                                                                       |
| `persistent`                                                                        | *boolean*                                                                           | :heavy_check_mark:                                                                  | Whether the sandbox persists its state across restarts via automatic snapshots.     | true                                                                                |
| `region`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | The region the sandbox runs in.                                                     | iad1                                                                                |
| `vcpus`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Number of virtual CPUs allocated.                                                   | 2                                                                                   |
| `memory`                                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Memory allocated in MB.                                                             | 1024                                                                                |
| `runtime`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | Runtime identifier.                                                                 | node22                                                                              |
| `timeout`                                                                           | *number*                                                                            | :heavy_minus_sign:                                                                  | Timeout in milliseconds.                                                            | 300000                                                                              |
| `snapshotExpiration`                                                                | *number*                                                                            | :heavy_minus_sign:                                                                  | Default snapshot expiration time in milliseconds. 0 means no expiration.            | 604800000                                                                           |
| `networkPolicy`                                                                     | [models.NetworkPolicy](../models/networkpolicy.md)                                  | :heavy_minus_sign:                                                                  | Network policy configuration.                                                       |                                                                                     |
| `totalEgressBytes`                                                                  | *number*                                                                            | :heavy_minus_sign:                                                                  | Cumulative egress bytes across all sandbox runs.                                    | 4096                                                                                |
| `totalIngressBytes`                                                                 | *number*                                                                            | :heavy_minus_sign:                                                                  | Cumulative ingress bytes across all sandbox runs.                                   | 2048                                                                                |
| `totalActiveCpuDurationMs`                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | Cumulative active CPU duration in milliseconds across all sandbox runs.             | 5000                                                                                |
| `totalDurationMs`                                                                   | *number*                                                                            | :heavy_minus_sign:                                                                  | Cumulative wall-clock duration in milliseconds across all sandbox runs.             | 60000                                                                               |
| `cwd`                                                                               | *string*                                                                            | :heavy_minus_sign:                                                                  | The working directory of the sandbox.                                               | /vercel/sandbox                                                                     |
| `tags`                                                                              | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | Key-value tags attached to the named sandbox.                                       | {<br/>"team": "hive",<br/>"user": "bob"<br/>}                                       |
| `createdAt`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | The time when the named sandbox was created, in milliseconds since the epoch.       | 1750344501629                                                                       |
| `updatedAt`                                                                         | *number*                                                                            | :heavy_check_mark:                                                                  | The time when the named sandbox was last updated, in milliseconds since the epoch.  | 1750344501629                                                                       |