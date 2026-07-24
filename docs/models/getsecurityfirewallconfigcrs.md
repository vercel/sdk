# GetSecurityFirewallConfigCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigCrs } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigCrs = {
  sd: {
    active: true,
    action: "log",
  },
  ma: {
    active: false,
    action: "deny",
  },
  lfi: {
    active: true,
    action: "log",
  },
  rfi: {
    active: true,
    action: "deny",
  },
  rce: {
    active: true,
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sd`                                                                               | [models.GetSecurityFirewallConfigSd](../models/getsecurityfirewallconfigsd.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ma`                                                                               | [models.GetSecurityFirewallConfigMa](../models/getsecurityfirewallconfigma.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lfi`                                                                              | [models.GetSecurityFirewallConfigLfi](../models/getsecurityfirewallconfiglfi.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rfi`                                                                              | [models.GetSecurityFirewallConfigRfi](../models/getsecurityfirewallconfigrfi.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rce`                                                                              | [models.GetSecurityFirewallConfigRce](../models/getsecurityfirewallconfigrce.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `php`                                                                              | [models.GetSecurityFirewallConfigPhp](../models/getsecurityfirewallconfigphp.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gen`                                                                              | [models.GetSecurityFirewallConfigGen](../models/getsecurityfirewallconfiggen.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `xss`                                                                              | [models.GetSecurityFirewallConfigXss](../models/getsecurityfirewallconfigxss.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sqli`                                                                             | [models.GetSecurityFirewallConfigSqli](../models/getsecurityfirewallconfigsqli.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sf`                                                                               | [models.GetSecurityFirewallConfigSf](../models/getsecurityfirewallconfigsf.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `java`                                                                             | [models.GetSecurityFirewallConfigJava](../models/getsecurityfirewallconfigjava.md) | :heavy_check_mark:                                                                 | N/A                                                                                |