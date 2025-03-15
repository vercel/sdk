# UpdateFirewallConfigRequestBody8

Add an IP Blocking rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody8 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "royal-humor.info",
    ip: "708b:ef2e:8a92:5a02:0cd3:afee:0c5c:639a",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest8Action](../models/updatefirewallconfigrequestbodysecurityrequest8action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityValue](../models/updatefirewallconfigrequestbodysecurityvalue.md)                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |