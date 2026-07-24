# GetProjectsResponseBodyRateLimit

## Example Usage

```typescript
import { GetProjectsResponseBodyRateLimit } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: GetProjectsResponseBodyRateLimit = {
  algo: "fixed_window",
  window: 4070.67,
  limit: 8615.67,
  keys: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `algo`                                                                                         | [models.GetProjectsResponseBodyProjectsAlgo](../models/getprojectsresponsebodyprojectsalgo.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `window`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `keys`                                                                                         | *string*[]                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |