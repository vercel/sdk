# GetFirewallConfigRulesets2

## Example Usage

```typescript
import { GetFirewallConfigRulesets2 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesets2 = {
  action: "deny",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `action`                                                                                               | [models.GetFirewallConfigRulesetsSecurityAction](../models/getfirewallconfigrulesetssecurityaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rateLimit`                                                                                            | [models.RulesetsRateLimit](../models/rulesetsratelimit.md)                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `redirect`                                                                                             | [models.RulesetsRedirect](../models/rulesetsredirect.md)                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `actionDuration`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `bypassSystem`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `logHeaders`                                                                                           | *models.RulesetsLogHeaders*                                                                            | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |