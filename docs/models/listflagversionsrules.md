# ListFlagVersionsRules

## Example Usage

```typescript
import { ListFlagVersionsRules } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsRules = {
  id: "<id>",
  outcome: {
    type: "split",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 1013.32,
      "key1": 2943.86,
      "key2": 2552.94,
    },
    defaultVariantId: "<id>",
  },
  conditions: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | *models.ListFlagVersionsOutcome*                                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `conditions`                                                                   | [models.ListFlagVersionsConditions](../models/listflagversionsconditions.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |