# BuyCreditsConfiguration4

The configuration for a credit purchase

## Example Usage

```typescript
import { BuyCreditsConfiguration4 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration4 = {
  options: {},
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_price_interval",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `options`                                                                                          | [models.BuyCreditsConfigurationBillingOptions](../models/buycreditsconfigurationbillingoptions.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `output`                                                                                           | [models.ConfigurationOutput](../models/configurationoutput.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *"orb_price_interval"*                                                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |