# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: OneHundredAndSeventy = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 1722.11,
    createdAt: 2468.87,
    deploymentSecret: "<value>",
    email: "Jazmyn_Veum-Corwin@yahoo.com",
    id: "<id>",
    platformVersion: 9964.69,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Lafayette_Jacobs",
    updatedAt: 1291.21,
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