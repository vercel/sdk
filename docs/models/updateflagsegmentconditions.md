# UpdateFlagSegmentConditions

## Example Usage

```typescript
import { UpdateFlagSegmentConditions } from "@vercel/sdk/models/updateflagsegmentop.js";

let value: UpdateFlagSegmentConditions = {
  lhs: {
    type: "<value>",
  },
  cmp: "after",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `lhs`                                                            | *models.UpdateFlagSegmentLhs*                                    | :heavy_check_mark:                                               | N/A                                                              |
| `cmp`                                                            | [models.UpdateFlagSegmentCmp](../models/updateflagsegmentcmp.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rhs`                                                            | *models.UpdateFlagSegmentRhs*                                    | :heavy_minus_sign:                                               | N/A                                                              |