# SeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyThree } from "@vercel/sdk/models/userevent.js";

let value: SeventyThree = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 6465.26,
    createdAt: 2370.09,
    deploymentSecret: "<value>",
    email: "Destinee_Beier55@yahoo.com",
    id: "<id>",
    platformVersion: 587.63,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Malcolm.Kilback",
    updatedAt: 9559.82,
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