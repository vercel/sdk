# RequestBody18

Update an IP Blocking rule

## Example Usage

```typescript
import { RequestBody18 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody18 = {
  action: "<value>",
  id: "<id>",
  value: {
    hostname: "gentle-monasticism.org",
    ip: "128.99.14.212",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest18Value](../models/updatefirewallconfigrequestbodysecurityrequest18value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |