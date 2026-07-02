# GetProjectCrons

## Example Usage

```typescript
import { GetProjectCrons } from "@vercel/sdk/models/getprojecttargets.js";

let value: GetProjectCrons = {
  enabledAt: 6854.98,
  disabledAt: 7243.34,
  updatedAt: 8101.47,
  deploymentId: "<id>",
  definitions: [
    {
      host: "vercel.com",
      path: "/api/crons/sync-something?hello=world",
      schedule: "0 0 * * *",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `enabledAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs. |
| `disabledAt`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The time the feature was disabled for this project.                                                                                |
| `updatedAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `deploymentId`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the Deployment from which the definitions originated.                                                                    |
| `definitions`                                                                                                                      | [models.GetProjectDefinitions](../models/getprojectdefinitions.md)[]                                                               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |