# PutFirewallConfigIps

## Example Usage

```typescript
import { PutFirewallConfigIps } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigIps = {
  action: "challenge",
  hostname: "ragged-squid.com",
  id: "<id>",
  ip: "85.164.59.207",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `action`                                                                                               | [models.PutFirewallConfigSecurityResponseAction](../models/putfirewallconfigsecurityresponseaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hostname`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `ip`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `notes`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |