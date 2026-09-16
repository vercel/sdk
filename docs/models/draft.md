# Draft

## Example Usage

```typescript
import { Draft } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: Draft = {
  changes: [
    {},
  ],
  firewallEnabled: true,
  id: "<id>",
  ips: [
    {
      action: "deny",
      hostname: "flimsy-validity.info",
      id: "<id>",
      ip: "cf7c:ea8e:9ddf:bf5d:08de:e0e8:6af4:ac4e",
    },
  ],
  ownerId: "<id>",
  projectKey: "<value>",
  rules: [
    {
      action: {},
      active: true,
      conditionGroup: [],
      id: "<id>",
      name: "<value>",
      valid: true,
      validationErrors: "<value>",
    },
  ],
  updatedAt: "1735617816399",
  version: 1390.14,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `botIdEnabled`                                                                                                     | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `changes`                                                                                                          | [models.GetSecurityFirewallConfigChanges](../models/getsecurityfirewallconfigchanges.md)[]                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `conditions`                                                                                                       | [models.GetSecurityFirewallConfigSecurityConditions](../models/getsecurityfirewallconfigsecurityconditions.md)[]   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `crs`                                                                                                              | [models.GetSecurityFirewallConfigCrs](../models/getsecurityfirewallconfigcrs.md)                                   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `firewallEnabled`                                                                                                  | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `ips`                                                                                                              | [models.GetSecurityFirewallConfigIps](../models/getsecurityfirewallconfigips.md)[]                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `logHeaders`                                                                                                       | *models.GetSecurityFirewallConfigSecurityLogHeaders*                                                               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `managedRules`                                                                                                     | [models.GetSecurityFirewallConfigSecurityManagedRules](../models/getsecurityfirewallconfigsecuritymanagedrules.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `ownerId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `projectKey`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rules`                                                                                                            | *models.GetSecurityFirewallConfigSecurityRules*[]                                                                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rulesets`                                                                                                         | *models.GetSecurityFirewallConfigSecurityRulesets*                                                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `version`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |