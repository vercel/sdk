# CreateProjectAbuse

## Example Usage

```typescript
import { CreateProjectAbuse } from "@vercel/sdk/models/createprojectcontenthint2.js";

let value: CreateProjectAbuse = {
  history: [
    {
      at: 6290.64,
      by: "<value>",
      byId: "<id>",
      reason: "<value>",
      scanner: "<value>",
    },
  ],
  updatedAt: 7527.08,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `block`                                                            | [models.Block](../models/block.md)                                 | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockHistory`                                                     | *models.CreateProjectBlockHistory*[]                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `history`                                                          | [models.CreateProjectHistory](../models/createprojecthistory.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `interstitial`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `interstitialHistory`                                              | [models.InterstitialHistory](../models/interstitialhistory.md)[]   | :heavy_minus_sign:                                                 | N/A                                                                |
| `scanner`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |