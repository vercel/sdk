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
          type: "raw_path",
          op: "re",
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
| `conditionGroup`                                                                                                                   | [models.RequestBodyConditionGroup](../models/requestbodyconditiongroup.md)[]                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest1Action](../models/updatefirewallconfigrequestbodysecurityrequest1action.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `valid`                                                                                                                            | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `validationErrors`                                                                                                                 | *models.RequestBodyValidationErrors*                                                                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |