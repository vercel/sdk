# GetSecurityFirewallConfigIps

## Example Usage

```typescript
import { GetSecurityFirewallConfigIps } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigIps = {
  id: "<id>",
  hostname: "hurtful-reach.name",
  ip: "63.161.179.109",
  action: "deny",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `hostname`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `ip`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `notes`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `action`                                                                                                     | [models.GetSecurityFirewallConfigApiSecurityAction](../models/getsecurityfirewallconfigapisecurityaction.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |