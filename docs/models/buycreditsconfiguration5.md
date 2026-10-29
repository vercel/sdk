# BuyCreditsConfiguration5

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration5 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration5 = {
  options: {
    addedResourceIds: [
      "<value 1>",
      "<value 2>",
    ],
    productAlias: "<value>",
    removedResourceIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  output: {
    effectiveBehavior: "immediate",
    orbPriceId: "<id>",
    pricingSource: "orb",
    productId: "<id>",
  },
  type: "adjust_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                                    | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent5Options](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintent5options.md) | :heavy_check_mark:                                                                                                                                                                                                           | Configuration input options for adjusting plan item quantity.                                                                                                                                                                |
| `output`                                                                                                                                                                                                                     | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentOutput](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintentoutput.md)     | :heavy_check_mark:                                                                                                                                                                                                           | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                                  |
| `type`                                                                                                                                                                                                                       | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntent5Type](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintent5type.md)       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |