# GetFirewallConfigResponseBody

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 9747.88,
  updatedAt: "1741343933844",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "deny",
    },
    ma: {
      active: false,
      action: "deny",
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
      action: "deny",
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
      action: "log",
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
      action: "deny",
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
              type: "raw_path",
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
      hostname: "hateful-t-shirt.biz",
      ip: "241.186.132.198",
      action: "deny",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectKey`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updatedAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `firewallEnabled`                                                | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `crs`                                                            | [models.Crs](../models/crs.md)                                   | :heavy_check_mark:                                               | Custom Ruleset                                                   |
| `rules`                                                          | [models.Rules](../models/rules.md)[]                             | :heavy_check_mark:                                               | N/A                                                              |
| `ips`                                                            | [models.Ips](../models/ips.md)[]                                 | :heavy_check_mark:                                               | N/A                                                              |
| `changes`                                                        | [models.Changes](../models/changes.md)[]                         | :heavy_check_mark:                                               | N/A                                                              |
| `managedRules`                                                   | Record<string, [models.ManagedRules](../models/managedrules.md)> | :heavy_minus_sign:                                               | N/A                                                              |