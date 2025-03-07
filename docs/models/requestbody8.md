# RequestBody8

Add an IP Blocking rule

## Example Usage

```typescript
import { RequestBody8 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "acidic-almighty.name",
    ip: "63.71.81.186",
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest8Action](../models/updatefirewallconfigrequestbodysecurityrequest8action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityValue](../models/updatefirewallconfigrequestbodysecurityvalue.md)                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |