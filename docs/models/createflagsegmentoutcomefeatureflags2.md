# CreateFlagSegmentOutcomeFeatureFlags2

## Example Usage

```typescript
import { CreateFlagSegmentOutcomeFeatureFlags2 } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentOutcomeFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  passPromille: 3577.43,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *"split"*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `base`                                                                                                   | [models.CreateFlagSegmentOutcomeFeatureFlagsBase](../models/createflagsegmentoutcomefeatureflagsbase.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `passPromille`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |