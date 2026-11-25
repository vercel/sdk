# CreateFlagFallthroughFeatureFlags2

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlags2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlags2 = {
  type: "<value>",
  base: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {},
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *any*                                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `base`                                                                                                           | [models.CreateFlagFallthroughFeatureFlagsRequestBase](../models/createflagfallthroughfeatureflagsrequestbase.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `weights`                                                                                                        | Record<string, *number*>                                                                                         | :heavy_check_mark:                                                                                               | The distribution for each variant                                                                                |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | This variant will be used when the base attribute does not exist                                                 |