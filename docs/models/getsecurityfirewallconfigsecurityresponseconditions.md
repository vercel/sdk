# GetSecurityFirewallConfigSecurityResponseConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityResponseConditions } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigSecurityResponseConditions = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `active`                                                                                                                 | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `conditionGroup`                                                                                                         | [models.GetSecurityFirewallConfigSecurityConditionGroup](../models/getsecurityfirewallconfigsecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |