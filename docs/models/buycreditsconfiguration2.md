# BuyCreditsConfiguration2

Configuration for the Orb subscription intent.

## Example Usage

```typescript
import { BuyCreditsConfiguration2 } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfiguration2 = {
  options: {
    productAlias: "<value>",
    quantity: 3152.93,
    resourceIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  output: {
    effectiveBehavior: "immediate",
    orbPriceId: "<id>",
    pricingSource: "copper",
    productId: "<id>",
  },
  type: "set_plan_item_quantity",
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                                                            | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3Options](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3options.md)                                     | :heavy_check_mark:                                                                                                                                                                                                   | Configuration input options for setting plan item quantity.                                                                                                                                                          |
| `output`                                                                                                                                                                                                             | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONOutput](../models/buycreditsconfigurationbillingresponse200applicationjsonoutput.md)                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | Output returned after configuring an OrbSubscriptionIntent.                                                                                                                                                          |
| `type`                                                                                                                                                                                                               | [models.BuyCreditsConfigurationBillingResponse200ApplicationJSONResponseBody3OrbSubscriptionIntentType](../models/buycreditsconfigurationbillingresponse200applicationjsonresponsebody3orbsubscriptionintenttype.md) | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |