# GetFirewallConfigResponseBody

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/operations/getfirewallconfig.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 7002.04,
  updatedAt: "<value>",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "log",
    },
    ma: {
      active: false,
      action: "deny",
    },
    lfi: {
      active: false,
      action: "deny",
    },
    rfi: {
      active: false,
      action: "log",
    },
    rce: {
      active: false,
      action: "deny",
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
              type: "ja3_digest",
              op: "eq",
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
      hostname: "understated-birdbath.name",
      ip: "93.190.108.206",
      action: "challenge",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `projectKey`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `version`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `firewallEnabled`                                                                                    | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `crs`                                                                                                | [operations.GetFirewallConfigCrs](../../models/operations/getfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rules`                                                                                              | [operations.GetFirewallConfigRules](../../models/operations/getfirewallconfigrules.md)[]             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ips`                                                                                                | [operations.GetFirewallConfigIps](../../models/operations/getfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `changes`                                                                                            | [operations.Changes](../../models/operations/changes.md)[]                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `managedRules`                                                                                       | [operations.GetFirewallConfigManagedRules](../../models/operations/getfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |