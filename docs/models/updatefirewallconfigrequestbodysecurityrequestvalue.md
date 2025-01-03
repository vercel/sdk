# UpdateFirewallConfigRequestBodySecurityRequestValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestValue = {
  hostname: "sweet-alligator.name",
  ip: "f0b4:1cab:0805:4476:f7d3:a1a0:be0e:b7d6",
  action: "challenge",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `ip`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `notes`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest8ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest8valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |