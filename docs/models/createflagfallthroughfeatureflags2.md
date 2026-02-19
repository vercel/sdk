# CreateFlagFallthroughFeatureFlags2

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlags2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {},
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"split"*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `base`                                                                     | [models.CreateFlagFallthroughBase](../models/createflagfallthroughbase.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `weights`                                                                  | Record<string, *number*>                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `defaultVariantId`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |