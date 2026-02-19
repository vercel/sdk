# CreateFlagOutcome2

## Example Usage

```typescript
import { CreateFlagOutcome2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcome2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 6826.58,
    "key1": 6445.58,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *any*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `base`                                                             | [models.CreateFlagOutcomeBase](../models/createflagoutcomebase.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `weights`                                                          | Record<string, *number*>                                           | :heavy_check_mark:                                                 | The distribution for each variant                                  |
| `defaultVariantId`                                                 | *string*                                                           | :heavy_check_mark:                                                 | This variant will be used when the base attribute does not exist   |