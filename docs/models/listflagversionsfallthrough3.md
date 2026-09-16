# ListFlagVersionsFallthrough3

## Example Usage

```typescript
import { ListFlagVersionsFallthrough3 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsFallthrough3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      durationMs: 6585.14,
      promille: 5267.08,
    },
  ],
  startTimestamp: 1714.17,
  type: "rollout",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                         | [models.ListFlagVersionsFallthroughFeatureFlagsBase](../models/listflagversionsfallthroughfeatureflagsbase.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultVariantId`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rollFromVariantId`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rollToVariantId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `slots`                                                                                                        | [models.ListFlagVersionsFallthroughSlots](../models/listflagversionsfallthroughslots.md)[]                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startTimestamp`                                                                                               | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | *"rollout"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |