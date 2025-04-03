# UpdateFirewallConfigRequestBody2

Add a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody2 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "scheme",
            op: "re",
          },
        ],
      },
    ],
    action: {},
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `action`                                                                                           | [models.UpdateFirewallConfigRequestBodyAction](../models/updatefirewallconfigrequestbodyaction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | [models.Value](../models/value.md)                                                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |