# GetFirewallConfigConditions

## Example Usage

```typescript
import { GetFirewallConfigConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigConditions = {
  active: true,
  conditionGroup: [],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `conditionGroup`                                                                         | [models.GetFirewallConfigConditionGroup](../models/getfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |