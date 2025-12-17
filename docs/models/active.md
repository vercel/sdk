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
  crs: {
    sd: {
      active: false,
      action: "log",
    },
    ma: {
      active: true,
      action: "deny",
    },
    lfi: {
      active: false,
      action: "log",
    },
    rfi: {
      active: true,
      action: "log",
    },
    rce: {
      active: false,
      action: "log",
    },
    php: {
      active: false,
      action: "deny",
    },
    gen: {
      active: false,
      action: "log",
    },
    xss: {
      active: false,
      action: "deny",
    },
    sqli: {
      active: true,
      action: "log",
    },
    sf: {
      active: true,
      action: "log",
    },
    java: {
      active: true,
      action: "log",
    },
  },
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
      valid: true,
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
| `crs`                                                                              | [models.PutFirewallConfigCrs](../models/putfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                 | Custom Ruleset                                                                     |
| `rules`                                                                            | *models.PutFirewallConfigSecurityRules*[]                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.PutFirewallConfigIps](../models/putfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.PutFirewallConfigChanges](../models/putfirewallconfigchanges.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.PutFirewallConfigManagedRules](../models/putfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `botIdEnabled`                                                                     | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |