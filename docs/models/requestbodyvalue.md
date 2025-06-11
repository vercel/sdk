# RequestBodyValue

## Example Usage

```typescript
import { RequestBodyValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBodyValue = {
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "target_path",
          op: "re",
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
| `conditionGroup`                                                                                                                   | [models.RequestBodyConditionGroup](../models/requestbodyconditiongroup.md)[]                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest2Action](../models/updatefirewallconfigrequestbodysecurityrequest2action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |