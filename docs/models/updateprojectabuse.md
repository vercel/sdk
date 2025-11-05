# UpdateProjectAbuse

## Example Usage

```typescript
import { UpdateProjectAbuse } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 2539.67,
    },
  ],
  updatedAt: 2084.69,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scanner`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `history`                                                          | [models.UpdateProjectHistory](../models/updateprojecthistory.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `block`                                                            | [models.UpdateProjectBlock](../models/updateprojectblock.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockHistory`                                                     | *models.UpdateProjectBlockHistory*[]                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `interstitial`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |