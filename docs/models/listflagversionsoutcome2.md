# ListFlagVersionsOutcome2

## Example Usage

```typescript
import { ListFlagVersionsOutcome2 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsOutcome2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 2789.66,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *"split"*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `base`                                                                         | [models.ListFlagVersionsOutcomeBase](../models/listflagversionsoutcomebase.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `weights`                                                                      | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `defaultVariantId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |