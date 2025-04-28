# UpdateFirewallConfigRequestBody9

Update an IP Blocking rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody9 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "rectangular-chainstay.com",
    ip: "a8d7:3bba:f2cf:e55e:efad:639f:e2f6:5aab",
    action: "challenge",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest9Action](../models/updatefirewallconfigrequestbodysecurityrequest9action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest9Value](../models/updatefirewallconfigrequestbodysecurityrequest9value.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |