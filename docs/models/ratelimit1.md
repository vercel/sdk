# RateLimit1

## Example Usage

```typescript
import { RateLimit1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RateLimit1 = {
  algo: "token_bucket",
  window: 3650.43,
  limit: 2676.84,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `algo`                                             | [models.RateLimitAlgo](../models/ratelimitalgo.md) | :heavy_check_mark:                                 | N/A                                                |
| `window`                                           | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `limit`                                            | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `keys`                                             | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |
| `action`                                           | *models.RateLimitAction*                           | :heavy_minus_sign:                                 | N/A                                                |