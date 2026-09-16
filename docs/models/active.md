# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: Active = {
  changes: [
    {},
  ],
  firewallEnabled: true,
  id: "<id>",
  ips: [
    {
      action: "deny",
      hostname: "unhealthy-futon.org",
      id: "<id>",
      ip: "99.107.10.110",
    },
  ],
  ownerId: "<id>",
  projectKey: "<value>",
  rules: [
    {
      action: {},
      active: false,
      conditionGroup: [],
      id: "<id>",
      name: "<value>",
      valid: true,
      validationErrors: "<value>",
    },
  ],
  updatedAt: "1735672124255",
  version: 5779.34,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `botIdEnabled`                                                                                                             | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `changes`                                                                                                                  | [models.GetSecurityFirewallConfigSecurityResponseChanges](../models/getsecurityfirewallconfigsecurityresponsechanges.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `conditions`                                                                                                               | [models.GetSecurityFirewallConfigConditions](../models/getsecurityfirewallconfigconditions.md)[]                           | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `crs`                                                                                                                      | [models.GetSecurityFirewallConfigSecurityResponseCrs](../models/getsecurityfirewallconfigsecurityresponsecrs.md)           | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `firewallEnabled`                                                                                                          | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `ips`                                                                                                                      | [models.GetSecurityFirewallConfigSecurityResponseIps](../models/getsecurityfirewallconfigsecurityresponseips.md)[]         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `logHeaders`                                                                                                               | *models.GetSecurityFirewallConfigLogHeaders*                                                                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `managedRules`                                                                                                             | [models.GetSecurityFirewallConfigManagedRules](../models/getsecurityfirewallconfigmanagedrules.md)                         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `ownerId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `projectKey`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `rules`                                                                                                                    | *models.GetSecurityFirewallConfigRules*[]                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `rulesets`                                                                                                                 | *models.GetSecurityFirewallConfigRulesets*                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `version`                                                                                                                  | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |