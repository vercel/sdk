# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixty = {
  appName: "<value>",
  nextScopes: [
    "openid",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `appName`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `appId`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `nextScopes`                                                                 | [models.NextScopes](../models/nextscopes.md)[]                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `nextPermissions`                                                            | [models.NextPermissions](../models/nextpermissions.md)[]                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `nextAcceptedPermissionSets`                                                 | [models.NextAcceptedPermissionSets](../models/nextacceptedpermissionsets.md) | :heavy_minus_sign:                                                           | N/A                                                                          |