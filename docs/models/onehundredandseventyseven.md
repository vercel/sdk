# OneHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySeven } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: OneHundredAndSeventySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 5492.3,
    createdAt: 187.08,
    deploymentSecret: "<value>",
    email: "Meagan_Kuphal18@yahoo.com",
    id: "<id>",
    platformVersion: 5814.91,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    updatedAt: 5390.11,
    username: "Abbigail.Runolfsson2",
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