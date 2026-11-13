# Configuration7

The configuration for a credit purchase

## Example Usage

```typescript
import { Configuration7 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration7 = {
  options: {
    fromPlan: {
      orbSubscriptionId: "<id>",
    },
    planId: "<id>",
    transition: {
      type: "preserve_source_cycle",
    },
  },
  output: {},
  type: "subscription",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                        | *models.BuyCreditsConfigurationBillingResponse200ApplicationJSONOptions*                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `output`                                                                                                         | [models.BuyCreditsConfigurationBillingResponseOutput](../models/buycreditsconfigurationbillingresponseoutput.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"subscription"*                                                                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |