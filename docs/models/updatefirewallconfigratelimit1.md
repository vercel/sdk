# UpdateFirewallConfigRateLimit1

## Example Usage

```typescript
import { UpdateFirewallConfigRateLimit1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRateLimit1 = {
  algo: "token_bucket",
  window: 7420.1,
  limit: 8971.46,
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
| `action`                                           | *models.UpdateFirewallConfigRateLimitAction*       | :heavy_minus_sign:                                 | N/A                                                |