# OneHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySix } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: OneHundredAndSeventySix = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 9025.59,
    createdAt: 4258.27,
    deploymentSecret: "<value>",
    email: "Leilani60@yahoo.com",
    id: "<id>",
    platformVersion: 4032.03,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    updatedAt: 730.19,
    username: "Benedict.Hettinger67",
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