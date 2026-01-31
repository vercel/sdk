# SeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySix } from "@vercel/sdk/models/userevent.js";

let value: SeventySix = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 8140.97,
    createdAt: 2114.95,
    deploymentSecret: "<value>",
    email: "Era46@gmail.com",
    id: "<id>",
    platformVersion: 1079.52,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Hilbert_Frami65",
    updatedAt: 3667.65,
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