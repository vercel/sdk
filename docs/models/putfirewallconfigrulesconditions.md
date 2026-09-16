# PutFirewallConfigRulesConditions

## Example Usage

```typescript
import { PutFirewallConfigRulesConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesConditions = {
  op: "inc",
  type: "ja4_digest",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `key`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `neg`                                                                        | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `op`                                                                         | [models.PutFirewallConfigRulesOp](../models/putfirewallconfigrulesop.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [models.PutFirewallConfigRulesType](../models/putfirewallconfigrulestype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *models.PutFirewallConfigRulesValue*                                         | :heavy_minus_sign:                                                           | N/A                                                                          |