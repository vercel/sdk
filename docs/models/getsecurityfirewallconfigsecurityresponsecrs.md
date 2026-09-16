# GetSecurityFirewallConfigSecurityResponseCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponseCrs } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigSecurityResponseCrs = {
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
    action: "log",
    active: false,
  },
  php: {
    action: "log",
    active: true,
  },
  rce: {
    action: "deny",
    active: true,
  },
  rfi: {
    action: "deny",
    active: true,
  },
  sd: {
    action: "log",
    active: false,
  },
  sf: {
    action: "deny",
    active: false,
  },
  sqli: {
    action: "log",
    active: true,
  },
  xss: {
    action: "deny",
    active: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `gen`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseGen](../models/getsecurityfirewallconfigsecurityresponsegen.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `java`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseJava](../models/getsecurityfirewallconfigsecurityresponsejava.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `lfi`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseLfi](../models/getsecurityfirewallconfigsecurityresponselfi.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `ma`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseMa](../models/getsecurityfirewallconfigsecurityresponsema.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `php`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponsePhp](../models/getsecurityfirewallconfigsecurityresponsephp.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rce`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseRce](../models/getsecurityfirewallconfigsecurityresponserce.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rfi`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseRfi](../models/getsecurityfirewallconfigsecurityresponserfi.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sd`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseSd](../models/getsecurityfirewallconfigsecurityresponsesd.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sf`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseSf](../models/getsecurityfirewallconfigsecurityresponsesf.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sqli`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseSqli](../models/getsecurityfirewallconfigsecurityresponsesqli.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `xss`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseXss](../models/getsecurityfirewallconfigsecurityresponsexss.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |