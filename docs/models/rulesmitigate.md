# RulesMitigate

## Example Usage

```typescript
import { RulesMitigate } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesMitigate = {
  action: "redirect",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                         | [models.GetFirewallConfigRulesSecurityResponseAction](../models/getfirewallconfigrulessecurityresponseaction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rateLimit`                                                                                                      | [models.RulesRateLimit](../models/rulesratelimit.md)                                                             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `redirect`                                                                                                       | [models.RulesRedirect](../models/rulesredirect.md)                                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `actionDuration`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `bypassSystem`                                                                                                   | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `logHeaders`                                                                                                     | *models.RulesLogHeaders*                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |