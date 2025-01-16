# UpdateFirewallConfigRequestBodyMitigate

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyMitigate } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyMitigate = {
  action: "rate_limit",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest3ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest3valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `rateLimit`                                                                                                                                  | *models.UpdateFirewallConfigRequestBodyRateLimit*                                                                                            | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `redirect`                                                                                                                                   | *models.UpdateFirewallConfigRequestBodyRedirect*                                                                                             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `actionDuration`                                                                                                                             | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |