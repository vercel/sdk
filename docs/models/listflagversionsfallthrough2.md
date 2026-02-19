# ListFlagVersionsFallthrough2

## Example Usage

```typescript
import { ListFlagVersionsFallthrough2 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsFallthrough2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 6931.55,
    "key1": 8902.48,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"split"*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `base`                                                                                 | [models.ListFlagVersionsFallthroughBase](../models/listflagversionsfallthroughbase.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `weights`                                                                              | Record<string, *number*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `defaultVariantId`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |