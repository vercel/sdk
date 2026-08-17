# GetSecurityFirewallConfigSecurityCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityCrs } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigSecurityCrs = {
  sd: {
    active: true,
    action: "deny",
  },
  ma: {
    active: true,
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
    action: "deny",
  },
  php: {
    active: false,
    action: "deny",
  },
  gen: {
    active: true,
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sd`                                                                                               | [models.GetSecurityFirewallConfigSecuritySd](../models/getsecurityfirewallconfigsecuritysd.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ma`                                                                                               | [models.GetSecurityFirewallConfigSecurityMa](../models/getsecurityfirewallconfigsecurityma.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lfi`                                                                                              | [models.GetSecurityFirewallConfigSecurityLfi](../models/getsecurityfirewallconfigsecuritylfi.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rfi`                                                                                              | [models.GetSecurityFirewallConfigSecurityRfi](../models/getsecurityfirewallconfigsecurityrfi.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rce`                                                                                              | [models.GetSecurityFirewallConfigSecurityRce](../models/getsecurityfirewallconfigsecurityrce.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `php`                                                                                              | [models.GetSecurityFirewallConfigSecurityPhp](../models/getsecurityfirewallconfigsecurityphp.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `gen`                                                                                              | [models.GetSecurityFirewallConfigSecurityGen](../models/getsecurityfirewallconfigsecuritygen.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `xss`                                                                                              | [models.GetSecurityFirewallConfigSecurityXss](../models/getsecurityfirewallconfigsecurityxss.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sqli`                                                                                             | [models.GetSecurityFirewallConfigSecuritySqli](../models/getsecurityfirewallconfigsecuritysqli.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sf`                                                                                               | [models.GetSecurityFirewallConfigSecuritySf](../models/getsecurityfirewallconfigsecuritysf.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `java`                                                                                             | [models.GetSecurityFirewallConfigSecurityJava](../models/getsecurityfirewallconfigsecurityjava.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |