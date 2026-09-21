# CreateProjectRateLimit

## Example Usage

```typescript
import { CreateProjectRateLimit } from "@vercel/sdk/models/createprojecttier.js";

let value: CreateProjectRateLimit = {
  algo: "token_bucket",
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  limit: 4389.41,
  window: 9075.57,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `algo`                                                     | [models.CreateProjectAlgo](../models/createprojectalgo.md) | :heavy_check_mark:                                         | N/A                                                        |
| `keys`                                                     | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `window`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |