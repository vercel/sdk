# RequestBody16

Add an IP Blocking rule

## Example Usage

```typescript
import { RequestBody16 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody16 = {
  action: "<value>",
  value: {
    hostname: "wrong-switchboard.name",
    ip: "172.225.205.145",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest16Value](../models/updatefirewallconfigrequestbodysecurityrequest16value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |