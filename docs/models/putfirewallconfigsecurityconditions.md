# PutFirewallConfigSecurityConditions

## Example Usage

```typescript
import { PutFirewallConfigSecurityConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSecurityConditions = {
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
| `conditionGroup`                                                                         | [models.PutFirewallConfigConditionGroup](../models/putfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |