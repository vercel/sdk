# SegmentOutcome2

## Example Usage

```typescript
import { SegmentOutcome2 } from "@vercel/sdk/models/segment.js";

let value: SegmentOutcome2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  passPromille: 6187.2,
  type: "split",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `base`                                                       | [models.SegmentOutcomeBase](../models/segmentoutcomebase.md) | :heavy_check_mark:                                           | N/A                                                          |
| `passPromille`                                               | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | *"split"*                                                    | :heavy_check_mark:                                           | N/A                                                          |