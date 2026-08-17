# GetSecurityFirewallConfigRulesetsSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigRulesetsSecurityConditions = {
  type: "shared_condition",
  op: "lt",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetSecurityFirewallConfigRulesetsSecurityType](../models/getsecurityfirewallconfigrulesetssecuritytype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.GetSecurityFirewallConfigRulesetsSecurityOp](../models/getsecurityfirewallconfigrulesetssecurityop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `neg`                                                                                                              | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *models.GetSecurityFirewallConfigRulesetsSecurityValue*                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |