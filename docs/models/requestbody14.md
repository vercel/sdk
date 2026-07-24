# RequestBody14

Update an IP Blocking rule

## Example Usage

```typescript
import { RequestBody14 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody14 = {
  action: "<value>",
  id: "<id>",
  value: {
    hostname: "hospitable-scorpion.net",
    ip: "7ff6:9f2f:212d:87ac:4edf:dd9a:ed78:89df",
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest14Value](../models/updatefirewallconfigrequestbodysecurityrequest14value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |