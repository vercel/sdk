# OneHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyNine } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndSixtyNine = {
  deploymentId: "<id>",
  deploymentUrl: "https://petty-pillbox.com",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `customEnvironmentSlugs`        | *string*[]                      | :heavy_minus_sign:              | N/A                             |
| `edgeConfigId`                  | *string*                        | :heavy_minus_sign:              | N/A                             |
| `edgeConfigTokenId`             | *string*                        | :heavy_minus_sign:              | N/A                             |
| `gitBranch`                     | *string*                        | :heavy_minus_sign:              | N/A                             |
| `id`                            | *string*                        | :heavy_minus_sign:              | N/A                             |
| `ipAddress`                     | *string*                        | :heavy_minus_sign:              | N/A                             |
| `key`                           | *string*                        | :heavy_minus_sign:              | N/A                             |
| `projectId`                     | *string*                        | :heavy_minus_sign:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_minus_sign:              | N/A                             |
| `source`                        | *string*                        | :heavy_minus_sign:              | N/A                             |
| `target`                        | *models.UserEventPayloadTarget* | :heavy_minus_sign:              | N/A                             |
| `deploymentId`                  | *string*                        | :heavy_check_mark:              | N/A                             |
| `deploymentUrl`                 | *string*                        | :heavy_check_mark:              | N/A                             |