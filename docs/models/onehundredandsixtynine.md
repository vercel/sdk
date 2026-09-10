# OneHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyNine } from "@vercel/sdk/models/payloadpreviousrule.js";

let value: OneHundredAndSixtyNine = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 6707.47,
    createdAt: 1499.39,
    deploymentSecret: "<value>",
    email: "Wilmer_Pfannerstill-Conn@hotmail.com",
    id: "<id>",
    platformVersion: null,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Israel.Shields-Dach",
    updatedAt: 5491.89,
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