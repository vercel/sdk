# CreateFlagFeatureFlagsRequestRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRequestRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRequestRules = {
  id: "<id>",
  conditions: [
    {
      lhs: {
        type: "<value>",
      },
      cmp: "!oneOf",
    },
  ],
  outcome: {
    type: "<value>",
    base: {
      type: "<value>",
      kind: "<value>",
      attribute: "<value>",
    },
    startTimestamp: 3140.83,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    defaultVariantId: "<id>",
    slots: [],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conditions`                                                                                             | [models.CreateFlagFeatureFlagsRequestConditions](../models/createflagfeatureflagsrequestconditions.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outcome`                                                                                                | *models.CreateFlagFeatureFlagsRequestOutcome*                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |