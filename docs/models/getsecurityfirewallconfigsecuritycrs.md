# GetSecurityFirewallConfigSecurityCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityCrs } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigSecurityCrs = {
  gen: {
    action: "deny",
    active: true,
  },
  java: {
    action: "deny",
    active: false,
  },
  lfi: {
    action: "log",
    active: false,
  },
  ma: {
    action: "log",
    active: true,
  },
  php: {
    action: "log",
    active: true,
  },
  rce: {
    action: "log",
    active: true,
  },
  rfi: {
    action: "deny",
    active: false,
  },
  sd: {
    action: "log",
    active: false,
  },
  sf: {
    action: "log",
    active: true,
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `gen`                                                                                              | [models.GetSecurityFirewallConfigSecurityGen](../models/getsecurityfirewallconfigsecuritygen.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `java`                                                                                             | [models.GetSecurityFirewallConfigSecurityJava](../models/getsecurityfirewallconfigsecurityjava.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lfi`                                                                                              | [models.GetSecurityFirewallConfigSecurityLfi](../models/getsecurityfirewallconfigsecuritylfi.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ma`                                                                                               | [models.GetSecurityFirewallConfigSecurityMa](../models/getsecurityfirewallconfigsecurityma.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `php`                                                                                              | [models.GetSecurityFirewallConfigSecurityPhp](../models/getsecurityfirewallconfigsecurityphp.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rce`                                                                                              | [models.GetSecurityFirewallConfigSecurityRce](../models/getsecurityfirewallconfigsecurityrce.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rfi`                                                                                              | [models.GetSecurityFirewallConfigSecurityRfi](../models/getsecurityfirewallconfigsecurityrfi.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sd`                                                                                               | [models.GetSecurityFirewallConfigSecuritySd](../models/getsecurityfirewallconfigsecuritysd.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sf`                                                                                               | [models.GetSecurityFirewallConfigSecuritySf](../models/getsecurityfirewallconfigsecuritysf.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sqli`                                                                                             | [models.GetSecurityFirewallConfigSecuritySqli](../models/getsecurityfirewallconfigsecuritysqli.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `xss`                                                                                              | [models.GetSecurityFirewallConfigSecurityXss](../models/getsecurityfirewallconfigsecurityxss.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |