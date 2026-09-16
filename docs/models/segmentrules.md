# SegmentRules

## Example Usage

```typescript
import { SegmentRules } from "@vercel/sdk/models/segment.js";

let value: SegmentRules = {
  conditions: [],
  id: "<id>",
  outcome: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    passPromille: 1235.3,
    type: "split",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conditions`                                                 | [models.SegmentConditions](../models/segmentconditions.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `outcome`                                                    | *models.SegmentOutcome*                                      | :heavy_check_mark:                                           | N/A                                                          |