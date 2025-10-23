# UpdateProjectDataCacheAbuse

## Example Usage

```typescript
import { UpdateProjectDataCacheAbuse } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 5950.67,
    },
  ],
  updatedAt: 714.52,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scanner`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `history`                                                                            | [models.UpdateProjectDataCacheHistory](../models/updateprojectdatacachehistory.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `block`                                                                              | [models.Block](../models/block.md)                                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockHistory`                                                                       | *models.UpdateProjectDataCacheBlockHistory*[]                                        | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `interstitial`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `interstitialHistory`                                                                | [models.InterstitialHistory](../models/interstitialhistory.md)[]                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |