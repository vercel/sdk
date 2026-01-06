# ResponseBodyAbuse

## Example Usage

```typescript
import { ResponseBodyAbuse } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 374.36,
    },
  ],
  updatedAt: 7326.91,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scanner`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `history`                                                        | [models.ResponseBodyHistory](../models/responsebodyhistory.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `block`                                                          | [models.ResponseBodyBlock](../models/responsebodyblock.md)       | :heavy_minus_sign:                                               | N/A                                                              |
| `blockHistory`                                                   | *models.ResponseBodyBlockHistory*[]                              | :heavy_minus_sign:                                               | N/A                                                              |
| `interstitial`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |