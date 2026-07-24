# GetSecurityFirewallConfigApiSecurityCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigApiSecurityCrs } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigApiSecurityCrs = {
  sd: {
    active: false,
    action: "deny",
  },
  ma: {
    active: false,
    action: "deny",
  },
  lfi: {
    active: true,
    action: "deny",
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
    active: true,
    action: "deny",
  },
  gen: {
    active: false,
    action: "log",
  },
  xss: {
    active: true,
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
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `sd`                                                                                                     | [models.GetSecurityFirewallConfigApiSecuritySd](../models/getsecurityfirewallconfigapisecuritysd.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ma`                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityMa](../models/getsecurityfirewallconfigapisecurityma.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lfi`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityLfi](../models/getsecurityfirewallconfigapisecuritylfi.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `rfi`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityRfi](../models/getsecurityfirewallconfigapisecurityrfi.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `rce`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityRce](../models/getsecurityfirewallconfigapisecurityrce.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `php`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityPhp](../models/getsecurityfirewallconfigapisecurityphp.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `gen`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityGen](../models/getsecurityfirewallconfigapisecuritygen.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `xss`                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityXss](../models/getsecurityfirewallconfigapisecurityxss.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sqli`                                                                                                   | [models.GetSecurityFirewallConfigApiSecuritySqli](../models/getsecurityfirewallconfigapisecuritysqli.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sf`                                                                                                     | [models.GetSecurityFirewallConfigApiSecuritySf](../models/getsecurityfirewallconfigapisecuritysf.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `java`                                                                                                   | [models.GetSecurityFirewallConfigApiSecurityJava](../models/getsecurityfirewallconfigapisecurityjava.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |