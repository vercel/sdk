# GetSecurityFirewallConfigApiSecurityIps

## Example Usage

```typescript
import { GetSecurityFirewallConfigApiSecurityIps } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigApiSecurityIps = {
  id: "<id>",
  hostname: "unconscious-requirement.biz",
  ip: "181.41.70.126",
  action: "deny",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `hostname`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `ip`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `notes`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `action`                                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityResponseAction](../models/getsecurityfirewallconfigapisecurityresponseaction.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |