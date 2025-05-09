# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Active = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 7103.38,
  updatedAt: "1746722369021",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "log",
    },
    ma: {
      active: false,
      action: "log",
    },
    lfi: {
      active: false,
      action: "log",
    },
    rfi: {
      active: false,
      action: "deny",
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
      action: "deny",
    },
    xss: {
      active: false,
      action: "deny",
    },
    sqli: {
      active: false,
      action: "deny",
    },
    sf: {
      active: false,
      action: "deny",
    },
    java: {
      active: false,
      action: "log",
    },
  },
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: false,
      conditionGroup: [
        {
          conditions: [
            {
              type: "path",
              op: "nex",
            },
          ],
        },
      ],
      action: {},
    },
  ],
  ips: [
    {
      id: "<id>",
      hostname: "broken-eternity.net",
      ip: "688a:a77b:d4a5:c347:dbd1:81ab:b9ba:0bb9",
      action: "challenge",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectKey`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `version`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `firewallEnabled`                                                                                  | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `crs`                                                                                              | [models.PutFirewallConfigCrs](../models/putfirewallconfigcrs.md)                                   | :heavy_check_mark:                                                                                 | Custom Ruleset                                                                                     |
| `rules`                                                                                            | [models.PutFirewallConfigSecurityRules](../models/putfirewallconfigsecurityrules.md)[]             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ips`                                                                                              | [models.PutFirewallConfigIps](../models/putfirewallconfigips.md)[]                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `changes`                                                                                          | [models.PutFirewallConfigChanges](../models/putfirewallconfigchanges.md)[]                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `managedRules`                                                                                     | Record<string, [models.PutFirewallConfigManagedRules](../models/putfirewallconfigmanagedrules.md)> | :heavy_minus_sign:                                                                                 | N/A                                                                                                |