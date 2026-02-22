# GetProjectsResponseBodyProjectsAbuse

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsAbuse } from "@vercel/sdk/models/getprojectsrouteprojectsresponse200applicationjsonresponsebodymitigate.js";

let value: GetProjectsResponseBodyProjectsAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 4583.27,
    },
  ],
  updatedAt: 1731.55,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `scanner`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `history`                                                                                              | [models.GetProjectsResponseBodyProjectsHistory](../models/getprojectsresponsebodyprojectshistory.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `block`                                                                                                | [models.GetProjectsResponseBodyBlock](../models/getprojectsresponsebodyblock.md)                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blockHistory`                                                                                         | *models.GetProjectsResponseBodyProjectsBlockHistory*[]                                                 | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `interstitial`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |