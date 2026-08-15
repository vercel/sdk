# RequestBody19

Update a managed ruleset

## Example Usage

```typescript
import { RequestBody19 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody19 = {
  action: "<value>",
  id: "owasp",
  value: {
    active: true,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.RequestBodyId](../models/requestbodyid.md)                                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest19Value](../models/updatefirewallconfigrequestbodysecurityrequest19value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |