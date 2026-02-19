# CreateFlagSegmentFeatureFlagsConditions

## Example Usage

```typescript
import { CreateFlagSegmentFeatureFlagsConditions } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentFeatureFlagsConditions = {
  lhs: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "!oneOf",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `rhs`                                                                                    | *models.CreateFlagSegmentFeatureFlagsRhs*                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lhs`                                                                                    | *models.CreateFlagSegmentFeatureFlagsLhs*                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `cmp`                                                                                    | [models.CreateFlagSegmentFeatureFlagsCmp](../models/createflagsegmentfeatureflagscmp.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |