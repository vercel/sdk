# GetFirewallConfigResponseBody

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 8313.04,
  updatedAt: "1743628331034",
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
      action: "log",
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
      action: "log",
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
              type: "raw_path",
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
      hostname: "tiny-nightlife.name",
      ip: "6d53:9fdf:e332:4dcd:8cb6:d3a3:a895:265a",
      action: "challenge",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `ownerId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectKey`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `firewallEnabled`                                                      | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `crs`                                                                  | [models.Crs](../models/crs.md)                                         | :heavy_check_mark:                                                     | Custom Ruleset                                                         |
| `rules`                                                                | [models.GetFirewallConfigRules](../models/getfirewallconfigrules.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `ips`                                                                  | [models.Ips](../models/ips.md)[]                                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `changes`                                                              | [models.Changes](../models/changes.md)[]                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `managedRules`                                                         | Record<string, [models.ManagedRules](../models/managedrules.md)>       | :heavy_minus_sign:                                                     | N/A                                                                    |