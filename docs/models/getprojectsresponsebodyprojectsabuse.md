# GetProjectsResponseBodyProjectsAbuse

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsAbuse } from "@vercel/sdk/models/getprojectsresponsebodyprojectsframework.js";

let value: GetProjectsResponseBodyProjectsAbuse = {
  history: [
    {
      at: 4583.27,
      by: "<value>",
      byId: "<id>",
      reason: "<value>",
      scanner: "<value>",
    },
  ],
  updatedAt: 1731.55,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `block`                                                                                                                        | [models.GetProjectsResponseBodyProjectsBlock](../models/getprojectsresponsebodyprojectsblock.md)                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockHistory`                                                                                                                 | *models.GetProjectsResponseBodyProjectsBlockHistory*[]                                                                         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `history`                                                                                                                      | [models.GetProjectsResponseBodyProjectsHistory](../models/getprojectsresponsebodyprojectshistory.md)[]                         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `interstitial`                                                                                                                 | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `interstitialHistory`                                                                                                          | [models.GetProjectsResponseBodyProjectsInterstitialHistory](../models/getprojectsresponsebodyprojectsinterstitialhistory.md)[] | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `scanner`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `updatedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |