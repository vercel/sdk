# UpdateFirewallConfigRequestBody8

Update a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody8 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [],
      },
    ],
    action: {},
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest8Action](../models/updatefirewallconfigrequestbodysecurityrequest8action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequest8Value](../models/updatefirewallconfigrequestbodysecurityrequest8value.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |