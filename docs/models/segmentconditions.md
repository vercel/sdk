# SegmentConditions

## Example Usage

```typescript
import { SegmentConditions } from "@vercel/sdk/models/segment.js";

let value: SegmentConditions = {
  lhs: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "lte",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `rhs`                                                      | *models.SegmentRhs*                                        | :heavy_minus_sign:                                         | N/A                                                        |
| `cmpOptions`                                               | [models.SegmentCmpOptions](../models/segmentcmpoptions.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `lhs`                                                      | *models.SegmentLhs*                                        | :heavy_check_mark:                                         | N/A                                                        |
| `cmp`                                                      | [models.SegmentCmp](../models/segmentcmp.md)               | :heavy_check_mark:                                         | N/A                                                        |