# UpdateFirewallConfigRequestBodySecurityValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityValue = {
  hostname: "portly-unblinking.com",
  ip: "43ff:fede:07fd:cd3b:a91c:a9c6:a780:e93b",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `ip`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `notes`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest8ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest8valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |