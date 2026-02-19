# UpdateFlagFallthrough2

## Example Usage

```typescript
import { UpdateFlagFallthrough2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthrough2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 2836.97,
    "key1": 7985.59,
    "key2": 3438.28,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *any*                                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `base`                                                                     | [models.UpdateFlagFallthroughBase](../models/updateflagfallthroughbase.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `weights`                                                                  | Record<string, *number*>                                                   | :heavy_check_mark:                                                         | The distribution for each variant                                          |
| `defaultVariantId`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | This variant will be used when the base attribute does not exist           |