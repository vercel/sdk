# ListFlagVersionsFallthrough3

## Example Usage

```typescript
import { ListFlagVersionsFallthrough3 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsFallthrough3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 5804.73,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 5267.08,
      durationMs: 1714.17,
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"rollout"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `base`                                                                                                         | [models.ListFlagVersionsFallthroughFeatureFlagsBase](../models/listflagversionsfallthroughfeatureflagsbase.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultVariantId`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startTimestamp`                                                                                               | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rollFromVariantId`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rollToVariantId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `slots`                                                                                                        | [models.ListFlagVersionsFallthroughSlots](../models/listflagversionsfallthroughslots.md)[]                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |