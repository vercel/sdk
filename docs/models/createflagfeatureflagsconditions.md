# CreateFlagFeatureFlagsConditions

## Example Usage

```typescript
import { CreateFlagFeatureFlagsConditions } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsConditions = {
  lhs: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "oneOf",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `rhs`                                                                      | *models.CreateFlagFeatureFlagsRhs*                                         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `lhs`                                                                      | *models.CreateFlagFeatureFlagsLhs*                                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `cmp`                                                                      | [models.CreateFlagFeatureFlagsCmp](../models/createflagfeatureflagscmp.md) | :heavy_check_mark:                                                         | N/A                                                                        |