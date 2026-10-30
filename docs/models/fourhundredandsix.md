# FourHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSix } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndSix = {
  eventId: "<id>",
  occurredAt: 3986.93,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 463.85,
  projectId: "<id>",
  projectName: "<value>",
  severity: "<value>",
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
| `deploymentId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `environment`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `findingId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `findingNumber`                                                             | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `projectId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `projectName`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `severity`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `vulnerabilityClass`                                                        | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |