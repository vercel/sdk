# UpdateProjectAbuse

## Example Usage

```typescript
import { UpdateProjectAbuse } from "@vercel/sdk/models/updateprojectdefinitions.js";

let value: UpdateProjectAbuse = {
  history: [
    {
      at: 2539.67,
      by: "<value>",
      byId: "<id>",
      reason: "<value>",
      scanner: "<value>",
    },
  ],
  updatedAt: 2084.69,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `block`                                                                                    | [models.UpdateProjectBlock](../models/updateprojectblock.md)                               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `blockHistory`                                                                             | *models.UpdateProjectBlockHistory*[]                                                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `history`                                                                                  | [models.UpdateProjectHistory](../models/updateprojecthistory.md)[]                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `interstitial`                                                                             | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `interstitialHistory`                                                                      | [models.UpdateProjectInterstitialHistory](../models/updateprojectinterstitialhistory.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `scanner`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |