# ManagedRules1

## Example Usage

```typescript
import { ManagedRules1 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: ManagedRules1 = {
  active: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `active`                                                     | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `action`                                                     | [models.ManagedRulesAction](../models/managedrulesaction.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `ruleGroups`                                                 | Record<string, [models.RuleGroups](../models/rulegroups.md)> | :heavy_minus_sign:                                           | N/A                                                          |