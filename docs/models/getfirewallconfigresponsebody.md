# GetFirewallConfigResponseBody

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigResponseBody = {
  changes: [
    {},
  ],
  firewallEnabled: false,
  id: "<id>",
  ips: [],
  ownerId: "<id>",
  projectKey: "<value>",
  rules: [],
  updatedAt: "1735609805038",
  version: 1545.28,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `botIdEnabled`                                                                     | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.Changes](../models/changes.md)[]                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `conditions`                                                                       | [models.GetFirewallConfigConditions](../models/getfirewallconfigconditions.md)[]   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `crs`                                                                              | [models.GetFirewallConfigCrs](../models/getfirewallconfigcrs.md)                   | :heavy_minus_sign:                                                                 | Custom Ruleset                                                                     |
| `firewallEnabled`                                                                  | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.GetFirewallConfigIps](../models/getfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `logHeaders`                                                                       | *models.GetFirewallConfigLogHeaders*                                               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.GetFirewallConfigManagedRules](../models/getfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectKey`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rules`                                                                            | *models.GetFirewallConfigRules*[]                                                  | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rulesets`                                                                         | *models.GetFirewallConfigRulesets*                                                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `version`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |