# OneHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySix } from "@vercel/sdk/models/usereventpayload125type.js";

let value: OneHundredAndFortySix = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 9147.05,
    createdAt: 5626.1,
    deploymentSecret: "<value>",
    email: "Laurel_Metz51@hotmail.com",
    id: "<id>",
    platformVersion: 3354.37,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Wade.Botsford",
    updatedAt: 8436.58,
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