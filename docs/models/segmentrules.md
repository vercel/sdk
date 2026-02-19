# SegmentRules

## Example Usage

```typescript
import { SegmentRules } from "@vercel/sdk/models/segment.js";

let value: SegmentRules = {
  id: "<id>",
  outcome: {
    type: "all",
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "endsWith",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `outcome`                                                    | *models.SegmentOutcome*                                      | :heavy_check_mark:                                           | N/A                                                          |
| `conditions`                                                 | [models.SegmentConditions](../models/segmentconditions.md)[] | :heavy_check_mark:                                           | N/A                                                          |