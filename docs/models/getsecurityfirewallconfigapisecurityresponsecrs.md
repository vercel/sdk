# GetSecurityFirewallConfigApiSecurityResponseCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigApiSecurityResponseCrs } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigApiSecurityResponseCrs = {
  sd: {
    active: false,
    action: "deny",
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
    active: true,
    action: "deny",
  },
  rce: {
    active: true,
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
    active: true,
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `sd`                                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityResponseSd](../models/getsecurityfirewallconfigapisecurityresponsesd.md)     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ma`                                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityResponseMa](../models/getsecurityfirewallconfigapisecurityresponsema.md)     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `lfi`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponseLfi](../models/getsecurityfirewallconfigapisecurityresponselfi.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rfi`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponseRfi](../models/getsecurityfirewallconfigapisecurityresponserfi.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rce`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponseRce](../models/getsecurityfirewallconfigapisecurityresponserce.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `php`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponsePhp](../models/getsecurityfirewallconfigapisecurityresponsephp.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `gen`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponseGen](../models/getsecurityfirewallconfigapisecurityresponsegen.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `xss`                                                                                                                    | [models.GetSecurityFirewallConfigApiSecurityResponseXss](../models/getsecurityfirewallconfigapisecurityresponsexss.md)   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `sqli`                                                                                                                   | [models.GetSecurityFirewallConfigApiSecurityResponseSqli](../models/getsecurityfirewallconfigapisecurityresponsesqli.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `sf`                                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityResponseSf](../models/getsecurityfirewallconfigapisecurityresponsesf.md)     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `java`                                                                                                                   | [models.GetSecurityFirewallConfigApiSecurityResponseJava](../models/getsecurityfirewallconfigapisecurityresponsejava.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |