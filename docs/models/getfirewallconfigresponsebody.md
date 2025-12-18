# GetFirewallConfigResponseBody

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 5092.12,
  updatedAt: "1735667145927",
  firewallEnabled: true,
  crs: {
    sd: {
      active: true,
      action: "log",
    },
    ma: {
      active: true,
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
      active: true,
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
      action: "log",
    },
    sf: {
      active: true,
      action: "log",
    },
    java: {
      active: false,
      action: "log",
    },
  },
  rules: [],
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
| `crs`                                                                              | [models.GetFirewallConfigCrs](../models/getfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                 | Custom Ruleset                                                                     |
| `rules`                                                                            | *models.GetFirewallConfigRules*[]                                                  | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.GetFirewallConfigIps](../models/getfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.Changes](../models/changes.md)[]                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.GetFirewallConfigManagedRules](../models/getfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `botIdEnabled`                                                                     | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |