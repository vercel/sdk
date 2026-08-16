# GetSecurityFirewallConfigSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigSecurityConditions = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conditionGroup`                                                                                         | [models.GetSecurityFirewallConfigConditionGroup](../models/getsecurityfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |