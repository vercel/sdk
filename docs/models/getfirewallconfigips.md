# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigIps = {
  id: "<id>",
  hostname: "untimely-drive.org",
  ip: "ef4c:b7e4:cefe:dbb7:adfa:3bee:9ca7:dd0f",
  action: "bypass",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hostname`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ip`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `notes`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `action`                                                                               | [models.GetFirewallConfigSecurityAction](../models/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |