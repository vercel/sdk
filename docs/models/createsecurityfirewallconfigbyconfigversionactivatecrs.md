# CreateSecurityFirewallConfigByConfigVersionActivateCrs

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateCrs } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateCrs = {
  sd: {
    active: false,
    action: "log",
  },
  ma: {
    active: false,
    action: "deny",
  },
  lfi: {
    active: false,
    action: "log",
  },
  rfi: {
    active: true,
    action: "log",
  },
  rce: {
    active: false,
    action: "log",
  },
  php: {
    active: true,
    action: "log",
  },
  gen: {
    active: false,
    action: "log",
  },
  xss: {
    active: true,
    action: "deny",
  },
  sqli: {
    active: false,
    action: "log",
  },
  sf: {
    active: false,
    action: "log",
  },
  java: {
    active: false,
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `sd`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateSd](../models/createsecurityfirewallconfigbyconfigversionactivatesd.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `ma`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateMa](../models/createsecurityfirewallconfigbyconfigversionactivatema.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `lfi`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateLfi](../models/createsecurityfirewallconfigbyconfigversionactivatelfi.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rfi`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateRfi](../models/createsecurityfirewallconfigbyconfigversionactivaterfi.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rce`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateRce](../models/createsecurityfirewallconfigbyconfigversionactivaterce.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `php`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivatePhp](../models/createsecurityfirewallconfigbyconfigversionactivatephp.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `gen`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateGen](../models/createsecurityfirewallconfigbyconfigversionactivategen.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `xss`                                                                                                                                  | [models.CreateSecurityFirewallConfigByConfigVersionActivateXss](../models/createsecurityfirewallconfigbyconfigversionactivatexss.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sqli`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateSqli](../models/createsecurityfirewallconfigbyconfigversionactivatesqli.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sf`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateSf](../models/createsecurityfirewallconfigbyconfigversionactivatesf.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `java`                                                                                                                                 | [models.CreateSecurityFirewallConfigByConfigVersionActivateJava](../models/createsecurityfirewallconfigbyconfigversionactivatejava.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |