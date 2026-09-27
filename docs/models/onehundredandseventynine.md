# OneHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyNine } from "@vercel/sdk/models/lasteditedbyprincipal.js";

let value: OneHundredAndSeventyNine = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 5975.39,
    createdAt: 5132.83,
    deploymentSecret: "<value>",
    email: "Zackery.Block35@yahoo.com",
    id: "<id>",
    platformVersion: 7802.4,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    updatedAt: 1451.67,
    username: "Shanny.Wilderman",
    version: "northstar",
  },
  userId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `configurationId`                        | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `integrationId`                          | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `integrationName`                        | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `integrationSlug`                        | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `newOwner`                               | [models.NewOwner](../models/newowner.md) | :heavy_check_mark:                       | N/A                                      |
| `userId`                                 | *string*                                 | :heavy_check_mark:                       | N/A                                      |