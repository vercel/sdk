# RequestBody14

Enable a managed rule

## Example Usage

```typescript
import { RequestBody14 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody14 = {
  action: "<value>",
  id: "rce",
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
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest14Value](../models/updatefirewallconfigrequestbodysecurityrequest14value.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |