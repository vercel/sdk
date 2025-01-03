# Ips

## Example Usage

```typescript
import { Ips } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Ips = {
  hostname: "optimistic-obesity.com",
  ip: "bb19:55bd:90ff:40be:ec67:da25:62ae:e106",
  action: "challenge",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `hostname`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `ip`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `notes`                                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `action`                                                                                                                         | [models.PutFirewallConfigSecurityRequestRequestBodyIpsAction](../models/putfirewallconfigsecurityrequestrequestbodyipsaction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |