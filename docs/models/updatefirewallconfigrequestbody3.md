# UpdateFirewallConfigRequestBody3

Update a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody3 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "ja4_digest",
            op: "eq",
          },
        ],
      },
    ],
    action: {},
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityAction](../models/updatefirewallconfigrequestbodysecurityaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | [models.RequestBodyValue](../models/requestbodyvalue.md)                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |