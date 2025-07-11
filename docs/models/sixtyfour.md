# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/userevent.js";

let value: SixtyFour = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 2726.5,
    createdAt: 3574.57,
    deploymentSecret: "<value>",
    email: "Otha.Fay@yahoo.com",
    id: "<id>",
    platformVersion: 6228.58,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Donny95",
    updatedAt: 9978.55,
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