# GetSecurityFirewallConfigRulesApiSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesApiSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigRulesApiSecurityConditions = {
  type: "cookie",
  op: "neq",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetSecurityFirewallConfigRulesApiSecurityType](../models/getsecurityfirewallconfigrulesapisecuritytype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.GetSecurityFirewallConfigRulesApiSecurityOp](../models/getsecurityfirewallconfigrulesapisecurityop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `neg`                                                                                                              | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *models.GetSecurityFirewallConfigRulesApiSecurityValue*                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |