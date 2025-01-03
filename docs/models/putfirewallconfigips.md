# PutFirewallConfigIps

## Example Usage

```typescript
import { PutFirewallConfigIps } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigIps = {
  id: "<id>",
  hostname: "insidious-ferret.net",
  ip: "fbe9:2cd9:ebdc:c2f5:fba5:f2fc:b96b:d6b5",
  action: "log",
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