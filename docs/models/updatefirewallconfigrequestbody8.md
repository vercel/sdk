# UpdateFirewallConfigRequestBody8

Add an IP Blocking rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody8 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "pink-plugin.net",
    ip: "187.206.27.119",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest8Action](../models/updatefirewallconfigrequestbodysecurityrequest8action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequestValue](../models/updatefirewallconfigrequestbodysecurityrequestvalue.md)     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |