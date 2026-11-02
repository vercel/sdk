# FourHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeven } from "@vercel/sdk/models/usereventpayload391scope.js";

let value: FourHundredAndSeven = {
  eventId: "<id>",
  occurredAt: 2478.42,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: null,
  findingId: "<id>",
  findingNumber: 4449.36,
  severity: "<value>",
  targetId: "<id>",
  targetKind: "project",
  targetName: "<value>",
  vulnerabilityClass: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `eventId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `occurredAt`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `sessionKind`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted session kinds: chat, investigation.                       |
| `surface`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | Currently emitted surfaces: dashboard, internal, slack, automation, github. |
| `branchRef`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `deploymentId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | Null for a repository's findings and those of an undeployed commit.         |
| `environment`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Null for a repository's findings.                                           |
| `findingId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `findingNumber`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `severity`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `targetId`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `targetKind`                                                                | [models.TargetKind](../models/targetkind.md)                                | :heavy_check_mark:                                                          | A repository's findings are in code no project runs.                        |
| `targetName`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `vulnerabilityClass`                                                        | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |