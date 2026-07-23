# Draft

## Example Usage

```typescript
import { Draft } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: Draft = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 5162.19,
  updatedAt: "1735633632808",
  firewallEnabled: false,
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: false,
      conditionGroup: [],
      action: {},
      valid: true,
      validationErrors: "<value>",
    },
  ],
  ips: [
    {
      id: "<id>",
      hostname: "whirlwind-fowl.name",
      ip: "a8e9:ddfb:f5d0:8dee:0e86:af4a:c4ea:941d",
      action: "bypass",
    },
  ],
  changes: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ownerId`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `projectKey`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `version`                                                                                                                | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `updatedAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `firewallEnabled`                                                                                                        | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `crs`                                                                                                                    | [models.GetSecurityFirewallConfigCrs](../models/getsecurityfirewallconfigcrs.md)                                         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `rules`                                                                                                                  | *models.GetSecurityFirewallConfigApiSecurityRules*[]                                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ips`                                                                                                                    | [models.GetSecurityFirewallConfigIps](../models/getsecurityfirewallconfigips.md)[]                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rulesets`                                                                                                               | *models.GetSecurityFirewallConfigApiSecurityRulesets*                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `changes`                                                                                                                | [models.GetSecurityFirewallConfigChanges](../models/getsecurityfirewallconfigchanges.md)[]                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `managedRules`                                                                                                           | [models.GetSecurityFirewallConfigApiSecurityManagedRules](../models/getsecurityfirewallconfigapisecuritymanagedrules.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `botIdEnabled`                                                                                                           | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `logHeaders`                                                                                                             | *models.GetSecurityFirewallConfigApiSecurityLogHeaders*                                                                  | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |