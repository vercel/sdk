# GetSecurityFirewallConfigSecurityResponseIps

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponseIps } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityaction.js";

let value: GetSecurityFirewallConfigSecurityResponseIps = {
  id: "<id>",
  hostname: "self-reliant-pinstripe.info",
  ip: "113.207.94.181",
  action: "deny",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hostname`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ip`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `notes`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `action`                                                                               | [models.GetSecurityFirewallConfigAction](../models/getsecurityfirewallconfigaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |