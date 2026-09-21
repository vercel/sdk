# GetProjectRateLimit

## Example Usage

```typescript
import { GetProjectRateLimit } from "@vercel/sdk/models/getprojectfrom1.js";

let value: GetProjectRateLimit = {
  algo: "token_bucket",
  keys: [
    "<value 1>",
  ],
  limit: 554.58,
  window: 8076.08,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `algo`                                               | [models.GetProjectAlgo](../models/getprojectalgo.md) | :heavy_check_mark:                                   | N/A                                                  |
| `keys`                                               | *string*[]                                           | :heavy_check_mark:                                   | N/A                                                  |
| `limit`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `window`                                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |