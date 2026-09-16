# ListFlagVersionsOutcome3

## Example Usage

```typescript
import { ListFlagVersionsOutcome3 } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsOutcome3 = {
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
      durationMs: 6663.21,
      promille: 2557.11,
    },
  ],
  startTimestamp: 4705.48,
  type: "rollout",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                 | [models.ListFlagVersionsOutcomeFeatureFlagsBase](../models/listflagversionsoutcomefeatureflagsbase.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `defaultVariantId`                                                                                     | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rollFromVariantId`                                                                                    | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rollToVariantId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `slots`                                                                                                | [models.ListFlagVersionsOutcomeSlots](../models/listflagversionsoutcomeslots.md)[]                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `startTimestamp`                                                                                       | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"rollout"*                                                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |