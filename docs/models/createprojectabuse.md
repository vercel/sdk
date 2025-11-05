# CreateProjectAbuse

## Example Usage

```typescript
import { CreateProjectAbuse } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 6290.64,
    },
  ],
  updatedAt: 7527.08,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scanner`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `history`                                                          | [models.CreateProjectHistory](../models/createprojecthistory.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `block`                                                            | [models.CreateProjectBlock](../models/createprojectblock.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockHistory`                                                     | *models.CreateProjectBlockHistory*[]                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `interstitial`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |