# ResponseBodyAbuse

## Example Usage

```typescript
import { ResponseBodyAbuse } from "@vercel/sdk/models/getprojectsresponsebodyprojectsaliasassigned.js";

let value: ResponseBodyAbuse = {
  history: [
    {
      at: 374.36,
      by: "<value>",
      byId: "<id>",
      reason: "<value>",
      scanner: "<value>",
    },
  ],
  updatedAt: 7326.91,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `block`                                                                                  | [models.ResponseBodyBlock](../models/responsebodyblock.md)                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `blockHistory`                                                                           | *models.ResponseBodyBlockHistory*[]                                                      | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `history`                                                                                | [models.ResponseBodyHistory](../models/responsebodyhistory.md)[]                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `interstitial`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `interstitialHistory`                                                                    | [models.ResponseBodyInterstitialHistory](../models/responsebodyinterstitialhistory.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `scanner`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |