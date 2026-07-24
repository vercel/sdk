# GetProjectsResponseBodyProjectsRateLimit

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsRateLimit } from "@vercel/sdk/models/responsebodydismissedtoasts.js";

let value: GetProjectsResponseBodyProjectsRateLimit = {
  algo: "token_bucket",
  window: 7335.96,
  limit: 4521.58,
  keys: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                         | [models.GetProjectsResponseBodyProjectsResponseAlgo](../models/getprojectsresponsebodyprojectsresponsealgo.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `window`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `keys`                                                                                                         | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |