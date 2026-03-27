# Configuration5

The configuration for a credit purchase

## Example Usage

```typescript
import { Configuration5 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration5 = {
  options: {
    externalPlanId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_subscription",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                          | [models.BuyCreditsConfigurationBillingResponseOptions](../models/buycreditsconfigurationbillingresponseoptions.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `output`                                                                                                           | [models.BuyCreditsConfigurationOutput](../models/buycreditsconfigurationoutput.md)                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *"orb_subscription"*                                                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |