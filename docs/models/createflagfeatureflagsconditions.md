# CreateFlagFeatureFlagsConditions

## Example Usage

```typescript
import { CreateFlagFeatureFlagsConditions } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsConditions = {
  cmp: "gt",
  lhs: {
    type: "segment",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cmp`                                                                                    | [models.CreateFlagFeatureFlagsCmp](../models/createflagfeatureflagscmp.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `cmpOptions`                                                                             | [models.CreateFlagFeatureFlagsCmpOptions](../models/createflagfeatureflagscmpoptions.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lhs`                                                                                    | *models.CreateFlagFeatureFlagsLhs*                                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rhs`                                                                                    | *models.CreateFlagFeatureFlagsRhs*                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |