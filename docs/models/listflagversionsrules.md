# ListFlagVersionsRules

## Example Usage

```typescript
import { ListFlagVersionsRules } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsRules = {
  conditions: [],
  id: "<id>",
  outcome: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    defaultVariantId: "<id>",
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [],
    startTimestamp: 2943.86,
    type: "rollout",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `conditions`                                                                   | [models.ListFlagVersionsConditions](../models/listflagversionsconditions.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | *models.ListFlagVersionsOutcome*                                               | :heavy_check_mark:                                                             | N/A                                                                            |