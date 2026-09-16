# Outcome3

## Example Usage

```typescript
import { Outcome3 } from "@vercel/sdk/models/flag.js";

let value: Outcome3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
  startTimestamp: 2535.43,
  type: "rollout",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `base`                                                 | [models.FlagOutcomeBase](../models/flagoutcomebase.md) | :heavy_check_mark:                                     | N/A                                                    |
| `defaultVariantId`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollFromVariantId`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollToVariantId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slots`                                                | [models.OutcomeSlots](../models/outcomeslots.md)[]     | :heavy_check_mark:                                     | N/A                                                    |
| `startTimestamp`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | *"rollout"*                                            | :heavy_check_mark:                                     | N/A                                                    |