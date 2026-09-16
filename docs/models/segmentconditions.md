# SegmentConditions

## Example Usage

```typescript
import { SegmentConditions } from "@vercel/sdk/models/segment.js";

let value: SegmentConditions = {
  cmp: "regex",
  lhs: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `cmp`                                                      | [models.SegmentCmp](../models/segmentcmp.md)               | :heavy_check_mark:                                         | N/A                                                        |
| `cmpOptions`                                               | [models.SegmentCmpOptions](../models/segmentcmpoptions.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `lhs`                                                      | *models.SegmentLhs*                                        | :heavy_check_mark:                                         | N/A                                                        |
| `rhs`                                                      | *models.SegmentRhs*                                        | :heavy_minus_sign:                                         | N/A                                                        |