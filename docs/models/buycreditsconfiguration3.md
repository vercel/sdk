# BuyCreditsConfiguration3

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration3 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration3 = {
  options: {
    productAlias: "<value>",
    resourceIds: [
      "<value 1>",
    ],
  },
  output: {
    effectiveBehavior: "end_of_term",
    orbPriceId: "<id>",
    pricingSource: "orb",
    productId: "<id>",
  },
  type: "increase_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                                  | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOptions](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintentoptions.md) | :heavy_check_mark:                                                                                                                                                                                                         | Configuration input options for increasing plan item quantity.                                                                                                                                                             |
| `output`                                                                                                                                                                                                                   | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBodyOutput](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebodyoutput.md)                                               | :heavy_check_mark:                                                                                                                                                                                                         | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                                |
| `type`                                                                                                                                                                                                                     | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent3Type](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintent3type.md)     | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |