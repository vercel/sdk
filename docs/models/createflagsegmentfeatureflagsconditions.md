# CreateFlagSegmentFeatureFlagsConditions

## Example Usage

```typescript
import { CreateFlagSegmentFeatureFlagsConditions } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentFeatureFlagsConditions = {
  cmp: "regex",
  lhs: {
    type: "segment",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `cmp`                                                                                                  | [models.CreateFlagSegmentFeatureFlagsCmp](../models/createflagsegmentfeatureflagscmp.md)               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `cmpOptions`                                                                                           | [models.CreateFlagSegmentFeatureFlagsCmpOptions](../models/createflagsegmentfeatureflagscmpoptions.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `lhs`                                                                                                  | *models.CreateFlagSegmentFeatureFlagsLhs*                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rhs`                                                                                                  | *models.CreateFlagSegmentFeatureFlagsRhs*                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |