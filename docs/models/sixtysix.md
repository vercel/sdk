# SixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySix } from "@vercel/sdk/models/twentyone.js";

let value: SixtySix = {
  appName: "<value>",
  scopes: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `appName`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `permissions`                                        | [models.Permissions](../models/permissions.md)[]     | :heavy_minus_sign:                                   | N/A                                                  |
| `scopes`                                             | [models.PayloadScopes](../models/payloadscopes.md)[] | :heavy_check_mark:                                   | N/A                                                  |