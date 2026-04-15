# ListFlagVersionsOutcome3

## Example Usage

```typescript
import { ListFlagVersionsOutcome3 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsOutcome3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 6729.99,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 2557.11,
      durationMs: 4705.48,
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"rollout"*                                                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `base`                                                                                                 | [models.ListFlagVersionsOutcomeFeatureFlagsBase](../models/listflagversionsoutcomefeatureflagsbase.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `defaultVariantId`                                                                                     | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `startTimestamp`                                                                                       | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rollFromVariantId`                                                                                    | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rollToVariantId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `slots`                                                                                                | [models.ListFlagVersionsOutcomeSlots](../models/listflagversionsoutcomeslots.md)[]                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |