# GetProjectsCrons

## Example Usage

```typescript
import { GetProjectsCrons } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsCrons = {
  enabledAt: 3738.13,
  disabledAt: 5876.00,
  updatedAt: 2728.22,
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
| `definitions`                                                                                                                      | [models.GetProjectsDefinitions](../models/getprojectsdefinitions.md)[]                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |