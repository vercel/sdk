# FourHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeven } from "@vercel/sdk/models/usereventpayload391type.js";

let value: FourHundredAndSeven = {
  eventId: "<id>",
  occurredAt: 2478.42,
  sessionId: "<id>",
  sessionKind: "<value>",
  surface: "<value>",
  branchRef: "<value>",
  deploymentId: "<id>",
  environment: "<value>",
  findingId: "<id>",
  findingNumber: 4543.69,
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