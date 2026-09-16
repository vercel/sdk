# ListFlagVersionsFallthrough2

## Example Usage

```typescript
import { ListFlagVersionsFallthrough2 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsFallthrough2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 6931.55,
    "key1": 8902.48,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `base`                                                                                 | [models.ListFlagVersionsFallthroughBase](../models/listflagversionsfallthroughbase.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `defaultVariantId`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"split"*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `weights`                                                                              | Record<string, *number*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |