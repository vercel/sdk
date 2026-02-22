# GetProjectsResponseBodyAbuse

## Example Usage

```typescript
import { GetProjectsResponseBodyAbuse } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: GetProjectsResponseBodyAbuse = {
  history: [],
  updatedAt: 4153.95,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `scanner`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `history`                                                                                        | [models.GetProjectsResponseBodyHistory](../models/getprojectsresponsebodyhistory.md)[]           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `block`                                                                                          | [models.GetProjectsResponseBodyProjectsBlock](../models/getprojectsresponsebodyprojectsblock.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `blockHistory`                                                                                   | *models.GetProjectsResponseBodyBlockHistory*[]                                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `interstitial`                                                                                   | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |