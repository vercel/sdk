# ListFlagVersionsRules

## Example Usage

```typescript
import { ListFlagVersionsRules } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsRules = {
  id: "<id>",
  outcome: {
    type: "variant",
    variantId: "<id>",
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "containsNoneOf",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | *models.ListFlagVersionsOutcome*                                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `conditions`                                                                   | [models.ListFlagVersionsConditions](../models/listflagversionsconditions.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |