# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityaction.js";

let value: Active = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 7103.38,
  updatedAt: "1735606047583",
  firewallEnabled: false,
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: true,
      conditionGroup: [
        {
          conditions: [
            {
              type: "ruleset",
              op: "nex",
            },
          ],
        },
      ],
      action: {},
      valid: false,
      validationErrors: [],
    },
  ],
  ips: [],
  changes: [],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `projectKey`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `version`                                                                                                                  | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `firewallEnabled`                                                                                                          | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `crs`                                                                                                                      | [models.GetSecurityFirewallConfigSecurityResponseCrs](../models/getsecurityfirewallconfigsecurityresponsecrs.md)           | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `rules`                                                                                                                    | *models.GetSecurityFirewallConfigRules*[]                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `ips`                                                                                                                      | [models.GetSecurityFirewallConfigSecurityResponseIps](../models/getsecurityfirewallconfigsecurityresponseips.md)[]         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `rulesets`                                                                                                                 | *models.GetSecurityFirewallConfigRulesets*                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `changes`                                                                                                                  | [models.GetSecurityFirewallConfigSecurityResponseChanges](../models/getsecurityfirewallconfigsecurityresponsechanges.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `managedRules`                                                                                                             | [models.GetSecurityFirewallConfigManagedRules](../models/getsecurityfirewallconfigmanagedrules.md)                         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `botIdEnabled`                                                                                                             | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `logHeaders`                                                                                                               | *models.GetSecurityFirewallConfigLogHeaders*                                                                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |