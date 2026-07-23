# RequestBody13

Add an IP Blocking rule

## Example Usage

```typescript
import { RequestBody13 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody13 = {
  action: "<value>",
  value: {
    hostname: "noted-obligation.org",
    ip: "cbea:c3b9:7d99:1ef2:9455:961e:ecaf:bfdc",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest13Value](../models/updatefirewallconfigrequestbodysecurityrequest13value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |