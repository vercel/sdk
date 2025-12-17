# GetFirewallConfigRulesMitigate

## Example Usage

```typescript
import { GetFirewallConfigRulesMitigate } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesMitigate = {
  action: "deny",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `action`                                                                                         | [models.GetFirewallConfigRulesSecurityAction](../models/getfirewallconfigrulessecurityaction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `rateLimit`                                                                                      | [models.GetFirewallConfigRulesRateLimit](../models/getfirewallconfigrulesratelimit.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `redirect`                                                                                       | [models.GetFirewallConfigRulesRedirect](../models/getfirewallconfigrulesredirect.md)             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `actionDuration`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `bypassSystem`                                                                                   | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |