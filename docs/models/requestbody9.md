# RequestBody9

Update an IP Blocking rule

## Example Usage

```typescript
import { RequestBody9 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "stupendous-singing.net",
    ip: "126.47.48.111",
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest9Action](../models/updatefirewallconfigrequestbodysecurityrequest9action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest9Value](../models/updatefirewallconfigrequestbodysecurityrequest9value.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |