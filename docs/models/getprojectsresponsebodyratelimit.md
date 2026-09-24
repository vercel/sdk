# GetProjectsResponseBodyRateLimit

## Example Usage

```typescript
import { GetProjectsResponseBodyRateLimit } from "@vercel/sdk/models/getprojectsroute1.js";

let value: GetProjectsResponseBodyRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
  ],
  limit: 8615.67,
  window: 2733.05,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `algo`                                                                                         | [models.GetProjectsResponseBodyProjectsAlgo](../models/getprojectsresponsebodyprojectsalgo.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `keys`                                                                                         | *string*[]                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `window`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |