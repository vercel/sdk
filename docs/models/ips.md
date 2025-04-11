# Ips

## Example Usage

```typescript
import { Ips } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Ips = {
  id: "<id>",
  hostname: "hairy-management.info",
  ip: "52ac:b0fc:edae:e66a:5ebc:cc99:d4e8:35ab",
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