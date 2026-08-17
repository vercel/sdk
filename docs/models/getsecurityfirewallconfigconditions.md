# GetSecurityFirewallConfigConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigConditions } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigConditions = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `active`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `conditionGroup`                                                                                                                         | [models.GetSecurityFirewallConfigSecurityResponseConditionGroup](../models/getsecurityfirewallconfigsecurityresponseconditiongroup.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |