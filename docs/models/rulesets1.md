# Rulesets1

## Example Usage

```typescript
import { Rulesets1 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Rulesets1 = {
  name: "<value>",
  active: false,
  conditionGroup: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `active`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `conditionGroup`                                                       | [models.RulesetsConditionGroup](../models/rulesetsconditiongroup.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `action`                                                               | [models.RulesetsAction](../models/rulesetsaction.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `valid`                                                                | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `validationErrors`                                                     | *models.RulesetsValidationErrors*                                      | :heavy_minus_sign:                                                     | N/A                                                                    |