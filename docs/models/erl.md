# Erl

## Example Usage

```typescript
import { Erl } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Erl = {
  algo: "token_bucket",
  window: 1689.99,
  limit: 4648.04,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `algo`                                                                       | [models.UpdateProjectDataCacheAlgo](../models/updateprojectdatacachealgo.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `window`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `keys`                                                                       | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |