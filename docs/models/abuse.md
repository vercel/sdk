# Abuse

## Example Usage

```typescript
import { Abuse } from "@vercel/sdk/models/createprojectcontenthint8.js";

let value: Abuse = {
  history: [],
  updatedAt: 3139.62,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `block`                                                          | [models.Block](../models/block.md)                               | :heavy_minus_sign:                                               | N/A                                                              |
| `blockHistory`                                                   | *models.BlockHistory*[]                                          | :heavy_minus_sign:                                               | N/A                                                              |
| `history`                                                        | [models.History](../models/history.md)[]                         | :heavy_check_mark:                                               | N/A                                                              |
| `interstitial`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `interstitialHistory`                                            | [models.InterstitialHistory](../models/interstitialhistory.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `scanner`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |