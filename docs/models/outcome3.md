# Outcome3

## Example Usage

```typescript
import { Outcome3 } from "@vercel/sdk/models/flag.js";

let value: Outcome3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 3190.05,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"rollout"*                                            | :heavy_check_mark:                                     | N/A                                                    |
| `base`                                                 | [models.FlagOutcomeBase](../models/flagoutcomebase.md) | :heavy_check_mark:                                     | N/A                                                    |
| `defaultVariantId`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `startTimestamp`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollFromVariantId`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollToVariantId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slots`                                                | [models.OutcomeSlots](../models/outcomeslots.md)[]     | :heavy_check_mark:                                     | N/A                                                    |