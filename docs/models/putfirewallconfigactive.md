# PutFirewallConfigActive

## Example Usage

```typescript
import { PutFirewallConfigActive } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigActive = {
  changes: [
    {},
  ],
  firewallEnabled: false,
  id: "<id>",
  ips: [],
  ownerId: "<id>",
  projectKey: "<value>",
  rules: [],
  updatedAt: "1735683451571",
  version: 5703.27,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `botIdEnabled`                                                                                   | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `changes`                                                                                        | [models.PutFirewallConfigChanges](../models/putfirewallconfigchanges.md)[]                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `conditions`                                                                                     | [models.PutFirewallConfigSecurityConditions](../models/putfirewallconfigsecurityconditions.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `crs`                                                                                            | [models.PutFirewallConfigCrs](../models/putfirewallconfigcrs.md)                                 | :heavy_minus_sign:                                                                               | Custom Ruleset                                                                                   |
| `firewallEnabled`                                                                                | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `ips`                                                                                            | [models.PutFirewallConfigIps](../models/putfirewallconfigips.md)[]                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `logHeaders`                                                                                     | *models.PutFirewallConfigSecurityLogHeaders*                                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `managedRules`                                                                                   | [models.PutFirewallConfigManagedRules](../models/putfirewallconfigmanagedrules.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `ownerId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `projectKey`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `rules`                                                                                          | *models.PutFirewallConfigSecurityRules*[]                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `rulesets`                                                                                       | *models.PutFirewallConfigRulesets*                                                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |