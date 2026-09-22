# GetProjectAbuse

## Example Usage

```typescript
import { GetProjectAbuse } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectAbuse = {
  history: [],
  updatedAt: 3657.78,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `block`                                                                              | [models.GetProjectBlock](../models/getprojectblock.md)                               | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `blockHistory`                                                                       | *models.GetProjectBlockHistory*[]                                                    | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `history`                                                                            | [models.GetProjectHistory](../models/getprojecthistory.md)[]                         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `interstitial`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `interstitialHistory`                                                                | [models.GetProjectInterstitialHistory](../models/getprojectinterstitialhistory.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `scanner`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |