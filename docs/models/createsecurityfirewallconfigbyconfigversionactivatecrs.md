# CreateSecurityFirewallConfigByConfigVersionActivateCrs

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateCrs } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateCrs = {
  gen: {
    action: "log",
    active: false,
  },
  java: {
    action: "log",
    active: true,
  },
  lfi: {
    action: "log",
    active: false,
  },
  ma: {
    action: "deny",
    active: false,
  },
  php: {
    action: "log",
    active: false,
  },
  rce: {
    action: "deny",
    active: false,
  },
  rfi: {
    action: "log",
    active: false,
  },
  sd: {
    action: "deny",
    active: true,
  },
  sf: {
    action: "log",
    active: false,
  },
  sqli: {
    action: "log",
    active: false,
  },
  xss: {
    action: "log",
    active: false,
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `gen`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateGen](../models/createsecurityfirewallconfigbyconfigversionactivategen.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `java`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateJava](../models/createsecurityfirewallconfigbyconfigversionactivatejava.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `lfi`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateLfi](../models/createsecurityfirewallconfigbyconfigversionactivatelfi.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `ma`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateMa](../models/createsecurityfirewallconfigbyconfigversionactivatema.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `php`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivatePhp](../models/createsecurityfirewallconfigbyconfigversionactivatephp.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rce`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateRce](../models/createsecurityfirewallconfigbyconfigversionactivaterce.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rfi`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateRfi](../models/createsecurityfirewallconfigbyconfigversionactivaterfi.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sd`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateSd](../models/createsecurityfirewallconfigbyconfigversionactivatesd.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sf`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateSf](../models/createsecurityfirewallconfigbyconfigversionactivatesf.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sqli`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateSqli](../models/createsecurityfirewallconfigbyconfigversionactivatesqli.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `xss`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateXss](../models/createsecurityfirewallconfigbyconfigversionactivatexss.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |