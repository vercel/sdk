# PutFirewallConfigRulesSecurityMitigate

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityMitigate } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityMitigate = {
  action: "rate_limit",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                         | [models.PutFirewallConfigRulesSecurityResponseAction](../models/putfirewallconfigrulessecurityresponseaction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rateLimit`                                                                                                      | [models.PutFirewallConfigRulesSecurityRateLimit](../models/putfirewallconfigrulessecurityratelimit.md)           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `redirect`                                                                                                       | [models.PutFirewallConfigRulesSecurityRedirect](../models/putfirewallconfigrulessecurityredirect.md)             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `actionDuration`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `bypassSystem`                                                                                                   | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |