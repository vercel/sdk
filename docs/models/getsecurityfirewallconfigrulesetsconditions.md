# GetSecurityFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsConditions } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsConditions = {
  type: "bot_name",
  op: "lte",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.GetSecurityFirewallConfigRulesetsType](../models/getsecurityfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.GetSecurityFirewallConfigRulesetsOp](../models/getsecurityfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `neg`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.GetSecurityFirewallConfigRulesetsValue*                                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |