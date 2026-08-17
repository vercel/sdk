# RequestBody17

Update an IP Blocking rule

## Example Usage

```typescript
import { RequestBody17 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody17 = {
  action: "<value>",
  id: "<id>",
  value: {
    hostname: "wavy-bob.org",
    ip: "b1f6:cbcb:1f8a:c3d0:9461:4e6f:e6dd:d8e4",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest17Value](../models/updatefirewallconfigrequestbodysecurityrequest17value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |