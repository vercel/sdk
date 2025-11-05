# GetProjectsAbuse

## Example Usage

```typescript
import { GetProjectsAbuse } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsAbuse = {
  history: [],
  updatedAt: 177.33,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `scanner`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `history`                                                      | [models.GetProjectsHistory](../models/getprojectshistory.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `updatedAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `block`                                                        | [models.GetProjectsBlock](../models/getprojectsblock.md)       | :heavy_minus_sign:                                             | N/A                                                            |
| `blockHistory`                                                 | *models.GetProjectsBlockHistory*[]                             | :heavy_minus_sign:                                             | N/A                                                            |
| `interstitial`                                                 | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |