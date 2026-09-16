# GetSecurityFirewallConfigRulesetsConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsConditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesetsConditions = {
  op: "eq",
  type: "method",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `neg`                                                                                              | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.GetSecurityFirewallConfigRulesetsOp](../models/getsecurityfirewallconfigrulesetsop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [models.GetSecurityFirewallConfigRulesetsType](../models/getsecurityfirewallconfigrulesetstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.GetSecurityFirewallConfigRulesetsValue*                                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |