# UpdateFirewallConfigRequestBodySecurityRequest12Value

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest12Value } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest12Value = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "geo_continent",
          op: "sub",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `active`                                                                                                                                               | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `conditionGroup`                                                                                                                                       | [models.UpdateFirewallConfigRequestBodySecurityRequest12ConditionGroup](../models/updatefirewallconfigrequestbodysecurityrequest12conditiongroup.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `action`                                                                                                                                               | [models.UpdateFirewallConfigRequestBodySecurityRequest12Action](../models/updatefirewallconfigrequestbodysecurityrequest12action.md)                   | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `valid`                                                                                                                                                | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `validationErrors`                                                                                                                                     | *models.UpdateFirewallConfigRequestBodySecurityRequest12ValidationErrors*                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |