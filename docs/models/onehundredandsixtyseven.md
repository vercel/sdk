# OneHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySeven } from "@vercel/sdk/models/payloadpreviousrule.js";

let value: OneHundredAndSixtySeven = {
  userId: "<id>",
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  newOwner: {
    billing: {
      plan: "hobby",
    },
    blocked: 2558.38,
    createdAt: 9696.38,
    deploymentSecret: "<value>",
    email: "Gregory_Kunde@gmail.com",
    id: "<id>",
    platformVersion: 1495.37,
    stagingPrefix: "<value>",
    sysToken: "<value>",
    type: "user",
    username: "Rosella.OConner",
    updatedAt: 9475.01,
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