# GetSecurityFirewallConfigCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigCrs } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigCrs = {
  gen: {
    action: "deny",
    active: false,
  },
  java: {
    action: "log",
    active: true,
  },
  lfi: {
    action: "deny",
    active: false,
  },
  ma: {
    action: "deny",
    active: true,
  },
  php: {
    action: "deny",
    active: false,
  },
  rce: {
    action: "log",
    active: true,
  },
  rfi: {
    action: "log",
    active: true,
  },
  sd: {
    action: "log",
    active: true,
  },
  sf: {
    action: "deny",
    active: false,
  },
  sqli: {
    action: "deny",
    active: false,
  },
  xss: {
    action: "deny",
    active: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `gen`                                                                              | [models.GetSecurityFirewallConfigGen](../models/getsecurityfirewallconfiggen.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `java`                                                                             | [models.GetSecurityFirewallConfigJava](../models/getsecurityfirewallconfigjava.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lfi`                                                                              | [models.GetSecurityFirewallConfigLfi](../models/getsecurityfirewallconfiglfi.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ma`                                                                               | [models.GetSecurityFirewallConfigMa](../models/getsecurityfirewallconfigma.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `php`                                                                              | [models.GetSecurityFirewallConfigPhp](../models/getsecurityfirewallconfigphp.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rce`                                                                              | [models.GetSecurityFirewallConfigRce](../models/getsecurityfirewallconfigrce.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rfi`                                                                              | [models.GetSecurityFirewallConfigRfi](../models/getsecurityfirewallconfigrfi.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sd`                                                                               | [models.GetSecurityFirewallConfigSd](../models/getsecurityfirewallconfigsd.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sf`                                                                               | [models.GetSecurityFirewallConfigSf](../models/getsecurityfirewallconfigsf.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sqli`                                                                             | [models.GetSecurityFirewallConfigSqli](../models/getsecurityfirewallconfigsqli.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `xss`                                                                              | [models.GetSecurityFirewallConfigXss](../models/getsecurityfirewallconfigxss.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |