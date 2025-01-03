# UpdateFirewallConfigRequestBodySecurityRequest9Value

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest9Value } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest9Value = {
  hostname: "close-dependency.com",
  ip: "97.242.67.120",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `ip`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `notes`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest9ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest9valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |