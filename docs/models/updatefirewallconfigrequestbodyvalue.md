# UpdateFirewallConfigRequestBodyValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyValue = {
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "domain_environment",
          op: "suf",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `active`                                                                                                                           | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `conditionGroup`                                                                                                                   | [models.UpdateFirewallConfigRequestBodyConditionGroup](../models/updatefirewallconfigrequestbodyconditiongroup.md)[]               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest2Action](../models/updatefirewallconfigrequestbodysecurityrequest2action.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `valid`                                                                                                                            | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `validationErrors`                                                                                                                 | *models.UpdateFirewallConfigRequestBodyValidationErrors*                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |