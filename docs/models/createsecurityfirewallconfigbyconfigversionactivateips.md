# CreateSecurityFirewallConfigByConfigVersionActivateIps

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateIps } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateIps = {
  id: "<id>",
  hostname: "idealistic-junior.name",
  ip: "207.3.19.122",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `hostname`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `ip`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `notes`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `action`                                                                                                                                   | [models.CreateSecurityFirewallConfigByConfigVersionActivateAction](../models/createsecurityfirewallconfigbyconfigversionactivateaction.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |