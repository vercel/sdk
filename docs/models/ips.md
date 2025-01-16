# Ips

## Example Usage

```typescript
import { Ips } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Ips = {
  hostname: "expert-dulcimer.com",
  ip: "234.171.18.1",
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