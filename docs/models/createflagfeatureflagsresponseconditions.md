# CreateFlagFeatureFlagsResponseConditions

## Example Usage

```typescript
import { CreateFlagFeatureFlagsResponseConditions } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsResponseConditions = {
  cmp: "after",
  lhs: {
    type: "segment",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cmp`                                                                                                    | [models.CreateFlagFeatureFlagsResponseCmp](../models/createflagfeatureflagsresponsecmp.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `cmpOptions`                                                                                             | [models.CreateFlagFeatureFlagsResponseCmpOptions](../models/createflagfeatureflagsresponsecmpoptions.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `lhs`                                                                                                    | *models.CreateFlagFeatureFlagsResponseLhs*                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `rhs`                                                                                                    | *models.CreateFlagFeatureFlagsResponseRhs*                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |