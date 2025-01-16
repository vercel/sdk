# PutFirewallConfigIps

## Example Usage

```typescript
import { PutFirewallConfigIps } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigIps = {
  id: "<id>",
  hostname: "worldly-hexagon.biz",
  ip: "cfbe:92cd:9ebd:cc2f:5fba:5f2f:cb96:bd6b",
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
| `action`                                                                                                     | [models.PutFirewallConfigSecurityResponse200Action](../models/putfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |