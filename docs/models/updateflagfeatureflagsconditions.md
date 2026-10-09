# UpdateFlagFeatureFlagsConditions

## Example Usage

```typescript
import { UpdateFlagFeatureFlagsConditions } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFeatureFlagsConditions = {
  cmp: "before",
  lhs: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cmp`                                                                                    | [models.UpdateFlagFeatureFlagsCmp](../models/updateflagfeatureflagscmp.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `cmpOptions`                                                                             | [models.UpdateFlagFeatureFlagsCmpOptions](../models/updateflagfeatureflagscmpoptions.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lhs`                                                                                    | *models.UpdateFlagFeatureFlagsLhs*                                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rhs`                                                                                    | *models.UpdateFlagFeatureFlagsRhs*                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |