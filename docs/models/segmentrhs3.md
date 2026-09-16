# SegmentRhs3

## Example Usage

```typescript
import { SegmentRhs3 } from "@vercel/sdk/models/segment.js";

let value: SegmentRhs3 = {
  items: [
    {
      value: 7966.26,
    },
  ],
  type: "list/inline",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `items`                                              | *models.SegmentRhsItems*[]                           | :heavy_check_mark:                                   | N/A                                                  |
| `type`                                               | [models.SegmentRhsType](../models/segmentrhstype.md) | :heavy_check_mark:                                   | N/A                                                  |