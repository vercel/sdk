# AtprotoSubscription

## Example Usage

```typescript
import { AtprotoSubscription } from "@vercel/sdk/models/createdeploymenthasdeploymentsvalue.js";

let value: AtprotoSubscription = {
  collections: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  path: "/usr/sbin",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `collections`                                      | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |
| `dids`                                             | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `kinds`                                            | [models.AtprotoKinds](../models/atprotokinds.md)[] | :heavy_minus_sign:                                 | N/A                                                |
| `path`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |