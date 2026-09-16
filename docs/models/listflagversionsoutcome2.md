# ListFlagVersionsOutcome2

## Example Usage

```typescript
import { ListFlagVersionsOutcome2 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsOutcome2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 2789.66,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `base`                                                                         | [models.ListFlagVersionsOutcomeBase](../models/listflagversionsoutcomebase.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `defaultVariantId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *"split"*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `weights`                                                                      | Record<string, *number*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |