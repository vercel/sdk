# FortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFive } from "@vercel/sdk/models/fortyfour.js";

let value: FortyFive = {
  appName: "<value>",
  scopes: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appName`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `scopes`                                             | [models.PayloadScopes](../models/payloadscopes.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `permissions`                                        | [models.Permissions](../models/permissions.md)[]     | :heavy_minus_sign:                                   | N/A                                                  |