# Configuration3

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { Configuration3 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration3 = {
  options: {
    productAlias: "<value>",
    resourceIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  output: {
    effectiveBehavior: "end_of_term",
    orbPriceId: "<id>",
    pricingSource: "orb",
    productId: "<id>",
  },
  type: "decrease_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                                  | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintentoptions.md) | :heavy_check_mark:                                                                                                                                                                                                         | Configuration input options for decreasing plan item quantity.                                                                                                                                                             |
| `output`                                                                                                                                                                                                                   | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOutput](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebodyoutput.md)                                               | :heavy_check_mark:                                                                                                                                                                                                         | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                                |
| `type`                                                                                                                                                                                                                     | *"decrease_plan_item_quantity"*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |