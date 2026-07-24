# CreateSecurityFirewallConfigByConfigVersionActivateResponseBody

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateResponseBody } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 1293.76,
  updatedAt: "1735642283076",
  firewallEnabled: false,
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: false,
      conditionGroup: [
        {
          conditions: [
            {
              type: "ja4_digest",
              op: "gt",
            },
          ],
        },
      ],
      action: {},
      valid: true,
      validationErrors: "<value>",
    },
  ],
  ips: [],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ownerId`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `projectKey`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `version`                                                                                                                                              | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `firewallEnabled`                                                                                                                                      | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `crs`                                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateCrs](../models/createsecurityfirewallconfigbyconfigversionactivatecrs.md)                   | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `rules`                                                                                                                                                | *models.CreateSecurityFirewallConfigByConfigVersionActivateRules*[]                                                                                    | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `ips`                                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateIps](../models/createsecurityfirewallconfigbyconfigversionactivateips.md)[]                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `rulesets`                                                                                                                                             | *models.CreateSecurityFirewallConfigByConfigVersionActivateRulesets*                                                                                   | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `changes`                                                                                                                                              | [models.CreateSecurityFirewallConfigByConfigVersionActivateChanges](../models/createsecurityfirewallconfigbyconfigversionactivatechanges.md)[]         | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `managedRules`                                                                                                                                         | [models.CreateSecurityFirewallConfigByConfigVersionActivateManagedRules](../models/createsecurityfirewallconfigbyconfigversionactivatemanagedrules.md) | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `botIdEnabled`                                                                                                                                         | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `logHeaders`                                                                                                                                           | *models.CreateSecurityFirewallConfigByConfigVersionActivateLogHeaders*                                                                                 | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |