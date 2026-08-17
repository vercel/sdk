# GetFirewallConfigSecurityConditions

## Example Usage

```typescript
import { GetFirewallConfigSecurityConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigSecurityConditions = {
  type: "server_action",
  op: "ninc",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [models.GetFirewallConfigType](../models/getfirewallconfigtype.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `op`                                                               | [models.GetFirewallConfigOp](../models/getfirewallconfigop.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `neg`                                                              | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `key`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `value`                                                            | *models.GetFirewallConfigValue*                                    | :heavy_minus_sign:                                                 | N/A                                                                |