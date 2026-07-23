# GetProjectRateLimit

## Example Usage

```typescript
import { GetProjectRateLimit } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectRateLimit = {
  algo: "token_bucket",
  window: 3926.01,
  limit: 554.58,
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `algo`                                               | [models.GetProjectAlgo](../models/getprojectalgo.md) | :heavy_check_mark:                                   | N/A                                                  |
| `window`                                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `limit`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `keys`                                               | *string*[]                                           | :heavy_check_mark:                                   | N/A                                                  |