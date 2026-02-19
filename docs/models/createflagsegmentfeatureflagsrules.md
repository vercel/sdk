# CreateFlagSegmentFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagSegmentFeatureFlagsRules } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentFeatureFlagsRules = {
  id: "<id>",
  outcome: {
    type: "all",
  },
  conditions: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outcome`                                                                                                | *models.CreateFlagSegmentFeatureFlagsOutcome*                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conditions`                                                                                             | [models.CreateFlagSegmentFeatureFlagsConditions](../models/createflagsegmentfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |