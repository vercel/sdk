# UpdateFlagOutcome2

## Example Usage

```typescript
import { UpdateFlagOutcome2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcome2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 9985.05,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *any*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `base`                                                             | [models.UpdateFlagOutcomeBase](../models/updateflagoutcomebase.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `weights`                                                          | Record<string, *number*>                                           | :heavy_check_mark:                                                 | The distribution for each variant                                  |
| `defaultVariantId`                                                 | *string*                                                           | :heavy_check_mark:                                                 | This variant will be used when the base attribute does not exist   |