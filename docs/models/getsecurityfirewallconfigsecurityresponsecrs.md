# GetSecurityFirewallConfigSecurityResponseCrs

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponseCrs } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigSecurityResponseCrs = {
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
    active: true,
    action: "deny",
  },
  xss: {
    active: false,
    action: "log",
  },
  sqli: {
    active: true,
    action: "log",
  },
  sf: {
    active: false,
    action: "deny",
  },
  java: {
    active: true,
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `sd`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseSd](../models/getsecurityfirewallconfigsecurityresponsesd.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `ma`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseMa](../models/getsecurityfirewallconfigsecurityresponsema.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `lfi`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseLfi](../models/getsecurityfirewallconfigsecurityresponselfi.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rfi`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseRfi](../models/getsecurityfirewallconfigsecurityresponserfi.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rce`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseRce](../models/getsecurityfirewallconfigsecurityresponserce.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `php`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponsePhp](../models/getsecurityfirewallconfigsecurityresponsephp.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `gen`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseGen](../models/getsecurityfirewallconfigsecurityresponsegen.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `xss`                                                                                                              | [models.GetSecurityFirewallConfigSecurityResponseXss](../models/getsecurityfirewallconfigsecurityresponsexss.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sqli`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseSqli](../models/getsecurityfirewallconfigsecurityresponsesqli.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sf`                                                                                                               | [models.GetSecurityFirewallConfigSecurityResponseSf](../models/getsecurityfirewallconfigsecurityresponsesf.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `java`                                                                                                             | [models.GetSecurityFirewallConfigSecurityResponseJava](../models/getsecurityfirewallconfigsecurityresponsejava.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |