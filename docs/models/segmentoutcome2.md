# SegmentOutcome2

## Example Usage

```typescript
import { SegmentOutcome2 } from "@vercel/sdk/models/segment.js";

let value: SegmentOutcome2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  passPromille: 6187.2,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"split"*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `base`                                                       | [models.SegmentOutcomeBase](../models/segmentoutcomebase.md) | :heavy_check_mark:                                           | N/A                                                          |
| `passPromille`                                               | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |