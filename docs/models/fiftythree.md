# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/twentynine.js";

let value: FiftyThree = {
  appName: "<value>",
  scopes: [
    "offline_access",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `appName`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `permissions`                                        | [models.Permissions](../models/permissions.md)[]     | :heavy_minus_sign:                                   | N/A                                                  |
| `scopes`                                             | [models.PayloadScopes](../models/payloadscopes.md)[] | :heavy_check_mark:                                   | N/A                                                  |