# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/putfirewallconfigop.js";

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
          conditions: [],
        },
      ],
      action: {},
      valid: false,
      validationErrors: [
        "<value 1>",
      ],
    },
  ],
  ips: [],
  changes: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectKey`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `version`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `firewallEnabled`                                                                  | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `crs`                                                                              | [models.PutFirewallConfigCrs](../models/putfirewallconfigcrs.md)                   | :heavy_minus_sign:                                                                 | Custom Ruleset                                                                     |
| `rules`                                                                            | *models.PutFirewallConfigSecurityRules*[]                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.PutFirewallConfigIps](../models/putfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.PutFirewallConfigChanges](../models/putfirewallconfigchanges.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.PutFirewallConfigManagedRules](../models/putfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `botIdEnabled`                                                                     | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `logHeaders`                                                                       | *models.PutFirewallConfigSecurityLogHeaders*                                       | :heavy_minus_sign:                                                                 | N/A                                                                                |