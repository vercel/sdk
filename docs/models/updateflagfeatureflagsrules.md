# UpdateFlagFeatureFlagsRules

## Example Usage

```typescript
import { UpdateFlagFeatureFlagsRules } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFeatureFlagsRules = {
  conditions: [],
  id: "<id>",
  outcome: {
    type: "variant",
    variantId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `conditions`                                                                               | [models.UpdateFlagFeatureFlagsConditions](../models/updateflagfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outcome`                                                                                  | *models.UpdateFlagFeatureFlagsOutcome*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |