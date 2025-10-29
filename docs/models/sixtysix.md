# SixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySix } from "@vercel/sdk/models/userevent.js";

let value: SixtySix = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "enterprise",
    },
    blocked: 3027.85,
    createdAt: 9498.55,
    deploymentSecret: "<value>",
    email: "Gail_Bergnaum58@gmail.com",
    id: "<id>",
    platformVersion: 6684.95,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Sheldon_McKenzie",
    updatedAt: 4178.38,
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