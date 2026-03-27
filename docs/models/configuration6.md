# Configuration6

The configuration for a credit purchase

## Example Usage

```typescript
import { Configuration6 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration6 = {
  options: {
    orbCustomerId: "<id>",
    orbExternalCustomerId: "<id>",
    orbExternalPlanId: "<id>",
    orbPendingSubscriptionChangeId: "<id>",
    orbPlanId: "<id>",
    orbSubscriptionId: "<id>",
  },
  output: {
    pendingSubscriptionChangeId: "<id>",
  },
  type: "orb_subscription_intent",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                | [models.BuyCreditsConfigurationBillingResponse200Options](../models/buycreditsconfigurationbillingresponse200options.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `output`                                                                                                                 | [models.BuyCreditsConfigurationBillingOutput](../models/buycreditsconfigurationbillingoutput.md)                         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"orb_subscription_intent"*                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |