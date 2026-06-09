# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/ninetyfour.js";

let value: OneHundredAndNineteen = {
  deploymentId: "<id>",
  deploymentUrl: "https://messy-providence.info/",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `key`                    | *string*                 | :heavy_minus_sign:       | N/A                      |
| `projectId`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `projectName`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `target`                 | *models.PayloadTarget*   | :heavy_minus_sign:       | N/A                      |
| `customEnvironmentSlugs` | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `id`                     | *string*                 | :heavy_minus_sign:       | N/A                      |
| `gitBranch`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `edgeConfigId`           | *string*                 | :heavy_minus_sign:       | N/A                      |
| `edgeConfigTokenId`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `source`                 | *string*                 | :heavy_minus_sign:       | N/A                      |
| `ipAddress`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `deploymentId`           | *string*                 | :heavy_check_mark:       | N/A                      |
| `deploymentUrl`          | *string*                 | :heavy_check_mark:       | N/A                      |