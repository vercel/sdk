# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyNine = {
  appName: "<value>",
  scopes: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `appName`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `appId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `scopes`                                                             | [models.PayloadScopes](../models/payloadscopes.md)[]                 | :heavy_check_mark:                                                   | N/A                                                                  |
| `permissions`                                                        | [models.Permissions](../models/permissions.md)[]                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `acceptedPermissionSets`                                             | [models.AcceptedPermissionSets](../models/acceptedpermissionsets.md) | :heavy_minus_sign:                                                   | N/A                                                                  |