# PutFirewallConfigRules

## Example Usage

```typescript
import { PutFirewallConfigRules } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRules = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "scheme",
          op: "ninc",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `conditionGroup`                                                                                                                     | [models.ConditionGroup](../models/conditiongroup.md)[]                                                                               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `action`                                                                                                                             | [models.PutFirewallConfigSecurityRequestRequestBodyRulesAction](../models/putfirewallconfigsecurityrequestrequestbodyrulesaction.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |