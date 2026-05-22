# OneHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: OneHundredAndTwentyThree = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 1625.89,
    createdAt: 3351.57,
    deploymentSecret: "<value>",
    email: "Abigayle_Klocko@yahoo.com",
    id: "<id>",
    platformVersion: 6451.79,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Timmothy57",
    updatedAt: 9613.98,
    version: "northstar",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `userId`                                 | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `integrationId`                          | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `configurationId`                        | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `integrationSlug`                        | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `integrationName`                        | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `newOwner`                               | [models.NewOwner](../models/newowner.md) | :heavy_check_mark:                       | N/A                                      |