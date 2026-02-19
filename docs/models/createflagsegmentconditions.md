# CreateFlagSegmentConditions

## Example Usage

```typescript
import { CreateFlagSegmentConditions } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentConditions = {
  lhs: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "containsAllOf",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `lhs`                                                            | *models.CreateFlagSegmentLhs*                                    | :heavy_check_mark:                                               | N/A                                                              |
| `cmp`                                                            | [models.CreateFlagSegmentCmp](../models/createflagsegmentcmp.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rhs`                                                            | *models.CreateFlagSegmentRhs*                                    | :heavy_minus_sign:                                               | N/A                                                              |