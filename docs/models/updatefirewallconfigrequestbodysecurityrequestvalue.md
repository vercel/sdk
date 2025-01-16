# UpdateFirewallConfigRequestBodySecurityRequestValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestValue = {
  hostname: "unfortunate-sonar.com",
  ip: "df0b:41ca:b080:5447:6f7d:3a1a:0be0:eb7d",
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