# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/userevent.js";

let value: SeventyTwo = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 1175.22,
    createdAt: 2700.69,
    deploymentSecret: "<value>",
    email: "Yesenia_Kihn63@gmail.com",
    id: "<id>",
    platformVersion: 1914.13,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Cassidy95",
    updatedAt: 2902.27,
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