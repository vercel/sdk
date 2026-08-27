# RequestBody15

Enable a managed rule

## Example Usage

```typescript
import { RequestBody15 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody15 = {
  action: "<value>",
  id: "ma",
  value: {
    active: false,
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.Id](../models/id.md)                                                                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest15Value](../models/updatefirewallconfigrequestbodysecurityrequest15value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |