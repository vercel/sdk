# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Rules = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "geo_as_number",
          op: "neq",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `conditionGroup`                                                                         | [models.GetFirewallConfigConditionGroup](../models/getfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `action`                                                                                 | [models.GetFirewallConfigAction](../models/getfirewallconfigaction.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |