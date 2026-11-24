# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/usereventpayload25provider.js";

let value: SeventyEight = {
  appName: "<value>",
  scopes: [
    "profile",
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