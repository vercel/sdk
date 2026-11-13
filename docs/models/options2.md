# Options2

Restart-cycle purchase options

## Example Usage

```typescript
import { Options2 } from "@vercel/sdk/models/buycreditsop.js";

let value: Options2 = {
  fromPlan: {
    orbSubscriptionId: "<id>",
  },
  planId: "<id>",
  transition: {
    type: "preserve_source_cycle",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fromPlan`                                                                   | [models.OptionsFromPlan](../models/optionsfromplan.md)                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `planId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | The destination plan                                                         |
| `planItemQuantities`                                                         | [models.OptionsPlanItemQuantities](../models/optionsplanitemquantities.md)[] | :heavy_minus_sign:                                                           | Destination-only licensed quantities; shared quantities come from Copper     |
| `transition`                                                                 | [models.OptionsTransition](../models/optionstransition.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |