# Value

## Example Usage

```typescript
import { Value } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: Value = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "region",
          op: "lte",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `active`                                                                                                                           | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `conditionGroup`                                                                                                                   | [models.ConditionGroup](../models/conditiongroup.md)[]                                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest2Action](../models/updatefirewallconfigrequestbodysecurityrequest2action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |