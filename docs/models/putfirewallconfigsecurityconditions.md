# PutFirewallConfigSecurityConditions

## Example Usage

```typescript
import { PutFirewallConfigSecurityConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSecurityConditions = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `conditionGroup`                                                                         | [models.PutFirewallConfigConditionGroup](../models/putfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |