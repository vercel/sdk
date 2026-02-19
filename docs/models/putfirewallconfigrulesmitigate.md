# PutFirewallConfigRulesMitigate

## Example Usage

```typescript
import { PutFirewallConfigRulesMitigate } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesMitigate = {
  action: "rate_limit",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                               | [models.PutFirewallConfigRulesSecurityResponse200Action](../models/putfirewallconfigrulessecurityresponse200action.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `rateLimit`                                                                                                            | [models.PutFirewallConfigRulesRateLimit](../models/putfirewallconfigrulesratelimit.md)                                 | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `redirect`                                                                                                             | [models.PutFirewallConfigRulesRedirect](../models/putfirewallconfigrulesredirect.md)                                   | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `actionDuration`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `bypassSystem`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `logHeaders`                                                                                                           | *models.PutFirewallConfigRulesLogHeaders*                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |