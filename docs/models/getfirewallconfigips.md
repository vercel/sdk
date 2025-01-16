# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigIps = {
  id: "<id>",
  hostname: "courteous-outset.net",
  ip: "2ffc:bafb:c7ca:2ad9:0dfb:deba:dac1:b9ea",
  action: "challenge",
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