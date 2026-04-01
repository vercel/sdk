# UpdateMicrofrontendsCrons

## Example Usage

```typescript
import { UpdateMicrofrontendsCrons } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsCrons = {
  enabledAt: 2361.99,
  disabledAt: 9572.53,
  updatedAt: 3879.41,
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
| `definitions`                                                                                                                      | [models.UpdateMicrofrontendsDefinitions](../models/updatemicrofrontendsdefinitions.md)[]                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |