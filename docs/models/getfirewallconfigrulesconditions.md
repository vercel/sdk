# GetFirewallConfigRulesConditions

## Example Usage

```typescript
import { GetFirewallConfigRulesConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesConditions = {
  type: "server_action",
  op: "ninc",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.GetFirewallConfigRulesType](../models/getfirewallconfigrulestype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `op`                                                                         | [models.GetFirewallConfigRulesOp](../models/getfirewallconfigrulesop.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `neg`                                                                        | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `value`                                                                      | *models.GetFirewallConfigRulesValue*                                         | :heavy_minus_sign:                                                           | N/A                                                                          |