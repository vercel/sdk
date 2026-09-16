# GetFirewallConfigRulesConditions

## Example Usage

```typescript
import { GetFirewallConfigRulesConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesConditions = {
  op: "sub",
  type: "shared_condition",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `key`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `neg`                                                                        | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `op`                                                                         | [models.GetFirewallConfigRulesOp](../models/getfirewallconfigrulesop.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [models.GetFirewallConfigRulesType](../models/getfirewallconfigrulestype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *models.GetFirewallConfigRulesValue*                                         | :heavy_minus_sign:                                                           | N/A                                                                          |