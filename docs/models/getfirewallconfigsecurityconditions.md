# GetFirewallConfigSecurityConditions

## Example Usage

```typescript
import { GetFirewallConfigSecurityConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigSecurityConditions = {
  op: "re",
  type: "region",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `key`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `neg`                                                              | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `op`                                                               | [models.GetFirewallConfigOp](../models/getfirewallconfigop.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | [models.GetFirewallConfigType](../models/getfirewallconfigtype.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `value`                                                            | *models.GetFirewallConfigValue*                                    | :heavy_minus_sign:                                                 | N/A                                                                |