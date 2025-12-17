# PutFirewallConfigRulesConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesConditions = {
  type: "route",
  op: "sub",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.PutFirewallConfigRulesType](../models/putfirewallconfigrulestype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `op`                                                                         | [models.PutFirewallConfigRulesOp](../models/putfirewallconfigrulesop.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `neg`                                                                        | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `value`                                                                      | *models.PutFirewallConfigRulesValue*                                         | :heavy_minus_sign:                                                           | N/A                                                                          |